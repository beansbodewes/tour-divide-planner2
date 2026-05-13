import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createAdminClient, createUserClient } from "../_shared/clients.ts";
import {
  loadPublishedRouteById,
  MARKETPLACE_ROUTE_ENTITLEMENTS_COLLECTION,
  SUPABASE_DOCS_TABLE
} from "../_shared/marketplace.ts";

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
    const action = String(body?.action || "").trim();

    if (action === "list_entitlements") {
      const { data, error } = await admin
        .from(SUPABASE_DOCS_TABLE)
        .select("payload")
        .eq("collection_name", MARKETPLACE_ROUTE_ENTITLEMENTS_COLLECTION);
      if (error) throw error;
      const publishIds = (Array.isArray(data) ? data : [])
        .map((row) => (row?.payload && typeof row.payload === "object" ? row.payload : {}))
        .filter((payload) => String(payload?.buyerUserId || "").trim() === user.id)
        .filter((payload) => String(payload?.status || "").trim() === "active")
        .map((payload) => String(payload?.publishId || "").trim())
        .filter(Boolean);
      return jsonResponse({ publishIds });
    }

    if (action === "import_route") {
      const publishId = String(body?.publishId || "").trim();
      if (!publishId) return jsonResponse({ error: "publishId is required." }, { status: 400 });
      const route = await loadPublishedRouteById(admin, publishId);
      if (!route) return jsonResponse({ error: "Route not found." }, { status: 404 });
      if (route.ownerId === user.id || !(route.priceUsd > 0)) {
        return jsonResponse({ route });
      }

      const { data, error } = await admin
        .from(SUPABASE_DOCS_TABLE)
        .select("payload")
        .eq("collection_name", MARKETPLACE_ROUTE_ENTITLEMENTS_COLLECTION);
      if (error) throw error;

      const entitlement = (Array.isArray(data) ? data : [])
        .map((row) => (row?.payload && typeof row.payload === "object" ? row.payload : {}))
        .find((payload) =>
          String(payload?.publishId || "").trim() === publishId &&
          String(payload?.buyerUserId || "").trim() === user.id &&
          String(payload?.status || "").trim() === "active"
        );
      if (!entitlement) {
        return jsonResponse({ error: "You have not purchased access to this route yet." }, { status: 403 });
      }
      return jsonResponse({ route });
    }

    return jsonResponse({ error: "Unsupported action." }, { status: 400 });
  } catch (error) {
    return jsonResponse({ error: String(error instanceof Error ? error.message : error) }, { status: 500 });
  }
});
