# Topical-authority link ledger

## Research inventory — 2026-09-26 staged combined release

Five new decision-grade records are reserved for the September 26 combined Blog + Research release: response-clock definition → `/services/account-reporting`; access deprovisioning lag → `/services/crm-account-maintenance`; request scope-change detection → `/services/client-request-routing`; backup coverage activation → `/services/account-health-monitoring`; and data-retention disposition → `/services/crm-account-maintenance`. These exact decision questions and slugs are reserved against keyword swaps and near-duplicates. Publication remains pending the single combined release; Blog is the release integrator.

## Research inventory — 2026-09-24

Five new decision-grade records were added: client commitment decomposition → `/services/client-request-routing`; cross-system evidence lineage → `/services/crm-account-maintenance`; portfolio exception sampling bias → `/services/account-health-monitoring`; relationship-owner continuity → `/services/client-onboarding-coordination`; and reporting-state consistency → `/services/account-reporting`. These slugs and decision questions are reserved against future keyword swaps or near-duplicates.

Updated: 2026-09-14
Scope: OutsourcedAccountManagement.com. This is an internal editorial queue, not reader-facing copy or a claim of search performance.

## Service-led map

| Service page | Supporting intent already represented | Editorial status |
| --- | --- | --- |
| `/services/client-onboarding-coordination` | Research on onboarding handoff latency | A contextual handoff is already rendered from `/research/onboarding-handoff-latency-study`. Do not add a second link to the same destination. |
| `/services/renewal-administration` | Research on renewal-risk signal disagreement | A contextual handoff is already rendered once in `/research/renewal-risk-signal-disagreement` from source commit `868a817fb52c36674d0542d0d32bf9b659fd0c14`. Do not add a second link. |
| `/services/account-reporting` | Research on QBR denominator drift | A service link is already included through the route's structured internal-link data. Review visible placement before proposing additional reader-facing copy. |
| `/services/crm-account-maintenance` | Research on CRM ownership ambiguity | A service link is already included through the route's structured internal-link data. Review visible placement before proposing additional reader-facing copy. |
| `/services/account-health-monitoring` | Research on client health signal calibration | A contextual handoff was rendered once from `/research/client-health-signal-calibration` in source commit `f88e291f82398052f91d7ff40e95c9e05a17ed64`. Do not add a second link. |

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

## Delivery status — 2026-09-14

Rendered source: `f88e291f82398052f91d7ff40e95c9e05a17ed64` added the one route-local handoff from `/research/client-health-signal-calibration` to `/services/account-health-monitoring`. The local production artifact has the expected H1, apex canonical URL, Article published date `2026-08-14`, Article and Open Graph modified date `2026-09-14`, one exact service href, the visible preparation and owner-boundary text, and a canonical sitemap record; this sitemap intentionally has no `lastmod`.

Cache-busted apex and www pages both returned `200 text/html` with the expected H1 and apex canonical URL, but neither included the handoff marker or service href and both served `article:modified_time` `2026-08-14T00:00:00.000Z`. The repository exposes no approved Coolify target identifier, so no deployment was triggered. Preserve rendered-source commit `f88e291f82398052f91d7ff40e95c9e05a17ed64`; classify this as `deployment_pending_public_verification / deployment_configuration_unavailable / public_stale`.

- `app/data.ts`: 12 Philippines-based account-management service routes, including renewal administration.
- `app/research-data.ts`: `renewal-risk-signal-disagreement` has a stated methodology and source set; the generated research model maps related service routes through `internalLinks`.
- `app/research/[slug]/page.tsx`: `serviceHandoff` is the existing reader-facing contextual-link mechanism.
- `app/services/[slug]/page.tsx`: service copy keeps preparation separate from owner decisions.
- `app/sitemap.xml/route.ts`: research and service routes are generated from the shared data arrays.

## Combined content release — 2026-09-26 Asia/Manila

Staged exactly 12 new Blog articles and 5 new Research articles from remote base `2e6ffbc9551225a7cc5c37323025892b326d5de2`. Blog content commit is `a005fffb4f02dc2b4ee7eed05a754348cfd22364`; Research content commit is `5d00d2458bcd71bde5894e14cec043665979f4af`. The production typecheck and build passed with 625 static pages. The Blog and Research manifests under `.paperclip/daily-content/2026-09-26/` record topics, slugs, hashes, publication dates, and intended live URLs. The browser operator owns the single deployment and public-route verification.
