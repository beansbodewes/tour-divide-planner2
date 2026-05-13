import Stripe from "npm:stripe@14";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createAdminClient } from "../_shared/clients.ts";

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") || "";
const stripeWebhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") || "";
const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" });

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    if (!stripeSecretKey || !stripeWebhookSecret) throw new Error("Missing Stripe webhook configuration.");
    const signature = request.headers.get("stripe-signature");
    if (!signature) return jsonResponse({ error: "Missing Stripe signature." }, { status: 400 });
    const payload = await request.text();
    const event = await stripe.webhooks.constructEventAsync(payload, signature, stripeWebhookSecret);
    const admin = createAdminClient();

    const { data: seen } = await admin
      .from("marketplace_webhook_events")
      .select("event_id")
      .eq("event_id", event.id)
      .maybeSingle();
    if (seen) return jsonResponse({ received: true, duplicate: true });

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const publishId = String(session.metadata?.publishId || "").trim();
      const buyerUserId = String(session.metadata?.buyerUserId || "").trim();
      const sellerUserId = String(session.metadata?.sellerUserId || "").trim();
      const platformFeeCents = Number(session.metadata?.platformFeeCents || "0");
      const creatorAmountCents = Number(session.metadata?.creatorAmountCents || "0");
      if (publishId && buyerUserId && sellerUserId) {
        const nowIso = new Date().toISOString();
        const { data: purchase } = await admin
          .from("marketplace_purchases")
          .upsert(
            {
              publish_id: publishId,
              buyer_user_id: buyerUserId,
              seller_user_id: sellerUserId,
              stripe_checkout_session_id: session.id,
              stripe_payment_intent_id: String(session.payment_intent || ""),
              price_usd: Number((Number(session.amount_total || 0) / 100).toFixed(2)),
              platform_fee_usd: Number((platformFeeCents / 100).toFixed(2)),
              creator_payout_usd: Number((creatorAmountCents / 100).toFixed(2)),
              currency: String(session.currency || "usd"),
              status: "paid",
              updated_at: nowIso
            },
            { onConflict: "stripe_checkout_session_id" }
          )
          .select("id")
          .maybeSingle();

        await admin.from("marketplace_entitlements").upsert(
          {
            publish_id: publishId,
            buyer_user_id: buyerUserId,
            purchase_id: purchase?.id || null,
            status: "active",
            updated_at: nowIso
          },
          { onConflict: "publish_id,buyer_user_id" }
        );
      }
    }

    if (event.type === "account.updated") {
      const account = event.data.object as Stripe.Account;
      const { error } = await admin
        .from("marketplace_creator_accounts")
        .update({
          charges_enabled: Boolean(account.charges_enabled),
          payouts_enabled: Boolean(account.payouts_enabled),
          onboarding_complete: Boolean(account.charges_enabled && account.payouts_enabled),
          updated_at: new Date().toISOString()
        })
        .eq("stripe_account_id", account.id);
      if (error) throw error;
    }

    await admin.from("marketplace_webhook_events").insert({
      event_id: event.id,
      event_type: event.type
    });

    return jsonResponse({ received: true });
  } catch (error) {
    return jsonResponse({ error: String(error instanceof Error ? error.message : error) }, { status: 500 });
  }
});
