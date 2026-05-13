import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createAdminClient } from "../_shared/clients.ts";
import {
  loadPublishedRouteById,
  MARKETPLACE_PAYPAL_REQUESTS_COLLECTION,
  MARKETPLACE_ROUTE_ENTITLEMENTS_COLLECTION,
  marketplaceEntitlementDocId,
  plannerDocRow
} from "../_shared/marketplace.ts";
import { verifyPayPalWebhook } from "../_shared/paypal.ts";

function parseCustomId(value: string) {
  const safe = String(value || "").trim();
  const separatorIndex = safe.indexOf("__");
  if (separatorIndex <= 0) return { buyerUserId: "", publishId: "" };
  return {
    buyerUserId: safe.slice(0, separatorIndex),
    publishId: safe.slice(separatorIndex + 2)
  };
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const bodyText = await request.text();
    const verified = await verifyPayPalWebhook(request, bodyText);
    if (!verified) return jsonResponse({ error: "Invalid PayPal webhook signature." }, { status: 400 });

    const event = JSON.parse(bodyText || "{}");
    const eventType = String(event?.event_type || "").trim();
    if (eventType !== "PAYMENT.CAPTURE.COMPLETED") {
      return jsonResponse({ received: true, ignored: true });
    }

    const resource = event?.resource && typeof event.resource === "object" ? event.resource : {};
    const orderId = String(resource?.supplementary_data?.related_ids?.order_id || "").trim();
    const customId = String(resource?.custom_id || "").trim();
    const { buyerUserId, publishId } = parseCustomId(customId);
    if (!buyerUserId || !publishId) {
      return jsonResponse({ received: true, ignored: true });
    }

    const admin = createAdminClient();
    const route = await loadPublishedRouteById(admin, publishId);
    if (!route) return jsonResponse({ received: true, ignored: true });

    const nowIso = new Date().toISOString();
    const entitlementId = marketplaceEntitlementDocId(buyerUserId, publishId);
    const requestPayload = {
      publishId,
      routeName: route.routeName,
      buyerUserId,
      buyerEmail: "",
      sellerUserId: route.ownerId,
      priceUsd: Number(Number(resource?.amount?.value || route.priceUsd || 0).toFixed(2)),
      provider: "paypal",
      status: "paid_access_granted",
      paypalOrderId: orderId,
      paypalCaptureId: String(resource?.id || "").trim(),
      purchaseUrl: "",
      creatorPayoutStatus: "pending",
      createdAt: nowIso,
      updatedAt: nowIso,
      paidAt: nowIso
    };
    const entitlementPayload = {
      publishId,
      buyerUserId,
      buyerEmail: "",
      sourceRequestId: entitlementId,
      sourceProvider: "paypal",
      sourceOrderId: orderId,
      status: "active",
      approvedAt: nowIso,
      updatedAt: nowIso
    };

    const { error: purchaseError } = await admin
      .from("planner_documents")
      .upsert(plannerDocRow(MARKETPLACE_PAYPAL_REQUESTS_COLLECTION, entitlementId, requestPayload), { onConflict: "doc_key" });
    if (purchaseError) throw purchaseError;
    const { error: entitlementError } = await admin
      .from("planner_documents")
      .upsert(plannerDocRow(MARKETPLACE_ROUTE_ENTITLEMENTS_COLLECTION, entitlementId, entitlementPayload), { onConflict: "doc_key" });
    if (entitlementError) throw entitlementError;

    return jsonResponse({ received: true });
  } catch (error) {
    return jsonResponse({ error: String(error instanceof Error ? error.message : error) }, { status: 500 });
  }
});
