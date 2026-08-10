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

export const dailyBlogPosts = topics.map(([slug, title]) => ({ slug, title, excerpt: `${title}. A practical source-backed workflow for clear owners, safe access, approved client updates, and closure proof.`, minutes: 10 }));
const source = { name: 'NIST Cybersecurity Framework 2.0', date: 'February 26, 2024', url: 'https://www.nist.gov/publications/cybersecurity-framework-csf-20', note: 'Provides a current governance vocabulary for identifying, protecting, detecting, responding, and recovering.' };

function article(title: string, service: string): RichArticle {
  const lower = title.toLowerCase();
  return {
    title, description: `A practical guide to ${lower} for teams using Philippines-based account support, with evidence, approval boundaries, and a dated client update.`, published: '2026-08-10', updated: '2026-08-10', readMinutes: 10,
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

export const dailyRichArticles: Array<[string, RichArticle]> = topics.map(([slug, title, service]) => [slug, article(title, service)]);
