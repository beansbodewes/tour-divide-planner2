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

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    return jsonResponse({ error: "Paid route sales are temporarily unavailable." }, { status: 503 });
    const authHeader = request.headers.get("Authorization");
    const userClient = createUserClient(authHeader);
    const admin = createAdminClient();
    const {
      data: { user }
    } = await userClient.auth.getUser();
    if (!user) return jsonResponse({ error: "Sign in required." }, { status: 401 });

    const body = await request.json().catch(() => ({}));
    const publishId = String(body?.publishId || "").trim();
    const returnUrl = String(body?.returnUrl || "").trim();
    const cancelUrl = String(body?.cancelUrl || returnUrl).trim();
    if (!publishId || !returnUrl || !cancelUrl) {
      return jsonResponse({ error: "publishId, returnUrl, and cancelUrl are required." }, { status: 400 });
    }

    const route = await loadPublishedRouteById(admin, publishId);
    if (!route) return jsonResponse({ error: "Route not found." }, { status: 404 });
    if (route.ownerId === user.id) return jsonResponse({ error: "You already own this route." }, { status: 400 });
    if (!(route.priceUsd > 0)) return jsonResponse({ error: "This route is free and does not require purchase." }, { status: 400 });

    const entitlementId = marketplaceEntitlementDocId(user.id, publishId);
    const { data: existingEntitlement, error: entitlementError } = await admin
      .from("planner_documents")
      .select("doc_id")
      .eq("collection_name", MARKETPLACE_ROUTE_ENTITLEMENTS_COLLECTION)
      .eq("doc_id", entitlementId)
      .maybeSingle();
    if (entitlementError) throw entitlementError;
    if (existingEntitlement) {
      return jsonResponse({ alreadyOwned: true, publishId });
    }

    const customId = entitlementId;
    const invoiceId = `route-${Date.now()}`;
    const amountText = route.priceUsd.toFixed(2);
    const order = await paypalApiFetch("/v2/checkout/orders", {
      method: "POST",
      body: JSON.stringify({
        intent: "CAPTURE",
        payment_source: {
          paypal: {
            experience_context: {
              return_url: returnUrl,
              cancel_url: cancelUrl,
              user_action: "PAY_NOW",
              shipping_preference: "NO_SHIPPING"
            }
          }
        },
        purchase_units: [
          {
            custom_id: customId,
            invoice_id: invoiceId,
            description: `${route.routeName} route purchase`,
            amount: {
              currency_code: "USD",
              value: amountText
            }
          }
        ]
      })
    });

    const approveLink = Array.isArray(order?.links)
      ? order.links.find((link: Record<string, unknown>) => {
          const rel = String(link?.rel || "").trim();
          return rel === "payer-action" || rel === "approve";
        })
      : null;
    const approvalUrl = String(approveLink?.href || "").trim();
    if (!approvalUrl) throw new Error("PayPal approval URL was missing.");

    const nowIso = new Date().toISOString();
    const docId = entitlementId;
    const payload = {
      publishId,
      routeName: route.routeName,
      buyerUserId: user.id,
      buyerEmail: user.email || "",
      sellerUserId: route.ownerId,
      priceUsd: route.priceUsd,
      provider: "paypal",
      status: "order_created",
      paypalOrderId: String(order?.id || "").trim(),
      paypalCaptureId: "",
      purchaseUrl: approvalUrl,
      creatorPayoutStatus: "pending",
      createdAt: nowIso,
      updatedAt: nowIso
    };
    const { error: saveError } = await admin
      .from("planner_documents")
      .upsert(plannerDocRow(MARKETPLACE_PAYPAL_REQUESTS_COLLECTION, docId, payload), { onConflict: "doc_key" });
    if (saveError) throw saveError;

    return jsonResponse({
      orderId: String(order?.id || "").trim(),
      approvalUrl,
      publishId
    });
  } catch (error) {
    return jsonResponse({ error: String(error instanceof Error ? error.message : error) }, { status: 500 });
  }
});
