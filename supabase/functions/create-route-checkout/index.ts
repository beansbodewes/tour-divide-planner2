import Stripe from "npm:stripe@14";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createAdminClient, createUserClient } from "../_shared/clients.ts";
import { loadPublishedRouteById } from "../_shared/marketplace.ts";

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") || "";
const appUrl = Deno.env.get("APP_URL") || "http://127.0.0.1:4174";
const marketplaceFeeBps = Number(Deno.env.get("MARKETPLACE_PLATFORM_FEE_BPS") || "3000");
const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" });

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

    const body = await request.json();
    const publishId = String(body?.publishId || "").trim();
    const successUrl = String(body?.successUrl || `${appUrl}/?view=route-collection`).trim() || `${appUrl}/?view=route-collection`;
    const cancelUrl = String(body?.cancelUrl || successUrl).trim() || successUrl;
    if (!publishId) return jsonResponse({ error: "publishId is required." }, { status: 400 });

    const route = await loadPublishedRouteById(admin, publishId);
    if (!route) return jsonResponse({ error: "Route not found." }, { status: 404 });
    if (route.ownerId === user.id) return jsonResponse({ error: "You already own this route." }, { status: 400 });
    if (!(route.priceUsd > 0)) return jsonResponse({ error: "This route is free and does not require checkout." }, { status: 400 });

    const { data: existingEntitlement } = await admin
      .from("marketplace_entitlements")
      .select("publish_id")
      .eq("publish_id", route.publishId)
      .eq("buyer_user_id", user.id)
      .eq("status", "active")
      .maybeSingle();
    if (existingEntitlement) {
      return jsonResponse({ alreadyOwned: true, publishId: route.publishId });
    }

    const { data: creatorAccount } = await admin
      .from("marketplace_creator_accounts")
      .select("stripe_account_id,onboarding_complete")
      .eq("user_id", route.ownerId)
      .maybeSingle();
    if (!creatorAccount?.stripe_account_id || !creatorAccount?.onboarding_complete) {
      return jsonResponse(
        { error: "This creator has not finished payout onboarding yet, so checkout is not available for this route." },
        { status: 409 }
      );
    }

    const unitAmount = Math.round(route.priceUsd * 100);
    const applicationFeeAmount = Math.max(0, Math.round((unitAmount * marketplaceFeeBps) / 10000));
    const creatorAmount = Math.max(0, unitAmount - applicationFeeAmount);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: user.email || undefined,
      client_reference_id: `${route.publishId}:${user.id}`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: unitAmount,
            product_data: {
              name: route.routeName,
              description: `${route.authorLabel} on Bikepack Finishers`
            }
          }
        }
      ],
      metadata: {
        publishId: route.publishId,
        buyerUserId: user.id,
        sellerUserId: route.ownerId,
        routeName: route.routeName,
        platformFeeCents: String(applicationFeeAmount),
        creatorAmountCents: String(creatorAmount)
      },
      payment_intent_data: {
        application_fee_amount: applicationFeeAmount,
        transfer_data: {
          destination: creatorAccount.stripe_account_id
        },
        metadata: {
          publishId: route.publishId,
          buyerUserId: user.id,
          sellerUserId: route.ownerId,
          routeName: route.routeName
        }
      }
    });

    return jsonResponse({ url: session.url, sessionId: session.id });
  } catch (error) {
    return jsonResponse({ error: String(error instanceof Error ? error.message : error) }, { status: 500 });
  }
});
