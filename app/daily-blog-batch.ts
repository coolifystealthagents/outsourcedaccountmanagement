import type { RichArticle } from './rich-articles';

const topics = [
  ['philippines-account-management-client-onboarding-roles', 'Philippines account management client onboarding roles', 'client-onboarding-coordination'],
  ['philippines-account-management-account-health-signals', 'Philippines account management account health signals', 'account-health-monitoring'],
  ['philippines-account-management-renewal-owner-map', 'Philippines account management renewal owner map', 'renewal-administration'],
  ['philippines-account-management-qbr-storyboard', 'Philippines account management QBR storyboard', 'customer-qbr-preparation'],
  ['philippines-account-management-crm-field-governance', 'Philippines account management CRM field governance', 'crm-account-maintenance'],
  ['philippines-account-management-request-triage', 'Philippines account management request triage', 'client-request-routing'],
  ['philippines-account-management-expansion-signal-log', 'Philippines account management expansion signal log', 'upsell-opportunity-tracking'],
  ['philippines-account-management-portfolio-dashboard', 'Philippines account management portfolio dashboard', 'account-reporting'],
  ['philippines-account-management-contract-milestone-review', 'Philippines account management contract milestone review', 'contract-milestone-tracking'],
  ['philippines-account-management-feedback-theme-register', 'Philippines account management feedback theme register', 'customer-feedback-administration'],
  ['philippines-account-management-implementation-to-account-handoff', 'Philippines account management implementation to account handoff', 'implementation-handoff-support'],
  ['philippines-account-management-severity-routing', 'Philippines account management severity routing', 'escalation-coordination'],
  ['philippines-account-management-client-success-metrics', 'Philippines account management client success metrics', 'account-reporting'],
  ['philippines-account-management-renewal-evidence-pack', 'Philippines account management renewal evidence pack', 'renewal-administration'],
  ['philippines-account-management-risk-signal-review', 'Philippines account management risk signal review', 'account-health-monitoring'],
  ['philippines-account-management-client-brief-template', 'Philippines account management client brief template', 'client-onboarding-coordination'],
  ['philippines-account-management-qbr-decision-log', 'Philippines account management QBR decision log', 'customer-qbr-preparation'],
  ['philippines-account-management-crm-permission-review', 'Philippines account management CRM permission review', 'crm-account-maintenance'],
  ['philippines-account-management-account-escalation-brief', 'Philippines account management account escalation brief', 'escalation-coordination'],
  ['philippines-account-management-client-update-brief', 'Philippines account management client update brief', 'account-reporting'],
  ['philippines-account-management-feedback-action-plan', 'Philippines account management feedback action plan', 'customer-feedback-administration'],
  ['philippines-account-management-milestone-dependency-log', 'Philippines account management milestone dependency log', 'contract-milestone-tracking'],
  ['philippines-account-management-expansion-readiness-check', 'Philippines account management expansion readiness check', 'upsell-opportunity-tracking'],
] as const;

// The August 11 campaign is a distinct batch. Keep the publication date on
// every source record rather than deriving it from a shared campaign value.
const august11Topics = [
  ['philippines-account-management-client-onboarding-discovery-agenda', 'Philippines account management client onboarding discovery agenda', 'client-onboarding-coordination', '2026-08-12'],
  ['philippines-account-management-client-stakeholder-map', 'Philippines account management client stakeholder map', 'client-onboarding-coordination', '2026-08-12'],
  ['philippines-account-management-client-outcome-baseline', 'Philippines account management client outcome baseline', 'account-health-monitoring', '2026-08-12'],
  ['philippines-account-management-client-meeting-recap', 'Philippines account management client meeting recap', 'customer-qbr-preparation', '2026-08-12'],
  ['philippines-account-management-client-action-register', 'Philippines account management client action register', 'client-request-routing', '2026-08-12'],
  ['philippines-account-management-renewal-evidence-checklist', 'Philippines account management renewal evidence checklist', 'renewal-administration', '2026-08-12'],
  ['philippines-account-management-escalation-decision-tree', 'Philippines account management escalation decision tree', 'escalation-coordination', '2026-08-12'],
  ['philippines-account-management-client-reporting-narrative', 'Philippines account management client reporting narrative', 'account-reporting', '2026-08-12'],
  ['philippines-account-management-crm-access-review', 'Philippines account management CRM access review', 'crm-account-maintenance', '2026-08-12'],
  ['philippines-account-management-account-communication-cadence', 'Philippines account management account communication cadence', 'account-reporting', '2026-08-12'],
  ['philippines-account-management-account-handoff-record', 'Philippines account management account handoff record', 'implementation-handoff-support', '2026-08-12'],
  ['philippines-account-management-health-signal-review', 'Philippines account management health signal review', 'account-health-monitoring', '2026-08-12'],
  ['philippines-account-management-request-intake-standard', 'Philippines account management request intake standard', 'client-request-routing', '2026-08-12'],
  ['philippines-account-management-crm-duplicate-review', 'Philippines account management CRM duplicate review', 'crm-account-maintenance', '2026-08-12'],
  ['philippines-account-management-success-plan-review', 'Philippines account management success plan review', 'account-reporting', '2026-08-12'],
  ['philippines-account-management-service-review-decision-record', 'Philippines account management service review decision record', 'customer-qbr-preparation', '2026-08-12'],
  ['philippines-account-management-commitment-aging-review', 'Philippines account management commitment aging review', 'contract-milestone-tracking', '2026-08-12'],
  ['philippines-account-management-client-risk-ownership-map', 'Philippines account management client risk ownership map', 'account-health-monitoring', '2026-08-12'],
  ['philippines-account-management-weekly-account-pulse', 'Philippines account management weekly account pulse', 'account-reporting', '2026-08-12'],
  ['philippines-account-management-client-update-approval-check', 'Philippines account management client update approval check', 'customer-feedback-administration', '2026-08-12'],
  ['philippines-account-management-account-contact-preference-record', 'Philippines account management account contact preference record', 'client-onboarding-coordination', '2026-08-12'],
  ['philippines-account-management-account-priority-segmentation', 'Philippines account management account priority segmentation', 'account-health-monitoring', '2026-08-12'],
] as const;

// August 13 is a new, family-scoped batch. Keep the date on every record so
// the loader and route metadata do not infer publication from a shared value.
const august13Topics = [
  ['philippines-account-management-client-intent-evidence-card', 'Philippines account management client intent evidence card', 'client-onboarding-coordination', '2026-08-13'],
  ['philippines-account-management-account-relationship-thread', 'Philippines account management account relationship thread', 'client-onboarding-coordination', '2026-08-13'],
  ['philippines-account-management-renewal-concern-trace', 'Philippines account management renewal concern trace', 'renewal-administration', '2026-08-13'],
  ['philippines-account-management-qbr-decision-sequence', 'Philippines account management QBR decision sequence', 'customer-qbr-preparation', '2026-08-13'],
  ['philippines-account-management-crm-context-capsule', 'Philippines account management CRM context capsule', 'crm-account-maintenance', '2026-08-13'],
  ['philippines-account-management-request-consequence-note', 'Philippines account management request consequence note', 'client-request-routing', '2026-08-13'],
  ['philippines-account-management-growth-signal-evidence', 'Philippines account management growth signal evidence', 'upsell-opportunity-tracking', '2026-08-13'],
  ['philippines-account-management-account-review-proof', 'Philippines account management account review proof', 'account-reporting', '2026-08-13'],
  ['philippines-account-management-delivery-acceptance-record', 'Philippines account management delivery acceptance record', 'contract-milestone-tracking', '2026-08-13'],
  ['philippines-account-management-feedback-context-ledger', 'Philippines account management feedback context ledger', 'customer-feedback-administration', '2026-08-13'],
  ['philippines-account-management-launch-support-bridge', 'Philippines account management launch support bridge', 'implementation-handoff-support', '2026-08-13'],
  ['philippines-account-management-escalation-decision-boundary-record', 'Philippines account management escalation decision boundary record', 'escalation-coordination', '2026-08-13'],
  ['philippines-account-management-outcome-proof-card', 'Philippines account management outcome proof card', 'account-reporting', '2026-08-13'],
  ['philippines-account-management-renewal-moment-plan', 'Philippines account management renewal moment plan', 'renewal-administration', '2026-08-13'],
  ['philippines-account-management-health-signal-record', 'Philippines account management health signal record', 'account-health-monitoring', '2026-08-13'],
  ['philippines-account-management-onboarding-outcome-check', 'Philippines account management onboarding outcome check', 'client-onboarding-coordination', '2026-08-13'],
  ['philippines-account-management-qbr-follow-through-note', 'Philippines account management QBR follow-through note', 'customer-qbr-preparation', '2026-08-13'],
  ['philippines-account-management-crm-history-evidence', 'Philippines account management CRM history evidence', 'crm-account-maintenance', '2026-08-13'],
  ['philippines-account-management-escalation-resolution-brief', 'Philippines account management escalation resolution brief', 'escalation-coordination', '2026-08-13'],
  ['philippines-account-management-portfolio-attention-record', 'Philippines account management portfolio attention record', 'account-reporting', '2026-08-13'],
  ['philippines-account-management-feedback-resolution-proof', 'Philippines account management feedback resolution proof', 'customer-feedback-administration', '2026-08-13'],
  ['philippines-account-management-commitment-prerequisite-record', 'Philippines account management commitment prerequisite record', 'contract-milestone-tracking', '2026-08-13'],
] as const;

// August 14 is a distinct batch. Each record carries its own literal
// publication date so the route and structured metadata cannot infer it.
const august14Topics = [
  ['philippines-account-management-client-priority-memo', 'Philippines account management client priority memo', 'client-onboarding-coordination', '2026-08-14'],
  ['philippines-account-management-account-context-brief', 'Philippines account management account context brief', 'account-health-monitoring', '2026-08-14'],
  ['philippines-account-management-renewal-objection-register', 'Philippines account management renewal objection register', 'renewal-administration', '2026-08-14'],
  ['philippines-account-management-qbr-outcome-sequence', 'Philippines account management QBR outcome sequence', 'customer-qbr-preparation', '2026-08-14'],
  ['philippines-account-management-crm-note-structure', 'Philippines account management CRM note structure', 'crm-account-maintenance', '2026-08-14'],
  ['philippines-account-management-request-impact-review', 'Philippines account management request impact review', 'client-request-routing', '2026-08-14'],
  ['philippines-account-management-expansion-signal-brief', 'Philippines account management expansion signal brief', 'upsell-opportunity-tracking', '2026-08-14'],
  ['philippines-account-management-account-evidence-narrative', 'Philippines account management account evidence narrative', 'account-reporting', '2026-08-14'],
  ['philippines-account-management-commitment-proof-index', 'Philippines account management commitment proof index', 'contract-milestone-tracking', '2026-08-14'],
  ['philippines-account-management-feedback-interaction-record', 'Philippines account management feedback interaction record', 'customer-feedback-administration', '2026-08-14'],
  ['philippines-account-management-post-launch-stabilization-plan', 'Philippines account management post-launch stabilization plan', 'implementation-handoff-support', '2026-08-14'],
  ['philippines-account-management-escalation-fact-pattern', 'Philippines account management escalation fact pattern', 'escalation-coordination', '2026-08-14'],
  ['philippines-account-management-value-evidence-review', 'Philippines account management value evidence review', 'account-reporting', '2026-08-14'],
  ['philippines-account-management-renewal-decision-calendar', 'Philippines account management renewal decision calendar', 'renewal-administration', '2026-08-14'],
  ['philippines-account-management-risk-threshold-guide', 'Philippines account management risk threshold guide', 'account-health-monitoring', '2026-08-14'],
  ['philippines-account-management-success-outcome-charter', 'Philippines account management success outcome charter', 'client-onboarding-coordination', '2026-08-14'],
  ['philippines-account-management-qbr-decision-brief', 'Philippines account management QBR decision brief', 'customer-qbr-preparation', '2026-08-14'],
  ['philippines-account-management-crm-history-reconstruction', 'Philippines account management CRM history reconstruction', 'crm-account-maintenance', '2026-08-14'],
  ['philippines-account-management-escalation-handoff-record', 'Philippines account management escalation handoff record', 'escalation-coordination', '2026-08-14'],
  ['philippines-account-management-portfolio-priority-review', 'Philippines account management portfolio priority review', 'account-reporting', '2026-08-14'],
  ['philippines-account-management-feedback-resolution-story', 'Philippines account management feedback resolution story', 'customer-feedback-administration', '2026-08-14'],
  ['philippines-account-management-commitment-sequence-map', 'Philippines account management commitment sequence map', 'contract-milestone-tracking', '2026-08-14'],
] as const;

// August 17 is a new batch. The literal date stays on every source tuple.
const august17Topics = [
  ['philippines-account-management-client-kickoff-decision-ledger', 'Philippines account management client kickoff decision ledger', 'client-onboarding-coordination', '2026-08-17'],
  ['philippines-account-management-account-coverage-calendar', 'Philippines account management account coverage calendar', 'account-health-monitoring', '2026-08-17'],
  ['philippines-account-management-renewal-stakeholder-question-plan', 'Philippines account management renewal stakeholder question plan', 'renewal-administration', '2026-08-17'],
  ['philippines-account-management-qbr-evidence-gap-register', 'Philippines account management QBR evidence gap register', 'customer-qbr-preparation', '2026-08-17'],
  ['philippines-account-management-crm-field-freshness-schedule', 'Philippines account management CRM field freshness schedule', 'crm-account-maintenance', '2026-08-17'],
  ['philippines-account-management-request-acknowledgement-standard', 'Philippines account management request acknowledgement standard', 'client-request-routing', '2026-08-17'],
  ['philippines-account-management-expansion-qualification-notes', 'Philippines account management expansion qualification notes', 'upsell-opportunity-tracking', '2026-08-17'],
  ['philippines-account-management-portfolio-exception-report', 'Philippines account management portfolio exception report', 'account-reporting', '2026-08-17'],
  ['philippines-account-management-milestone-acceptance-criteria', 'Philippines account management milestone acceptance criteria', 'contract-milestone-tracking', '2026-08-17'],
  ['philippines-account-management-feedback-response-owner-matrix', 'Philippines account management feedback response owner matrix', 'customer-feedback-administration', '2026-08-17'],
  ['philippines-account-management-implementation-risk-carryover', 'Philippines account management implementation risk carryover', 'implementation-handoff-support', '2026-08-17'],
  ['philippines-account-management-escalation-first-response-protocol', 'Philippines account management escalation first response protocol', 'escalation-coordination', '2026-08-17'],
  ['philippines-account-management-outcome-review-agenda', 'Philippines account management outcome review agenda', 'account-reporting', '2026-08-17'],
  ['philippines-account-management-renewal-approval-checklist', 'Philippines account management renewal approval checklist', 'renewal-administration', '2026-08-17'],
  ['philippines-account-management-health-signal-confidence-rating', 'Philippines account management health signal confidence rating', 'account-health-monitoring', '2026-08-17'],
  ['philippines-account-management-success-review-evidence-table', 'Philippines account management success review evidence table', 'customer-qbr-preparation', '2026-08-17'],
  ['philippines-account-management-qbr-action-dependency-tracker', 'Philippines account management QBR action dependency tracker', 'customer-qbr-preparation', '2026-08-17'],
  ['philippines-account-management-crm-audit-trail-note', 'Philippines account management CRM audit trail note', 'crm-account-maintenance', '2026-08-17'],
  ['philippines-account-management-escalation-closeout-memo', 'Philippines account management escalation closeout memo', 'escalation-coordination', '2026-08-17'],
  ['philippines-account-management-portfolio-capacity-review', 'Philippines account management portfolio capacity review', 'account-reporting', '2026-08-17'],
  ['philippines-account-management-feedback-recurrence-tracker', 'Philippines account management feedback recurrence tracker', 'customer-feedback-administration', '2026-08-17'],
  ['philippines-account-management-commitment-exception-register', 'Philippines account management commitment exception register', 'contract-milestone-tracking', '2026-08-17'],
] as const;

// August 18 is a separate, additive Blog batch. Every tuple carries its own
// literal date so publication metadata is bound at the record source.
const august18Topics = [
  ['philippines-account-management-client-intake-constraint-log', 'Philippines account management client intake constraint log', 'client-onboarding-coordination', '2026-08-18'],
  ['philippines-account-management-account-touch-priority-rule', 'Philippines account management account touch priority rule', 'account-health-monitoring', '2026-08-18'],
  ['philippines-account-management-renewal-evidence-ownership-grid', 'Philippines account management renewal evidence ownership grid', 'renewal-administration', '2026-08-18'],
  ['philippines-account-management-qbr-question-to-proof-map', 'Philippines account management QBR question to proof map', 'customer-qbr-preparation', '2026-08-18'],
  ['philippines-account-management-crm-stale-record-quarantine', 'Philippines account management CRM stale record quarantine', 'crm-account-maintenance', '2026-08-18'],
  ['philippines-account-management-client-request-dependency-note', 'Philippines account management client request dependency note', 'client-request-routing', '2026-08-18'],
  ['philippines-account-management-expansion-signal-interview-guide', 'Philippines account management expansion signal interview guide', 'upsell-opportunity-tracking', '2026-08-18'],
  ['philippines-account-management-portfolio-review-exception-threshold', 'Philippines account management portfolio review exception threshold', 'account-reporting', '2026-08-18'],
  ['philippines-account-management-milestone-proof-collection-plan', 'Philippines account management milestone proof collection plan', 'contract-milestone-tracking', '2026-08-18'],
  ['philippines-account-management-feedback-context-to-action-map', 'Philippines account management feedback context to action map', 'customer-feedback-administration', '2026-08-18'],
  ['philippines-account-management-implementation-acceptance-handoff', 'Philippines account management implementation acceptance handoff', 'implementation-handoff-support', '2026-08-18'],
  ['philippines-account-management-escalation-impact-intake', 'Philippines account management escalation impact intake', 'escalation-coordination', '2026-08-18'],
  ['philippines-account-management-client-outcome-baseline-review', 'Philippines account management client outcome baseline review', 'account-reporting', '2026-08-18'],
  ['philippines-account-management-renewal-decision-evidence-chain', 'Philippines account management renewal decision evidence chain', 'renewal-administration', '2026-08-18'],
  ['philippines-account-management-health-signal-source-ranking', 'Philippines account management health signal source ranking', 'account-health-monitoring', '2026-08-18'],
  ['philippines-account-management-qbr-narrative-integrity-check', 'Philippines account management QBR narrative integrity check', 'customer-qbr-preparation', '2026-08-18'],
  ['philippines-account-management-crm-owner-change-record', 'Philippines account management CRM owner change record', 'crm-account-maintenance', '2026-08-18'],
  ['philippines-account-management-escalation-transfer-brief', 'Philippines account management escalation transfer brief', 'escalation-coordination', '2026-08-18'],
  ['philippines-account-management-portfolio-review-sequencing-plan', 'Philippines account management portfolio review sequencing plan', 'account-reporting', '2026-08-18'],
  ['philippines-account-management-feedback-closure-evidence', 'Philippines account management feedback closure evidence', 'customer-feedback-administration', '2026-08-18'],
  ['philippines-account-management-commitment-change-control', 'Philippines account management commitment change control', 'contract-milestone-tracking', '2026-08-18'],
  ['philippines-account-management-client-support-workload-boundary', 'Philippines account management client support workload boundary', 'client-request-routing', '2026-08-18'],
] as const;
/*
  ['philippines-account-management-client-value-review', 'Philippines account management client value review', 'account-reporting', '2026-08-13'],
  ['philippines-account-management-service-boundary-compass', 'Philippines account management service boundary compass', 'client-onboarding-coordination', '2026-08-13'],
  ['philippines-account-management-renewal-question-register', 'Philippines account management renewal question register', 'renewal-administration', '2026-08-13'],
  ['philippines-account-management-qbr-evidence-board', 'Philippines account management QBR evidence board', 'customer-qbr-preparation', '2026-08-13'],
  ['philippines-account-management-crm-note-quality-check', 'Philippines account management CRM note quality check', 'crm-account-maintenance', '2026-08-13'],
  ['philippines-account-management-request-urgency-matrix', 'Philippines account management request urgency matrix', 'client-request-routing', '2026-08-13'],
  ['philippines-account-management-growth-signal-review', 'Philippines account management growth signal review', 'upsell-opportunity-tracking', '2026-08-13'],
  ['philippines-account-management-account-storyline-audit', 'Philippines account management account storyline audit', 'account-reporting', '2026-08-13'],
  ['philippines-account-management-delivery-proof-register', 'Philippines account management delivery proof register', 'contract-milestone-tracking', '2026-08-13'],
  ['philippines-account-management-client-voice-coding', 'Philippines account management client voice coding', 'customer-feedback-administration', '2026-08-13'],
  ['philippines-account-management-launch-to-retention-bridge', 'Philippines account management launch to retention bridge', 'implementation-handoff-support', '2026-08-13'],
  ['philippines-account-management-escalation-impact-summary', 'Philippines account management escalation impact summary', 'escalation-coordination', '2026-08-13'],
  ['philippines-account-management-outcome-definition-guide', 'Philippines account management outcome definition guide', 'account-reporting', '2026-08-13'],
  ['philippines-account-management-renewal-preparation-grid', 'Philippines account management renewal preparation grid', 'renewal-administration', '2026-08-13'],
  ['philippines-account-management-health-signal-thresholds', 'Philippines account management health signal thresholds', 'account-health-monitoring', '2026-08-13'],
  ['philippines-account-management-success-measurement-plan', 'Philippines account management success measurement plan', 'client-onboarding-coordination', '2026-08-13'],
  ['philippines-account-management-qbr-action-summary', 'Philippines account management QBR action summary', 'customer-qbr-preparation', '2026-08-13'],
  ['philippines-account-management-crm-timeline-audit', 'Philippines account management CRM timeline audit', 'crm-account-maintenance', '2026-08-13'],
  ['philippines-account-management-escalation-receipt-brief', 'Philippines account management escalation receipt brief', 'escalation-coordination', '2026-08-13'],
  ['philippines-account-management-portfolio-attention-model', 'Philippines account management portfolio attention model', 'account-reporting', '2026-08-13'],
  ['philippines-account-management-feedback-change-ledger', 'Philippines account management feedback change ledger', 'customer-feedback-administration', '2026-08-13'],
  ['philippines-account-management-commitment-dependency-chain', 'Philippines account management commitment dependency chain', 'contract-milestone-tracking', '2026-08-13'],
] as const;
*/

// Explicit source-date binding for the one frozen article whose source record
// did not previously carry its own date field.
export const dailyBlogSourceDates: Record<string, string> = {
  'philippines-account-management-client-onboarding-roles': '2026-08-10',
};

const august10BlogPosts = topics.map(([slug, title]) => ({ slug, title, excerpt: `${title}. A practical source-backed workflow for clear owners, safe access, approved client updates, and closure proof.`, minutes: 10, ...(dailyBlogSourceDates[slug] ? { published: dailyBlogSourceDates[slug] } : {}) }));
const august11BlogPosts = august11Topics.map(([slug, title, _service, published]) => ({ slug, title, published, excerpt: `${title}. A practical guide for clear account ownership, checked client records, safe access, and approved follow-through.`, minutes: 10 }));
const august13BlogPosts = august13Topics.map(([slug, title, _service, published]) => ({ slug, title, published, excerpt: `${title}. A practical guide for Philippines-based account support with clear evidence, ownership, and client follow-through.`, minutes: 10 }));
const august14BlogPosts = august14Topics.map(([slug, title, _service, published]) => ({ slug, title, published, excerpt: `${title}. A practical guide for Philippines-based account support with clear evidence, ownership, and client follow-through.`, minutes: 10 }));
const august17BlogPosts = august17Topics.map(([slug, title, _service, published]) => ({ slug, title, published, excerpt: `${title}. A practical guide for Philippines-based account support with clear evidence, ownership, and client follow-through.`, minutes: 10 }));
const august18BlogPosts = august18Topics.map(([slug, title, _service, published]) => ({ slug, title, published, excerpt: `${title}. A practical guide for Philippines-based account support with clear evidence, ownership, and client follow-through.`, minutes: 11 }));
export const dailyBlogPosts = [...august18BlogPosts, ...august17BlogPosts, ...august14BlogPosts, ...august13BlogPosts, ...august11BlogPosts, ...august10BlogPosts];
const source = { name: 'NIST Cybersecurity Framework 2.0', date: 'February 26, 2024', url: 'https://www.nist.gov/publications/cybersecurity-framework-csf-20', note: 'Provides a current governance vocabulary for identifying, protecting, detecting, responding, and recovering.' };

function article(slug: string, title: string, service: string, published = dailyBlogPosts.find((post) => post.slug === slug)?.published || '2026-08-10'): RichArticle {
  const lower = title.toLowerCase();
  return {
    title, description: `A practical guide to ${lower} for teams using Philippines-based account support, with evidence, approval boundaries, and a dated client update.`, published, updated: published, readMinutes: 10,
    intro: [`${title} should begin with one approved account record, not memory. A Philippines-based account manager can gather facts, update assigned fields, prepare drafts, and route decisions while the accountable owner retains authority for unusual or commercial choices.`, 'Use the same control loop for each account: capture the source, separate routine work from authority, check the record, and leave a clear next update.'],
    takeawaysTitle: 'The short version', takeaways: ['Start with a named source, time window, and minimum fields.', 'Separate the work owner from the decision owner.', 'Use task-matched access and preserve closure proof.', 'End with an approved, dated client update.'],
    sections: [
      { heading: 'Start with evidence', paragraphs: [`Open ${lower} from the approved account record. Capture the account, source link, checked date, current state, client effect, and the question that still needs an owner.`, 'Treat missing proof as an open item. Keep client wording intact when it changes the meaning of the work.'] },
      { heading: 'Define the authority boundary', paragraphs: ['The support role may prepare records, update assigned fields, remind owners, and draft approved wording. Contract changes, discounts, refunds, legal statements, security exceptions, broad access, and out-of-scope work remain with the named owner.', 'Write the boundary beside each task so a reviewer can see whether the next step is prepare, send after approval, or escalate.'] },
      { heading: 'Run the review loop', paragraphs: ['Check source, status, owner, due date, client effect, and closure proof in the same order every time. If a record is stale or disputed, route the gap instead of hiding it in a green summary.', 'A dated next check keeps routine account support moving without turning a support role into an unrestricted operator.'] },
      { heading: 'Protect the account record', paragraphs: ['Use named accounts, approved systems, least-privilege access, and controlled links. Do not export client data to an unapproved location or put private notes in a client-facing update.', 'Record the source name, date, URL, and exact point it supports. Keep corrections visible so the next reviewer can tell which version controls.'] },
      { heading: 'Close with an approved update', paragraphs: ['A useful result states what changed, what remains open, who can decide, the next client update, and the proof required to close the item.', 'Compare the draft with the source and approval record before sending. Save the sent update link back to the account record and schedule the next review.'] },
    ],
    banners: [
      { label: 'Workflow checkpoint', title: 'Turn the guide into a checked workflow', body: 'Map the source, work owner, decision owner, review cadence, and approval limits.', href: `/services/${service}`, link: 'See related account support' },
      { label: 'Midpoint check', title: 'Keep the next update visible', body: 'Use one dated client update and one closure rule for every open item.', href: '/services/account-reporting', link: 'See account reporting support' },
      { label: 'Ready to scope the routine?', title: 'Build a practical support lane', body: 'Start with a limited queue, controlled access, and owner review.', href: '/contact-us', link: 'Contact Us' },
    ],
    table: { caption: `${title} control fields`, headers: ['Field', 'Minimum evidence', 'Owner check'], rows: [['Source', 'Link, date, exact fact', 'Can another person reproduce it?'], ['Status', 'Current state and checked time', 'Does it match the source?'], ['Authority', 'Work owner and decision owner', 'Is approval scope explicit?'], ['Next update', 'Date, channel, expected proof', 'Will the client know what happens next?']] },
    chart: [{ label: 'Source', value: 100, color: '#e8c98e' }, { label: 'Owner', value: 75, color: '#b9dfce' }, { label: 'Next check', value: 50, color: '#ffd9ce' }],
    chartMeta: { title: `${title} review path`, desc: 'A process visual shows the source record, owner review, and next check.', heading: 'A visible control path', method: 'This is a process aid, not a performance metric. Each item still needs a dated source and accountable owner.' },
    graphic: { title: `${title} three-step path`, desc: 'A process graphic moves from source facts to owner review and an approved next update.', heading: 'Record, review, update', steps: [{ title: '1  Record', line1: 'Source facts,', line2: 'date, status', color: '#e8c98e' }, { title: '2  Review', line1: 'Owner limits,', line2: 'open decision', color: '#b9dfce' }, { title: '3  Update', line1: 'Approved note,', line2: 'next check', color: '#ffd9ce' }], caption: 'The support role prepares and records the work. The accountable owner confirms choices, and the client receives the approved next update.' },
    quote: { text: 'The security goal that generates the requirement for actions of an entity to be traced uniquely to that entity.', source: 'NIST accountability glossary', url: 'https://csrc.nist.gov/glossary/term/accountability' },
    script: [`We checked ${lower} against [source record] on [date]. The confirmed state is [fact], and the open decision is [decision].`, `[Work owner] will prepare [approved work]. [Decision owner] will confirm [boundary]. Your next update will arrive through [channel] by [date and time].`],
    faqs: [{ q: `What is the first step in ${lower}?`, a: 'Define the source record, minimum fields, work owner, decision owner, and next review date.' }, { q: 'What should the account manager not decide?', a: 'The role should not independently change contracts, approve money movement or refunds, make legal or security judgments, administer broad access, or promise work outside scope.' }, { q: 'When is the record complete?', a: 'It is complete when the source, date, current state, owner, next action, approved update, and closure proof are recorded.' }], faqTitle: `Questions about ${lower}`, sources: [source],
  };
}

const august13Angles: Record<string, string> = {
  'philippines-account-management-stakeholder-intent-brief': 'turn stakeholder comments into a checked account brief without confusing preference with an approved outcome',
  'philippines-account-management-account-scope-check': 'test whether current account work still fits the agreed service boundary and owner authority',
  'philippines-account-management-renewal-commitment-audit': 'trace renewal promises from source wording to current evidence and accountable follow-up',
  'philippines-account-management-qbr-decision-prep': 'prepare a quarterly review around decisions the client and owner can actually make',
  'philippines-account-management-crm-note-context-guide': 'write CRM notes that preserve context, client effect, source, and the next accountable action',
  'philippines-account-management-client-queue-aging-review': 'separate waiting time caused by the client, the team, or an unresolved decision',
  'philippines-account-management-expansion-readiness-brief': 'test whether a growth conversation has a real client signal and an approved next step',
  'philippines-account-management-account-narrative-brief': 'build an account narrative that keeps observations, interpretation, and open questions separate',
  'philippines-account-management-deliverable-acceptance-log': 'record what the client agreed was delivered and what evidence supports that acceptance',
  'philippines-account-management-feedback-evidence-summary': 'summarize feedback with source wording, context, frequency, and a named response owner',
  'philippines-account-management-implementation-ownership-map': 'carry responsibilities from implementation into ongoing account support without losing open work',
  'philippines-account-management-escalation-fact-sheet': 'give an escalation owner a concise record of impact, evidence, authority, and response timing',
  'philippines-account-management-outcome-proof-review': 'check whether reported account outcomes have evidence that another reviewer can reproduce',
  'philippines-account-management-renewal-stakeholder-calendar': 'place renewal conversations, approvals, evidence checks, and client updates on one usable calendar',
  'philippines-account-management-risk-owner-review': 'review risk labels against dated observations and the person authorized to act',
  'philippines-account-management-success-outcome-brief': 'make a client success discussion concrete with agreed outcomes, proof, dependencies, and owners',
  'philippines-account-management-qbr-decision-recap': 'turn a quarterly review into a factual record of decisions, owners, dates, and unresolved questions',
  'philippines-account-management-crm-field-source-check': 'verify that important CRM fields have a current source and a clear reason to be trusted',
  'philippines-account-management-escalation-owner-handoff': 'move an issue between teams with the client impact, current facts, and decision boundary intact',
  'philippines-account-management-portfolio-context-review': 'compare account conditions consistently while retaining the context that changes each next action',
  'philippines-account-management-feedback-closure-review': 'confirm what changed after feedback and leave unresolved client concerns visible',
  'philippines-account-management-dependency-owner-map': 'name the prerequisite, blocked decision, owner, and next check behind a client commitment',
};

const august13DistinctiveNotes: Record<string, string> = {
  'philippines-account-management-client-value-review': 'Define value in the client\'s agreed terms, then connect each conclusion to a source and review date.',
  'philippines-account-management-service-boundary-compass': 'Show which requests fit the written service boundary and which require an accountable owner\'s decision.',
  'philippines-account-management-renewal-question-register': 'Keep unanswered renewal questions visible with their source, consequence, owner, and next check.',
  'philippines-account-management-qbr-evidence-board': 'Put each quarterly discussion point beside the evidence and decision the meeting needs.',
  'philippines-account-management-crm-note-quality-check': 'Check whether a note preserves context, source, client effect, and a usable follow-up.',
  'philippines-account-management-request-urgency-matrix': 'Rank requests by client consequence and dependency rather than by who asks most loudly.',
  'philippines-account-management-growth-signal-review': 'Treat interest as a signal to investigate, not as approval for a commercial promise.',
  'philippines-account-management-account-storyline-audit': 'Separate dated observations from interpretations so a polished narrative stays defensible.',
  'philippines-account-management-delivery-proof-register': 'Record the acceptance test, evidence, client response, and remaining exception for each delivery.',
  'philippines-account-management-client-voice-coding': 'Preserve the setting and exact meaning of feedback before grouping it into a theme.',
  'philippines-account-management-launch-to-retention-bridge': 'Make the handoff explicit where launch ownership becomes recurring account ownership.',
  'philippines-account-management-escalation-impact-summary': 'Lead with the client consequence, then give the decision owner the facts and deadline.',
  'philippines-account-management-outcome-definition-guide': 'State what success means before selecting activity or reporting measures.',
  'philippines-account-management-renewal-preparation-grid': 'Give every renewal moment a purpose, owner, evidence need, and follow-up date.',
  'philippines-account-management-health-signal-thresholds': 'Set thresholds that match observable evidence and define what changes the risk label.',
  'philippines-account-management-success-measurement-plan': 'Turn an agreed outcome into proof, ownership, review timing, and a client-safe update.',
  'philippines-account-management-qbr-action-summary': 'Write the recap so an absent stakeholder can distinguish decisions, actions, and open questions.',
  'philippines-account-management-crm-timeline-audit': 'Reconstruct a timeline from dated records while marking gaps instead of filling them with guesses.',
  'philippines-account-management-escalation-receipt-brief': 'Give the receiving owner a complete fact pattern and the authority boundary for the next reply.',
  'philippines-account-management-portfolio-attention-model': 'Use common comparison fields while retaining the account-specific reason behind attention.',
  'philippines-account-management-feedback-change-ledger': 'Trace feedback from the original comment to verified change and any remaining client concern.',
  'philippines-account-management-commitment-dependency-chain': 'Name each prerequisite, blocker, owner, and check date behind a client commitment.',
};

const august13NewAngles: Record<string, string> = {
  'philippines-account-management-client-intent-register': 'capture stakeholder intent with context, priority, evidence, and the question that still needs confirmation',
  'philippines-account-management-account-relationship-map': 'make account relationships visible so communication and ownership do not depend on memory',
  'philippines-account-management-renewal-risk-questionnaire': 'surface renewal risk through specific questions, dated evidence, and accountable follow-up',
  'philippines-account-management-qbr-priority-sequence': 'order quarterly review topics by client consequence, evidence, and decision value',
  'philippines-account-management-crm-account-summary-standard': 'keep an account summary useful by separating current facts, context, risks, and next actions',
  'philippines-account-management-request-decision-lane': 'route account requests by consequence and authority before a response is promised',
  'philippines-account-management-growth-conversation-signal': 'evaluate growth conversation signals while keeping commercial commitments with the authorized owner',
  'philippines-account-management-account-review-narrative': 'build an account review narrative that traces each conclusion to a dated source',
  'philippines-account-management-deliverable-confirmation-record': 'confirm delivered work through an agreed test, client response, exception, and owner',
  'philippines-account-management-feedback-context-summary': 'summarize feedback without removing the setting that determines what the comment means',
  'philippines-account-management-launch-support-handoff': 'carry launch responsibilities into support with open risks, owners, and a clear next review',
  'philippines-account-management-escalation-response-brief': 'give an escalation responder the client effect, verified facts, authority limit, and reply timing',
  'philippines-account-management-outcome-evidence-map': 'connect agreed outcomes to credible proof, dependencies, and the person who reviews the result',
  'philippines-account-management-renewal-readiness-review': 'check renewal readiness across evidence, stakeholders, open decisions, and client communication',
  'philippines-account-management-health-signal-evidence-log': 'tie account-health signals to observations, thresholds, owners, and the next check',
  'philippines-account-management-success-outcome-review': 'review client success against shared outcomes rather than activity volume or optimistic language',
  'philippines-account-management-qbr-followup-register': 'preserve quarterly review follow-up as decisions, actions, owners, dates, and open questions',
  'philippines-account-management-crm-history-source-map': 'reconstruct account history by linking important timeline entries to their controlling sources',
  'philippines-account-management-escalation-resolution-record': 'record the escalation decision with evidence, authority, client impact, and remaining work',
  'philippines-account-management-portfolio-attention-review': 'compare portfolio attention needs consistently while retaining the reason behind each account action',
  'philippines-account-management-feedback-response-register': 'trace feedback from the original comment through response, verification, and remaining concern',
  'philippines-account-management-commitment-prerequisite-map': 'show the prerequisites, owners, approvals, and confirmation points behind a commitment',
};

const august13CandidateAngles: Record<string, string> = {
  'philippines-account-management-stakeholder-priority-brief': 'turn stakeholder comments into a concise brief that preserves priority, context, and the next question',
  'philippines-account-management-account-context-sheet': 'give a reviewer the current account story, evidence, relationships, and open decisions in one place',
  'philippines-account-management-renewal-objection-log': 'record renewal objections with their source, business effect, response owner, and unresolved risk',
  'philippines-account-management-qbr-outcome-ladder': 'connect a quarterly review from client ambition to evidence, decision, and next measurable step',
  'philippines-account-management-crm-note-taxonomy': 'make CRM notes easier to scan by separating context, outcome, risk, decision, and follow-up',
  'philippines-account-management-request-impact-brief': 'explain the client effect of a request before a team assigns urgency or promises a response',
  'philippines-account-management-expansion-readiness-conversation': 'assess whether a growth conversation has a real client signal and an approved next step',
  'philippines-account-management-account-evidence-narrative': 'tell the account story with dated evidence instead of a list of disconnected activities',
  'philippines-account-management-commitment-proof-index': 'link each service commitment to its source wording, owner, status, and completion proof',
  'philippines-account-management-feedback-interaction-record': 'capture what a client said, what was understood, and what follow-up was actually agreed',
  'philippines-account-management-post-launch-stabilization-plan': 'make the first support period after launch clear through owners, open risks, and review points',
  'philippines-account-management-escalation-fact-pattern': 'organize an escalation around confirmed facts, client consequence, decision needed, and deadline',
  'philippines-account-management-value-evidence-review': 'review client value using agreed outcomes and credible evidence rather than activity volume',
  'philippines-account-management-renewal-decision-calendar': 'place stakeholder conversations, evidence checks, approvals, and updates on a renewal timeline',
  'philippines-account-management-risk-threshold-guide': 'set practical thresholds for when an account signal needs attention, evidence, or escalation',
  'philippines-account-management-success-outcome-charter': 'turn a success discussion into shared outcomes, ownership, evidence, and review dates',
  'philippines-account-management-qbr-decision-brief': 'give leaders a compact quarterly review brief that makes decisions and their consequences visible',
  'philippines-account-management-crm-history-reconstruction': 'rebuild a reliable account timeline from scattered records without presenting guesses as facts',
  'philippines-account-management-escalation-handoff-record': 'help the receiving owner act on an escalation with context, authority limits, and a client-safe update',
  'philippines-account-management-portfolio-priority-review': 'compare account priorities consistently while retaining the context that makes each decision defensible',
  'philippines-account-management-feedback-resolution-story': 'show the path from client feedback to verified change, remaining gap, and next communication',
  'philippines-account-management-commitment-sequence-map': 'show how a commitment moves from request through dependency, approval, delivery, and confirmation',
};

const august13ReplacementAngles: Record<string, string> = {
  'philippines-account-management-client-value-review': 'review client value by connecting agreed outcomes to dated evidence and the next owner decision',
  'philippines-account-management-service-boundary-compass': 'test requests against the written account boundary before work is accepted or promised',
  'philippines-account-management-renewal-question-register': 'turn unresolved renewal questions into owned, dated follow-up rather than optimistic status',
  'philippines-account-management-qbr-evidence-board': 'prepare a quarterly business review around evidence, decisions, and consequences',
  'philippines-account-management-crm-note-quality-check': 'inspect whether CRM notes give the next reviewer enough context to act safely',
  'philippines-account-management-request-urgency-matrix': 'classify account requests by client impact, dependency, authority, and response need',
  'philippines-account-management-growth-signal-review': 'evaluate a possible expansion signal without turning interest into an unsupported commitment',
  'philippines-account-management-account-storyline-audit': 'audit an account narrative so each conclusion can be traced to current evidence',
  'philippines-account-management-delivery-proof-register': 'link delivered work to its acceptance evidence, owner, exception, and client communication',
  'philippines-account-management-client-voice-coding': 'organize client feedback without stripping away the context that determines its meaning',
  'philippines-account-management-launch-to-retention-bridge': 'carry open implementation responsibilities into ongoing account support with a clear handoff',
  'philippines-account-management-escalation-impact-summary': 'summarize an escalation around client effect, verified facts, decision needed, and timing',
  'philippines-account-management-outcome-definition-guide': 'define account outcomes clearly enough that both sides can recognize credible proof',
  'philippines-account-management-renewal-preparation-grid': 'coordinate renewal preparation through stakeholder moments, evidence checks, and approvals',
  'philippines-account-management-health-signal-thresholds': 'set account-health thresholds that make evidence, ownership, and escalation proportional',
  'philippines-account-management-success-measurement-plan': 'build a success measurement plan that joins client outcomes to proof and review dates',
  'philippines-account-management-qbr-action-summary': 'turn quarterly review discussion into a precise record of decisions, owners, and next checks',
  'philippines-account-management-crm-timeline-audit': 'rebuild account history from scattered CRM records while keeping uncertainty visible',
  'philippines-account-management-escalation-receipt-brief': 'help an escalation recipient understand the issue, authority limit, client effect, and first reply',
  'philippines-account-management-portfolio-attention-model': 'compare portfolio attention needs consistently without erasing account-specific context',
  'philippines-account-management-feedback-change-ledger': 'show the path from client feedback to verified change and an honest remaining-gap record',
  'philippines-account-management-commitment-dependency-chain': 'map how a commitment moves through prerequisites, approval, delivery, and confirmation',
};

/* Legacy August 13 identities are intentionally absent from this successor. */
/*
  'philippines-account-management-stakeholder-intent-brief': 'Separate a stakeholder request, a confirmed requirement, and an assumption that still needs checking.',
  'philippines-account-management-account-scope-check': 'Compare the current queue with the written scope before accepting work that changes the account owner\'s obligations.',
  'philippines-account-management-renewal-commitment-audit': 'Read the original promise beside the latest delivery evidence so a hopeful status does not become a renewal fact.',
  'philippines-account-management-qbr-decision-prep': 'List the decision needed from the meeting before collecting slides or activity summaries.',
  'philippines-account-management-crm-note-context-guide': 'A useful note lets the next reviewer understand why the action matters without reopening every conversation.',
  'philippines-account-management-client-queue-aging-review': 'Age each request from its received time and record why it is waiting instead of treating all old items as team delay.',
  'philippines-account-management-expansion-readiness-brief': 'A client mentioning a new need is a signal to investigate, not permission to promise a new service.',
  'philippines-account-management-account-narrative-brief': 'Keep the sentence that describes the account separate from the sentence that recommends what the owner should do.',
  'philippines-account-management-deliverable-acceptance-log': 'Acceptance should name the delivered item, the agreed test, the client response, and any remaining exception.',
  'philippines-account-management-feedback-evidence-summary': 'Preserve the setting around feedback because the same words can describe a one-off problem or a repeated pattern.',
  'philippines-account-management-implementation-ownership-map': 'Show the exact point where implementation responsibility ends and account responsibility begins.',
  'philippines-account-management-escalation-fact-sheet': 'Put the client consequence near the top so the decision owner can act without sorting through internal commentary.',
  'philippines-account-management-outcome-proof-review': 'A reported result needs a source and a definition of done, not just a favorable sentence in a status report.',
  'philippines-account-management-renewal-stakeholder-calendar': 'Give each stakeholder moment a purpose, owner, preparation date, and follow-up record.',
  'philippines-account-management-risk-owner-review': 'A risk label should change when its evidence changes, and the record should show who made that call.',
  'philippines-account-management-success-outcome-brief': 'Start the conversation with the outcome the client agreed to review, then identify the proof that would satisfy it.',
  'philippines-account-management-qbr-decision-recap': 'Write the recap for someone who missed the meeting and needs to know what was decided and what was not.',
  'philippines-account-management-crm-field-source-check': 'Fields that drive reports or follow-up deserve a named source, a freshness expectation, and an owner for correction.',
  'philippines-account-management-escalation-owner-handoff': 'The receiving team needs the current fact pattern and authority boundary, not a longer version of the original complaint.',
  'philippines-account-management-portfolio-context-review': 'Use shared comparison fields for the portfolio, then retain the account-specific reason behind each next action.',
  'philippines-account-management-feedback-closure-review': 'Closure means recording the response and its effect, not merely marking the feedback item as answered.',
  'philippines-account-management-dependency-owner-map': 'Name the dependency that blocks the commitment, the person who can unblock it, and the next time to check.',
};

const august13ReplacementAngles: Record<string, string> = {
  'philippines-account-management-stakeholder-priority-brief': 'turn stakeholder comments into a concise brief that preserves priority, context, and the next question',
  'philippines-account-management-account-context-sheet': 'give a reviewer the current account story, evidence, relationships, and open decisions in one place',
  'philippines-account-management-renewal-objection-log': 'record renewal objections with their source, business effect, response owner, and unresolved risk',
  'philippines-account-management-qbr-outcome-ladder': 'connect a quarterly review from client ambition to evidence, decision, and next measurable step',
  'philippines-account-management-crm-note-taxonomy': 'make CRM notes easier to scan by separating context, outcome, risk, decision, and follow-up',
  'philippines-account-management-request-impact-brief': 'explain the client effect of a request before a team assigns urgency or promises a response',
  'philippines-account-management-expansion-readiness-conversation': 'assess whether a growth conversation has a real client signal and an approved next step',
  'philippines-account-management-account-evidence-narrative': 'tell the account story with dated evidence instead of a list of disconnected activities',
  'philippines-account-management-commitment-proof-index': 'link each service commitment to its source wording, owner, status, and completion proof',
  'philippines-account-management-feedback-interaction-record': 'capture what a client said, what was understood, and what follow-up was actually agreed',
  'philippines-account-management-post-launch-stabilization-plan': 'make the first support period after launch clear through owners, open risks, and review points',
  'philippines-account-management-escalation-fact-pattern': 'organize an escalation around confirmed facts, client consequence, decision needed, and deadline',
  'philippines-account-management-value-evidence-review': 'review client value using agreed outcomes and credible evidence rather than activity volume',
  'philippines-account-management-renewal-decision-calendar': 'place stakeholder conversations, evidence checks, approvals, and updates on a renewal timeline',
  'philippines-account-management-risk-threshold-guide': 'set practical thresholds for when an account signal needs attention, evidence, or escalation',
  'philippines-account-management-success-outcome-charter': 'turn a success discussion into shared outcomes, ownership, evidence, and review dates',
  'philippines-account-management-qbr-decision-brief': 'give leaders a compact quarterly review brief that makes decisions and their consequences visible',
  'philippines-account-management-crm-history-reconstruction': 'rebuild a reliable account timeline from scattered records without presenting guesses as facts',
  'philippines-account-management-escalation-handoff-record': 'help the receiving owner act on an escalation with context, authority limits, and a client-safe update',
  'philippines-account-management-portfolio-priority-review': 'compare account priorities consistently while retaining the context that makes each decision defensible',
  'philippines-account-management-feedback-resolution-story': 'show the path from client feedback to verified change, remaining gap, and next communication',
  'philippines-account-management-commitment-sequence-map': 'show how a commitment moves from request through dependency, approval, delivery, and confirmation',
};
*/

function august13Article(slug: string, title: string, service: string, published: string): RichArticle {
  const base = article(slug, title, service, published);
  const angle = august13NewAngles[slug] || august13CandidateAngles[slug] || august13ReplacementAngles[slug] || august13Angles[slug] || `use ${title.toLowerCase()} to connect dated evidence, accountable ownership, and a clear client-safe next step`;
  const distinctiveNote = august13DistinctiveNotes[slug] || 'Keep the source, owner, decision boundary, and next client-safe update together in the account record.';
  return {
    ...base,
    description: `${title}: ${angle}, with practical controls for Philippines-based account support.`,
    intro: [`${title} works best when teams ${angle}. This guide is written for US teams working with Philippines-based account support and keeps the accountable owner close to every consequential choice.`, distinctiveNote, 'Use the examples as a working record: name the client fact, show the source, identify the work owner, and state the next client-safe update.'],
    sections: [
      { heading: 'Define the account question', paragraphs: [`Start by stating how to ${angle}. Write the client, time period, decision or outcome under review, and the source records that can confirm it.`, distinctiveNote, 'A short account brief prevents a familiar label from becoming a conclusion. Keep the client\'s wording beside the team\'s interpretation when the difference matters.'] },
      { heading: 'Separate evidence from interpretation', paragraphs: [`For this topic, collect evidence that shows whether the intended result is present: dated client messages, approved records, completed work, or a named dependency. Do not substitute activity for proof simply because activity is easier to count.`, 'If the evidence is incomplete, mark the gap and route it to the person who can resolve it. A Philippines-based account manager can assemble the record and prepare the next step without claiming authority to change a commitment.'] },
      { heading: 'Assign work and authority', paragraphs: [`Give each follow-up one work owner and, when needed, a separate decision owner. The work owner may organize records, prepare a draft, and coordinate an update; the decision owner handles contracts, credits, refunds, legal wording, security exceptions, broad access, and out-of-scope promises.`, 'Write the boundary directly in the record so urgency does not silently turn preparation into approval.'] },
      { heading: 'Make the client update useful', paragraphs: [`A client update should say what was checked, what is confirmed, what remains open, and when the next answer will arrive. For a record about how to ${angle}, include the evidence or link that lets the recipient understand the conclusion.`, 'Remove internal guesses and private commentary from the client version. Preserve them only in the controlled internal record when they are necessary for the decision owner.'] },
      { heading: 'Close with proof', paragraphs: [`Close the item only when the stated result, source record, owner action, and client-facing update agree. If the result is partial, leave the remaining work visible and give it a new owner and date.`, 'Review the finished record at the next account check. Repeated gaps usually point to a missing field, unclear handoff, or approval boundary that should be made explicit.'] },
    ],
  };
}

function august14Article(slug: string, title: string, service: string, published: string): RichArticle {
  const base = article(slug, title, service, published);
  const subject = title.toLowerCase();
  return {
    ...base,
    description: `${title}: a practical guide to ${subject} with source discipline, clear ownership, and a client-safe next step.`,
    intro: [
      `${title} gives account teams a way to make ${subject} useful without relying on memory or optimistic status. A Philippines-based account manager can assemble the record, identify missing evidence, and prepare follow-up while the accountable owner retains authority for consequential decisions.`,
      'The useful unit is a checked account fact: what happened, where it came from, who owns the next action, and when the client should receive an approved update.',
    ],
    takeaways: ['Name the account question before collecting activity.', 'Link conclusions to dated, reviewable evidence.', 'Keep work ownership separate from decision authority.', 'Close with an approved update and visible remaining work.'],
    sections: [
      { heading: 'Frame the account question', paragraphs: [`Start ${subject} with the account, time window, intended outcome, and decision still open. A narrow question lets a reviewer distinguish a current fact from a familiar label.`, 'Keep client wording, internal interpretation, and unresolved assumption in separate fields so a later update does not accidentally promote an assumption to fact.'] },
      { heading: 'Build an evidence trail', paragraphs: [`Collect the source records that answer the question behind ${subject}: dated messages, approved notes, delivery evidence, meeting decisions, or a named dependency. Record the source, checked date, and exact point it supports.`, 'If the trail is incomplete, mark the gap plainly. A support specialist may reconcile records and prepare a draft, but should not invent a result or silently change a commitment.'] },
      { heading: 'Assign the right authority', paragraphs: ['Give routine preparation a work owner and consequential choices a decision owner. Contracts, credits, refunds, legal wording, security exceptions, broad access, and out-of-scope promises stay with the authorized owner.', 'Write the boundary beside the next action. This prevents urgency, client pressure, or a polished summary from becoming accidental approval.'] },
      { heading: 'Prepare the client-safe next step', paragraphs: ['The next update should state what was checked, what is confirmed, what remains open, and when the next answer is expected. Include only approved client-facing wording and a source or reference that supports the conclusion.', 'Route disputed or sensitive details to the accountable owner before sending. Keep private commentary and unresolved hypotheses out of the client version.'] },
      { heading: 'Close honestly', paragraphs: [`Close ${subject} only when the account record, owner action, and client update agree. If the result is partial, keep the remaining item open with a named owner and date.`, 'At the next account review, check whether the evidence is still current. Repeated gaps usually indicate a missing field, unclear handoff, or authority boundary that needs clarification.'] },
    ],
  };
}

const august17Angles: Record<string, { question: string; practice: string; detail: string }> = {
  'philippines-account-management-client-kickoff-decision-ledger': { question: 'Which kickoff decisions are confirmed, pending, or outside the support role?', practice: 'keep client intent, decision wording, owner, and due date in separate ledger rows', detail: 'A kickoff ledger is useful when the client changes a launch date or asks for a new responsibility. Preserve the original request beside the approved answer so the handoff does not rely on a meeting memory.' },
  'philippines-account-management-account-coverage-calendar': { question: 'Which accounts need a planned touch, and why now?', practice: 'schedule touches from renewal dates, open work, risk signals, and last approved contact', detail: 'The calendar should show the reason for a touch, not just a recurring weekday. An account with an unanswered security question needs a different owner and approval path from one waiting for a routine check-in.' },
  'philippines-account-management-renewal-stakeholder-question-plan': { question: 'What must each renewal stakeholder answer before a recommendation is ready?', practice: 'assign each question to a stakeholder, source, decision owner, and follow-up date', detail: 'A renewal question plan prevents the account team from treating silence as agreement. Keep commercial terms and contract interpretation with the authorized owner while support staff prepare the evidence.' },
  'philippines-account-management-qbr-evidence-gap-register': { question: 'Which QBR claims lack enough evidence for a client or owner decision?', practice: 'log the claim, missing proof, source to check, owner, consequence, and next review', detail: 'An evidence gap is not a failed result. It is a visible limit on what the review can say. The register lets the presenter replace a vague success statement with a precise open question.' },
  'philippines-account-management-crm-field-freshness-schedule': { question: 'How often should each CRM field be checked before it drives follow-up or reporting?', practice: 'give important fields a source, freshness expectation, correction owner, and review trigger', detail: 'A last-contact field may need attention after a meeting, while a contract milestone may change only after an approved record. Use the field purpose to set the check, rather than applying one blanket cadence.' },
  'philippines-account-management-request-acknowledgement-standard': { question: 'What should a client hear after a request arrives but before a solution is approved?', practice: 'acknowledge receipt, restate the request, name the next check, and avoid promising an outcome', detail: 'A good acknowledgement reduces uncertainty without creating an accidental commitment. It gives the client a reliable next communication while the team checks scope, authority, and dependencies.' },
  'philippines-account-management-expansion-qualification-notes': { question: 'Does a new client need describe a real expansion signal or only a passing idea?', practice: 'record the observed need, business context, evidence, questions, and authorized next step', detail: 'Qualification notes protect the relationship from premature selling language. A support specialist can capture the client signal and arrange the conversation; the commercial owner decides what can be offered.' },
  'philippines-account-management-portfolio-exception-report': { question: 'Which accounts differ from the normal operating pattern enough to need review?', practice: 'report exceptions with baseline, observed change, client effect, owner, and decision needed', detail: 'An exception report should not turn every unusual account into a crisis. It gives the reviewer a comparison point and explains why this item deserves attention now.' },
  'philippines-account-management-milestone-acceptance-criteria': { question: 'What evidence lets the account team say a milestone is accepted?', practice: 'define the agreed output, test or review, acceptance owner, exception path, and record of response', detail: 'Acceptance criteria stop a delivered file or completed task from becoming a success claim by default. The client response and any remaining exception belong beside the milestone record.' },
  'philippines-account-management-feedback-response-owner-matrix': { question: 'Who owns the response when feedback crosses service, product, commercial, or relationship concerns?', practice: 'map feedback types to a preparation owner, decision owner, response channel, and escalation route', detail: 'The matrix is a routing aid, not a promise that every comment receives the same treatment. Keep the client wording and context available before assigning a theme or response.' },
  'philippines-account-management-implementation-risk-carryover': { question: 'Which implementation risks remain relevant after recurring account support begins?', practice: 'carry each open risk with its source, current effect, owner, mitigation, and review date', detail: 'Risks disappear from view when the project closes its tracker. A carryover record gives the account manager a bounded list of what still affects the client and what has genuinely been closed.' },
  'philippines-account-management-escalation-first-response-protocol': { question: 'What can the first responder confirm without making the final decision?', practice: 'acknowledge impact, preserve facts, state the next check, and route authority-sensitive questions', detail: 'The first response should calm the handoff, not settle a contract, refund, legal, or security issue. Record what the responder verified and what the decision owner still must determine.' },
  'philippines-account-management-outcome-review-agenda': { question: 'Which client outcomes deserve review, and what decision should each agenda item produce?', practice: 'build the agenda from agreed outcomes, proof, variance, open decision, and next owner action', detail: 'An outcome agenda keeps the meeting from becoming a tour of completed tasks. Put the question and evidence beside each item so attendees know what the discussion is for.' },
  'philippines-account-management-renewal-approval-checklist': { question: 'What must be checked before a renewal recommendation reaches the authorized approver?', practice: 'check scope, delivery evidence, open commitments, stakeholder concerns, terms, and approval status', detail: 'A checklist can organize a recommendation but cannot approve it. Keep the evidence pack distinct from the commercial decision and record the approver who made the final call.' },
  'philippines-account-management-health-signal-confidence-rating': { question: 'How much confidence should a team place in an account-health signal?', practice: 'rate confidence from source quality, freshness, corroboration, and unresolved context', detail: 'Confidence is about the evidence behind a signal, not a substitute for account judgment. A recent client statement may be strong evidence of concern while still needing context about scope or timing.' },
  'philippines-account-management-success-review-evidence-table': { question: 'Can a reviewer trace each success statement to an agreed outcome and credible proof?', practice: 'place outcome, definition, source, period, limitation, and owner comment in one table', detail: 'The table makes a gap easier to discuss. If an outcome lacks a source or agreed definition, label that limitation instead of filling the row with activity counts.' },
  'philippines-account-management-qbr-action-dependency-tracker': { question: 'What must happen before a QBR action can be completed?', practice: 'link each action to its prerequisite, owner, decision gate, check date, and client update', detail: 'A dependency tracker explains why an action is waiting. It also stops the account manager from chasing the wrong person when the real blocker is an owner decision or missing client input.' },
  'philippines-account-management-crm-audit-trail-note': { question: 'What changed in the account record, why, and which source supports the change?', practice: 'write concise audit notes with before state, change, actor, source, approval, and time', detail: 'An audit note is different from a long narrative. It should help the next reviewer understand the record change and find the controlling source without exposing private commentary in a client update.' },
  'philippines-account-management-escalation-closeout-memo': { question: 'What proves an escalation is resolved, and what remains outside the close decision?', practice: 'summarize impact, decision, action taken, client communication, residual risk, and owner', detail: 'Closeout should not mean that the inbox is quiet. Keep any residual risk visible and state whether the client accepted the response, whether more work is due, or whether the matter was transferred.' },
  'philippines-account-management-portfolio-capacity-review': { question: 'Can the current account workload be supported without dropping required follow-up?', practice: 'compare account commitments, touch requirements, open risks, dependencies, and available owner time', detail: 'Capacity review is about tradeoffs, not a vague claim that a team is busy. It gives the owner a defensible basis for changing coverage, sequencing work, or declining an unsafe expansion.' },
  'philippines-account-management-feedback-recurrence-tracker': { question: 'When does repeated feedback become a pattern that needs an owner decision?', practice: 'track source wording, context, affected work, recurrence, response, and remaining concern', detail: 'A recurrence tracker keeps one loud comment from becoming a trend while still showing when similar concerns return. Context matters because the same words can describe different account problems.' },
  'philippines-account-management-commitment-exception-register': { question: 'Which client commitments are blocked, changed, partially met, or waiting for an exception decision?', practice: 'record original wording, current state, reason for exception, authority, client impact, and next update', detail: 'The register protects the account from silent scope drift. An exception can be approved, declined, or still open, but each status needs a named owner and an honest client-safe explanation.' },
};

function august17Article(slug: string, title: string, service: string, published: string): RichArticle {
  const detail = august17Angles[slug];
  const base = article(slug, title, service, published);
  return {
    ...base,
    description: `${title}: how Philippines-based account support can ${detail.practice}, with a clear authority boundary and client-safe follow-through.`,
    intro: [`${title} answers a practical account question: ${detail.question} The record should help a US account owner make that call without asking a support specialist to invent facts or approve a consequential choice.`, detail.detail, 'Use this guide with one account record, one accountable owner, and a visible next update.'],
    takeaways: [detail.question, `Use the record to ${detail.practice}.`, 'Separate preparation from approval.', 'Leave exceptions and missing evidence visible.'],
    sections: [
      { heading: 'Name the decision the record supports', paragraphs: [detail.question, `Start with the account, time window, client effect, and source records that can answer it. For ${title.toLowerCase()}, write the question before collecting a large activity list.`, 'Keep the client statement, team interpretation, and unresolved assumption in separate fields. That small distinction prevents a plausible summary from becoming a false account fact.'] },
      { heading: 'Build the working record', paragraphs: [`The working record should ${detail.practice}. Give each entry a source, checked date, current state, and next check. If the source is missing or stale, mark the gap instead of smoothing it over.`, detail.detail, 'A Philippines-based account manager can reconcile assigned records, prepare a draft, and remind the responsible owner. The record should show when that work stops and an approval is required.'] },
      { heading: 'Keep authority with the right owner', paragraphs: ['Separate the person preparing the record from the person deciding on contracts, credits, refunds, legal wording, security exceptions, broad access, commercial terms, or work outside scope.', `For ${title.toLowerCase()}, write the authority boundary beside the next action. A clear boundary lets routine follow-up continue while disputed or consequential items move to the owner who can decide them.`] },
      { heading: 'Turn the record into a client-safe update', paragraphs: [`The update should say what was checked, what is confirmed, what remains open, and when the next answer is due. It should reflect the evidence behind ${title.toLowerCase()}, not internal guesses or a more confident status than the record supports.`, 'Route sensitive wording through the accountable owner. Keep private commentary and unresolved hypotheses in the controlled internal record, not in the message sent to the client.'] },
      { heading: 'Close or carry the exception', paragraphs: [detail.detail, 'Close only when the source, owner action, client communication, and stated result agree. If the item is partial, blocked, or transferred, leave that state visible with a new owner and review date.', 'At the next account review, ask whether the same gap appeared again. Repeated gaps point to a missing field, unclear handoff, or authority rule that needs to be made explicit.'] },
    ],
    table: { caption: `${title} working record`, headers: ['Record element', 'Write down', 'Review question'], rows: [['Account question', detail.question, 'Is the decision narrow enough to answer?'], ['Evidence', 'Source, checked date, supported fact, gap', 'Can another reviewer find the proof?'], ['Ownership', 'Work owner, decision owner, next check', 'Is approval separated from preparation?'], ['Client update', 'Confirmed state, open item, expected next answer', 'Does the wording match the record?']] },
    chartMeta: { title: `${title} decision path`, desc: 'A process aid shows the account question, evidence review, owner decision, and client-safe update.', heading: 'Question to update', method: 'This visual describes a review sequence. It is not a performance score or a claim about account results.' },
    graphic: { title: `${title} review path`, desc: 'A process graphic moves from a specific account question to evidence and an approved update.', heading: 'Ask, check, update', steps: [{ title: '1  Ask', line1: 'Question,', line2: 'client effect', color: '#e8c98e' }, { title: '2  Check', line1: 'Source, owner,', line2: 'authority', color: '#b9dfce' }, { title: '3  Update', line1: 'Confirmed state,', line2: 'next check', color: '#ffd9ce' }], caption: detail.detail },
    script: [`We checked ${title.toLowerCase()} against [source] on [date]. The confirmed point is [fact], and [owner] is reviewing [open item].`, `We will send the next approved update through [channel] by [date]. The current exception or remaining question is [plain description].`],
    faqs: [{ q: `What should ${title.toLowerCase()} contain?`, a: 'A narrow account question, source evidence, a checked state, owners, authority limits, a next review, and closure or exception proof.' }, { q: 'What stays with the account owner?', a: 'Contract, commercial, legal, security, refund, broad-access, and out-of-scope decisions stay with the authorized owner.' }, { q: 'When should the item remain open?', a: 'Keep it open when evidence, approval, client confirmation, or a dependency is still missing. Name the next owner and check date.' }],
  };
}

const august18Angles: Record<string, string> = {
  'philippines-account-management-client-intake-constraint-log': 'make hidden onboarding constraints visible before they become missed client promises',
  'philippines-account-management-account-touch-priority-rule': 'choose the next account touch from consequence and evidence instead of a flat recurring list',
  'philippines-account-management-renewal-evidence-ownership-grid': 'show who can supply, check, and approve each piece of renewal evidence',
  'philippines-account-management-qbr-question-to-proof-map': 'connect every quarterly review question to proof, limitation, and a decision owner',
  'philippines-account-management-crm-stale-record-quarantine': 'quarantine stale CRM facts so they cannot quietly drive a client update',
  'philippines-account-management-client-request-dependency-note': 'explain why a client request is waiting and what dependency must move next',
  'philippines-account-management-expansion-signal-interview-guide': 'test a possible growth need through careful questions before commercial follow-up',
  'philippines-account-management-portfolio-review-exception-threshold': 'set a defensible threshold for bringing an unusual account into owner review',
  'philippines-account-management-milestone-proof-collection-plan': 'collect milestone proof in the order needed for acceptance and accurate reporting',
  'philippines-account-management-feedback-context-to-action-map': 'preserve feedback context while routing it toward a specific accountable action',
  'philippines-account-management-implementation-acceptance-handoff': 'move accepted implementation work into account support without losing exceptions',
  'philippines-account-management-escalation-impact-intake': 'capture client impact at escalation intake before choosing a response path',
  'philippines-account-management-client-outcome-baseline-review': 'establish a reviewable outcome baseline before describing account progress',
  'philippines-account-management-renewal-decision-evidence-chain': 'trace a renewal recommendation from client evidence to authorized decision',
  'philippines-account-management-health-signal-source-ranking': 'rank health signals by freshness, proximity to the client, and corroboration',
  'philippines-account-management-qbr-narrative-integrity-check': 'check that a QBR story says no more than its evidence can support',
  'philippines-account-management-crm-owner-change-record': 'record an account-owner change so responsibility and access do not drift',
  'philippines-account-management-escalation-transfer-brief': 'transfer an escalation with enough context for the next owner to act safely',
  'philippines-account-management-portfolio-review-sequencing-plan': 'sequence portfolio reviews so urgent evidence gaps are handled before routine reporting',
  'philippines-account-management-feedback-closure-evidence': 'prove that feedback was acknowledged, acted on, and closed with the right owner',
  'philippines-account-management-commitment-change-control': 'control changes to client commitments without hiding the original agreement',
  'philippines-account-management-client-support-workload-boundary': 'set a clear workload boundary before support queues create unsafe follow-up promises',
};

function august18Article(slug: string, title: string, service: string, published: string): RichArticle {
  const base = article(slug, title, service, published);
  const angle = august18Angles[slug];
  const subject = title.toLowerCase();
  return {
    ...base,
    description: `${title}: a practical guide to ${angle}, with evidence, approval boundaries, and a truthful client update.`,
    intro: [
      `${title} helps an account team ${angle}. That matters in Philippines-based account support because the specialist may be responsible for preparation and follow-through while an internal owner remains accountable for commitments, commercial terms, sensitive decisions, and exceptions.`,
      `Begin with one account question, a defined time window, and the records that can answer it. The point of ${subject} is not to create a polished status label; it is to make the next responsible action visible and reviewable.`,
      'Use the guide as a working routine: capture the source, test its freshness, separate work from authority, prepare the client-safe wording, and leave an honest next check.',
    ],
    takeaways: [
      `Use ${subject} to ${angle}.`,
      'Keep client wording, internal interpretation, and unresolved assumptions separate.',
      'Give preparation and consequential decisions different owners.',
      'Do not close the record until the evidence and next update agree.',
    ],
    sections: [
      { heading: 'Frame the account question', paragraphs: [
        `Write the question that ${subject} must answer before gathering activity. Name the account, period, client effect, decision or action at stake, and the person who needs the answer. A narrow question prevents the support record from becoming a scrapbook of unrelated messages.`,
        `For this workflow, distinguish a client statement from the team's interpretation. If a client says a milestone is late, record those words and the date first; only then add the internal explanation and the evidence still needed. This makes corrections possible without rewriting history.`,
        `A Philippines-based account manager can prepare the question, collect the relevant records, and flag contradictions. The role should not fill an evidence gap with a likely explanation or turn a request for review into approval.`,
      ] },
      { heading: 'Build an evidence trail', paragraphs: [
        `The working record should ${angle}. Capture the source name, exact link or record identifier, checked date, supported fact, limitation, and next check. When two sources disagree, retain both and route the conflict rather than choosing the one that makes the account look healthier.`,
        `Use the smallest useful set of evidence. A meeting note, approved account field, client message, delivery record, or decision log may answer the question; copying every attachment makes review slower and increases the chance that private material appears in a client draft.`,
        `Add a confidence note when the evidence is indirect, old, or dependent on another team. Confidence describes the record, not the account's value. The owner can then decide whether to request more proof, make a bounded decision, or carry the item as open.`,
      ] },
      { heading: 'Separate work from authority', paragraphs: [
        'Name a work owner for gathering, reconciling, updating, and drafting. Name a decision owner for contract changes, credits, refunds, commercial terms, legal or security wording, broad access, and work outside the agreed scope. These roles may be held by different people even when the queue is small.',
        `For ${subject}, write the authority boundary beside each next action. Use labels such as prepare, send after approval, request evidence, or escalate. A visible label keeps client pressure from turning routine support into an unapproved promise.`,
        'Give the decision owner the context needed to decide: source, impact, options, deadline, and consequence of waiting. Do not ask the owner to reconstruct the account from a vague red flag, and do not represent silence as approval.',
      ] },
      { heading: 'Prepare the client-safe update', paragraphs: [
        `A useful update states what was checked, what is confirmed, what remains open, who is reviewing it, and when the next answer is due. It should reflect the evidence behind ${subject}, not the confidence of the person writing it.`,
        'Remove private commentary, internal disagreement, and unsupported forecasts from the client version. If the answer is not ready, say what is being checked and provide a dated next communication rather than inventing certainty.',
        'After approval, link the sent update back to the account record and note any correction the client makes. That reply becomes part of the evidence trail and may change the next owner, due date, or escalation path.',
      ] },
      { heading: 'Close, transfer, or carry the exception', paragraphs: [
        `Close ${subject} only when the source, owner action, client communication, and stated result agree. If the work is partial, waiting, transferred, or disputed, keep that state explicit and attach a new owner and review date.`,
        'A transfer is not a close. Record why responsibility moved, which facts were checked, which permissions are needed, what the client has been told, and what the receiving owner must decide. This is especially important when a Philippines-based specialist changes queue, shift, or account coverage.',
        'At the next account review, look for repeated gaps. Recurrence usually points to a missing field, stale source, unclear handoff, or authority rule that should be written into the routine. Improving the record is safer than asking a person to remember more.',
      ] },
    ],
    table: { caption: `${title} control record`, headers: ['Control', 'Minimum entry', 'Reviewer question'], rows: [['Question', 'Account, period, client effect, decision', 'Is the purpose narrow and clear?'], ['Evidence', 'Source, checked date, supported fact, limitation', 'Can the fact be reproduced?'], ['Authority', 'Work owner, decision owner, boundary', 'Is approval separate from preparation?'], ['Update', 'Confirmed state, open item, next date', 'Does the wording match the record?']] },
    script: [`We checked ${subject} against [source record] on [date]. The confirmed point is [fact], and [owner] is reviewing [open item].`, `We will send the next approved update through [channel] by [date]. The current limitation or dependency is [plain description].`],
    faqs: [{ q: `What is the first step in ${subject}?`, a: 'Define the account question, time window, source records, work owner, decision owner, and next check.' }, { q: 'What should the support role avoid?', a: 'It should avoid inventing facts, changing commitments, approving commercial or sensitive decisions, granting broad access, or promising work outside scope.' }, { q: 'When is the record complete?', a: 'When evidence, ownership, approved wording, client response where required, and closure or carry-forward instructions are all recorded.' }],
  };
}

export const dailyRichArticles: Array<[string, RichArticle]> = [
  ...august18Topics.map(([slug, title, service, published]) => [slug, august18Article(slug, title, service, published)] as [string, RichArticle]),
  ...august17Topics.map(([slug, title, service, published]) => [slug, august17Article(slug, title, service, published)] as [string, RichArticle]),
  ...august14Topics.map(([slug, title, service, published]) => [slug, august14Article(slug, title, service, published)] as [string, RichArticle]),
  ...august13Topics.map(([slug, title, service, published]) => [slug, august13Article(slug, title, service, published)] as [string, RichArticle]),
  ...august11Topics.map(([slug, title, service, published]) => [slug, article(slug, title, service, published)] as [string, RichArticle]),
  ...topics.map(([slug, title, service]) => [slug, article(slug, title, service)] as [string, RichArticle]),
];
