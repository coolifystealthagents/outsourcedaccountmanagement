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
  {
    slug: 'operations-support',
    title: 'Account operations support',
    desc: 'Keep account records, renewal dates, open requests, and owner handoffs in order with Filipino support talent based in the Philippines. Prices and contract terms stay with your internal owner.',
    bestTasks: [
      'Update CRM notes, next steps, renewal dates, and account owners',
      'Prepare weekly account lists for renewals, open requests, and missed follow-ups',
      'Route blocked work and client risks to the right internal owner',
    ],
    controls: [
      'Use required CRM fields and a daily missing-data check',
      'Keep price, contract, credit, and refund decisions with the internal owner',
      'Review overdue follow-ups and blocked accounts once a week',
    ],
    firstWeek: [
      'Choose 5 to 10 accounts and define the required CRM fields.',
      'Show one complete account record and one approved handoff example.',
      'Run daily record checks before moving to a weekly review.',
    ],
    faqs: [
      { q: 'Can Filipino support staff change renewal terms?', a: 'No. They can prepare the account record and renewal notes, but your internal owner should approve prices, credits, and contract changes.' },
      { q: 'What is a safe first task?', a: 'Start with CRM cleanup and a list of accounts that need a reply, review, or owner decision.' },
    ],
  },
  {
    slug: 'customer-support',
    title: 'Client follow-up support',
    desc: 'Give clients timely updates, book review calls, and track open requests while complaints, refunds, and sensitive promises stay with your team.',
    bestTasks: [
      'Send approved follow-up messages after meetings and service updates',
      'Book account reviews and collect agenda items before each call',
      'Track open client requests and remind the internal owner when a reply is late',
    ],
    controls: [
      'Use approved message examples for common follow-ups',
      'Escalate complaints, refund requests, and service promises before replying',
      'Check the open-request list at the start and end of each shift',
    ],
    firstWeek: [
      'Sort recent client messages into reply, owner decision, and closed groups.',
      'Draft replies for review before sending any client message.',
      'Allow approved follow-ups, then review open requests each day.',
    ],
    faqs: [
      { q: 'Can Filipino account support handle unhappy clients?', a: 'They can collect the facts and alert the account owner. Resolution terms, refunds, and sensitive promises should stay with your team.' },
      { q: 'What should we provide before launch?', a: 'Share approved replies, account owner names, response targets, and a short list of issues that always need escalation.' },
    ],
  },
  {
    slug: 'admin-support',
    title: 'Account admin support',
    desc: 'Remove the repeat admin around client meetings, files, notes, and task reminders while access and final approvals remain limited.',
    bestTasks: [
      'Prepare meeting agendas from open tasks and recent account notes',
      'File approved documents and keep client folders named the same way',
      'Record meeting actions, due dates, and owners in the team task system',
    ],
    controls: [
      'Grant access only to the accounts and folders needed for the role',
      'Require an internal owner for every client-facing due date',
      'Check meeting notes against the recording or owner recap before filing',
    ],
    firstWeek: [
      'Pick one meeting type and share a finished agenda and notes example.',
      'Limit access to a small account group and test the filing rules.',
      'Review the first five agendas and action lists before widening the scope.',
    ],
    faqs: [
      { q: 'Which admin work should stay internal?', a: 'Keep contract edits, billing approvals, access grants, and final client commitments with an internal owner.' },
      { q: 'How do we test accuracy?', a: 'Compare the first five agendas, notes, and task updates with your approved examples before adding more accounts.' },
    ],
  },
  {
    slug: 'reporting-and-qa',
    title: 'Account reporting and quality checks',
    desc: 'Turn CRM activity and open client work into a short weekly report that shows missed follow-ups, account risks, and decisions your owners need to make.',
    bestTasks: [
      'Prepare a weekly account report from agreed CRM fields',
      'Flag missing notes, overdue follow-ups, and accounts without a next step',
      'Sample client updates against approved message and handoff rules',
    ],
    controls: [
      'Use one written definition for every report field',
      'Link each flagged issue to its CRM record instead of copying private data',
      'Have the account owner close or accept each reported risk',
    ],
    firstWeek: [
      'Agree on five to seven report fields and define how each one is counted.',
      'Build a sample report from a small set of closed and open accounts.',
      'Compare the report with the CRM, fix gaps, and set a weekly review time.',
    ],
    faqs: [
      { q: 'What should a weekly account report include?', a: 'Include accounts touched, overdue follow-ups, open requests, renewal risks, blocked work, and owner decisions needed.' },
      { q: 'Can a report replace an account review?', a: 'No. The report should make the review shorter and clearer, but an internal owner still needs to decide what happens next.' },
    ],
  },
] as const;

export const blogPosts = [
  {
    slug: 'outsourced-account-management-planning',
    title: 'Outsourced Account Management: What should account support cover?',
    excerpt: 'A plain guide to role scope, staffing details, and the decisions that stay in house.',
    minutes: 6,
  },
  {
    slug: 'outsourced-account-management-tasks-to-outsource',
    title: 'Outsourced Account Management: What tasks should you outsource first?',
    excerpt: 'Start with recurring work that has examples and clear review rules.',
    minutes: 7,
  },
  {
    slug: 'outsourced-account-management-provider-questions',
    title: 'Outsourced Account Management: Questions to ask before hiring',
    excerpt: 'Use these questions before you sign with a provider or freelancer.',
    minutes: 8,
  },
  {
    slug: 'outsourced-account-management-onboarding-checklist',
    title: 'Outsourced Account Management: First week onboarding checklist',
    excerpt: 'A simple checklist for tools, SOPs, calls, QA, and reporting.',
    minutes: 9,
  },
] as const;

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
        body: 'Outsourced account support can update CRM notes, chase missing replies, book review calls, prepare renewal packets, and send approved follow-up. It should not change prices, promise credits, approve refunds, or rewrite contract terms unless an owner signs off.',
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
      'We have a client book with follow-ups, renewals, and reporting tasks. Before we talk pricing, I want to see how you would run the first two weeks.',
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
        a: 'Pricing changes, contract edits, refund approval, legal promises, and angry-client resolution should stay with your team unless you create written approval rules.',
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
