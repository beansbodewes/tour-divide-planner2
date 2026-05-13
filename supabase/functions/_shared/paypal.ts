function requireEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const paypalClientId = requireEnv("PAYPAL_CLIENT_ID");
export const paypalClientSecret = requireEnv("PAYPAL_CLIENT_SECRET");
export const paypalEnvironment = String(Deno.env.get("PAYPAL_ENVIRONMENT") || "sandbox").trim().toLowerCase() === "live"
  ? "live"
  : "sandbox";
export const paypalBaseUrl = paypalEnvironment === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";

export async function getPayPalAccessToken() {
  const credentials = btoa(`${paypalClientId}:${paypalClientSecret}`);
  const response = await fetch(`${paypalBaseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(String(data?.error_description || data?.error || "Could not authenticate with PayPal."));
  }
  return String(data.access_token || "").trim();
}

export async function paypalApiFetch(path: string, init: RequestInit = {}) {
  const accessToken = await getPayPalAccessToken();
  const headers = new Headers(init.headers || {});
  headers.set("Authorization", `Bearer ${accessToken}`);
  headers.set("Content-Type", headers.get("Content-Type") || "application/json");
  headers.set("Accept", "application/json");
  const response = await fetch(`${paypalBaseUrl}${path}`, { ...init, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(String(data?.message || data?.error_description || `PayPal API request failed for ${path}.`));
  }
  return data;
}

export async function verifyPayPalWebhook(request: Request, bodyText: string) {
  const webhookId = String(Deno.env.get("PAYPAL_WEBHOOK_ID") || "").trim();
  if (!webhookId) return true;

  const transmissionId = request.headers.get("paypal-transmission-id");
  const transmissionTime = request.headers.get("paypal-transmission-time");
  const transmissionSig = request.headers.get("paypal-transmission-sig");
  const certUrl = request.headers.get("paypal-cert-url");
  const authAlgo = request.headers.get("paypal-auth-algo");
  if (!transmissionId || !transmissionTime || !transmissionSig || !certUrl || !authAlgo) {
    throw new Error("Missing PayPal webhook verification headers.");
  }

  const verification = await paypalApiFetch("/v1/notifications/verify-webhook-signature", {
    method: "POST",
    body: JSON.stringify({
      auth_algo: authAlgo,
      cert_url: certUrl,
      transmission_id: transmissionId,
      transmission_sig: transmissionSig,
      transmission_time: transmissionTime,
      webhook_id: webhookId,
      webhook_event: JSON.parse(bodyText)
    })
  });

  return String(verification?.verification_status || "").trim().toUpperCase() === "SUCCESS";
}
