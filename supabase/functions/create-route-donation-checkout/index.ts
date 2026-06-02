import Stripe from "npm:stripe@14";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createAdminClient, createUserClient } from "../_shared/clients.ts";
import { loadPublishedRouteById } from "../_shared/marketplace.ts";

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") || "";
const appUrl = Deno.env.get("APP_URL") || "http://127.0.0.1:4174";
const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" });

function normalizeDonationAmount(value: unknown) {
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount <= 0) return 0;
  return Number(amount.toFixed(2));
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    if (!stripeSecretKey) throw new Error("Missing STRIPE_SECRET_KEY.");
    const authHeader = request.headers.get("Authorization");
    const userClient = createUserClient(authHeader);
    const admin = createAdminClient();

    const {
      data: { user }
    } = await userClient.auth.getUser();
    if (!user) return jsonResponse({ error: "Sign in required." }, { status: 401 });

    const body = await request.json().catch(() => ({}));
    const publishId = String(body?.publishId || "").trim();
    const amountUsd = normalizeDonationAmount(body?.amountUsd);
    const successUrl = String(body?.successUrl || `${appUrl}/?view=route-collection`).trim() || `${appUrl}/?view=route-collection`;
    const cancelUrl = String(body?.cancelUrl || successUrl).trim() || successUrl;
    if (!publishId) return jsonResponse({ error: "publishId is required." }, { status: 400 });
    if (!(amountUsd > 0)) return jsonResponse({ error: "amountUsd must be greater than 0." }, { status: 400 });

    const route = await loadPublishedRouteById(admin, publishId);
    if (!route) return jsonResponse({ error: "Route not found." }, { status: 404 });
    if (route.ownerId === user.id) return jsonResponse({ error: "You cannot donate to your own route." }, { status: 400 });

    const { data: creatorAccount } = await admin
      .from("marketplace_creator_accounts")
      .select("stripe_account_id,onboarding_complete")
      .eq("user_id", route.ownerId)
      .maybeSingle();
    if (!creatorAccount?.stripe_account_id || !creatorAccount?.onboarding_complete) {
      return jsonResponse(
        { error: "This creator has not finished donation onboarding yet." },
        { status: 409 }
      );
    }

    const unitAmount = Math.round(amountUsd * 100);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: user.email || undefined,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: unitAmount,
            product_data: {
              name: `Donate to ${route.authorLabel || "Creator"}`,
              description: `${route.routeName} creator support`
            }
          }
        }
      ],
      payment_intent_data: {
        transfer_data: {
          destination: String(creatorAccount.stripe_account_id || "").trim()
        },
        metadata: {
          kind: "route_creator_donation",
          publishId: route.publishId,
          routeName: route.routeName,
          creatorUserId: route.ownerId,
          donorUserId: user.id,
          amountUsd: amountUsd.toFixed(2)
        }
      },
      metadata: {
        kind: "route_creator_donation",
        publishId: route.publishId,
        routeName: route.routeName,
        creatorUserId: route.ownerId,
        donorUserId: user.id,
        amountUsd: amountUsd.toFixed(2)
      }
    });

    return jsonResponse({
      url: String(session.url || "").trim(),
      publishId: route.publishId,
      amountUsd
    });
  } catch (error) {
    return jsonResponse({ error: String(error instanceof Error ? error.message : error) }, { status: 500 });
  }
});
