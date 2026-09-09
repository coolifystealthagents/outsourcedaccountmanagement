# Service-led topical authority link ledger

## Scope

This ledger maps existing Outsourced Account Management pages to the already generated Philippines-based service pages that answer the reader's next practical question. It is a release queue, not a promise of rankings or a substitute for editorial links and other off-site signals.

Only add a public link after confirming the source page, target artifact, and reader-facing wording in the current build. Keep commercial decisions, contract changes, refunds, security judgments, and broad access control with the accountable owner.

## Confirmed service pillars

| Existing service route | Reader need it supports | Supporting-page themes already present |
| --- | --- | --- |
| `/services/client-onboarding-coordination` | Start an account with clear facts, access, owners, and first actions | kickoff briefs, onboarding timelines, handoff records |
| `/services/account-health-monitoring` | Review account condition, open commitments, and next checks | health scorecards, coverage, review agendas, retention signals |
| `/services/renewal-administration` | Prepare renewal evidence without changing commercial terms | renewal readiness, risk registers, calendars |
| `/services/customer-qbr-preparation` | Prepare a factual quarterly review for owner decisions | QBR checklists, data packs, meeting preparation |
| `/services/crm-account-maintenance` | Keep assigned account records current and permission-aware | contact freshness, data exceptions, record reconciliation |
| `/services/client-request-routing` | Route client asks by impact, authority, and next update | request completeness, open loops, priority reviews |
| `/services/account-reporting` | Prepare source-linked account reporting | metric governance, report reconciliation, outcome baselines |
| `/services/escalation-coordination` | Route difficult client issues without implying an unapproved resolution | severity models, escalation acknowledgment, recovery evidence |
| `/services/implementation-handoff-support` | Move account context between owners in a controlled record | handoff acceptance, transition knowledge, dependency maps |
| `/services/contract-milestone-tracking` | Track approved commitments and milestone evidence | journey milestones, commitment aging, deliverable acceptance |

## Public-link inventory and remaining queue

| Priority | Existing source route | Specific reader question | Confirmed target route | Proposed contextual link purpose | Pre-release check |
| --- | --- | --- | --- | --- | --- |
| Delivered | `/research/account-journey-milestone-evidence` | How can a team keep approved milestones and exit evidence visible? | `/services/contract-milestone-tracking` | Send a reader from milestone evidence to practical tracking support. | Verified once in generated route-local `<main>` on 2026-09-09. Do not add a second link. |
| Delivered | `/research/client-request-completeness-audit` | What happens after a request has enough facts to route? | `/services/client-request-routing` | Connect the audit to a clear intake-and-owner service path. | Verified once in generated route-local `<main>` on 2026-09-09. Do not add a second link. |
| Delivered | `/research/account-record-reconciliation-study` | Who keeps conflicting client fields current and reviewable? | `/services/crm-account-maintenance` | Route reconciliation readers to the specific CRM maintenance service. | Verified once in generated route-local `<main>` on 2026-09-09. Do not add a second link. |
| Delivered | `/research/client-closure-proof-analysis` | How should the team document closure in a client update? | `/services/account-reporting` | Connect closure evidence to a report-ready record path. | Verified once in generated route-local `<main>` on 2026-09-09. Do not add a second link. |
| Delivered locally / public stale | `/research/account-risk-evidence-thresholds` | Who should route a risk signal that crosses the written threshold? | `/services/escalation-coordination` | Give escalation-threshold readers a direct service path. | Rendered source: `08d83c33dcffe0cbc0811e229582a3448bfcc01d`. Local artifact has one route-local link; apex and www still omit the marker and serve the prior modified date. Do not add a second link. |
| 1 | `/research/renewal-signal-calibration` | How can a team assemble renewal evidence while ownership stays internal? | `/services/renewal-administration` | Link the evidence method to renewal administration support. | Source and target artifacts exist; the source `<main>` has zero matching service links. Preserve the page's boundary around commercial terms. |
| 3 | `/research/account-handoff-acceptance-check` | What support helps a receiving owner check context and access boundaries? | `/services/implementation-handoff-support` | Connect handoff acceptance to the matching service page. | Source and target artifacts exist; the source `<main>` has zero matching service links. Confirm the source's own route title and canonical before release. |
| 4 | `/research/client-health-signal-calibration` | Where can a buyer turn an evidence-backed signal into a review routine? | `/services/account-health-monitoring` | Give the health-signal report a route to the health-review pillar. | Source and target artifacts exist; the source `<main>` has zero matching service links. Retain the source's limitation that a signal does not prove client sentiment or retention. |

## Known route-data gaps

Some existing research records refer to service concepts such as `account planning support`, `client meeting coordination`, `client communication support`, `account transition support`, and `client approval coordination`. These are not entries in `app/data.ts` `services` as of this ledger's date. Do not publish links to those slugs. For a public handoff, select the confirmed target above only where it answers the same reader question, or leave the page unchanged.

## Next execution target

Preserve rendered-source commit `08d83c33dcffe0cbc0811e229582a3448bfcc01d` for `/research/account-risk-evidence-thresholds` to `/services/escalation-coordination`. Its local artifact passed with one route-local handoff, but cache-busted apex and www still serve the prior marker and `2026-08-13` modified date; deployment configuration is unavailable in this repository. Start the next public-link candidate with `/research/renewal-signal-calibration` to `/services/renewal-administration` only after a fresh route-local artifact check.
