import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createAdminClient, createUserClient } from "../_shared/clients.ts";
import {
  loadPublishedRouteById,
  MARKETPLACE_PAYPAL_REQUESTS_COLLECTION,
  MARKETPLACE_ROUTE_ENTITLEMENTS_COLLECTION,
  marketplaceEntitlementDocId,
  plannerDocRow
} from "../_shared/marketplace.ts";
import { paypalApiFetch } from "../_shared/paypal.ts";

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
    const authHeader = request.headers.get("Authorization");
    const userClient = createUserClient(authHeader);
    const admin = createAdminClient();
    const {
      data: { user }
    } = await userClient.auth.getUser();
    if (!user) return jsonResponse({ error: "Sign in required." }, { status: 401 });

    const body = await request.json().catch(() => ({}));
    const orderId = String(body?.orderId || "").trim();
    if (!orderId) return jsonResponse({ error: "orderId is required." }, { status: 400 });

    const captureResult = await paypalApiFetch(`/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      body: JSON.stringify({})
    });

    const purchaseUnit = Array.isArray(captureResult?.purchase_units) ? captureResult.purchase_units[0] || {} : {};
    const customId = String(purchaseUnit?.payments?.captures?.[0]?.custom_id || purchaseUnit?.custom_id || "").trim();
    const { buyerUserId, publishId } = parseCustomId(customId);
    if (!buyerUserId || !publishId) throw new Error("PayPal order was missing route purchase metadata.");
    if (buyerUserId !== user.id) throw new Error("This PayPal order does not belong to the signed-in user.");

    const route = await loadPublishedRouteById(admin, publishId);
    if (!route) throw new Error("Published route no longer exists.");

    const capture = Array.isArray(purchaseUnit?.payments?.captures) ? purchaseUnit.payments.captures[0] || {} : {};
    const captureStatus = String(capture?.status || captureResult?.status || "").trim().toUpperCase();
    const amountValue = Number(capture?.amount?.value || purchaseUnit?.amount?.value || route.priceUsd || 0);
    const nowIso = new Date().toISOString();
    const entitlementId = marketplaceEntitlementDocId(buyerUserId, publishId);

    const requestPayload = {
      publishId,
      routeName: route.routeName,
      buyerUserId,
      buyerEmail: user.email || "",
      sellerUserId: route.ownerId,
      priceUsd: Number.isFinite(amountValue) ? Number(amountValue.toFixed(2)) : route.priceUsd,
      provider: "paypal",
      status: captureStatus === "COMPLETED" ? "paid_access_granted" : "payment_pending",
      paypalOrderId: orderId,
      paypalCaptureId: String(capture?.id || "").trim(),
      purchaseUrl: "",
      creatorPayoutStatus: "pending",
      createdAt: nowIso,
      updatedAt: nowIso,
      paidAt: nowIso
    };

    const { error: purchaseError } = await admin
      .from("planner_documents")
      .upsert(plannerDocRow(MARKETPLACE_PAYPAL_REQUESTS_COLLECTION, entitlementId, requestPayload), { onConflict: "doc_key" });
    if (purchaseError) throw purchaseError;

    if (captureStatus === "COMPLETED") {
      const entitlementPayload = {
        publishId,
        buyerUserId,
        buyerEmail: user.email || "",
        sourceRequestId: entitlementId,
        sourceProvider: "paypal",
        sourceOrderId: orderId,
        status: "active",
        approvedAt: nowIso,
        updatedAt: nowIso
      };
      const { error: entitlementError } = await admin
        .from("planner_documents")
        .upsert(plannerDocRow(MARKETPLACE_ROUTE_ENTITLEMENTS_COLLECTION, entitlementId, entitlementPayload), { onConflict: "doc_key" });
      if (entitlementError) throw entitlementError;
    }

    return jsonResponse({
      purchase: {
        publishId,
        status: requestPayload.status,
        paypalOrderId: orderId,
        paypalCaptureId: requestPayload.paypalCaptureId
      }
    });
  } catch (error) {
    return jsonResponse({ error: String(error instanceof Error ? error.message : error) }, { status: 500 });
  }
});
