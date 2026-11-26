export type ServiceDetail = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  outcomes: string[];
  deliverables: string[];
  workflow: Array<{ title: string; body: string }>;
  boundaries: { supports: string[]; ownerKeeps: string[] };
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
};

const image = '/illustrations/getillustrations/communication-illustrations-pack-svg/client-account-support.webp';

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'client-onboarding-coordination', title: 'Client Onboarding Coordination', heroImage: image,
    summary: 'Coordinate the records, meetings, access requests, and approved follow-up that move a new client from signed agreement to an accountable working rhythm.',
    outcomes: ['A visible onboarding plan with owners and dates', 'Consistent kickoff preparation and follow-up', 'Early blockers routed to the accountable owner'],
    deliverables: ['Client intake checklist', 'Kickoff agenda and notes', 'Access and dependency register', 'Open-action tracker', 'First-month status summary'],
    workflow: [{title:'Collect the approved brief',body:'Gather the signed scope, contacts, milestones, communication preferences, and owner-approved source records.'},{title:'Build the launch record',body:'Translate the brief into dated tasks, owners, dependencies, meetings, and required access without changing the commercial scope.'},{title:'Coordinate and report',body:'Send approved reminders, maintain status, capture decisions, and route blocked or out-of-scope work.'}],
    boundaries: { supports:['Scheduling and approved reminders','Task and dependency tracking','Meeting records and status summaries'], ownerKeeps:['Contract interpretation','Scope or timeline changes','Security approval and commercial promises'] },
    faqs: [{question:'Can the specialist lead a kickoff call?',answer:'They can prepare, schedule, document, and facilitate an approved agenda. Your designated owner should handle scope, pricing, legal, and policy decisions.'},{question:'What must be ready before onboarding starts?',answer:'Provide the signed scope, client contacts, milestone dates, approved messaging, access process, and a named decision owner.'}], related:['implementation-handoff-support','crm-account-maintenance','client-request-routing']
  },
  {
    slug:'account-health-monitoring',title:'Account Health Monitoring',heroImage:image,
    summary:'Maintain a source-backed view of account activity, commitments, service concerns, and relationship signals so owners can review risk without relying on guesswork.',
    outcomes:['Current account signals with source dates','A consistent exception queue for owner review','Clear separation between evidence and judgment'],
    deliverables:['Health-signal register','Stale-data and missing-data queue','Open-commitment review','Weekly exception summary','Owner decision log'],
    workflow:[{title:'Define the signals',body:'Document each signal, source, update cadence, and the conditions that require owner review.'},{title:'Refresh the evidence',body:'Check approved systems for dated activity, open commitments, unresolved issues, and missing records.'},{title:'Escalate exceptions',body:'Present the source facts and affected account to the owner without inventing a score or diagnosis.'}],
    boundaries:{supports:['Source checks and data refreshes','Exception lists and review packets','Approved status reporting'],ownerKeeps:['Risk rating policy','Relationship judgment','Retention, credit, and contract decisions']},
    faqs:[{question:'Does monitoring replace an account owner?',answer:'No. It organizes evidence and exceptions. The account owner interprets context and decides what to do.'},{question:'Can you use our existing health score?',answer:'Yes, when its field definitions, sources, and review rules are documented and approved.'}],related:['account-reporting','crm-account-maintenance','escalation-coordination']
  },
  {
    slug:'renewal-administration',title:'Renewal Administration',heroImage:image,
    summary:'Keep renewal dates, notice windows, supporting records, stakeholders, and preparation tasks visible while commercial decisions remain with your authorized team.',
    outcomes:['Fewer hidden renewal deadlines','A complete preparation packet for each owner','Open issues surfaced before the decision window'],
    deliverables:['Renewal calendar', 'Notice-date checklist', 'Stakeholder and document register', 'Preparation packet', 'Decision and follow-up log'],
    workflow:[{title:'Verify dates and sources',body:'Record renewal and notice dates only from approved contracts or owner-verified records.'},{title:'Prepare the packet',body:'Assemble usage context, open commitments, contacts, issues, and missing decisions for review.'},{title:'Track approved follow-up',body:'Maintain owner decisions and send only approved scheduling or administrative messages.'}],
    boundaries:{supports:['Calendar and document administration','Evidence assembly','Approved reminders and status tracking'],ownerKeeps:['Pricing and negotiation','Legal interpretation','Renewal commitment or cancellation']},
    faqs:[{question:'Will the specialist negotiate renewals?',answer:'No. The service prepares records and coordinates approved follow-up. Authorized owners negotiate and commit.'},{question:'How are contract dates verified?',answer:'Dates should be linked to an approved contract record or confirmed by the designated contract owner.'}],related:['contract-milestone-tracking','account-reporting','customer-qbr-preparation']
  },
  {
    slug:'customer-qbr-preparation',title:'Customer QBR Preparation',heroImage:image,
    summary:'Prepare quarterly business review materials from approved sources, unresolved decisions, client context, and a clear meeting follow-up plan.',
    outcomes:['A consistent review packet','Claims tied to identified sources','Decisions and actions captured after the meeting'],
    deliverables:['QBR agenda','Source and metric checklist','Draft review deck outline','Question and decision register','Meeting action summary'],
    workflow:[{title:'Confirm the review question',body:'Agree on the period, audience, approved metrics, and decisions the review should support.'},{title:'Assemble checked material',body:'Collect source links, metric definitions, open commitments, milestones, and context supplied by owners.'},{title:'Close the loop',body:'Capture approved decisions, action owners, due dates, and the next client update.'}],
    boundaries:{supports:['Agenda and evidence preparation','Deck assembly from approved content','Notes and action tracking'],ownerKeeps:['Performance claims','Strategic recommendations','Commercial commitments and executive messaging']},
    faqs:[{question:'Can the specialist create the QBR deck?',answer:'They can assemble it from approved templates and source material. An accountable owner should approve claims and recommendations.'},{question:'What prevents stale metrics?',answer:'Each metric should carry a source, definition, reporting period, and refresh date.'}],related:['account-reporting','account-health-monitoring','customer-feedback-administration']
  },
  {
    slug:'crm-account-maintenance',title:'CRM Account Maintenance',heroImage:image,
    summary:'Keep assigned account records current through documented field definitions, source checks, permission limits, and a review queue for uncertain changes.',
    outcomes:['More usable account records','Visible provenance for important updates','Uncertain or conflicting data held for review'],
    deliverables:['Field-definition guide','Record refresh queue','Duplicate and conflict list','Change log','Weekly data-quality summary'],
    workflow:[{title:'Set field rules',body:'Identify editable fields, accepted sources, required formats, and fields that need owner approval.'},{title:'Process the queue',body:'Update supported facts, attach source context, and hold ambiguous records rather than guessing.'},{title:'Review exceptions',body:'Route duplicates, conflicting evidence, permission issues, and material account changes.'}],
    boundaries:{supports:['Contact and activity upkeep','Approved field updates','Duplicate and stale-record queues'],ownerKeeps:['System administration','Sensitive-data policy','Lifecycle, forecast, and commercial judgments']},
    faqs:[{question:'Can the specialist merge duplicate records?',answer:'Only under a documented merge rule and with the required approval for records that contain conflicting or sensitive information.'},{question:'How is update quality checked?',answer:'Use sampled records, source links, change logs, and a recurring exception review with the CRM owner.'}],related:['account-health-monitoring','client-onboarding-coordination','account-reporting']
  },
  {
    slug:'client-request-routing',title:'Client Request Routing',heroImage:image,
    summary:'Capture incoming client requests, classify them under approved rules, assign the right owner, and keep the client update visible through closure.',
    outcomes:['Requests reach accountable owners faster','Clear status without unsupported promises','Exceptions follow a documented escalation path'],
    deliverables:['Request intake record','Routing and severity matrix','Ownership queue','Approved response templates','Closure and evidence log'],
    workflow:[{title:'Capture the request',body:'Record the client wording, channel, time, affected service, and available evidence.'},{title:'Apply routing rules',body:'Use the approved category, consequence, urgency, and authority matrix to select an owner.'},{title:'Track to closure',body:'Maintain next-update times, owner status, approvals, and evidence that the response loop closed.'}],
    boundaries:{supports:['Intake and categorization','Owner assignment and reminders','Approved acknowledgments'],ownerKeeps:['Legal or security response','Refunds, credits, and concessions','Technical diagnosis and final resolution']},
    faqs:[{question:'Does routing include resolving every request?',answer:'No. The specialist coordinates the record and handoff. Qualified owners resolve issues within their authority.'},{question:'Can priority be automated?',answer:'A documented rule can support triage, but high-impact or ambiguous requests should be reviewed by an accountable person.'}],related:['escalation-coordination','customer-feedback-administration','crm-account-maintenance']
  },
  {
    slug:'upsell-opportunity-tracking',title:'Upsell Opportunity Tracking',heroImage:image,
    summary:'Record client-raised needs and approved expansion signals with their source, context, qualification status, and commercial owner.',
    outcomes:['Potential needs are not lost in notes','Signals remain distinct from qualified opportunities','Commercial outreach stays owner approved'],
    deliverables:['Expansion-signal register','Source and context notes','Qualification question list','Owner follow-up queue','Disposition report'],
    workflow:[{title:'Capture a sourced signal',body:'Record what the client said or did without converting it into an unsupported sales claim.'},{title:'Prepare qualification context',body:'Collect approved questions, account context, dependencies, and unresolved service concerns.'},{title:'Hand off to the owner',body:'Route the record to the commercial owner and track the approved next action and disposition.'}],
    boundaries:{supports:['Signal capture and source notes','Qualification preparation','Owner reminders and status'],ownerKeeps:['Opportunity qualification','Pricing and proposal design','Sales commitments and forecasting']},
    faqs:[{question:'Is every signal an upsell opportunity?',answer:'No. A signal is a prompt for owner review. Qualification depends on client need, fit, timing, authority, and commercial judgment.'},{question:'Will support staff pitch clients?',answer:'Only approved administrative follow-up is in scope. Sales conversations and promises stay with authorized owners.'}],related:['account-health-monitoring','customer-feedback-administration','renewal-administration']
  },
  {
    slug:'account-reporting',title:'Account Reporting',heroImage:image,
    summary:'Produce repeatable portfolio and account summaries from approved systems, with metric definitions, source dates, exceptions, and decisions clearly separated.',
    outcomes:['Comparable reporting across accounts','Metrics that can be traced to a source','Open decisions visible to accountable owners'],
    deliverables:['Weekly account summary','Portfolio exception report','Metric dictionary','Open-decision register','Reporting quality checklist'],
    workflow:[{title:'Define the report',body:'Agree on audience, cadence, source systems, metric definitions, and material exceptions.'},{title:'Compile and validate',body:'Refresh records, check required fields, identify stale inputs, and present missing data openly.'},{title:'Publish after review',body:'Route claims and judgments for approval, then distribute the approved report and action list.'}],
    boundaries:{supports:['Data compilation and formatting','Source and freshness checks','Exception and action reporting'],ownerKeeps:['Forecasts and strategic interpretation','Performance claims','Executive and client-facing approval']},
    faqs:[{question:'Can reports combine several systems?',answer:'Yes, when source precedence, field definitions, access, and reconciliation rules are documented.'},{question:'What happens when data is missing?',answer:'The report should label the gap and route it for correction rather than silently estimating a value.'}],related:['account-health-monitoring','customer-qbr-preparation','crm-account-maintenance']
  },
  {
    slug:'contract-milestone-tracking',title:'Contract Milestone Tracking',heroImage:image,
    summary:'Track owner-confirmed contract milestones, dependencies, evidence, and notice points without interpreting terms or making legal commitments.',
    outcomes:['Milestones and dependencies stay visible','Evidence is ready for owner review','Potential delays surface before key dates'],
    deliverables:['Milestone register','Dependency and evidence checklist','Notice-date calendar','Exception queue','Completion record'],
    workflow:[{title:'Create the approved register',body:'Record milestones from owner-confirmed contract or statement-of-work sources.'},{title:'Check evidence and dependencies',body:'Request approved artifacts, track prerequisites, and identify records that remain incomplete.'},{title:'Route exceptions',body:'Alert the contract owner to delay, ambiguity, missing acceptance, or a notice deadline.'}],
    boundaries:{supports:['Date and dependency tracking','Evidence organization','Administrative reminders'],ownerKeeps:['Contract interpretation','Acceptance decisions','Change orders, notices, and remedies']},
    faqs:[{question:'Can the specialist decide that a milestone is accepted?',answer:'No. They can collect the required evidence and record the authorized owner’s decision.'},{question:'Does this replace legal review?',answer:'No. Legal meaning, obligations, remedies, and formal notices remain with qualified and authorized reviewers.'}],related:['renewal-administration','implementation-handoff-support','account-reporting']
  },
  {
    slug:'customer-feedback-administration',title:'Customer Feedback Administration',heroImage:image,
    summary:'Capture customer feedback in its original context, organize themes under approved definitions, and track owner-approved responses and actions.',
    outcomes:['Source wording remains available','Themes are consistently categorized','Response and action loops stay visible'],
    deliverables:['Feedback intake register','Source and consent notes','Theme summary','Owner response queue','Action and closure log'],
    workflow:[{title:'Preserve the source',body:'Record the client wording, channel, date, account, and relevant consent or handling restrictions.'},{title:'Apply approved themes',body:'Categorize feedback without overstating sentiment or removing important context.'},{title:'Track the response',body:'Route material feedback, record approved action, and maintain evidence of follow-up.'}],
    boundaries:{supports:['Feedback logging and categorization','Theme preparation','Approved follow-up tracking'],ownerKeeps:['Product commitments','Sensitive complaint response','Public claims and strategic prioritization']},
    faqs:[{question:'Can feedback be summarized for leadership?',answer:'Yes, with source context, transparent definitions, and clear separation between observed comments and interpretation.'},{question:'How are sensitive complaints handled?',answer:'Use a restricted route to the designated legal, HR, security, or executive owner under your policy.'}],related:['client-request-routing','account-health-monitoring','customer-qbr-preparation']
  },
  {
    slug:'implementation-handoff-support',title:'Implementation Handoff Support',heroImage:image,
    summary:'Move approved implementation records into an operating account file with owners, access, open risks, accepted deliverables, and first-review checkpoints.',
    outcomes:['Operating teams receive usable context','Open implementation work keeps an owner','The first client update reflects reviewed facts'],
    deliverables:['Handoff acceptance checklist','Account source-of-truth map','Open-work and risk register','Access transition list','First-review packet'],
    workflow:[{title:'Assemble the handoff',body:'Collect approved scope, contacts, decisions, deliverables, open work, access, and client communication history.'},{title:'Run an acceptance check',body:'Ask the receiving owner to confirm completeness, exceptions, and authority boundaries.'},{title:'Support the transition',body:'Track shadowing, first updates, missing records, and accepted ownership through the review window.'}],
    boundaries:{supports:['Record assembly and checklists','Meeting coordination and notes','Open-item tracking'],ownerKeeps:['Delivery acceptance','Technical and scope decisions','Client commitments and access approval']},
    faqs:[{question:'When is a handoff complete?',answer:'When the receiving owner accepts the required records, access, open items, boundaries, and next client action.'},{question:'Should implementation disappear after handoff?',answer:'Not immediately. Keep named implementation owners on unresolved work until accountability is explicitly accepted.'}],related:['client-onboarding-coordination','contract-milestone-tracking','crm-account-maintenance']
  },
  {
    slug:'escalation-coordination',title:'Escalation Coordination',heroImage:image,
    summary:'Maintain a controlled escalation record that brings verified facts, severity rules, decision owners, communication approvals, and closure evidence together.',
    outcomes:['Material issues reach the right owner','Client updates follow approved authority','Closure is documented rather than assumed'],
    deliverables:['Escalation intake record','Severity and owner matrix','Decision timeline','Approved update log','Recovery and closure checklist'],
    workflow:[{title:'Open the record',body:'Capture the report, affected account, available evidence, known impact, and immediate routing conditions.'},{title:'Coordinate decisions',body:'Notify the approved owners, maintain the timeline, and distinguish confirmed facts from open questions.'},{title:'Document recovery',body:'Track approved client updates, corrective actions, acceptance, and the evidence required to close.'}],
    boundaries:{supports:['Record keeping and owner notification','Timeline and communication coordination','Closure evidence collection'],ownerKeeps:['Incident command and diagnosis','Legal, security, and financial decisions','Credits, liability, and client commitments']},
    faqs:[{question:'Can the coordinator declare an incident resolved?',answer:'Only the designated owner can approve resolution. The coordinator records that decision and its supporting evidence.'},{question:'What should an escalation matrix include?',answer:'Define severity, consequence, owner, backup owner, response window, communication authority, and closure requirements.'}],related:['client-request-routing','account-health-monitoring','customer-feedback-administration']
  }
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
