# Marketplace Setup

This repo now supports a PayPal-first route marketplace with:

- instant route unlock after confirmed PayPal payment
- manual creator payouts after you review each sale
- a simple admin queue inside the app for payout tracking

## Current buyer flow

1. A rider clicks `Buy with PayPal`
2. The app calls `create-paypal-route-order`
3. The rider completes checkout in PayPal
4. PayPal returns to the app
5. The app calls `capture-paypal-route-order`
6. If capture succeeds, the buyer gets an entitlement immediately
7. The buyer can import the route right away

There is also a `paypal-webhook` function for backup reconciliation. That means if the browser return flow is interrupted, the webhook can still unlock the route when PayPal sends `PAYMENT.CAPTURE.COMPLETED`.

## Current creator payout flow

- Buyer access is automatic after payment confirmation
- Creator payout is still manual
- The marketplace admin panel shows paid sales
- After you send the creator their share, click `Mark Creator Paid`

## Current collections used in `planner_documents`

- `published_route_profiles`
- `published_route_votes`
- `marketplace_paypal_purchase_requests`
- `marketplace_route_entitlements`

## Required Supabase secrets

Set these for the edge functions:

- `SB_SERVICE_ROLE_KEY`
- `SUPABASE_PUBLISHABLE_KEY`
- `PAYPAL_CLIENT_ID`
- `PAYPAL_CLIENT_SECRET`
- `PAYPAL_ENVIRONMENT`

Optional but recommended:

- `PAYPAL_WEBHOOK_ID`

Use `PAYPAL_ENVIRONMENT=sandbox` while testing and `live` when you switch to real payments.

## Functions to deploy

- `marketplace-route-access`
- `create-paypal-route-order`
- `capture-paypal-route-order`
- `paypal-webhook`

## PayPal webhook

Create a PayPal webhook that points to:

- `/functions/v1/paypal-webhook`

Subscribe it to at least:

- `PAYMENT.CAPTURE.COMPLETED`

If you set `PAYPAL_WEBHOOK_ID`, the webhook handler will verify PayPal signatures before granting access.

## Important caveat

This is still a validation-stage marketplace:

- buyer unlock is automated
- creator payout is not automated yet
- route data is still stored in the existing `planner_documents` model

If sales prove out, the next upgrade should be:

1. protected route payload storage
2. stronger entitlement checks and indexes
3. automated creator payouts
4. refund and dispute handling
