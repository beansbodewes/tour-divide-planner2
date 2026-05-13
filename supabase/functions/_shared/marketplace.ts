import type { SupabaseClient } from "npm:@supabase/supabase-js@2";

export const SUPABASE_DOCS_TABLE = "planner_documents";
export const PUBLISHED_ROUTES_COLLECTION = "published_route_profiles";
export const MARKETPLACE_ROUTE_ENTITLEMENTS_COLLECTION = "marketplace_route_entitlements";
export const MARKETPLACE_PAYPAL_REQUESTS_COLLECTION = "marketplace_paypal_purchase_requests";

export type PublishedRouteRecord = {
  publishId: string;
  ownerId: string;
  routeName: string;
  publishMode: "full" | "resupply_only";
  priceUsd: number;
  verifiedStatus: string;
  authorLabel: string;
  routeDistance: number;
  totalDays: number | null;
  restDays: number | null;
  trackPoints: unknown[];
  resupplyPoints: unknown[];
  config: Record<string, unknown> | null;
  plan: unknown[];
  publishedAt: string;
  updatedAt: string;
};

export function normalizePublishedRouteRecord(input: Record<string, unknown>, publishIdOverride = ""): PublishedRouteRecord {
  const publishId = String(publishIdOverride || input.publishId || input.id || "").trim();
  const publishMode = String(input.publishMode || "") === "resupply_only" ? "resupply_only" : "full";
  const priceUsd = Number(Number(input.priceUsd ?? input.price ?? 0).toFixed(2));
  return {
    publishId,
    ownerId: String(input.ownerId || "").trim(),
    routeName: String(input.routeName || "Shared Route").trim(),
    publishMode,
    priceUsd: Number.isFinite(priceUsd) && priceUsd > 0 ? priceUsd : 0,
    verifiedStatus: String(input.verifiedStatus || "unverified").trim() || "unverified",
    authorLabel: String(input.authorLabel || "Rider").trim() || "Rider",
    routeDistance: Number(input.routeDistance || 0),
    totalDays: publishMode === "full" ? Number(input.totalDays || 0) || null : null,
    restDays: publishMode === "full" ? Number(input.restDays || 0) || null : null,
    trackPoints: Array.isArray(input.trackPoints) ? input.trackPoints : [],
    resupplyPoints: Array.isArray(input.resupplyPoints) ? input.resupplyPoints : [],
    config: input.config && typeof input.config === "object" ? (input.config as Record<string, unknown>) : null,
    plan: Array.isArray(input.plan) ? input.plan : [],
    publishedAt: String(input.publishedAt || input.updatedAt || new Date().toISOString()),
    updatedAt: String(input.updatedAt || input.publishedAt || new Date().toISOString())
  };
}

export async function loadPublishedRouteById(admin: SupabaseClient, publishId: string) {
  const { data, error } = await admin
    .from(SUPABASE_DOCS_TABLE)
    .select("doc_id,payload,updated_at")
    .eq("collection_name", PUBLISHED_ROUTES_COLLECTION)
    .eq("doc_id", publishId)
    .maybeSingle();
  if (error) throw error;
  if (!data?.payload || typeof data.payload !== "object") return null;
  return normalizePublishedRouteRecord(data.payload as Record<string, unknown>, String(data.doc_id || publishId));
}

export function marketplaceEntitlementDocId(buyerUserId: string, publishId: string) {
  const safeBuyer = String(buyerUserId || "").trim();
  const safePublishId = String(publishId || "").trim();
  if (!safeBuyer || !safePublishId) return "";
  return `${safeBuyer}__${safePublishId}`;
}

export function plannerDocRow(collectionName: string, docId: string, payload: Record<string, unknown>) {
  const nowIso = String(payload.updatedAt || new Date().toISOString());
  return {
    doc_key: `${collectionName}:${docId}`,
    collection_name: collectionName,
    doc_id: docId,
    payload,
    updated_at: nowIso
  };
}

export async function loadPlannerDocById(admin: SupabaseClient, collectionName: string, docId: string) {
  const { data, error } = await admin
    .from(SUPABASE_DOCS_TABLE)
    .select("doc_id,payload,updated_at")
    .eq("collection_name", collectionName)
    .eq("doc_id", docId)
    .maybeSingle();
  if (error) throw error;
  return data || null;
}
