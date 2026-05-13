import { createClient } from "npm:@supabase/supabase-js@2";

function requireEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const supabaseUrl = requireEnv("SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || requireEnv("SUPABASE_PUBLISHABLE_KEY");
const supabaseServiceRoleKey = requireEnv("SB_SERVICE_ROLE_KEY");

export function createAdminClient() {
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });
}

export function createUserClient(authHeader: string | null) {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      headers: authHeader ? { Authorization: authHeader } : {}
    }
  });
}
