import type { RichArticle } from './rich-articles';

export const october5BlogPosts = [
  {
    slug: 'philippines-account-management-client-approval-bottleneck-review',
    title: 'Philippines account management client approval bottleneck review',
    description: 'A practical method for finding stalled client approvals, clarifying authority, and restoring account work without inventing consent or deadlines.',
    category: 'client-request-routing',
    readTime: '10 min read',
    date: 'PUBLICATION_DATE_PENDING',
    image: '/blog-images/2026-08-31-approval-authority-map.png',
  },
] as const;

const approvalBottleneckReview: RichArticle = {
  title: october5BlogPosts[0].title,
  description: october5BlogPosts[0].description,
  published: 'PUBLICATION_DATE_PENDING',
  updated: 'PUBLICATION_DATE_PENDING',
  readMinutes: 10,
  heroImage: october5BlogPosts[0].image,
  intro: [
    'Client work often looks like a delivery problem when the real constraint is an approval nobody has clearly owned. A proposal waits in email, a data change sits in a ticket, and the account team keeps promising another update without knowing who can decide. A Philippines-based account management specialist can make that queue visible and move the evidence to the right owner, but should not turn silence into consent.',
    'This review treats approval as an operating path rather than a reminder campaign. It identifies the decision, verifies authority, shows the cost of waiting, and gives the client a bounded next step. The result is a useful record for the account owner and a clearer experience for the client.',
  ],
  takeawaysTitle: 'The working approach',
  takeaways: [
    'Define the exact decision before chasing an approver.',
    'Verify authority from an approved source instead of relying on job titles.',
    'Separate a missing response from a rejection or approval.',
    'Escalate according to business consequence, not message volume.',
    'Close the record only when the decision and affected work agree.',
  ],
  sections: [
    {
      heading: 'Recognize an approval bottleneck before it becomes account noise',
      paragraphs: [
        'A bottleneck exists when work cannot safely continue without a named decision and the expected decision date has passed or was never established. It is different from ordinary work in progress. The first useful question is not “Who has not replied?” but “What choice is required, what evidence supports it, and what work changes after the answer?” This framing prevents a long email thread from standing in for a decision record.',
        'Build a short inventory from the CRM, task system, meeting recaps, and approved commercial records. For each stalled item, capture the client account, requested decision, original source, date raised, current decision owner, authority evidence, affected milestone, next client update, and safe work that can continue. Do not label an item approved, rejected, urgent, or overdue unless the source supports that state.',
        'The inventory should exclude requests that are merely incomplete. If the team has not supplied the pricing detail, security answer, acceptance evidence, or scope explanation that a decision maker reasonably needs, the immediate problem is evidence preparation. Route that work first and preserve the distinction so the client is not blamed for an internal gap.',
      ],
    },
    {
      heading: 'Verify who can decide and who only coordinates',
      paragraphs: [
        'A familiar contact may schedule meetings and collect feedback without authority to approve a contract change, access grant, service credit, data use, or deadline. Job titles are clues, not proof. Check the current contract record, approved stakeholder map, client instruction, system owner list, or another authorized source. Record where the authority conclusion came from and when it was checked.',
        'Separate recipients into practical roles: the person requesting the change, the person preparing evidence, the person authorized to decide, and the people affected by the outcome. One person may fill several roles, but writing them separately exposes missing ownership. It also helps the account specialist send a concise request to the decision owner without copying private or irrelevant material to a broad audience.',
        'When sources conflict, keep the decision open. For example, a CRM note may name an operations lead while the signed agreement requires procurement approval. The account manager should surface that conflict to the accountable internal owner and ask the client for clarification through an approved channel. Convenience is not a reason to bypass the stricter source.',
      ],
    },
    {
      heading: 'Prepare an approval packet that supports one decision',
      paragraphs: [
        'Decision makers lose time when a request mixes history, emotion, alternatives, and several hidden choices. Prepare a compact packet with the decision statement, relevant facts, source links, available options, constraints, business effect, requested decision date, and the consequence of no decision. Label estimates and assumptions. If legal, security, financial, or contractual interpretation is required, identify the qualified owner rather than presenting an account-team guess as fact.',
        'Use the smallest evidence set that lets the authorized person decide. A request to extend an onboarding milestone might need the approved plan, the blocked dependency, the revised sequence, and the client-facing impact. It probably does not need unrelated performance reports or personal notes. This limits disclosure and makes the controlling evidence easier to audit later.',
        'Before sending, ask a reviewer to check names, dates, links, option wording, and the requested action. The account specialist can assemble and route the packet, but unusual promises and owner-only decisions stay with the people who hold that authority. Record the sent version so later edits do not quietly change what the approver saw.',
      ],
    },
    {
      heading: 'Escalate based on consequence rather than impatience',
      paragraphs: [
        'Three reminders in one afternoon do not make a request more important. Define escalation triggers from the affected work: a client meeting that will lack an approved answer, an access window that will close, a renewal step that cannot proceed, or a dependency that will move a committed milestone. State the consequence in neutral language and avoid implying that delay equals agreement.',
        'Use a sequence appropriate to the account: confirm receipt, restate the decision and evidence, name the next effect, then route to the documented alternate or accountable owner. Each message should add useful information. If nothing has changed, a short status line is better than rebuilding the entire narrative. Keep the client informed at the cadence already agreed, even when the truthful update is that the decision remains pending.',
        'An escalation should preserve relationships as well as control. Avoid public blame, speculative urgency, or copying senior leaders merely to create pressure. Explain the client or delivery consequence, cite the source, and ask for a specific decision or alternate owner. Material risks can follow the organization’s incident or governance route without turning every routine approval into a crisis.',
      ],
    },
    {
      heading: 'Keep safe work moving while the decision remains open',
      paragraphs: [
        'A pending approval does not always stop every activity. Identify preparation that is reversible and already authorized: checking source data, drafting a client update, testing in an approved sandbox, or scheduling a review. Mark these tasks as preparation rather than implementation. Do not make production changes, communicate new terms, grant access, or represent a choice as final before the required approval exists.',
        'For a practical example, imagine a client asks to add a new reporting audience. The team can confirm the requested recipients, document the report fields, check the existing distribution rule, and prepare a redacted sample. It should not add recipients until the data owner confirms access. The client update can explain what has been prepared, what decision remains, who owns it, and when the next status will arrive.',
        'This boundary prevents two common failures: idle teams that could have prepared useful evidence, and overactive teams that create rework or exposure by acting first. Add the allowed preparation and prohibited action to the approval record so a handoff or shift change does not blur the limit.',
      ],
    },
    {
      heading: 'Close the bottleneck with proof and a learning step',
      paragraphs: [
        'When the decision arrives, record the exact choice, decision maker, date, conditions, effective time, and source. Translate it into owned work and an approved client communication. A yes with conditions is not an unrestricted approval, and a decision to defer needs a next review event rather than disappearing into a closed task.',
        'Reconcile every affected record. Update the CRM state, milestone, task owner, client recap, and evidence link so they tell the same story. If the decision changed after an earlier update, preserve the earlier version and explain the correction. Closure means the operational records and client-facing message reflect the controlling decision, not simply that somebody answered an email.',
        'Finally, classify why the bottleneck formed. Useful causes include missing authority mapping, incomplete evidence, unclear decision wording, absent backup ownership, conflicting sources, or an unrealistic lead time. Assign one bounded improvement to the account process. The goal is not to eliminate thoughtful approval; it is to make required decisions visible early enough that governance and delivery can coexist.',
      ],
    },
  ],
  banners: [
    { label: 'Route the request', title: 'Give each client decision a visible owner', body: 'Capture the source, required choice, authority, consequence, and next update in one controlled path.', href: '/services/client-request-routing', link: 'Explore client request routing' },
  ],
  table: {
    caption: 'Approval bottleneck review fields',
    headers: ['Field', 'Question', 'Proof'],
    rows: [
      ['Decision', 'What exact choice is needed?', 'Decision statement and source'],
      ['Authority', 'Who can make that choice?', 'Current approved authority record'],
      ['Evidence', 'What does the owner need?', 'Versioned links and stated assumptions'],
      ['Consequence', 'What changes if the answer waits?', 'Affected milestone or client update'],
      ['Closure', 'Did records and communication align?', 'Decision, task, CRM, and receipt links'],
    ],
  },
  chart: [
    { label: 'Define', value: 20, color: '#0f766e' },
    { label: 'Verify', value: 40, color: '#6366f1' },
    { label: 'Route', value: 60, color: '#f26b4e' },
    { label: 'Reconcile', value: 100, color: '#d6b36a' },
  ],
  chartMeta: { title: 'Approval review sequence', desc: 'A four-stage operating sequence from defining the decision through reconciling the result.', heading: 'Move evidence, not just reminders', method: 'Illustrative workflow stages; values show sequence completion, not measured performance.' },
  quote: { text: 'Accountability starts with a named decision, a source, and a record of what happened next.', source: 'Outsourced Account Management operating principle', url: '/services/client-request-routing' },
  scriptTitle: 'Client-safe pending approval update',
  scriptIntro: 'Replace every bracketed field and obtain approval for unusual commitments.',
  script: [
    'We have prepared [evidence or work] for the decision about [specific choice]. The decision remains with [role], and no final change has been made.',
    'While that review continues, we can safely complete [authorized preparation]. Our next status update will be sent through [channel] by [date or event].',
  ],
  faqTitle: 'Approval bottleneck questions',
  faqs: [
    { q: 'Does silence count as client approval?', a: 'No. Keep the decision pending unless an approved agreement or policy explicitly establishes another rule and the accountable owner confirms it applies.' },
    { q: 'Can an outsourced account manager escalate an approval?', a: 'Yes, within the documented route. The specialist can assemble evidence, communicate status, and contact the named alternate without claiming authority they do not hold.' },
    { q: 'What should happen while approval is pending?', a: 'Continue only reversible, already-authorized preparation. Record the boundary and avoid implementing the undecided change.' },
    { q: 'When is the bottleneck closed?', a: 'After the decision, conditions, affected tasks, account record, and client communication have been reconciled with evidence.' },
  ],
  sources: [
    { name: 'NIST CSRC, least privilege glossary', date: 'accessed October 2026', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Authoritative definition supporting minimum necessary access.' },
    { name: 'National Privacy Commission, Data Privacy Act of 2012', date: 'accessed October 2026', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Primary Philippine privacy-law source relevant to controlled client information.' },
    { name: 'ISO, quality management principles', date: 'accessed October 2026', url: 'https://www.iso.org/quality-management-principles.html', note: 'Authoritative overview supporting evidence-based decisions and process improvement.' },
  ],
};

export const october5RichArticles: Array<[string, RichArticle]> = [
  [october5BlogPosts[0].slug, approvalBottleneckReview],
];
