export type RichArticle = {
  title: string;
  description: string;
  published: string;
  updated: string;
  readMinutes: number;
  intro: string[];
  takeaways: string[];
  sections: Array<{ heading: string; paragraphs: string[] }>;
  banners: Array<{ label: string; title: string; body: string; href: string; link: string }>;
  table: { caption: string; headers: string[]; rows: string[][] };
  chart: Array<{ label: string; value: number; color: string }>;
  quote: { text: string; source: string; url: string };
  script: string[];
  faqs: Array<{ q: string; a: string }>;
  sources: Array<{ name: string; date: string; url: string; note: string }>;
};

export const richArticles: Record<string, RichArticle> = {
  'philippines-account-management-handoff-checklist': {
    title: 'Philippines account management handoff checklist',
    description: 'A practical checklist for moving a client account to a Philippines-based account manager without losing decisions, access rules, risks, or next steps.',
    published: '2026-07-25',
    updated: '2026-07-25',
    readMinutes: 12,
    intro: [
      'A client handoff can look simple on a calendar. One person leaves the account, another person joins, and a meeting gets booked. The hard part is moving the small facts that keep the client relationship steady.',
      'This checklist is for a business moving daily account support to a Filipino account manager based in the Philippines. It covers account records, client promises, access, risks, and the first week of review. Unusual client requests still stay with the business owner or an approved internal lead.',
    ],
    takeaways: [
      'Build one account map before the new manager contacts the client.',
      'Write down promises, risks, approvals, and the next dated action for every open item.',
      'Give the new manager only the access needed for the assigned account work.',
      'Review a small set of live accounts before moving the full client book.',
    ],
    sections: [
      {
        heading: 'Why the handoff needs a written record',
        paragraphs: [
          'The Philippines has a large pool of people who already work in business services. In a release dated January 16, 2025, the IT and Business Process Association of the Philippines said the local IT-BPM industry ended 2024 with 1.82 million jobs and USD 38 billion in revenue. That scale gives employers a broad hiring pool, but it does not make a weak handoff safe.',
          'A capable account manager still needs the history behind the CRM fields. They need to know what the client was told, which request waits for approval, and which issue should reach the owner. A good handoff puts those facts in one place instead of leaving them in one person’s memory.',
        ],
      },
      {
        heading: '1. Build the account map',
        paragraphs: [
          'Create one row for every client account. Name the client, internal owner, main client contact, backup contact, service scope, current status, next meeting, open request, and next action. The next action needs a person and a date, not a vague note such as “follow up soon.”',
          'Add a short relationship note in plain language. State how the client likes to communicate, what they care about most, and what has caused friction before. Keep opinions out unless they help the next person do the work; “prefers a short Friday email” is useful, while “difficult client” is not.',
          'The account map is also a quick way to find missing records. If an account has no internal owner, no next action, or no recent touch, fix that gap before the handoff meeting. The new manager should not spend the first week guessing who can approve a client request.',
        ],
      },
      {
        heading: '2. Move the client history, not every old message',
        paragraphs: [
          'Account history is often split across meetings, email, chat, documents, and CRM notes. Microsoft’s Work Trend Index, published May 9, 2023, found that the average employee in Microsoft 365 spent 57% of work time communicating and 43% creating. The report drew on a survey of 31,000 people in 31 countries plus Microsoft 365 signals, so the split is a useful warning: the CRM may hold only part of the story.',
          'Do not dump an inbox on the new manager and call it a handoff. Pull out the decisions that still matter, the promises that are still open, the files the client uses, and the last useful conversation about each live issue. Link back to the original message or meeting note when the exact wording matters.',
          'Use the handoff record below for each open item. Keep it short enough to update during a call, but clear enough for a second person to take over. The owner should be able to scan it and see what needs attention today.',
        ],
      },
      {
        heading: '3. Separate routine work from owner decisions',
        paragraphs: [
          'Write two lists before launch. The first list covers work the Filipino account manager can complete, such as updating account notes, booking approved meetings, sending an approved recap, checking an open task, and preparing a weekly account summary. The second list names decisions that need an internal owner.',
          'Owner decisions may include contract changes, credits, refunds, legal promises, public statements, or a change to the client’s agreed scope. Add a clear escalation route for each one. The new manager needs a named person, a backup person, and a response window so the client does not sit without an answer.',
          'The account manager can collect facts, prepare options, and carry out an approved next step. They should not invent a promise to close a conversation. This gives the manager a fair way to say, “I need to confirm that with the account owner.”',
        ],
      },
      {
        heading: '4. Reset access with the handoff',
        paragraphs: [
          'Make a list of every system connected to the account. Include the CRM, shared inbox, help desk, file storage, meeting tools, reporting dashboards, and any client portal. For each system, record what the incoming manager can view, change, export, or share.',
          'Remove or reduce the outgoing person’s access on the agreed handoff date. Do not reuse a personal login or send a password in chat. Give the incoming manager their own account, turn on the security controls your business uses, and keep a record of who approved the access.',
          'The NIST definition of least privilege gives a clean test for this step: “A security principle that a system should restrict the access privileges of users (or processes acting on behalf of users) to the minimum necessary to accomplish assigned tasks.” If the manager only needs account notes and approved reports, they should not receive broad admin rights just because those rights are easy to grant.',
        ],
      },
      {
        heading: '5. Record the tools and AI rules',
        paragraphs: [
          'Ask which automations, summaries, and AI tools touch the account. In a February 2025 release, IBPAP said 11% of surveyed IT-BPM firms had fully put agentic AI into use and 56% were actively adding it to operations. The release did not give a sample size, so those figures should be read as the result of the IBPAP survey rather than a count of every firm in the Philippines.',
          'For the handoff, name the allowed tools and the data that may enter them. State whether client names, contact details, meeting notes, or private files can be used. If an AI draft is allowed, name the person who checks it before it reaches the client.',
          'Keep the human owner visible. Automation can remind someone about a late task or draft a summary, but it should not quietly change an account status or send a client promise without the agreed review. Put failed automations and uncertain outputs on the same escalation list as other account risks.',
        ],
      },
      {
        heading: '6. Run a five-day handoff review',
        paragraphs: [
          'On day one, ask the incoming manager to explain the next action for each client in their own words. On day two, review the first notes and messages before they are filed or sent. This catches missing context while the account list is small.',
          'By day three, the new manager should list overdue items, waiting approvals, missing access, client concerns, and next actions. On days four and five, compare that list with the CRM and handoff record. Fix the process when the records disagree.',
          'The Philippine IT-BPM workforce may keep growing. An IBPAP outlook dated July 14, 2026, projects 1.85 million to 2.14 million full-time employees in the industry by 2028. More available talent can help teams hire, but a steady client desk still depends on clear records, narrow access, and an owner who reviews the first work.',
        ],
      },
    ],
    banners: [
      { label: 'Handoff check 1 of 3', title: 'Clean the account map first', body: 'Fix missing owners, contacts, and dated next actions before the new manager starts client work.', href: '/services/account-health-monitoring', link: 'See account health support' },
      { label: 'Handoff check 2 of 3', title: 'Keep access narrow', body: 'Give each person their own login and only the permissions needed for the assigned account tasks.', href: '/services/crm-account-maintenance', link: 'See CRM account support' },
      { label: 'Handoff check 3 of 3', title: 'Make escalation boring', body: 'Name the owner, backup, and response window before a difficult client request arrives.', href: '/services/escalation-coordination', link: 'See escalation support' },
    ],
    table: {
      caption: 'One-row handoff record for each open client item',
      headers: ['Field', 'What to write', 'Weak note'],
      rows: [
        ['Client need', 'The exact request in the client’s words', 'Needs help'],
        ['Last promise', 'What was promised, by whom, and on what date', 'We will handle it'],
        ['Owner', 'One person who can approve the next step', 'The team'],
        ['Next action', 'A clear action with a person and due date', 'Follow up'],
        ['Risk', 'What may go wrong and when to escalate', 'Keep an eye on it'],
      ],
    },
    chart: [
      { label: 'Teams meetings', value: 23, color: '#0f766e' },
      { label: 'Teams chat', value: 19, color: '#6366f1' },
      { label: 'Email', value: 15, color: '#f26b4e' },
      { label: 'Creation time', value: 43, color: '#d6b36a' },
    ],
    quote: {
      text: 'A security principle that a system should restrict the access privileges of users (or processes acting on behalf of users) to the minimum necessary to accomplish assigned tasks.',
      source: 'NIST Computer Security Resource Center, citing CNSSI 4009-2015 and NIST SP 800-12 Rev. 1',
      url: 'https://csrc.nist.gov/glossary/term/least_privilege',
    },
    script: [
      'We are moving this account to a Philippines-based account manager. Your current service scope and internal owner are not changing.',
      'The new manager will handle the listed follow-ups, meeting notes, and account records. Requests outside that list will go to the named account owner for approval.',
      'For the first week, please copy the account owner on new requests. We will confirm the normal contact path after the handoff review on [date].',
    ],
    faqs: [
      { q: 'How many accounts should move in the first handoff?', a: 'Start with a small group the owner can review each day. Move more after the notes and escalation choices match the handoff record.' },
      { q: 'Should the outgoing manager join the client call?', a: 'Yes, when they hold useful history or the client expects them. Keep the call focused on contacts, open promises, current risks, and the next action.' },
      { q: 'What should stay with the internal account owner?', a: 'Keep unusual commitments, contract changes, credits, legal statements, and other business decisions with an approved internal owner. The Filipino account manager can gather facts and prepare the next step.' },
      { q: 'When is the handoff finished?', a: 'Finish it after the new manager can explain the account map, use approved systems, find open promises, and route an exception. A calendar meeting alone does not prove it worked.' },
    ],
    sources: [
      { name: 'IT and Business Process Association of the Philippines, 2024 milestones', date: 'January 16, 2025', url: 'https://admin.ibpap.org/api/v1/articles/21', note: 'Reports 1.82 million Philippine IT-BPM jobs and USD 38 billion in 2024 revenue.' },
      { name: 'IT and Business Process Association of the Philippines, agentic AI survey', date: 'February 3, 2025', url: 'https://admin.ibpap.org/api/v1/articles/23', note: 'Reports 11% full use and 56% active integration among surveyed IT-BPM firms; no sample size is stated.' },
      { name: 'IT and Business Process Association of the Philippines, 2028 outlook', date: 'July 14, 2026', url: 'https://admin.ibpap.org/api/v1/articles/43', note: 'Projects 1.85 million to 2.14 million Philippine IT-BPM full-time employees by 2028.' },
      { name: 'Microsoft Work Trend Index Annual Report', date: 'May 9, 2023', url: 'https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work', note: 'Reports the 57% communication and 43% creation split, with methods and survey context.' },
      { name: 'NIST Computer Security Resource Center, least privilege glossary', date: 'accessed July 25, 2026', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Provides the exact least-privilege definition quoted in this guide.' },
    ],
  },
};
