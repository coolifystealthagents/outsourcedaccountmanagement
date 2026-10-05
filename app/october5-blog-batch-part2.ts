import type { RichArticle } from './rich-articles';

export const october5BlogPostsPart2 = [{
  slug: 'philippines-account-management-client-change-request-dependency-map',
  title: 'Philippines account management client change request dependency map',
  description: 'A practical guide to mapping client change requests across scope, systems, approvals, timing, and communication before work begins.',
  category: 'client-request-routing',
  readTime: '10 min read',
  date: 'PUBLICATION_DATE_PENDING',
  image: '/blog-images/2026-08-31-client-request-triage-board.png',
}] as const;

const article: RichArticle = {
  title: october5BlogPostsPart2[0].title,
  description: october5BlogPostsPart2[0].description,
  published: 'PUBLICATION_DATE_PENDING',
  updated: 'PUBLICATION_DATE_PENDING',
  readMinutes: 10,
  heroImage: october5BlogPostsPart2[0].image,
  intro: [
    'A client change request can sound small in a meeting and still touch reporting logic, permissions, training, billing, and a promised launch date. If the account team records only the requested output, each downstream owner discovers their dependency at a different time. That creates rework and makes a simple status update surprisingly difficult.',
    'A dependency map gives a Philippines-based account management specialist a controlled way to trace the request before anyone promises delivery. It connects the client’s words to affected work, decision owners, prerequisites, tests, and communication. The specialist coordinates the evidence; authorized owners still decide scope, money, security, legal terms, and production changes.',
  ],
  takeawaysTitle: 'What the map must accomplish',
  takeaways: [
    'Preserve the client request and desired outcome separately from the proposed solution.',
    'Trace every affected system, team, approval, record, and client commitment.',
    'Sequence prerequisites before assigning a delivery date.',
    'Show which preparation can proceed while owner decisions remain open.',
    'Close only after acceptance evidence and client communication match.',
  ],
  sections: [
    {
      heading: 'Start with the client outcome, not the first proposed task',
      paragraphs: [
        'Capture the request from the meeting recap, ticket, or client message in the client’s own terms. Record the business outcome, affected users, stated timing, and why the change matters. Then record the proposed solution as a separate field. A request for “one more dashboard column” may really be a need to identify unresolved renewals before a weekly review. Keeping outcome and solution apart allows the responsible owner to offer a safer or simpler option without losing the client’s intent.',
        'Add the account, source link, request date, requester, account owner, and next acknowledged update. If the request came through a conversation, obtain a checked recap before treating a casual idea as committed work. Label assumptions and unanswered questions. Do not improve the wording so aggressively that a preference becomes a requirement or an exploratory date becomes a deadline.',
        'The first pass should also state what the request does not authorize. It may not authorize a contract change, access expansion, new data use, production release, service credit, or new recurring workload. Those boundaries are useful operational facts, not legal conclusions. Route interpretation to the correct owner and keep the request pending until the needed decision exists.',
      ],
    },
    {
      heading: 'Trace five kinds of dependency',
      paragraphs: [
        'Use separate lanes for scope, information, systems, people, and timing. Scope shows whether the requested work fits the approved service. Information covers source data, definitions, privacy, retention, and client confirmation. Systems include environments, integrations, permissions, automation, and rollback. People identify work owners, reviewers, decision owners, and affected users. Timing connects prerequisites to milestones and client updates.',
        'A dependency belongs on the map when its absence could change the result, safety, authority, or credible delivery sequence. Avoid filling the map with every routine task. For each meaningful dependency, name its source, current state, owner, acceptance evidence, and the work it unlocks. Mark unknown rather than guessing. An unknown data owner is a recovery task; it is not an implicit approval.',
        'Draw relationships in the direction work actually moves. If field definitions must be approved before a report query is changed, and the query must pass a sample test before training material is updated, show that order. Parallel work should appear in parallel only when it can genuinely proceed without an unresolved predecessor. This makes the map useful for scheduling rather than decorative documentation.',
      ],
    },
    {
      heading: 'Test the map with a realistic change request',
      paragraphs: [
        'Imagine a client asks the account team to add “renewal risk” to a shared weekly report by Friday. The desired outcome is earlier attention to accounts that may need a decision. Before accepting the proposed field, the team must define renewal risk, identify its source, confirm who may see it, decide whether the value is calculated or manually entered, and determine what happens when evidence is missing.',
        'The dependency map might show a client definition decision, CRM field review, privacy and recipient check, report-owner approval, query change, sample reconciliation, client acceptance, and user guidance. The Friday request can then be discussed honestly. Perhaps a controlled sample using existing approved fields is possible by Friday while the production calculation requires a later owner decision. That is a useful option, not a disguised commitment.',
        'The account specialist can prepare the map, collect definitions, schedule the review, maintain status, and draft client-safe updates. The data owner approves the field and source, the system owner approves the change, and the account owner approves any revised commitment. Each role is visible, so coordination does not quietly become decision authority.',
      ],
    },
    {
      heading: 'Estimate from prerequisites and review capacity',
      paragraphs: [
        'Do not estimate the request by adding only hands-on task time. Include decision lead time, access lead time, test data availability, review windows, client confirmation, and a correction path. State whether the estimate begins when the request arrived or when required inputs become available. A two-day build that cannot start until next week is not a two-day client delivery.',
        'Where uncertainty is material, give a decision point instead of false precision. For example: the team can confirm a production date after the field definition and recipient list are approved; the next update will arrive within one working day of that approval. This tells the client what controls progress and prevents repeated placeholder dates that erode confidence.',
        'Check capacity at the owners who constrain the sequence, not just the person coordinating it. A specialist may have time to prepare the packet while the only authorized reviewer is handling a priority incident. Record that constraint, agree on an alternate if one exists, and route any client commitment change through the account owner.',
      ],
    },
    {
      heading: 'Control changes to the change request',
      paragraphs: [
        'Requests evolve after examples and limitations become visible. Preserve the original request, then add dated revisions that explain what changed, who requested it, which dependencies are affected, and whether prior approval still applies. Do not overwrite the first version and leave downstream owners working from different assumptions.',
        'Set a practical re-review trigger. A new recipient may require another access check. A different data source may invalidate the sample and estimate. A change from a one-time report to an ongoing service may require scope and capacity review. The map should point back to the affected decisions instead of restarting every task indiscriminately.',
        'Client updates should distinguish accepted scope, open choices, preparation completed, current blocker, and next event. Avoid internal workflow jargon. A concise message can say that the team confirmed the report audience and sample, while the calculation definition remains with the named client role; the production date will be confirmed after that decision.',
      ],
    },
    {
      heading: 'Verify acceptance and reconcile every record',
      paragraphs: [
        'Define acceptance before implementation. Depending on the request, proof might include a reconciled sample, permission check, approved wording, expected calculation, client receipt, and rollback test. “Looks good” in chat may be useful feedback but should not replace the required approval when the change affects controlled data or a contractual deliverable.',
        'After acceptance, update the task system, CRM, account plan, client recap, and any operating instruction affected by the change. Link the final evidence and record the effective time. Remove temporary access, test schedules, and draft distributions that are no longer needed. If the request was declined or deferred, record that disposition and the reason approved for client communication.',
        'Close with one learning note about the dependency pattern. If recipient approval was repeatedly discovered late, add it to the request intake. If samples reduced confusion, make a controlled example part of similar reviews. The purpose is not to create a larger form. It is to reveal the few dependencies that make a client commitment trustworthy.',
      ],
    },
  ],
  banners: [{ label: 'Map the request', title: 'Route client changes with visible dependencies', body: 'Connect the requested outcome to owners, prerequisites, evidence, and a client-safe next update.', href: '/services/client-request-routing', link: 'See client request routing support' }],
  table: {
    caption: 'Core dependency lanes for a client change request',
    headers: ['Lane', 'What to verify', 'Completion evidence'],
    rows: [
      ['Scope', 'Approved service, exclusions, and decision owner', 'Recorded scope disposition'],
      ['Information', 'Definition, source, audience, and retention', 'Approved data and recipient record'],
      ['Systems', 'Access, integration, test, release, and rollback', 'Passed test and change record'],
      ['People', 'Doer, reviewer, decision owner, and users', 'Accepted ownership and training'],
      ['Timing', 'Prerequisites, review windows, and updates', 'Approved sequence and client receipt'],
    ],
  },
  chart: [
    { label: 'Request captured', value: 20, color: '#0f766e' },
    { label: 'Dependencies mapped', value: 45, color: '#6366f1' },
    { label: 'Owners approve', value: 70, color: '#f26b4e' },
    { label: 'Acceptance reconciled', value: 100, color: '#d6b36a' },
  ],
  chartMeta: { title: 'Change request control path', desc: 'An illustrative four-stage path from request capture to reconciled acceptance.', heading: 'Sequence decisions before delivery', method: 'Values indicate illustrative workflow completion, not measured performance.' },
  quote: { text: 'A useful dependency map explains what must be true before the next promise can be made.', source: 'Outsourced Account Management operating principle', url: '/services/client-request-routing' },
  scriptTitle: 'Client change request status update',
  scriptIntro: 'Replace the brackets and obtain owner approval for any new commitment.',
  script: [
    'We recorded your requested outcome as [outcome] and confirmed [completed evidence]. The remaining decision is [decision], owned by [role].',
    'We can safely continue [approved preparation] while that decision is open. We will confirm [date or next step] through [channel] after [dependency] is verified.',
  ],
  faqTitle: 'Change request dependency questions',
  faqs: [
    { q: 'Why map dependencies for a small request?', a: 'The map can stay small. Its value is exposing any approval, data, system, or timing condition that could make a quick promise unsafe.' },
    { q: 'Who owns the dependency map?', a: 'An account specialist can maintain it, while each accountable owner approves decisions in their area.' },
    { q: 'Can work begin before every approval?', a: 'Only preparation that is already authorized, reversible, and clearly separated from implementation should continue.' },
    { q: 'When should the client receive an update?', a: 'Use the agreed cadence and send an earlier update when a material dependency changes the expected outcome or timing.' },
  ],
  sources: [
    { name: 'NIST Cybersecurity Framework 2.0', date: 'accessed October 2026', url: 'https://www.nist.gov/cyberframework', note: 'Authoritative framework supporting governance and risk-aware system changes.' },
    { name: 'National Privacy Commission, Data Privacy Act of 2012', date: 'accessed October 2026', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Primary Philippine source relevant to personal information and controlled audiences.' },
    { name: 'ISO, quality management principles', date: 'accessed October 2026', url: 'https://www.iso.org/quality-management-principles.html', note: 'Authoritative overview supporting process and evidence-based decision practices.' },
  ],
};

export const october5RichArticlesPart2: Array<[string, RichArticle]> = [[october5BlogPostsPart2[0].slug, article]];
