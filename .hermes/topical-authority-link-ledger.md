# Topical-authority link ledger

Updated: 2026-09-07
Scope: OutsourcedAccountManagement.com. This is an internal editorial queue, not reader-facing copy or a claim of search performance.

## Service-led map

| Service page | Supporting intent already represented | Editorial status |
| --- | --- | --- |
| `/services/client-onboarding-coordination` | Research on onboarding handoff latency | A contextual handoff is already rendered from `/research/onboarding-handoff-latency-study`. Do not add a second link to the same destination. |
| `/services/renewal-administration` | Research on renewal-risk signal disagreement | A contextual handoff is already rendered once in `/research/renewal-risk-signal-disagreement` from source commit `868a817fb52c36674d0542d0d32bf9b659fd0c14`. Do not add a second link. |
| `/services/account-reporting` | Research on QBR denominator drift | A service link is already included through the route's structured internal-link data. Review visible placement before proposing additional reader-facing copy. |
| `/services/crm-account-maintenance` | Research on CRM ownership ambiguity | A service link is already included through the route's structured internal-link data. Review visible placement before proposing additional reader-facing copy. |

## Next bounded action

No additional handoff is queued from this ledger. The four recorded source-to-service pairs are already delivered or already represented through their route data. Before proposing a new link, build the candidate source route and verify that its route-local `<main>` does not already contain the exact service destination.

## Evidence reviewed

- `app/data.ts`: 12 Philippines-based account-management service routes, including renewal administration.
- `app/research-data.ts`: `renewal-risk-signal-disagreement` has a stated methodology and source set; the generated research model maps related service routes through `internalLinks`.
- `app/research/[slug]/page.tsx`: `serviceHandoff` is the existing reader-facing contextual-link mechanism.
- `app/services/[slug]/page.tsx`: service copy keeps preparation separate from owner decisions.
- `app/sitemap.xml/route.ts`: research and service routes are generated from the shared data arrays.
