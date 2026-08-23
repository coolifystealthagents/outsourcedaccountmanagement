# Topical-authority link ledger

Updated: 2026-08-23
Scope: OutsourcedAccountManagement.com. This is an internal editorial queue, not reader-facing copy or a claim of search performance.

## Service-led map

| Service page | Supporting intent already represented | Editorial status |
| --- | --- | --- |
| `/services/client-onboarding-coordination` | Research on onboarding handoff latency | A contextual handoff is already rendered from `/research/onboarding-handoff-latency-study`. Do not add a second link to the same destination. |
| `/services/renewal-administration` | Research on renewal-risk signal disagreement | Eligible for one future contextual handoff after source-route review. The link should help a reader move from interpreting conflicting renewal signals to defining the preparation work a Philippines-based specialist can do; it must keep renewal terms and commercial decisions with the client owner. |
| `/services/account-reporting` | Research on QBR denominator drift | A service link is already included through the route's structured internal-link data. Review visible placement before proposing additional reader-facing copy. |
| `/services/crm-account-maintenance` | Research on CRM ownership ambiguity | A service link is already included through the route's structured internal-link data. Review visible placement before proposing additional reader-facing copy. |

## Next bounded action

Candidate source: `/research/renewal-risk-signal-disagreement`  
Candidate destination: `/services/renewal-administration`  
Intent: A reader who has found conflicting renewal evidence needs to decide what preparation may be delegated, while contract terms, pricing, and final renewal decisions remain with the named client owner.

Before any public edit, verify the source route does not already display this destination, use the existing `serviceHandoff` model if it is appropriate, and confirm the rendered anchor text, canonical, H1, and sitemap output after the build. Do not add a generic CTA or duplicate a service link already visible on the route.

## Evidence reviewed

- `app/data.ts`: 12 Philippines-based account-management service routes, including renewal administration.
- `app/research-data.ts`: `renewal-risk-signal-disagreement` has a stated methodology and source set; the generated research model maps related service routes through `internalLinks`.
- `app/research/[slug]/page.tsx`: `serviceHandoff` is the existing reader-facing contextual-link mechanism.
- `app/services/[slug]/page.tsx`: service copy keeps preparation separate from owner decisions.
- `app/sitemap.xml/route.ts`: research and service routes are generated from the shared data arrays.
