create extension if not exists pgcrypto;

create table if not exists public.marketplace_creator_accounts (
  user_id uuid primary key references auth.users(id) on delete cascade,
  stripe_account_id text unique,
  onboarding_complete boolean not null default false,
  charges_enabled boolean not null default false,
  payouts_enabled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.marketplace_purchases (
  id uuid primary key default gen_random_uuid(),
  publish_id text not null,
  buyer_user_id uuid not null references auth.users(id) on delete cascade,
  seller_user_id uuid not null references auth.users(id) on delete cascade,
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id text,
  price_usd numeric(10,2) not null,
  platform_fee_usd numeric(10,2) not null default 0,
  creator_payout_usd numeric(10,2) not null default 0,
  currency text not null default 'usd',
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'refunded', 'revoked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.marketplace_entitlements (
  id uuid primary key default gen_random_uuid(),
  publish_id text not null,
  buyer_user_id uuid not null references auth.users(id) on delete cascade,
  purchase_id uuid references public.marketplace_purchases(id) on delete set null,
  status text not null default 'active' check (status in ('active', 'refunded', 'revoked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (publish_id, buyer_user_id)
);

create table if not exists public.marketplace_webhook_events (
  event_id text primary key,
  event_type text not null,
  created_at timestamptz not null default now()
);

alter table public.marketplace_creator_accounts enable row level security;
alter table public.marketplace_purchases enable row level security;
alter table public.marketplace_entitlements enable row level security;
alter table public.marketplace_webhook_events enable row level security;

drop policy if exists "creator accounts own rows" on public.marketplace_creator_accounts;
create policy "creator accounts own rows"
on public.marketplace_creator_accounts
for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "buyers and sellers can read purchases" on public.marketplace_purchases;
create policy "buyers and sellers can read purchases"
on public.marketplace_purchases
for select
to authenticated
using (auth.uid() = buyer_user_id or auth.uid() = seller_user_id);

drop policy if exists "buyers can read entitlements" on public.marketplace_entitlements;
create policy "buyers can read entitlements"
on public.marketplace_entitlements
for select
to authenticated
using (auth.uid() = buyer_user_id);
