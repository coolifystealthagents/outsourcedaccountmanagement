# Topical-authority link ledger

Updated: 2026-09-10
Scope: OutsourcedAccountManagement.com. This is an internal editorial queue, not reader-facing copy or a claim of search performance.

## Service-led map

| Service page | Supporting intent already represented | Editorial status |
| --- | --- | --- |
| `/services/client-onboarding-coordination` | Research on onboarding handoff latency | A contextual handoff is already rendered from `/research/onboarding-handoff-latency-study`. Do not add a second link to the same destination. |
| `/services/renewal-administration` | Research on renewal-risk signal disagreement | A contextual handoff is already rendered once in `/research/renewal-risk-signal-disagreement` from source commit `868a817fb52c36674d0542d0d32bf9b659fd0c14`. Do not add a second link. |
| `/services/account-reporting` | Research on QBR denominator drift | A service link is already included through the route's structured internal-link data. Review visible placement before proposing additional reader-facing copy. |
| `/services/crm-account-maintenance` | Research on CRM ownership ambiguity | A service link is already included through the route's structured internal-link data. Review visible placement before proposing additional reader-facing copy. |

## Reconciled broader map

`TOPICAL-AUTHORITY-LINK-LEDGER.md` had four rows that still looked queued. A fresh production build verified each route-local handoff exactly once: `/research/account-journey-milestone-evidence` to `/services/contract-milestone-tracking`, `/research/client-request-completeness-audit` to `/services/client-request-routing`, `/research/account-record-reconciliation-study` to `/services/crm-account-maintenance`, and `/research/client-closure-proof-analysis` to `/services/account-reporting`. Those pairs are delivered and non-duplicable.

Four remaining verified-absent pairs are now ordered in that map. The first is `/research/account-risk-evidence-thresholds` to `/services/escalation-coordination`; its source and target artifacts exist, while the source route-local `<main>` has zero matching target links.

## Next bounded action

Before proposing the next public link, use the first remaining pair in `TOPICAL-AUTHORITY-LINK-LEDGER.md`. Rebuild the candidate and verify that its route-local `<main>` still has zero exact links to its confirmed service target.

## Delivery status — 2026-09-09

Rendered source: `08d83c33dcffe0cbc0811e229582a3448bfcc01d` added the one route-local handoff from `/research/account-risk-evidence-thresholds` to `/services/escalation-coordination`. The local production artifact has the expected H1, apex canonical URL, Article modified date `2026-09-09`, one exact service href, and a canonical sitemap record; this sitemap intentionally has no `lastmod`.

Cache-busted apex and www pages both returned `200 text/html` with the expected H1 and apex canonical URL, but neither included the handoff marker and both served `article:modified_time` `2026-08-13T00:00:00.000Z`. The configured repository exposes no approved Coolify target identifier, so no deployment was triggered. Preserve rendered-source commit `08d83c33dcffe0cbc0811e229582a3448bfcc01d`; classify this as `deployment_pending_public_verification / deployment_configuration_unavailable / public_stale`.

## Delivery status — 2026-09-10

Rendered source: `ab443dcf1f90a5969218c3fc211acd3c01244df6` added the one route-local handoff from `/research/renewal-signal-calibration` to `/services/renewal-administration`. The local production artifact has the expected H1, apex canonical URL, Article and Open Graph modified date `2026-09-10`, one exact service href, the visible preparation and owner-boundary text, and a canonical sitemap record; this sitemap intentionally has no `lastmod`.

Cache-busted apex and www pages both returned `200 text/html` with the expected H1 and apex canonical URL, but neither included the handoff marker or service href and both served `article:modified_time` `2026-08-12T00:00:00.000Z`. The repository exposes no approved Coolify target identifier, so no deployment was triggered. Preserve rendered-source commit `ab443dcf1f90a5969218c3fc211acd3c01244df6`; classify this as `deployment_pending_public_verification / deployment_configuration_unavailable / public_stale`.

## Evidence reviewed

- `app/data.ts`: 12 Philippines-based account-management service routes, including renewal administration.
- `app/research-data.ts`: `renewal-risk-signal-disagreement` has a stated methodology and source set; the generated research model maps related service routes through `internalLinks`.
- `app/research/[slug]/page.tsx`: `serviceHandoff` is the existing reader-facing contextual-link mechanism.
- `app/services/[slug]/page.tsx`: service copy keeps preparation separate from owner decisions.
- `app/sitemap.xml/route.ts`: research and service routes are generated from the shared data arrays.
