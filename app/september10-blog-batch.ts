import { makeSeptemberBlogArticle, type SeptemberBlogTopic } from './september7-blog-batch';
import type { RichArticle } from './rich-articles';

const topics: SeptemberBlogTopic[] = [
  ['account-update-claim-source-card', 'Account update claim source card', 'account-reporting', 'tie every client-facing status claim to current, reviewable evidence', 'claim, source record, observation date, evidence owner, uncertainty, approver, and next verification', 'A confident status sentence can travel farther than the evidence that supports it.', '2026-08-31-crm-correction-provenance-log.png'],
  ['renewal-decision-clock-register', 'Renewal decision clock register', 'renewal-administration', 'make renewal decision windows and dependencies visible before they become urgent', 'decision, controlling date, source, lead time, dependency, commercial owner, and next check', 'Renewal pressure often begins as an ordinary date that nobody translated into a decision window.', '2026-08-31-renewal-evidence-freeze.png'],
  ['client-contact-channel-consent-log', 'Client contact channel consent log', 'crm-account-maintenance', 'record which client communication channels are approved for which kinds of account updates', 'contact, channel, consent source, message class, restriction, effective date, and review trigger', 'A saved phone number or chat handle does not prove that every account message belongs there.', '2026-08-31-stakeholder-absence-plan.png'],
  ['escalation-response-dependency-map', 'Escalation response dependency map', 'escalation-coordination', 'show what must be resolved before an accurate escalation response can be approved', 'open question, source owner, dependency, client effect, decision owner, due time, and fallback update', 'An escalation can look inactive while several necessary answers are moving behind it.', '2026-08-31-escalation-audience-map.png'],
  ['client-request-outcome-verification', 'Client request outcome verification', 'client-request-routing', 'verify that completed account work produced the specific outcome recorded at intake', 'request wording, intended outcome, completion evidence, verifier, mismatch, client response, and reopen rule', 'A finished task can still miss the outcome recorded when the client request arrived.', '2026-08-31-client-silence-follow-up-rule.png'],
  ['account-risk-counterevidence-note', 'Account risk counterevidence note', 'account-health-monitoring', 'keep evidence that challenges an account risk interpretation beside the risk signal', 'risk claim, supporting evidence, counterevidence, evidence dates, reviewer, uncertainty, and next test', 'A risk review becomes less useful when it collects only facts that support the first interpretation.', '2026-08-31-portfolio-exception-budget.png'],
  ['qbr-metric-exception-register', 'QBR metric exception register', 'customer-qbr-preparation', 'disclose account records that do not fit a QBR metric definition or reporting population', 'metric, affected record, exception reason, calculation effect, owner, approved treatment, and disclosure', 'A clean QBR total may hide the cases that did not fit the calculation.', '2026-08-31-client-metric-definition-card.png'],
  ['handoff-first-action-verification', 'Handoff first action verification', 'implementation-handoff-support', 'test whether a new account owner can take the first approved action from the handoff record', 'account, first action, source context, authority boundary, result, reviewer, and correction', 'A handoff is still theoretical until the receiving owner can use it for real work.', '2026-08-31-handoff-shadow-review.png'],
  ['service-commitment-change-receipt', 'Service commitment change receipt', 'contract-milestone-tracking', 'confirm that an approved change to a client commitment reached every affected owner and record', 'changed commitment, approval source, affected records, recipients, acknowledgement, effective date, and audit proof', 'An approved commitment change can fail quietly when one downstream record keeps the old promise.', '2026-08-31-client-commitment-sunset-review.png'],
  ['client-report-source-freeze', 'Client report source freeze', 'account-reporting', 'set and document the evidence cutoff used to prepare a recurring client report', 'report, source set, cutoff time, late evidence rule, preparer, approver, and release state', 'A report can change meaning if its source data keeps moving during review.', '2026-08-31-crm-correction-provenance-log.png'],
  ['portfolio-owner-capacity-exception', 'Portfolio owner capacity exception', 'account-health-monitoring', 'record when account coverage exceeds an agreed review capacity and route the consequence', 'owner, review population, capacity rule, affected accounts, missed control, escalation owner, and recovery check', 'Overloaded coverage often appears first as a missing review rather than an explicit capacity alert.', '2026-08-31-portfolio-exception-budget.png'],
  ['client-feedback-interpretation-check', 'Client feedback interpretation check', 'customer-feedback-administration', 'separate a client statement from the account team interpretation and proposed response', 'source wording, context, observed fact, interpretation, alternative reading, response owner, and approval state', 'A short client comment can acquire a meaning the client never stated.', '2026-08-31-client-silence-follow-up-rule.png'],
];

export const september10BlogPosts = topics.map((topic) => ({
  slug: `philippines-account-management-${topic[0]}`,
  title: `Philippines account management ${topic[1].toLowerCase()}`,
  published: '2026-09-10' as const,
  excerpt: `A September 10, 2026 guide to ${topic[3]}.`,
  minutes: 11,
}));

export const september10RichArticles: Array<[string, RichArticle]> = topics.map((topic) => [
  `philippines-account-management-${topic[0]}`,
  makeSeptemberBlogArticle(topic, '2026-09-10'),
]);
