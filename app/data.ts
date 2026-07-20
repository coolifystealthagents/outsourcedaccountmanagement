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
  heroImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  serviceImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80',
  alt: 'account manager reviewing client dashboard',
  badge: 'Client desk',
} as const;

export const services = [
  {
    slug: 'operations-support',
    title: 'Operations Support',
    desc: 'Operations Support for teams using outsourced account management with clear SOPs, weekly review, and measurable handoffs.',
  },
  {
    slug: 'customer-support',
    title: 'Customer Support',
    desc: 'Customer Support for teams using outsourced account management with clear SOPs, weekly review, and measurable handoffs.',
  },
  {
    slug: 'admin-support',
    title: 'Admin Support',
    desc: 'Admin Support for teams using outsourced account management with clear SOPs, weekly review, and measurable handoffs.',
  },
  {
    slug: 'reporting-and-qa',
    title: 'Reporting and QA',
    desc: 'Reporting and QA for teams using outsourced account management with clear SOPs, weekly review, and measurable handoffs.',
  },
] as const;

export const blogPosts = [
  {
    slug: 'outsourced-account-management-planning',
    title: 'Outsourced Account Management: What does it plan?',
    excerpt: 'A plain-English guide to staffing details, scope, and hidden planning.',
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
        note: 'Useful when setting CRM and client-data permission rules for outside staff.',
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

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' },
] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
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
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
