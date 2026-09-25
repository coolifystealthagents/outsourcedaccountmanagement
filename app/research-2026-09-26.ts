import type { ResearchPost } from './research-data';

const checked = 'checked September 26, 2026';
const sources = [
  { name: 'NIST Cybersecurity Framework 2.0', date: `February 26, 2024; ${checked}`, url: 'https://www.nist.gov/cyberframework', note: 'Primary risk-management framework used for governance, asset, protection, response, and recovery vocabulary. It does not prescribe an account-management service level.' },
  { name: 'NIST SP 800-53 Rev. 5, Release 5.2.0', date: `August 27, 2025; ${checked}`, url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Primary control catalog used for access, audit, least privilege, information integrity, retention, assessment, and accountability concepts; controls require local tailoring.' },
  { name: 'GAO Standards for Internal Control in the Federal Government', date: `May 15, 2025; ${checked}`, url: 'https://www.gao.gov/products/gao-25-107721', note: 'Authoritative framework for control design, quality information, segregation of duties, monitoring, and corrective action. Private account teams are not represented as subject to federal requirements.' },
  { name: 'FTC Start with Security: A Guide for Business', date: `June 2015; ${checked}`, url: 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business', note: 'Authoritative practical guidance on data minimization, access, service-provider oversight, retention, and secure disposal.' },
  { name: 'Philippine National Privacy Commission: Data Privacy Act of 2012', date: checked, url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Primary Philippine legal source for personal-information context. Qualified owners must determine applicability, obligations, and approved handling.' },
  { name: 'ISO quality management principles', date: checked, url: 'https://www.iso.org/quality-management/principles', note: 'Authoritative overview of customer focus, process, improvement, relationship management, and evidence-based decision-making principles.' },
];

type Topic = {
  slug: string; title: string; cluster: string; excerpt: string; hero: string;
  question: string; unit: string; comparison: string; service: string; decision: string;
  risk: string; design: string; fields: string; conclusion: string; rows: string[][]; related: string[];
};

const topics: Topic[] = [
  {
    slug: 'client-response-time-clock-definition-study', title: 'When does the client-response clock actually run?', cluster: 'Scope Benchmarks',
    excerpt: 'A decision study of receipt, business hours, pauses, dependencies, acknowledgements, substantive replies, and closure.', hero: '/research-heroes/2026-09-22-escalation-stage-latency.png',
    question: 'whether account-response reporting uses a reproducible clock instead of mixing acknowledgements, substantive answers, and final resolution', unit: 'one inbound client request traced from authorized receipt through the first qualifying response and any later resolution', comparison: 'business-hour and elapsed-hour clocks, acknowledged and answered requests, paused and active intervals, reopened cases, and requests received through unmonitored channels', service: 'account-reporting', decision: 'response-time definition and reporting',
    risk: 'A fast acknowledgement can be mistaken for an answer, while a complete response may depend on a client fact or owner decision. Starting the clock at message creation for one channel and CRM entry for another makes account comparisons look precise while measuring different intervals.',
    design: 'Freeze the channel, receipt event, timezone, working calendar, start rule, pause reasons, response threshold, resolution threshold, reopen rule, and cutoff before reviewing durations.', fields: 'request identifier, authorized channel, sent and received times, timezone, calendar version, acknowledgement, substantive response evidence, dependency, pause approval, resolution, reopen event, owner, and correction history',
    conclusion: 'response-time reporting is decision-ready only when the clock, qualifying event, pauses, and unresolved work stay visible',
    rows: [['Receipt','Channel, timestamp, timezone','Sent is not always received'],['Clock','Calendar, start, pauses','Publish rules first'],['Response','Exact evidence and threshold','Acknowledged is not answered'],['Closure','Resolution and reopen rule','Do not erase later exceptions']], related: ['client-escalation-stage-latency-study','account-manager-response-latency'],
  },
  {
    slug: 'account-access-deprovisioning-lag-research', title: 'How long does obsolete account access remain active?', cluster: 'Hiring Controls',
    excerpt: 'A bounded access study from role-change evidence through decision, revocation, verification, and exception closure.', hero: '/research-heroes/2026-09-22-crm-identity-collision.png',
    question: 'whether access that is no longer justified is identified, removed, and independently verified through an authorized process', unit: 'one person-system-role entitlement affected by a dated role, client, employment, or responsibility change', comparison: 'planned and unplanned changes, direct and inherited access, active and dormant accounts, standard and exception paths, and verified and assumed revocations', service: 'crm-account-maintenance', decision: 'access review routing and deprovisioning verification',
    risk: 'Removing a visible CRM role may leave group membership, shared credentials, exports, integrations, or client portals unchanged. Conversely, an account disabled without checking ownership can interrupt approved client work or destroy the evidence needed for continuity.',
    design: 'Start with a predeclared entitlement population and change events. Trace notification, authority, inventory, decision, execution, inherited access, exception, evidence preservation, verification, and residual access without attempting unauthorized access.', fields: 'person or service identity, system, role, source of entitlement, change event, notification time, accountable approver, revocation action, executor, verification method, residual path, exception expiry, and evidence location',
    conclusion: 'deprovisioning becomes reviewable when role-change evidence is connected to every entitlement, authorized action, residual path, and verification result',
    rows: [['Trigger','Dated role or relationship change','Rumor is not authority'],['Inventory','Direct and inherited paths','Visible role is not complete'],['Action','Approver, executor, timestamp','Do not self-authorize'],['Verify','Independent evidence and exceptions','Disabled is not fully removed']], related: ['client-account-management-access-governance-research','crm-permission-drift-analysis'],
  },
  {
    slug: 'client-request-scope-change-detection-study', title: 'When does a client request become a scope change?', cluster: 'Workflow Design',
    excerpt: 'A language-and-evidence study of clarifications, substitutions, additions, approvals, dependencies, and commercial boundaries.', hero: '/research-heroes/2026-09-24-commitment-decomposition.png',
    question: 'whether teams can distinguish an in-scope clarification from a changed deliverable, condition, deadline, responsibility, approval, or commercial term', unit: 'one client-request revision linked to the controlling statement of work, approved procedure, and prior request version', comparison: 'clarifications, corrections, substitutions, additions, accelerated dates, changed acceptance conditions, and requests that remain ambiguous', service: 'client-request-routing', decision: 'scope-change detection and accountable routing',
    risk: 'Friendly wording can hide a new deliverable, accelerated date, additional system, different approver, or broader data use. Treating every clarification as a change creates friction; treating every follow-up as included can create unauthorized commitments.',
    design: 'Freeze the governing source and compare each revision field by field. Record changed nouns, verbs, quantities, systems, dates, dependencies, acceptance conditions, decision rights, data categories, and unresolved ambiguity before classifying the request.', fields: 'request version, source wording, controlling scope source, deliverable, quantity, deadline condition, dependency, system, data class, approver, acceptance test, proposed classification, owner decision, and client-safe response',
    conclusion: 'scope-change detection is reliable when changed obligations are shown explicitly and the support role routes rather than decides consequential terms',
    rows: [['Baseline','Approved scope and version','Use controlling source'],['Difference','Exact changed field or wording','Do not infer silently'],['Impact','Dependency, authority, data, timing','Separate evidence from judgment'],['Decision','Owner, response, effective version','Draft is not approval']], related: ['outsourced-account-request-consequence-routing','client-request-completeness-audit'],
  },
  {
    slug: 'account-backup-coverage-activation-analysis', title: 'Can backup account coverage activate without losing control?', cluster: 'Workflow Design',
    excerpt: 'An activation analysis of triggers, minimum context, permissions, authority, workload, communication, and return-to-owner evidence.', hero: '/research-heroes/2026-09-24-owner-continuity.png',
    question: 'whether backup coverage can begin, operate, and return work with enough context and bounded authority during an owner absence', unit: 'one primary-owner absence or availability constraint that invokes, should invoke, or tests a documented backup path', comparison: 'planned and unplanned absences, activated and missed triggers, primary and secondary backups, routine and consequential work, and clean and disputed returns', service: 'account-health-monitoring', decision: 'backup activation and portfolio coverage design',
    risk: 'A backup name on a roster does not prove usable access, current context, available capacity, client recognition, or authority. Copying all permissions and conversation history “just in case” can also exceed the minimum necessary for approved coverage.',
    design: 'Define activation triggers before selecting cases. Trace availability signal, portfolio consequence, backup acknowledgement, minimum context, least-privilege access, excluded decisions, client communication rule, queue changes, escalation, and return acceptance.', fields: 'primary owner, backup, activation trigger, observed time, affected accounts, priority rule, access basis, context packet, excluded decisions, acknowledgement, actions, escalation, return record, and exceptions',
    conclusion: 'backup coverage is credible only when activation, capacity, context, permissions, authority, and return acceptance are independently evidenced',
    rows: [['Trigger','Absence and consequence rule','Calendar event may be insufficient'],['Readiness','Capacity, context, access','Named is not ready'],['Operation','Allowed actions and escalation','Coverage is not full authority'],['Return','Open work and acceptance','Handoff back must be recorded']], related: ['client-relationship-owner-continuity-study','account-coverage-gap-detection'],
  },
  {
    slug: 'client-data-retention-disposition-research', title: 'What happens when client account data reaches its retention decision?', cluster: 'Hiring Controls',
    excerpt: 'A lifecycle study of record purpose, authority, holds, copies, exports, deletion, preservation, and verification.', hero: '/research-heroes/2026-09-24-evidence-lineage.png',
    question: 'whether a retention decision propagates to approved account records and copies without destroying required evidence or retaining data by default', unit: 'one defined record class for one client relationship, system, purpose, and disposition event', comparison: 'retain, archive, return, restrict, anonymize, and delete outcomes; active and ended relationships; primary records and derived copies; routine rules and documented holds', service: 'crm-account-maintenance', decision: 'retention-disposition preparation and accountable approval',
    risk: 'Deleting a CRM field may leave exports, attachments, backups, reports, email copies, or integration stores. Blanket deletion can conflict with a valid hold or approved business need, while indefinite retention increases exposure and makes old context look current.',
    design: 'Build the record-class map before testing outcomes. Trace stated purpose, authority, system of record, duplicates, transformation, retention trigger, rule version, hold, owner decision, executor, evidence of disposition, exceptions, and downstream verification.', fields: 'record class, client, purpose, data elements, system, source, copies, governing rule, trigger date, hold, decision owner, disposition, executor, verification, exception, expiry, and correction trail',
    conclusion: 'retention decisions become auditable when purpose, authority, copies, holds, disposition, and verification remain connected for each record class',
    rows: [['Classify','Purpose, elements, system','Label before action'],['Decide','Rule, trigger, hold, owner','Age alone is not authority'],['Execute','Approved disposition and actor','Primary record is not every copy'],['Verify','Residuals, exceptions, evidence','Do not claim universal deletion']], related: ['account-evidence-lineage-across-systems-research','account-record-reconciliation-study'],
  },
];

const sections = (t: Topic) => [
  { heading: 'Research question and decision boundary', paragraphs: [
    `This study asks ${t.question}. The unit is ${t.unit}. The intended decision is ${t.decision}. That boundary prevents a convenient account label from replacing the event and evidence being studied. It also prevents one workflow observation from becoming a claim about employee quality, client sentiment, contractual compliance, security, privacy compliance, revenue, retention, response guarantees, or service performance.`,
    `A Philippines-based account specialist may gather permitted records, normalize assigned fields, identify missing or contradictory evidence, prepare a neutral comparison, draft approved-language options, and route an exception. Contract, pricing, refund, legal, privacy, security, access, scope, personnel, and client-commitment decisions remain with the named accountable owner. The study evaluates whether the decision record is usable; it does not transfer decision authority.`,
  ]},
  { heading: 'Why the apparent signal can mislead', paragraphs: [
    t.risk,
    `A defensible analysis separates observed facts, interpretations, inferences, and decisions. The working claim ledger should retain the source, source date, observed event, relevant definition, competing interpretation, uncertainty, authority, affected account work, owner, and next verification condition. Labels such as urgent, complete, covered, approved, removed, retained, or on time are conclusions that require route-specific evidence and a written threshold.`,
    `The comparison is ${t.comparison}. Those categories are not assumed to be equivalent or exhaustive. A favorable state does not prove causality or a commercial result, and an exception does not establish a portfolio rate. Where visibility differs by channel, client, system, or permission, report that difference rather than treating an unseen event as absent.`,
  ]},
  { heading: 'Methodology and sampling plan', paragraphs: [
    t.design,
    `The minimum extraction fields are ${t.fields}. Freeze the observation window, eligible population, inclusion and exclusion rules, source hierarchy, timezone and calendar where relevant, duplicate rule, missingness codes, comparison fields, and stopping rule before outcomes are reviewed. Select from an upstream eligible frame so closed, searchable, recent, or well-documented cases do not crowd out unresolved and difficult cases.`,
    `Include routine, incomplete, corrected, disputed, reopened, exception, and missing-evidence cases. Preserve nonselection and substitutions. If a source cannot be accessed through an approved account, mark it unavailable and route the access question; do not reconstruct it from memory or use credentials outside the authorized workflow. Late evidence belongs in a dated sensitivity analysis rather than silently changing the original result.`,
    `Have two reviewers independently code a meaningful subset with the same field guide, without resolving differences in advance. Report agreement by field and preserve disagreements. Agreement supports reproducibility under this protocol, not objective truth; disagreement may reveal an ambiguous definition, missing source, different permission boundary, or an owner decision that was never recorded.`,
  ]},
  { heading: 'Evidence hierarchy, privacy, and authority', paragraphs: [
    `Rank evidence for each claim by authority, specificity, relevance, and freshness. A recent informal message may not override an approved policy or client instruction, while an authorized correction may supersede an older CRM field. Preserve the earlier state, corrected state, effective date, actor, basis, and downstream effect. Do not average incompatible records into false certainty.`,
    `Apply data minimization and least privilege throughout. Review only approved systems, accounts, clients, and fields; avoid copying personal or client-confidential data into analysis files; restrict exports; and keep a defined disposal path for working material. The Philippine Data Privacy Act and FTC guidance provide context, but qualified accountable owners determine legal obligations and permitted handling for the actual client, contract, system, and jurisdiction.`,
    `NIST CSF 2.0 supplies governance and risk-management outcomes. NIST SP 800-53 supplies adaptable control language for access, accountability, audit, information integrity, assessment, and retention. GAO's 2025 Green Book emphasizes control design, quality information, monitoring, segregation, and remediation. These are analytical lenses, not claims that a private account team is regulated by a federal control framework.`,
  ]},
  { heading: 'Analysis and decision-ready reporting', paragraphs: [
    `Begin with population counts, selected records, exclusions, unavailable sources, missing fields, contradictory records, exceptions, state transitions, and reviewer disagreements. Then report the observed pattern with its denominator and time boundary. If one state appears more frequently, say exactly that. Do not claim it caused satisfaction, churn, revenue, compliance, safety, speed, or any other client outcome without a design capable of supporting that conclusion.`,
    `A decision-ready brief states the decision question, strongest supported observation, contrary case, material uncertainty, controlling source, accountable owner, permitted support action, prohibited action, and next review trigger. It links back to the record rather than repeating sensitive content. Cross-account aggregation is appropriate only when definitions, clocks, eligibility, and visibility are comparable; otherwise publish bounded case findings.`,
    `For outsourced account management, operational usefulness comes from keeping evidence preparation distinct from approval. The support role can make an exception legible and timely. It should not silently choose the contract meaning, approve expanded access, waive a control, promise delivery, decide legal applicability, or represent an inference as a client fact.`,
  ]},
  { heading: 'Controls and operating implications', paragraphs: [
    `FTC guidance supports sensible access, minimization, retention discipline, and service-provider oversight. ISO quality principles support customer focus, process thinking, relationship management, improvement, and evidence-based decisions. Together with the NIST and GAO sources, they support a practical control pattern: define the state, preserve the authoritative source, separate duties where consequence warrants it, document exceptions, verify execution, and monitor whether the control still answers the intended question.`,
    `None of the cited sources provides an outsourced-account-management staffing ratio, response target, retention schedule, contractual interpretation, workflow duration, or performance benchmark. Local contracts, client instructions, approved policies, system rules, working calendars, and named decision rights govern. A control framework can organize questions and evidence; it cannot manufacture permission or prove that a proposed workflow improves a client outcome.`,
    `The narrow operating conclusion is that ${t.conclusion}. Teams should pilot the record on a bounded sample, measure the burden of collecting it, inspect exceptions, and obtain accountable approval before changing a live procedure. A result that cannot be reproduced from approved evidence should remain provisional.`,
  ]},
  { heading: 'Limitations and replication protocol', paragraphs: [
    `Material limitations include small or convenience samples, private conversations, inaccessible client systems, informal decisions, incomplete histories, inconsistent clocks, configuration changes, contract differences, geography, holidays, stakeholder availability, survivorship in retained records, and reviewer knowledge of outcomes. Records visible to an outsourced specialist may omit authoritative decisions held elsewhere. Public reporting must not expose client-confidential, personal, security-sensitive, or credential information.`,
    `Another team can replicate this work by freezing the same unit, definitions, eligibility rules, window, source hierarchy, field guide, and comparison before selecting a new period. It should recode a subset independently, retain missing and contrary cases, report exclusions and late evidence, and disclose every method change. A changed rule starts a new comparison series unless the old records can be recoded without hindsight.`,
    `The conclusion remains bounded to the sampled evidence and the stated protocol. It is not a universal benchmark, guarantee, testimonial, causal estimate, legal opinion, security assessment, or promise of client results. The useful output is a traceable decision record that shows what is known, what is not, who may decide, what the support role may prepare, and which new fact will trigger review.`,
  ]},
];

export const research20260926: ResearchPost[] = topics.map((t) => ({
  slug: t.slug, title: t.title, cluster: t.cluster, excerpt: t.excerpt, hero: t.hero,
  published: '2026-09-26', datePublished: '2026-09-26', updated: '2026-09-26',
  headlineStat: 'Seventeen evidence fields connect an operating event to an accountable decision',
  statSource: 'Route-specific synthesis of NIST, GAO, FTC, Philippine NPC, and ISO control principles',
  takeaways: [
    'Define the event, population, clock, authority, and comparison before reviewing outcomes.',
    'Preserve missing, contradictory, corrected, exception, and reopened records.',
    'Keep evidence preparation with the support role and consequential judgment with the accountable owner.',
    'Require dated execution evidence and a next verification condition before claiming closure.',
  ],
  sections: sections(t), table: { headers: ['Evidence stage', 'Minimum record', 'Boundary'], rows: t.rows }, sources,
  researchMethodology: `Fixed-window review of ${t.unit}; frozen definitions and sources; explicit missingness; independent recoding; exception analysis; bounded conclusions.`,
  externalSources: sources.map((source) => source.url),
  faqs: [
    { q: 'Can this study prove a client outcome?', a: 'No. It describes evidence and workflow states in a bounded sample; it cannot prove causality, satisfaction, retention, revenue, compliance, or a guaranteed result.' },
    { q: 'What may the outsourced account specialist do?', a: 'They may gather permitted evidence, maintain assigned records, prepare neutral summaries, flag exceptions, and coordinate approved follow-up. Consequential decisions remain with accountable owners.' },
    { q: 'How should another team replicate it?', a: 'Freeze definitions and the observation window, select from the eligible frame, retain missing and contrary cases, independently recode a subset, report exclusions, and disclose every method change.' },
  ],
  related: t.related,
  internalLinks: [
    { label: `Review ${t.service.replaceAll('-', ' ')} support`, href: `/services/${t.service}` },
    { label: 'Explore the research library', href: '/research' },
  ],
}));
