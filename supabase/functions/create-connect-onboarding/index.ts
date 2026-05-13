import Stripe from "npm:stripe@14";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createAdminClient, createUserClient } from "../_shared/clients.ts";

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") || "";
const appUrl = Deno.env.get("APP_URL") || "http://127.0.0.1:4174";
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

    const body = await request.json().catch(() => ({}));
    const refreshUrl = String(body?.refreshUrl || `${appUrl}/?view=route-collection`).trim() || `${appUrl}/?view=route-collection`;
    const returnUrl = String(body?.returnUrl || refreshUrl).trim() || refreshUrl;

    const { data: existing } = await admin
      .from("marketplace_creator_accounts")
      .select("stripe_account_id")
      .eq("user_id", user.id)
      .maybeSingle();

    let stripeAccountId = String(existing?.stripe_account_id || "").trim();
    if (!stripeAccountId) {
      const account = await stripe.accounts.create({
        type: "express",
        email: user.email || undefined,
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true }
        },
        metadata: {
          platformUserId: user.id
        }
      });
      stripeAccountId = account.id;
    }

    const accountLink = await stripe.accountLinks.create({
      account: stripeAccountId,
      refresh_url: refreshUrl,
      return_url: returnUrl,
      type: "account_onboarding"
    });

    const nowIso = new Date().toISOString();
    const { error } = await admin.from("marketplace_creator_accounts").upsert(
      {
        user_id: user.id,
        stripe_account_id: stripeAccountId,
        onboarding_complete: false,
        updated_at: nowIso
      },
      { onConflict: "user_id" }
    );
    if (error) throw error;

    return jsonResponse({ url: accountLink.url, stripeAccountId });
  } catch (error) {
    return jsonResponse({ error: String(error instanceof Error ? error.message : error) }, { status: 500 });
  }
});
