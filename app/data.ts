import { dailyBlogPosts } from './daily-blog-batch';

export const site = {
  domain: 'OutsourcedAccountManagement.com',
  slug: 'outsourcedaccountmanagement',
  brand: 'Outsourced Account Management',
  primary: 'outsourced account management',
  audience: 'agencies and B2B teams needing client follow-up and account support',
  angle: 'client check-ins, renewals, reports, CRM notes, and escalation rules',
  style: 'Account portfolio dashboard',
  dark: '#102033',
  color: '#0f766e',
  accent: '#6366f1',
  heroImage: '/account-team.jpg',
  serviceImage: '/account-team.jpg',
  alt: 'Coworkers discussing work around a shared office desk',
  badge: 'Client desk',
} as const;

export const services = [
  { slug: "client-onboarding-coordination", title: "Client Onboarding Coordination", desc: "Filipino account management specialists can handle client onboarding coordination with documented workflows, approval limits, and owner review." },
  { slug: "account-health-monitoring", title: "Account Health Monitoring", desc: "Filipino account management specialists can handle account health monitoring with documented workflows, approval limits, and owner review." },
  { slug: "renewal-administration", title: "Renewal Administration", desc: "Filipino account management specialists can handle renewal administration with documented workflows, approval limits, and owner review." },
  { slug: "customer-qbr-preparation", title: "Customer QBR Preparation", desc: "Filipino account management specialists can handle customer qbr preparation with documented workflows, approval limits, and owner review." },
  { slug: "crm-account-maintenance", title: "CRM Account Maintenance", desc: "Filipino account management specialists can handle crm account maintenance with documented workflows, approval limits, and owner review." },
  { slug: "client-request-routing", title: "Client Request Routing", desc: "Filipino account management specialists can handle client request routing with documented workflows, approval limits, and owner review." },
  { slug: "upsell-opportunity-tracking", title: "Upsell Opportunity Tracking", desc: "Filipino account management specialists can handle upsell opportunity tracking with documented workflows, approval limits, and owner review." },
  { slug: "account-reporting", title: "Account Reporting", desc: "Filipino account management specialists can handle account reporting with documented workflows, approval limits, and owner review." },
  { slug: "contract-milestone-tracking", title: "Contract Milestone Tracking", desc: "Filipino account management specialists can handle contract milestone tracking with documented workflows, approval limits, and owner review." },
  { slug: "customer-feedback-administration", title: "Customer Feedback Administration", desc: "Filipino account management specialists can handle customer feedback administration with documented workflows, approval limits, and owner review." },
  { slug: "implementation-handoff-support", title: "Implementation Handoff Support", desc: "Filipino account management specialists can handle implementation handoff support with documented workflows, approval limits, and owner review." },
  { slug: "escalation-coordination", title: "Escalation Coordination", desc: "Filipino account management specialists can handle escalation coordination with documented workflows, approval limits, and owner review." },
] as const;

const baseBlogPosts = [
  {
    slug: 'philippines-account-management-client-onboarding-kickoff-brief',
    title: 'Philippines account management client onboarding kickoff brief',
    excerpt: 'Prepare a client kickoff with checked facts, named owners, access limits, first-week work, and one approved follow-up record.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-client-approval-register',
    title: 'Philippines account management client approval register',
    excerpt: 'Keep client approvals tied to the exact request, source facts, named decision owner, approved wording, and proof of what happened next.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-client-feedback-follow-up-log',
    title: 'Philippines account management client feedback follow-up log',
    excerpt: 'Turn client feedback into a checked record with source words, a named owner, a dated reply, and proof that the loop closed.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-qbr-preparation-checklist',
    title: 'Philippines account management QBR preparation checklist',
    excerpt: 'Prepare a useful quarterly business review with checked facts, clear decisions, owner limits, and a client-ready follow-up plan.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-client-meeting-notes-checklist',
    title: 'Philippines account management client meeting notes checklist',
    excerpt: 'Turn each client meeting into a checked record with clear decisions, owners, dates, and approved follow-up.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-action-item-tracker',
    title: 'Philippines account management action item tracker',
    excerpt: 'Capture each client request with its source, work owner, decision owner, due date, next update, and proof of closure.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-renewal-readiness-checklist',
    title: 'Philippines account management renewal readiness checklist',
    excerpt: 'Prepare a clean renewal record with verified facts, open commitments, owner decisions, and a clear client follow-up plan.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-escalation-matrix',
    title: 'Philippines account management escalation matrix',
    excerpt: 'Give a Philippines-based account manager clear alert levels, owner limits, response steps, and closure checks for difficult client issues.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-client-reporting-checklist',
    title: 'Philippines account management client reporting checklist',
    excerpt: 'Build a clear client report with verified facts, named owners, open decisions, and a short review path.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-data-access-checklist',
    title: 'Philippines account management data access checklist',
    excerpt: 'Give a Philippines-based account manager safe, task-matched access to client records, inboxes, files, and reporting tools.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-communication-plan',
    title: 'Philippines account management communication plan',
    excerpt: 'Set clear updates, handoffs, access rules, and owner decisions for a Philippines-based account support team.',
    minutes: 12,
  },
  {
    slug: 'philippines-account-management-handoff-checklist',
    title: 'Philippines account management handoff checklist',
    excerpt: 'Move a client account without losing decisions, access rules, risks, or next steps.',
    minutes: 12,
  },
  { slug: 'philippines-account-management-account-health-review', title: 'Philippines account management account health review', excerpt: 'Review account health with dated signals, open commitments, client sentiment, and an owner-ready next action.', minutes: 12 },
  { slug: 'philippines-account-management-client-request-routing', title: 'Philippines account management client request routing guide', excerpt: 'Route client requests by consequence, authority, evidence, and the time of the next approved update.', minutes: 12 },
  { slug: 'philippines-account-management-crm-maintenance-checklist', title: 'Philippines account management CRM maintenance checklist', excerpt: 'Keep assigned CRM records accurate, current, permission-aware, and useful to the next account review.', minutes: 12 },
  { slug: 'philippines-account-management-client-success-plan', title: 'Philippines account management client success plan', excerpt: 'Turn agreed client outcomes into a checked plan with owners, milestones, risks, and review dates.', minutes: 12 },
  { slug: 'philippines-account-management-service-review-agenda', title: 'Philippines account management service review agenda', excerpt: 'Prepare a service review around evidence, decisions, exceptions, and the client update that follows.', minutes: 12 },
  { slug: 'philippines-account-management-open-commitments-register', title: 'Philippines account management open commitments register', excerpt: 'Track every client promise with its source, owner, date, status, approval boundary, and closure proof.', minutes: 12 },
  { slug: 'philippines-account-management-client-risk-log', title: 'Philippines account management client risk log', excerpt: 'Record client risks consistently while keeping legal, security, financial, and scope decisions with accountable owners.', minutes: 12 },
  { slug: 'philippines-account-management-weekly-account-review', title: 'Philippines account management weekly account review', excerpt: 'Run a repeatable weekly review of account facts, work completed, open decisions, and the next client update.', minutes: 12 },
  { slug: 'philippines-account-management-client-onboarding-timeline', title: 'Philippines account management client onboarding timeline', excerpt: 'Build an onboarding timeline with checked milestones, owners, approval gates, and client updates.', minutes: 12 },
  { slug: 'philippines-account-management-renewal-calendar', title: 'Philippines account management renewal calendar', excerpt: 'Keep renewal dates, evidence, owners, and decision points visible before a client deadline arrives.', minutes: 12 },
  { slug: 'philippines-account-management-client-health-scorecard', title: 'Philippines account management client health scorecard', excerpt: 'Create a transparent account health scorecard from dated signals, source links, and owner review.', minutes: 12 },
  { slug: 'philippines-account-management-qbr-data-pack', title: 'Philippines account management QBR data pack', excerpt: 'Assemble a quarterly review data pack that separates verified results, open questions, and decisions.', minutes: 12 },
  { slug: 'philippines-account-management-client-update-calendar', title: 'Philippines account management client update calendar', excerpt: 'Plan client updates by account need, channel, owner, approval boundary, and next check.', minutes: 12 },
  { slug: 'philippines-account-management-service-issue-log', title: 'Philippines account management service issue log', excerpt: 'Track service issues with source facts, impact, owners, escalation rules, and closure proof.', minutes: 12 },
  { slug: 'philippines-account-management-client-contact-record', title: 'Philippines account management client contact record', excerpt: 'Keep client contacts, roles, preferences, permissions, and update history accurate and controlled.', minutes: 12 },
  { slug: 'philippines-account-management-account-plan-template', title: 'Philippines account management account plan template', excerpt: 'Use a practical account plan template for outcomes, milestones, risks, owners, and review dates.', minutes: 12 },
  { slug: 'philippines-account-management-client-voice-summary', title: 'Philippines account management client voice summary', excerpt: 'Summarize client feedback without losing source wording, sentiment context, ownership, or next action.', minutes: 12 },
  { slug: 'philippines-account-management-renewal-risk-review', title: 'Philippines account management renewal risk review', excerpt: 'Review renewal risk using evidence, open commitments, client signals, and accountable decisions.', minutes: 12 },
  { slug: 'philippines-account-management-account-notes-standard', title: 'Philippines account management account notes standard', excerpt: 'Set a consistent standard for account notes that another reviewer can check and use.', minutes: 12 },
  { slug: 'philippines-account-management-client-issue-escalation', title: 'Philippines account management client issue escalation', excerpt: 'Route client issues by impact, authority, urgency, evidence, and approved response.', minutes: 12 },
  { slug: 'philippines-account-management-monthly-account-report', title: 'Philippines account management monthly account report', excerpt: 'Prepare a monthly account report with verified activity, risks, decisions, and next steps.', minutes: 12 },
  { slug: 'philippines-account-management-client-success-milestones', title: 'Philippines account management client success milestones', excerpt: 'Track client success milestones with proof, owners, dates, dependencies, and review rules.', minutes: 12 },
  { slug: 'philippines-account-management-client-retention-review', title: 'Philippines account management client retention review', excerpt: 'Run a retention review from client evidence, unresolved work, relationship signals, and owner action.', minutes: 12 },
  { slug: 'philippines-account-management-approval-workflow', title: 'Philippines account management approval workflow', excerpt: 'Design an approval workflow that keeps routine account work moving while protecting owner decisions.', minutes: 12 },
  { slug: 'philippines-account-management-account-transition-plan', title: 'Philippines account management account transition plan', excerpt: 'Move account ownership through a controlled transition plan with records, access, risks, and review.', minutes: 12 },
  { slug: 'philippines-account-management-client-follow-up-sla', title: 'Philippines account management client follow-up SLA', excerpt: 'Define client follow-up response rules with scope, exceptions, owners, and truthful status updates.', minutes: 12 },
  { slug: 'philippines-account-management-account-review-minutes', title: 'Philippines account management account review minutes', excerpt: 'Turn account reviews into checked minutes with decisions, actions, owners, and dates.', minutes: 12 },
  { slug: 'philippines-account-management-client-commitment-audit', title: 'Philippines account management client commitment audit', excerpt: 'Audit open client commitments against source records, approvals, due dates, and closure proof.', minutes: 12 },
  { slug: 'philippines-account-management-client-risk-review', title: 'Philippines account management client risk review', excerpt: 'Review client risks consistently while routing legal, security, financial, and scope decisions.', minutes: 12 },
  { slug: 'philippines-account-management-account-data-cleanup', title: 'Philippines account management account data cleanup', excerpt: 'Clean assigned account data with field definitions, source checks, permissions, and owner review.', minutes: 12 },
  { slug: 'philippines-account-management-client-journey-map', title: 'Philippines account management client journey map', excerpt: 'Map client touchpoints, handoffs, risks, owners, and next updates into one usable record.', minutes: 12 },
] as const;

export const blogPosts = [...baseBlogPosts, ...dailyBlogPosts] as const;
export const allDailyBlogPosts = blogPosts;

export const blogDetails = {
  'outsourced-account-management-provider-questions': {
    summary: 'Ask about the exact account list, the work the provider owns, and the moments that still need your approval. Good account support is less about a nice bio and more about clean handoffs.',
    takeaways: [
      'Ask for a sample weekly account report before you buy.',
      'Separate follow-up tasks from renewal, price, refund, and contract decisions.',
      'Use a 14-day pilot with 5 to 10 live accounts before adding the full book.',
    ],
    sections: [
      {
        heading: 'Start with the account map',
        body: 'Ask the provider to show how they would split your accounts by size, risk, next renewal, open ticket, and last touch. If they cannot explain the first view they would work from, the account manager will probably live inside your CRM without a plan.',
      },
      {
        heading: 'Check the handoff rules',
        body: 'Outsourced account support can update CRM notes, chase missing replies, book review calls, prepare renewal packets, and send approved follow-up. It should not change terms, promise credits, approve refunds, or rewrite contract terms unless an owner signs off.',
      },
      {
        heading: 'Ask how quality gets reviewed',
        body: 'A weekly scorecard should show accounts touched, late follow-ups, open risks, blocked items, and owner approvals needed. Ask who reviews the work and what happens when a client complains or the support person misses a handoff.',
      },
    ],
    comparisonRows: [
      {
        weak: '"We have experienced account managers."',
        useful: '"Show me the weekly account report, the escalation list, and one anonymized client handoff."',
      },
      {
        weak: '"They can manage the whole book."',
        useful: '"Which account decisions stay with my team during the first 30 days?"',
      },
      {
        weak: '"We work in your CRM."',
        useful: '"What fields will you update every day, and which fields are read only?"',
      },
    ],
    script: [
      'We have a client book with follow-ups, renewals, and reporting tasks. Before we talk terms, I want to see how you would run the first two weeks.',
      'Please show the account list view you would use, the weekly report you would send, and the escalation rules for price, contract, refund, and unhappy-client issues.',
      'If the pilot works, we can add more accounts after the first scorecard review.',
    ],
    sources: [
      {
        name: 'U.S. Small Business Administration business management guide',
        url: 'https://www.sba.gov/business-guide/manage-your-business',
        note: 'Supports the need for written standards, records, and regular customer follow-up.',
      },
      {
        name: 'NIST SP 800-53 Rev. 5 security and privacy controls',
        url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final',
        note: 'Useful when setting CRM and client-data permission rules for Filipino support staff.',
      },
      {
        name: 'IBM guide to data quality',
        url: 'https://www.ibm.com/think/topics/data-quality',
        note: 'Explains why clean CRM fields matter before reporting and account follow-up work.',
      },
    ],
    faqs: [
      {
        q: 'What should an outsourced account manager do first?',
        a: 'Start with account cleanup, last-touch checks, simple follow-up, meeting booking, and weekly risk notes. Keep commercial decisions with your owner until trust is proven.',
      },
      {
        q: 'How long should the first test run?',
        a: 'Use a 14-day pilot. Give the provider 5 to 10 accounts, review the report twice, then decide whether the work is safe to expand.',
      },
      {
        q: 'What should stay off limits?',
        a: 'Commercial changes, contract edits, refund approval, legal promises, and angry-client resolution should stay with your team unless you create written approval rules.',
      },
    ],
  },
} as const;

export const staffingOffer = {
  partner: 'a Philippines-based staffing partner',
  promise: 'Get an account support plan built around Filipino talent based in the Philippines.',
  fit: [
    'business owners who need Filipino talent but do not want to screen alone',
    'teams that want Philippines-based support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'a role planning call that turns your task list into a clear staffing scope',
    'matching with Filipino candidates based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'a clear contact for quality, attendance, and replacement questions',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'Turn the task list into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the person', body: 'A Philippines-based staffing partner can match Filipino talent to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every plan depends on the role scope, schedule, skills, tools, and management needs. Requests are limited to Filipino talent based in the Philippines and may be routed to a suitable staffing partner.';


export { researchPosts } from './research-data';
