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
  ['philippines-account-management-stakeholder-priority-brief', 'Philippines account management stakeholder priority brief', 'client-onboarding-coordination', '2026-08-13'],
  ['philippines-account-management-account-context-sheet', 'Philippines account management account context sheet', 'account-health-monitoring', '2026-08-13'],
  ['philippines-account-management-renewal-objection-log', 'Philippines account management renewal objection log', 'renewal-administration', '2026-08-13'],
  ['philippines-account-management-qbr-outcome-ladder', 'Philippines account management QBR outcome ladder', 'customer-qbr-preparation', '2026-08-13'],
  ['philippines-account-management-crm-note-taxonomy', 'Philippines account management CRM note taxonomy', 'crm-account-maintenance', '2026-08-13'],
  ['philippines-account-management-request-impact-brief', 'Philippines account management request impact brief', 'client-request-routing', '2026-08-13'],
  ['philippines-account-management-expansion-readiness-conversation', 'Philippines account management expansion readiness conversation', 'upsell-opportunity-tracking', '2026-08-13'],
  ['philippines-account-management-account-evidence-narrative', 'Philippines account management account evidence narrative', 'account-reporting', '2026-08-13'],
  ['philippines-account-management-commitment-proof-index', 'Philippines account management commitment proof index', 'contract-milestone-tracking', '2026-08-13'],
  ['philippines-account-management-feedback-interaction-record', 'Philippines account management feedback interaction record', 'customer-feedback-administration', '2026-08-13'],
  ['philippines-account-management-post-launch-stabilization-plan', 'Philippines account management post-launch stabilization plan', 'implementation-handoff-support', '2026-08-13'],
  ['philippines-account-management-escalation-fact-pattern', 'Philippines account management escalation fact pattern', 'escalation-coordination', '2026-08-13'],
  ['philippines-account-management-value-evidence-review', 'Philippines account management value evidence review', 'account-reporting', '2026-08-13'],
  ['philippines-account-management-renewal-decision-calendar', 'Philippines account management renewal decision calendar', 'renewal-administration', '2026-08-13'],
  ['philippines-account-management-risk-threshold-guide', 'Philippines account management risk threshold guide', 'account-health-monitoring', '2026-08-13'],
  ['philippines-account-management-success-outcome-charter', 'Philippines account management success outcome charter', 'client-onboarding-coordination', '2026-08-13'],
  ['philippines-account-management-qbr-decision-brief', 'Philippines account management QBR decision brief', 'customer-qbr-preparation', '2026-08-13'],
  ['philippines-account-management-crm-history-reconstruction', 'Philippines account management CRM history reconstruction', 'crm-account-maintenance', '2026-08-13'],
  ['philippines-account-management-escalation-handoff-record', 'Philippines account management escalation handoff record', 'escalation-coordination', '2026-08-13'],
  ['philippines-account-management-portfolio-priority-review', 'Philippines account management portfolio priority review', 'account-reporting', '2026-08-13'],
  ['philippines-account-management-feedback-resolution-story', 'Philippines account management feedback resolution story', 'customer-feedback-administration', '2026-08-13'],
  ['philippines-account-management-commitment-sequence-map', 'Philippines account management commitment sequence map', 'contract-milestone-tracking', '2026-08-13'],
] as const;

// Explicit source-date binding for the one frozen article whose source record
// did not previously carry its own date field.
export const dailyBlogSourceDates: Record<string, string> = {
  'philippines-account-management-client-onboarding-roles': '2026-08-10',
};

const august10BlogPosts = topics.map(([slug, title]) => ({ slug, title, excerpt: `${title}. A practical source-backed workflow for clear owners, safe access, approved client updates, and closure proof.`, minutes: 10, ...(dailyBlogSourceDates[slug] ? { published: dailyBlogSourceDates[slug] } : {}) }));
const august11BlogPosts = august11Topics.map(([slug, title, _service, published]) => ({ slug, title, published, excerpt: `${title}. A practical guide for clear account ownership, checked client records, safe access, and approved follow-through.`, minutes: 10 }));
const august13BlogPosts = august13Topics.map(([slug, title, _service, published]) => ({ slug, title, published, excerpt: `${title}. A practical guide for Philippines-based account support with clear evidence, ownership, and client follow-through.`, minutes: 10 }));
export const dailyBlogPosts = [...august13BlogPosts, ...august11BlogPosts, ...august10BlogPosts];
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

function august13Article(slug: string, title: string, service: string, published: string): RichArticle {
  const base = article(slug, title, service, published);
  const angle = august13ReplacementAngles[slug] || august13Angles[slug];
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

export const dailyRichArticles: Array<[string, RichArticle]> = [
  ...august13Topics.map(([slug, title, service, published]) => [slug, august13Article(slug, title, service, published)] as [string, RichArticle]),
  ...august11Topics.map(([slug, title, service, published]) => [slug, article(slug, title, service, published)] as [string, RichArticle]),
  ...topics.map(([slug, title, service]) => [slug, article(slug, title, service)] as [string, RichArticle]),
];
