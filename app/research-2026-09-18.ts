import type { ResearchPost } from './research-data';

const checked = 'checked September 18, 2026';
const sources = [
  { name: 'NIST Cybersecurity Framework 2.0', date: `February 26, 2024; ${checked}`, url: 'https://www.nist.gov/cyberframework', note: 'Primary framework for governance, identification, protection, detection, response, and recovery. It supplies control vocabulary, not an account-management performance benchmark.' },
  { name: 'NIST SP 800-53 Rev. 5, Update 1', date: `December 10, 2020; ${checked}`, url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Primary control catalog covering access, accountability, audit records, information management, and assessment. Applicability depends on the buyer context.' },
  { name: 'GAO Standards for Internal Control in the Federal Government', date: `September 10, 2014; ${checked}`, url: 'https://www.gao.gov/products/gao-14-704g', note: 'Authoritative standards on reliable information, responsibility, monitoring, and corrective action. They are used here as design principles, not legal requirements for private account teams.' },
  { name: 'FTC Start with Security: A Guide for Business', date: `June 2015; ${checked}`, url: 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business', note: 'Authoritative practical guidance on access control, data minimization, service providers, and incident preparation.' },
  { name: 'ISO quality management principles', date: checked, url: 'https://www.iso.org/quality-management/principles', note: 'Authoritative overview of customer focus, process management, evidence-based decisions, relationship management, and improvement.' },
];

type Topic = {
  slug: string; title: string; cluster: ResearchPost['cluster']; excerpt: string; question: string;
  unit: string; comparison: string; decision: string; service: string; related: string[];
  specific: { heading: string; paragraphs: string[] }[]; rows: string[][];
};

const commonSections = (t: Topic) => [
  { heading: 'Research question and decision boundary', paragraphs: [
    `This study asks ${t.question} The practical unit is ${t.unit}. That choice matters because an account-level label can hide several different records, owners, or dates. The study is designed to support ${t.decision}; it is not designed to judge an employee, promise a client result, or infer sentiment, renewal intent, revenue, causality, or legal compliance.`,
    `The central distinction is between a recorded fact, an analyst's interpretation, and an authorized decision. A dated source can establish that a field, message, approval, or event existed. It cannot by itself establish why it happened or what the client believes. A Philippines-based account specialist may assemble and reconcile the evidence, flag an exception, prepare a neutral brief, and draft approved wording. Contract changes, pricing, concessions, legal or security judgments, broad access, and unusual client commitments stay with the accountable owner.`,
  ]},
  { heading: 'Methodology and sampling plan', paragraphs: [
    `Define a fixed observation window before reviewing outcomes. Build a population of ${t.unit}, including routine, delayed, corrected, disputed, missing, and reopened examples. Preserve the original source, actor, event time, recording time, account, approved definition, current owner, status, and next check. Sample across more than one account and operating period where permissions allow; otherwise state that the work is a single-account case study.`,
    `Use the comparison: ${t.comparison}. Freeze the evidence packet before classification so later outcomes do not rewrite what was knowable at the cutoff. Two reviewers should independently code a meaningful sample using the same written rubric. Record agreement and disagreement by field instead of forcing a consensus score. A disagreement may identify an unclear definition, a missing source, or an authority boundary that deserves repair.`,
    `Exclude private conversation and inaccessible systems rather than pretending they were reviewed. Mark missing evidence as missing. Retain negative and contradictory cases. Do not discard a record merely because it makes the routine look untidy. If personal or client-confidential information is present, minimize copied data, keep it in approved systems, and limit access to the work purpose.`,
  ]},
  { heading: 'Evidence hierarchy and interpretation rules', paragraphs: [
    `Rank evidence by relevance, authority, specificity, and freshness for the decision at hand. An approved source record may outweigh a newer informal summary; a direct client correction may supersede an older operational field. Preserve both values, the reason for the change, and the person authorized to accept it. Never average incompatible sources into a confident status.`,
    `Code at least five layers: observed source, normalized fact, interpretation, owner decision, and verified follow-through. Each layer needs its own date and actor. A message sent is not proof of receipt, a task marked complete is not proof of acceptance, and an approval request is not approval. Client-safe reporting should state the strongest supported fact and the next check without converting uncertainty into a promise.`,
  ]},
  { heading: 'Framework use and source limits', paragraphs: [
    `NIST CSF 2.0 supplies a useful sequence for governing, identifying, protecting, detecting, responding, and recovering. NIST SP 800-53 adds control language for access, auditability, information handling, and assessment. GAO's internal-control standards emphasize quality information, responsibility, monitoring, and corrective action. ISO's quality principles support customer focus, process discipline, evidence-based decisions, and improvement. FTC guidance reinforces practical access control and data minimization.`,
    `These publications do not set response times, staffing ratios, service levels, or outcome benchmarks for outsourced account management. They do not prove that a workflow improves satisfaction or retention. This study uses them as authoritative design lenses. The buyer's contract, policies, client instructions, permitted systems, and named owners determine the actual control. Any recommendation that conflicts with those sources must be rejected or escalated.`,
  ]},
  { heading: 'Analysis, limitations, and replication', paragraphs: [
    `Analyze the distribution of states and the path between them, not only an average duration or completion percentage. Report denominators, exclusions, missing fields, reopened records, and reviewer disagreements. Separate descriptive findings from inference. If one category appears more often, say that it appeared more often in the sampled records; do not claim the category caused delay or a client outcome.`,
    `Material limitations include small samples, inaccessible client channels, informal decisions, inconsistent timestamps, different contracts, account complexity, geography, tool configuration, holidays, stakeholder availability, and survivorship in retained records. Results cannot establish a universal rate or guarantee. A later replication should reuse the frozen rubric, sample a new period, blind reviewers to the final outcome where practical, and publish changes to definitions before comparing cycles.`,
    `The evidence-led conclusion should therefore be narrow: ${t.decision} becomes more reviewable when the source, definition, owner, authority, exception, and next check remain connected. The outsourced role can prepare that record and route it. The accountable owner decides any consequential action and approves any sensitive client communication.`,
  ]},
];

const topics: Topic[] = [
  {
    slug: 'account-stakeholder-role-change-detection', title: 'How should account teams detect stakeholder role changes?', cluster: 'Hiring Controls',
    excerpt: 'A bounded study of how outsourced account teams can identify stakeholder-role changes without treating silence, title edits, or hearsay as authority.',
    question: 'which evidence makes a stakeholder-role change decision-ready, and when should an account team verify rather than infer?', unit: 'a dated stakeholder-role assertion linked to its source and affected account work',
    comparison: 'compare confirmed changes, suspected changes, stale records, delegated contacts, and false alarms by source class, consequence, and time to owner verification',
    decision: 'stakeholder-role change detection and safe routing', service: 'crm-account-maintenance', related: ['stakeholder-transition-signal-validity', 'client-contact-data-freshness'],
    specific: [
      { heading: 'Role-change evidence model', paragraphs: [
        'A job-title edit, an out-of-office message, a bounced address, a new meeting attendee, and a direct client instruction are not equivalent evidence. Define a role assertion as a claim about who can receive information, provide input, approve work, or make a commitment. Record the exact source and the operational consequence separately. A title may change without changing account authority; an authority change may occur before a directory is updated.',
        'Use states such as observed, verification pending, owner confirmed, client confirmed, superseded, and rejected. The support specialist may identify affected meetings, reports, access requests, and approval queues, but should not grant access or transfer authority. Until confirmation, use approved fallback contacts and neutral wording. Avoid telling a client that someone has lost authority unless an authorized source supports that statement.',
      ]},
      { heading: 'Detection test and decision use', paragraphs: [
        'Test whether a second reviewer can reconstruct why each role status changed. For every sampled change, trace the first signal, verification request, controlling source, affected workflows, owner decision, and corrections. Compare high-consequence changes, such as an approver replacement, with low-consequence directory maintenance. The review should expose where one weak signal silently changed several downstream records.',
        'A decision-ready role-change record names the account, person or function, former and proposed role, source, effective date if known, uncertainty, systems affected, authorized verifier, and next check. It supports CRM maintenance and handoff readiness. It does not prove employment status, client intent, or permission to disclose information. Those boundaries should remain visible in the account record.',
      ]},
    ],
    rows: [['Observed signal','Source and event date','Does not prove authority'],['Verification pending','Named verifier and next check','Do not change access'],['Confirmed change','Authoritative source and effective date','Update affected workflows'],['Rejected or superseded','Reason and retained history','Prevents repeated inference']],
  },
  {
    slug: 'account-report-correction-propagation-study', title: 'Do account-report corrections reach every downstream record?', cluster: 'Workflow Design',
    excerpt: 'A source-backed method for testing whether a corrected account fact propagates through reports, CRM fields, decision briefs, and client-safe updates.',
    question: 'when a material account fact is corrected, can reviewers verify that every relevant downstream record received the correction?', unit: 'a correction event paired with the original value and an inventory of downstream uses',
    comparison: 'compare fully propagated, partially propagated, late, disputed, and reopened corrections by field type, channel, consequence, and verification evidence',
    decision: 'correction propagation across account reporting', service: 'account-reporting', related: ['account-record-reconciliation-study', 'qbr-source-correction-propagation'],
    specific: [
      { heading: 'Correction lineage model', paragraphs: [
        'A corrected CRM field does not automatically repair a QBR deck, renewal brief, meeting note, exported sheet, or previously drafted client update. Start with the correction source and create a bounded impact map. List each place where the former value was used, its owner, whether it is authoritative or derived, and whether an amendment, replacement, annotation, or no action is appropriate.',
        'Preserve the former value and correction reason where policy allows. Silent overwrite removes the evidence needed to explain why two records differ. The specialist can trace approved systems, prepare the impact list, and mark verification. The accountable owner decides sensitive wording, whether a client correction is required, and whether a contractual, financial, security, or privacy consequence exists.',
      ]},
      { heading: 'Propagation test and stopping rule', paragraphs: [
        'Choose material fields with different lifecycles: a contact role, milestone date, scope statement, health indicator, or approved outcome measure. Inject no synthetic client facts; use actual authorized corrections or a controlled test environment. A propagation step passes only when the destination shows the new value, references the controlling source where appropriate, and no active workflow continues using the superseded value.',
        'Closure requires a reviewed impact inventory, not a count of edited screens. If a destination is inaccessible, record the owner and pending check. If history must remain unchanged, add a visible correction rather than rewriting the past. Report residual exposure plainly. The test measures record consistency under the stated scope; it cannot establish that every private copy or recipient memory changed.',
      ]},
    ],
    rows: [['Source correction','Old value, new value, authority','Starts the lineage'],['Downstream active record','Updated and source linked','Verify current use'],['Historical artifact','Annotation or retained context','Do not falsify history'],['Unreachable destination','Owner and next check','Carry as residual risk']],
  },
  {
    slug: 'client-onboarding-permission-readiness-gap', title: 'Where do permission-readiness gaps delay client onboarding?', cluster: 'Hiring Controls',
    excerpt: 'A controlled study of whether an onboarding task has the minimum approved access, training, owner, and fallback needed before work begins.',
    question: 'how can an outsourced account team distinguish a true permission-readiness gap from ordinary onboarding sequence or missing task definition?', unit: 'one approved onboarding task with its required system action, minimum permission, owner, and planned start',
    comparison: 'compare tasks ready at planned start with tasks blocked by missing approval, wrong role, incomplete training, unavailable owner, undefined requirement, or technical failure',
    decision: 'permission readiness for client onboarding', service: 'client-onboarding-coordination', related: ['onboarding-control-evidence-gap-analysis', 'client-onboarding-control-points'],
    specific: [
      { heading: 'Readiness is more than account creation', paragraphs: [
        'An invitation email is not proof that a person can complete an assigned task. Define readiness as the minimum approved ability to perform one named action in the correct client context, with required training, a support route, and a known owner. Separate identity verification, account provisioning, role assignment, successful sign-in, task-level capability, and data availability. Each can fail independently.',
        'Apply least privilege: request only the access needed for the approved task and duration. The specialist can prepare the request, test permitted actions, document the result, and route a gap. They must not borrow credentials, bypass controls, self-approve expanded rights, export unnecessary data, or interpret a technical workaround as client authorization. A safe fallback may be reassignment, supervised execution, or a revised start date approved by the owner.',
      ]},
      { heading: 'Gap coding and readiness gate', paragraphs: [
        'Freeze the approved task list before measuring readiness. For each task, record the system, action, data class, requested role, approving owner, request date, planned need date, test method, result, blocker class, and next check. Time begins when a complete authorized request is available, not when someone first mentions access. This prevents undefined work from being mislabeled as a provisioning delay.',
        'The readiness gate passes when the named person can complete the bounded action using their own approved identity and the evidence is retained. It does not require broad access. Analyze where requests loop, which requirements were discovered late, and whether fallback ownership was clear. The study can reveal control-design and sequencing gaps, but cannot assign blame or promise an onboarding duration.',
      ]},
    ],
    rows: [['Defined task','System, action, data, need date','Basis for minimum access'],['Authorized request','Approver and requested role','Not yet usable'],['Capability verified','Bounded test and timestamp','Ready for named task'],['Gap open','Blocker, owner, fallback, recheck','No credential sharing']],
  },
  {
    slug: 'account-approval-queue-sequencing-analysis', title: 'Which account approval should be reviewed first?', cluster: 'Scope Benchmarks',
    excerpt: 'A decision model for sequencing client-account approvals by consequence, dependency, evidence readiness, and decision window rather than arrival time alone.',
    question: 'which sequencing rule makes an account approval queue reviewable without allowing urgency or seniority to conceal consequence and evidence gaps?', unit: 'one complete approval request tied to a specific decision, decision owner, client consequence, and deadline basis',
    comparison: 'compare first-in-first-out, deadline-only, consequence-weighted, dependency-aware, and evidence-readiness sequencing against the same frozen queue',
    decision: 'approval-queue sequencing for account work', service: 'client-request-routing', related: ['client-approval-dependency-queue-analysis', 'client-approval-latency-interpretation'],
    specific: [
      { heading: 'Define a reviewable queue', paragraphs: [
        'An approval queue should not mix incomplete questions, routine acknowledgments, access changes, commercial decisions, and security issues under one generic priority. Before sequencing, require a decision statement, source, options, recommendation if authorized, affected client commitment, consequence of waiting, actual deadline and its basis, dependencies, evidence gaps, and named decision owner. Incomplete requests enter a clarification state rather than acquiring artificial urgency.',
        'Sequence is a recommendation for review order, not authority to decide. The specialist can normalize the packet, flag collisions, propose an order, and prepare acknowledgments. The owner may override that order, but the reason should be visible. Legal, security, privacy, contractual, and financial matters follow their dedicated escalation routes even when another item has an earlier routine deadline.',
      ]},
      { heading: 'Counterfactual queue test', paragraphs: [
        'Take a frozen historical queue and replay it under each rule without using final outcomes to change the inputs. Observe which decision windows would have been missed, which high-consequence items would wait, how many packets were not decision-ready, and where one approval unblocked several others. Include an item from a senior stakeholder and test whether its ordering rests on consequence or merely source status.',
        'A practical model can use ordered bands rather than a false numeric precision: dedicated escalation route; time-bound high consequence; dependency-unblocking; routine complete; clarification required. Within a band, apply the documented deadline and arrival time. Publish exceptions and overrides. The result can support a transparent operating rule, but it cannot determine the substantive approval or prove that a different order would have changed a client outcome.',
      ]},
    ],
    rows: [['Dedicated escalation','Legal, security, privacy, contract route','Use specialist policy'],['High consequence','Decision window and client effect','Owner review first'],['Dependency-unblocking','Named downstream work','Verify readiness'],['Clarification required','Missing decision evidence','Do not disguise as approval']],
  },
  {
    slug: 'client-communication-channel-continuity', title: 'Can client communication survive a channel change?', cluster: 'Workflow Design',
    excerpt: 'A bounded continuity study for preserving context, authority, privacy, and follow-up when client communication moves between email, meetings, CRM, and messaging tools.',
    question: 'what evidence is needed to move an account conversation between approved channels without losing the decision, qualification, owner, or next check?', unit: 'one communication transition between two approved channels for a bounded client topic',
    comparison: 'compare transitions that preserve source wording, decision state, owner, due condition, and privacy boundary with transitions that omit or alter one of those elements',
    decision: 'client communication continuity across approved channels', service: 'client-request-routing', related: ['client-communication-channel-evidence-loss', 'client-conversation-thread-continuity'],
    specific: [
      { heading: 'Continuity record for a channel transition', paragraphs: [
        'Channel changes are normal: a meeting creates an email follow-up, a shared inbox request becomes a CRM action, or a messaging exchange needs an approved decision. The risk is not the channel itself but loss of qualification, authority, audience, or promised next step. Create a transition record containing the original source reference, topic, confirmed fact, unresolved question, decision state, named owner, permitted audience, next action, and deadline basis.',
        'Copy only what the destination needs. A private message may contain context that should not enter a broad CRM note, while a decision needed by the account team cannot remain trapped in one person’s inbox. The specialist may prepare a minimized summary and route it for approval. They should not change the meaning, expand the audience, or present a draft as an authorized client commitment.',
      ]},
      { heading: 'Continuity test and failure taxonomy', paragraphs: [
        'Sample channel transitions around requests, decisions, escalations, and follow-ups. Ask an independent reviewer to reconstruct what happened using only the approved destination record. Then compare it with the source under controlled access. Code missing qualification, altered certainty, absent owner, lost attachment, wrong audience, unsupported deadline, duplicated response, and unclosed loop. Preserve benign transitions as well as failures.',
        'A transition passes when the destination supports the next authorized action without requiring guesswork and the source remains traceable. It does not need a verbatim copy; minimization may require a concise summary. A failure should trigger correction and a review of affected actions, not automatic blame. The study can measure reconstructability within retained channels. It cannot prove receipt, comprehension, client sentiment, or completeness of conversations outside the authorized sample.',
      ]},
    ],
    rows: [['Source context','Reference, audience, exact qualification','Preserve traceability'],['Transition summary','Fact, question, state, owner','Minimize copied data'],['Destination action','Authorized next step and due basis','Avoid invented commitment'],['Continuity check','Independent reconstruction','Record gaps and correction']],
  },
];

export const research20260918: ResearchPost[] = topics.map((t) => ({
  slug: t.slug, title: t.title, cluster: t.cluster, excerpt: t.excerpt,
  headlineStat: 'Five evidence layers separate an observed source from verified follow-through',
  statSource: 'Route-specific synthesis of NIST, GAO, FTC, and ISO control principles',
  published: '2026-09-18', datePublished: '2026-09-18', updated: '2026-09-18',
  takeaways: [
    'Define the unit, source, decision, authority, and comparison before inspecting the result.',
    'Preserve missing, contradictory, corrected, and reopened records instead of forcing a clean status.',
    'Keep preparation and coordination with the support role while consequential decisions remain with the accountable owner.',
    'Use a dated next check and verification evidence; a sent message or changed field is not automatic closure.',
  ],
  sections: [
    ...commonSections(t).slice(0, 2), ...t.specific, ...commonSections(t).slice(2),
  ],
  table: { headers: ['Evidence state', 'Minimum record', 'Decision boundary'], rows: t.rows },
  sources,
  researchMethodology: `Fixed-window review of ${t.unit}, with frozen evidence, explicit inclusion rules, independent recoding, retained disagreements, and a replication plan.`,
  externalSources: sources.map((s) => s.url),
  faqs: [
    { q: 'Can this method prove a client outcome?', a: 'No. It describes evidence quality and workflow state inside a bounded sample; it does not prove cause, satisfaction, retention, revenue, or a guaranteed result.' },
    { q: 'What can a Philippines-based account specialist do?', a: 'The specialist can gather permitted evidence, maintain assigned records, prepare a neutral brief, flag exceptions, and coordinate the next check. Accountable owners retain contract, financial, legal, security, access, scope, and sensitive client-commitment decisions.' },
    { q: 'How should another team replicate the study?', a: 'Freeze the definitions and observation window, retain missing and contrary cases, have a second reviewer code a sample independently, report exclusions, and disclose any definition change before comparing cycles.' },
  ],
  related: t.related,
  internalLinks: [
    { label: `Review ${t.service.replaceAll('-', ' ')} support`, href: `/services/${t.service}` },
    { label: 'Explore the research library', href: '/research' },
  ],
}));
