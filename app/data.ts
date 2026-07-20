export const site = {
  "domain": "OutsourcedAccountManagement.com",
  "slug": "outsourcedaccountmanagement",
  "brand": "Outsourced Account Management",
  "primary": "outsourced account management",
  "audience": "agencies and B2B teams needing client follow-up and account support",
  "angle": "client check-ins, renewals, reports, CRM notes, and escalation rules",
  "style": "Account portfolio dashboard",
  "dark": "#102033",
  "color": "#0f766e",
  "accent": "#6366f1",
  "heroImage": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  "alt": "account manager reviewing client dashboard",
  "badge": "Client desk"
} as const;
export const services = [
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations Support for teams using outsourced account management with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer Support for teams using outsourced account management with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin Support for teams using outsourced account management with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA for teams using outsourced account management with clear SOPs, weekly review, and measurable handoffs."
  }
] as const;
export const blogPosts = [
  {
    "slug": "outsourced-account-management-planning",
    "title": "Outsourced Account Management: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "outsourced-account-management-tasks-to-outsource",
    "title": "Outsourced Account Management: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "outsourced-account-management-provider-questions",
    "title": "Outsourced Account Management: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "outsourced-account-management-onboarding-checklist",
    "title": "Outsourced Account Management: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;
export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const stealthOffer = {
  partner: 'Stealth Agents',
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
  { step: '2', title: 'Match the staff', body: 'Stealth Agents can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and Stealth Agents can guide the best fit.';
