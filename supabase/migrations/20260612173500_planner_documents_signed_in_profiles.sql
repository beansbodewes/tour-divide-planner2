create table if not exists public.planner_documents (
  doc_key text primary key,
  collection_name text not null,
  doc_id text not null,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists planner_documents_collection_name_idx
on public.planner_documents (collection_name);

create index if not exists planner_documents_doc_id_idx
on public.planner_documents (doc_id);

alter table public.planner_documents enable row level security;

drop policy if exists "public can read published planner documents" on public.planner_documents;
create policy "public can read published planner documents"
on public.planner_documents
for select
to anon, authenticated
using (
  collection_name in (
    'published_route_profiles',
    'published_route_votes'
  )
);

drop policy if exists "signed in users own route planner documents" on public.planner_documents;
create policy "signed in users own route planner documents"
on public.planner_documents
for all
to authenticated
using (
  collection_name in (
    'account_state_profiles',
    'tour_divide_profiles',
    'great_divide_touring_route_profiles',
    'colorado_trail_profiles',
    'azt_300_profiles',
    'azt_800_profiles',
    'peruvian_divide_trail_profiles',
    'silk_road_mountain_race_profiles',
    'custom_ride_profiles'
  )
  and doc_id = auth.uid()::text
)
with check (
  collection_name in (
    'account_state_profiles',
    'tour_divide_profiles',
    'great_divide_touring_route_profiles',
    'colorado_trail_profiles',
    'azt_300_profiles',
    'azt_800_profiles',
    'peruvian_divide_trail_profiles',
    'silk_road_mountain_race_profiles',
    'custom_ride_profiles'
  )
  and doc_id = auth.uid()::text
);

drop policy if exists "signed in users own published routes" on public.planner_documents;
create policy "signed in users own published routes"
on public.planner_documents
for all
to authenticated
using (
  collection_name = 'published_route_profiles'
  and payload->>'ownerId' = auth.uid()::text
)
with check (
  collection_name = 'published_route_profiles'
  and payload->>'ownerId' = auth.uid()::text
);

drop policy if exists "signed in users own published route votes" on public.planner_documents;
create policy "signed in users own published route votes"
on public.planner_documents
for all
to authenticated
using (
  collection_name = 'published_route_votes'
  and payload->>'voterId' = auth.uid()::text
)
with check (
  collection_name = 'published_route_votes'
  and payload->>'voterId' = auth.uid()::text
);

drop policy if exists "signed in users read own marketplace entitlements" on public.planner_documents;
create policy "signed in users read own marketplace entitlements"
on public.planner_documents
for select
to authenticated
using (
  collection_name = 'marketplace_route_entitlements'
  and payload->>'buyerUserId' = auth.uid()::text
);

drop policy if exists "signed in buyers create marketplace paypal requests" on public.planner_documents;
create policy "signed in buyers create marketplace paypal requests"
on public.planner_documents
for insert
to authenticated
with check (
  collection_name = 'marketplace_paypal_purchase_requests'
  and payload->>'buyerUserId' = auth.uid()::text
);
