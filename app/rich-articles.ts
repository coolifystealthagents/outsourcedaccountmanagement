export type RichArticle = {
  title: string;
  description: string;
  published: string;
  updated: string;
  readMinutes: number;
  intro: string[];
  takeaways: string[];
  takeawaysTitle?: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  banners: Array<{ label: string; title: string; body: string; href: string; link: string }>;
  table: { caption: string; headers: string[]; rows: string[][] };
  chart: Array<{ label: string; value: number; color: string }>;
  chartMeta?: { title: string; desc: string; heading: string; method: string };
  graphic?: {
    title: string;
    desc: string;
    heading: string;
    steps: Array<{ title: string; line1: string; line2: string; color: string }>;
    caption: string;
  };
  quote: { text: string; source: string; url: string };
  script: string[];
  scriptTitle?: string;
  scriptIntro?: string;
  faqs: Array<{ q: string; a: string }>;
  faqTitle?: string;
  sources: Array<{ name: string; date: string; url: string; note: string }>;
};

export const richArticles: Record<string, RichArticle> = {
  'philippines-account-management-data-access-checklist': {
    title: 'Philippines account management data access checklist',
    description: 'A practical access checklist for US teams giving a Philippines-based account manager safe access to client records, inboxes, files, and reporting tools.',
    published: '2026-07-25',
    updated: '2026-07-25',
    readMinutes: 12,
    intro: [
      'A Philippines-based account manager may need the CRM, a shared inbox, meeting notes, client files, and a reporting tool before the first account update is due. Giving access to everything is quick, but it leaves the business with a bigger mess if a login is shared, a role changes, or a client asks who can see its records.',
      'This checklist gives the account manager enough access to do assigned work without handing over every setting and export. The US business owner still controls contracts, unusual client promises, system administration, money movement, and any decision that changes what the client bought.',
    ],
    takeawaysTitle: 'The short version',
    takeaways: [
      'List the exact client task before choosing a system permission.',
      'Give each Filipino team member a named login instead of a shared password.',
      'Test one real task with sample or limited client data before opening the full account book.',
      'Review access on a fixed date and remove it as soon as the work changes.',
    ],
    sections: [
      {
        heading: 'Start with the work, not the software role',
        paragraphs: [
          'The Philippine IT-BPM sector ended 2024 with 1.82 million jobs and USD 38 billion in revenue, according to an IBPAP release dated January 16, 2025. That scale shows how much business work already runs through teams in the Philippines, but a large talent pool does not tell one account manager what they may open, change, download, or send.',
          'Write the assigned account tasks first. A person who updates contact fields needs a different set of permissions from a person who prepares a client report, sorts a shared inbox, or books a review call. Put each task beside the client records it uses and the action the person must take.',
          'Then mark the decisions that stay with an owner. Contract edits, unusual commitments, account closure, data exports, new user creation, and changes to security settings should have a named approver. The Filipino account manager can collect the facts and prepare the request without owning the final decision.',
        ],
      },
      {
        heading: 'Build a system-by-system access list',
        paragraphs: [
          'Make one access row for the CRM, inbox, file store, help desk, meeting tool, reporting dashboard, and client portal. Record the login owner, approved task, client group, allowed actions, approver, start date, and review date. If a cell is blank, stop and answer it before the account opens.',
          'Use a named login for each person. Shared passwords hide who changed a field or downloaded a file, and they are hard to remove when one person leaves. A named account also lets the system keep a useful history for the owner who checks the first work.',
          'The table below is a starting point, not a universal permission map. Software labels differ, so test what each role can really do rather than trusting a name such as editor or member. Open one sample account, complete the assigned task, and confirm that blocked actions stay blocked.',
        ],
      },
      {
        heading: 'Keep client data inside approved places',
        paragraphs: [
          'The Philippine Data Privacy Act of 2012 covers personal information systems in government and the private sector. A US business using a Philippines-based account team should still write its own clear rules for where client names, email addresses, meeting notes, support history, and private files may be stored. The rule should name the approved system and the person to contact when data lands in the wrong place.',
          'Do not copy client lists into a personal spreadsheet just because it feels easier to sort. Do not paste a private client thread into an unapproved tool to get a summary. Keep the source record in the business system, and link to it from the task note when another person needs context.',
          'Account teams are already testing more AI tools. In a February 3, 2025 release, IBPAP said 11% of surveyed IT-BPM firms had fully put agentic AI into use and 56% were actively adding it to operations. IBPAP did not publish the sample size in that release, so the numbers describe the firms surveyed and should not be treated as a count of every Philippine provider.',
        ],
      },
      {
        heading: 'Use least privilege and check the first live work',
        paragraphs: [
          'NIST gives a plain test for every permission: the person should receive only the access needed for assigned tasks. That means a manager preparing weekly notes may need to read account history and add an update, but may not need bulk export, user administration, deletion, or access to every client. Start narrow and add one permission only when a real task proves it is needed.',
          'The first check should use a small set of accounts. Ask the manager to update a field, find a client note, prepare a report, save it in the right place, and route an owner-only request. Watch for copied data, broad search results, hidden export buttons, or a task that forces the person to borrow somebody else’s login.',
          'Keep a short record of the test. Note the task, account used, expected result, actual result, reviewer, and any permission changed afterward. This makes the next access review faster because the owner can see why each permission exists instead of starting from memory.',
        ],
      },
      {
        heading: 'Review access without adding another long meeting',
        paragraphs: [
          'Microsoft reported on May 9, 2023 that the average Microsoft 365 employee spent 57% of work time communicating and 43% creating files. Its study combined a survey of 31,000 people in 31 countries with Microsoft 365 activity. An access check should reduce that load, not create another weekly call with no decisions.',
          'Set a review date when access is approved. At the review, compare the task list with system logs, open accounts, exports, current client assignments, and the permissions the person still holds. Remove old access during the review, then record who made the change and when it took effect.',
          'Run another review when the person changes roles, moves to a different client group, goes on extended leave, or stops working on the account. Do not wait for the next calendar date when the work has already changed. The three-step path below keeps the process simple: request access for a task, test the task, and review the access against live work.',
        ],
      },
    ],
    banners: [
      { label: 'Access check 1 of 3', title: 'Start with clean CRM ownership', body: 'Match every permission to a named person, an assigned client group, and a dated review.', href: '/services/crm-account-maintenance', link: 'See CRM account support' },
      { label: 'Access check 2 of 3', title: 'Route exceptions to an owner', body: 'Give the account manager a clear path for blocked work and owner-only decisions.', href: '/services/client-request-routing', link: 'See request routing support' },
      { label: 'Access check 3 of 3', title: 'Check account risk after launch', body: 'Review missing records, unusual activity, and open owner decisions while the account list is still small.', href: '/services/account-health-monitoring', link: 'See account health support' },
    ],
    table: {
      caption: 'Access record for a Philippines-based account manager',
      headers: ['System', 'Allowed work', 'Keep with owner', 'Review proof'],
      rows: [
        ['CRM', 'Read assigned accounts and update approved fields', 'Bulk export, deletion, user settings', 'Change history and sample record'],
        ['Shared inbox', 'Read assigned threads and send approved replies', 'Mailbox rules and account recovery', 'Sent message and access log'],
        ['File store', 'Open and edit assigned client folders', 'Public sharing and broad folder access', 'Folder membership and link settings'],
        ['Reporting tool', 'Build approved account views', 'New data connections and user control', 'Saved view and source list'],
        ['Client portal', 'Post approved files and status notes', 'New users and account settings', 'Portal history and owner check'],
      ],
    },
    chart: [
      { label: 'Fully in use', value: 11, color: '#0f766e' },
      { label: 'Being added', value: 56, color: '#6366f1' },
    ],
    chartMeta: {
      title: 'Agentic AI use among IT-BPM firms surveyed by IBPAP',
      desc: 'Horizontal bars show 11 percent of surveyed firms with agentic AI fully in use and 56 percent actively adding it to operations.',
      heading: 'Agentic AI in surveyed firms',
      method: 'The chart plots the two shares stated by IBPAP in its February 3, 2025 release: 11% fully in use and 56% actively being added. The release did not give a sample size, and the two bars should not be read as a full market census.',
    },
    graphic: {
      title: 'Three-step client data access path',
      desc: 'A process graphic moves from a written task request to a limited access test and then to a dated owner review.',
      heading: 'Request, test, review',
      steps: [
        { title: '1  Request', line1: 'Task, client group,', line2: 'owner, end date', color: '#e8c98e' },
        { title: '2  Test', line1: 'One real task,', line2: 'limited records', color: '#b9dfce' },
        { title: '3  Review', line1: 'Logs, current work,', line2: 'remove old access', color: '#ffd9ce' },
      ],
      caption: 'The owner approves a task, the account manager proves the task works with limited access, and both sides review the permission against current client work. A role change starts the path again.',
    },
    quote: {
      text: 'A security principle that a system should restrict the access privileges of users (or processes acting on behalf of users) to the minimum necessary to accomplish assigned tasks.',
      source: 'NIST Computer Security Resource Center, citing CNSSI 4009-2015 and NIST SP 800-12 Rev. 1',
      url: 'https://csrc.nist.gov/glossary/term/least_privilege',
    },
    scriptTitle: 'A copy-ready access request',
    scriptIntro: 'Use this note for one system and one group of client accounts. Replace every bracketed item, then have the system owner approve the request before access opens.',
    script: [
      'Please give [person] a named login to [system] for this task: [exact task]. The account group is [clients or folder], and the internal owner is [name].',
      'Allow these actions: [read, add, edit, send]. Keep these actions with the owner: [export, delete, user changes, settings, or other blocked action].',
      'Test the access on [sample account] by [date]. Review it again on [date], or sooner if the role or client assignment changes.',
    ],
    faqTitle: 'Questions about client data access',
    faqs: [
      { q: 'Should a Philippines-based account manager get full CRM access?', a: 'Usually not at the start. Give access to the assigned client group and actions, then add a permission only when a real task needs it.' },
      { q: 'Can the team use one shared login?', a: 'Use named logins whenever the system allows it. Named accounts make review and removal clearer because the owner can see who took an action.' },
      { q: 'How often should access be reviewed?', a: 'Set a date when access opens, and review sooner when the role, client group, or employment status changes. Remove permissions that no longer match current work.' },
      { q: 'Can an account manager use AI to summarize client notes?', a: 'Only when the business has approved the tool and the client data allowed in it. Keep the source note, check the output, and do not let a summary replace exact client wording when the wording matters.' },
    ],
    sources: [
      { name: 'IT and Business Process Association of the Philippines, 2024 milestones', date: 'January 16, 2025', url: 'https://admin.ibpap.org/api/v1/articles/21', note: 'Reports 1.82 million Philippine IT-BPM jobs and USD 38 billion in 2024 revenue.' },
      { name: 'IT and Business Process Association of the Philippines, agentic AI survey', date: 'February 3, 2025', url: 'https://admin.ibpap.org/api/v1/articles/23', note: 'Reports 11% full use and 56% active integration among surveyed IT-BPM firms; the release does not state a sample size.' },
      { name: 'Microsoft Work Trend Index Annual Report', date: 'May 9, 2023', url: 'https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work', note: 'Reports the 57% communication and 43% creation split, based on a 31,000-person survey and Microsoft 365 activity.' },
      { name: 'National Privacy Commission, Data Privacy Act of 2012', date: 'August 15, 2012', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Publishes Republic Act No. 10173 and its rules for personal information systems.' },
      { name: 'NIST Computer Security Resource Center, least privilege glossary', date: 'accessed July 25, 2026', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Provides the exact least-privilege definition quoted in this checklist.' },
    ],
  },
  'philippines-account-management-communication-plan': {
    title: 'Philippines account management communication plan',
    description: 'A clear plan for updates, handoffs, access, and owner decisions when a Philippines-based account support team works with a US business.',
    published: '2026-07-25',
    updated: '2026-07-25',
    readMinutes: 12,
    intro: [
      'A Philippines-based account manager can keep client work moving while a US team sleeps. That time difference helps only when both sides know what to write down, what can wait, and which decisions need an owner right away.',
      'This plan covers daily notes, client messages, handoffs, account access, and review. The Filipino account manager can prepare updates, follow approved steps, and flag risk, while the business owner keeps control of contract changes, exceptions, money movement, and legal promises.',
    ],
    takeaways: [
      'Use one account record instead of asking people to search old chat and email.',
      'Set a short daily update and a fuller weekly review for every active account.',
      'Name the owner and backup for requests the account manager cannot approve.',
      'Give each person their own login and only the access needed for assigned work.',
    ],
    sections: [
      {
        heading: 'Start with one written account record',
        paragraphs: [
          'The Philippines has a deep business services workforce. In a release dated January 16, 2025, the IT and Business Process Association of the Philippines said the local IT-BPM industry closed 2024 with 1.82 million jobs and USD 38 billion in revenue. A large talent pool gives employers more people to consider, but each new account manager still needs a clean record of the client relationship.',
          'Build one row or page for every client. Include the internal owner, client contacts, agreed work, open requests, last promise, current risk, next action, and due date. Add links to the CRM record and the files that support the next action so the manager does not have to hunt through old folders.',
          'Keep the record factual and easy to scan. Write “client asked for a revised launch date on July 23” instead of “client is unhappy.” The first note tells the next person what happened and when, while the second leaves them guessing.',
        ],
      },
      {
        heading: 'Set the daily and weekly update rhythm',
        paragraphs: [
          'A daily update should be short enough to read in a few minutes. List work finished, replies received, tasks waiting on someone else, account risks, and decisions needed from the owner. Put the needed decision first when a client is blocked, then link to the account record for detail.',
          'Use the weekly review for the bigger picture. Look at accounts with no recent contact, overdue promises, missing records, changes in client mood, and work due in the next two weeks. The internal owner should confirm which risks need a client call and which routine items the Filipino account manager can close.',
          'Do not turn every update into another meeting. Microsoft reported on May 9, 2023 that the average Microsoft 365 employee spent 57% of work time communicating and 43% creating files. Its study combined a survey of 31,000 people in 31 countries with Microsoft 365 activity, which is a good reason to keep account notes useful and meetings selective.',
        ],
      },
      {
        heading: 'Write rules for client messages',
        paragraphs: [
          'Give the account manager examples of messages they may send without a fresh review. These may include a meeting confirmation, an approved recap, a request for a missing file, or a reminder about an agreed next step. Each example should show the right tone, the needed facts, and where the final message gets recorded.',
          'Create a second list for messages that need owner approval. Put scope changes, contract language, credits, refunds, legal statements, public comments, and unusual commitments on that list. The account manager can gather facts and draft a reply, but the named owner makes the decision.',
          'Use a simple holding note when the owner needs time. The manager can say that the request is with the account owner and give the next update time without promising an answer. This is more honest than sending a quick answer that the business later has to undo.',
        ],
      },
      {
        heading: 'Protect client data and account access',
        paragraphs: [
          'List every system used for client work, including the CRM, shared inbox, file storage, help desk, meeting tool, and client portal. Give each Philippines-based team member an individual account, record who approved it, and state what the person can view, change, export, or share. Remove access when the role changes instead of letting old permissions sit unnoticed.',
          'The Philippine Data Privacy Act of 2012 applies to personal information systems in government and the private sector. A communication plan should say where client contact details, meeting notes, and private files may be stored. It should also name the person to contact if information is sent to the wrong place or appears in an unapproved tool.',
          'NIST defines least privilege as giving users the minimum access needed for assigned tasks. Apply that test to every client system instead of copying another employee’s permissions. A manager who updates notes and prepares reports usually does not need broad administrator rights.',
        ],
      },
      {
        heading: 'Make handoffs work across the time difference',
        paragraphs: [
          'End each shift with a written handoff for work that cannot wait. State what happened, what the client expects, the next action, the owner, the deadline, and the link to the source record. If there is no action before the next Philippines shift, leave the item in the normal account record instead of making the handoff list noisy.',
          'Agree on a small urgent channel and define what belongs there. A client system outage, a private-data mistake, a missed hard deadline, or a request that blocks active work may need an urgent alert. A routine status question can stay in the account record for the next planned review.',
          'The outgoing person should not hand over a mystery. They should name the exact choice needed from the incoming owner and say what happens if nobody acts by the deadline. The incoming person then confirms the item in writing, which gives both sides a clear start point.',
        ],
      },
      {
        heading: 'Review automation and AI before it touches a client',
        paragraphs: [
          'Account teams may use automatic summaries, reminders, and AI drafts. In a release published in February 2025, IBPAP said 11% of surveyed IT-BPM firms had fully put agentic AI into use and 56% were actively adding it to operations. The release did not state the survey sample size, so those figures describe the surveyed firms rather than every IT-BPM company in the Philippines.',
          'Write down which tools are allowed and which client data may enter them. Name the person who checks an AI draft before it reaches a client, and keep a copy of the approved message in the account record. Do not let an automatic summary quietly replace the original client note when exact wording matters.',
          'Review the communication plan after the first week and again after the first month. Check for missed promises, duplicate messages, late owner decisions, access that was too broad, and notes that another person could not follow. Fix the record or rule that caused the miss instead of asking the team to “communicate better.”',
        ],
      },
    ],
    banners: [
      { label: 'Communication check 1 of 3', title: 'Make account health easy to see', body: 'Use clear status notes, dated next actions, and named owners for every active account.', href: '/services/account-health-monitoring', link: 'See account health support' },
      { label: 'Communication check 2 of 3', title: 'Keep the CRM record useful', body: 'Clean fields and linked source notes give the next person a reliable place to start.', href: '/services/crm-account-maintenance', link: 'See CRM account support' },
      { label: 'Communication check 3 of 3', title: 'Set the escalation path early', body: 'Name the owner, backup, and response time before a difficult request arrives.', href: '/services/escalation-coordination', link: 'See escalation support' },
    ],
    table: {
      caption: 'A simple communication plan for active client accounts',
      headers: ['Update', 'What it should contain', 'Owner action'],
      rows: [
        ['Daily note', 'Finished work, replies, blocks, risks, and needed decisions', 'Answer items that block the client'],
        ['Shift handoff', 'Event, client expectation, next action, owner, and deadline', 'Confirm urgent items in writing'],
        ['Weekly review', 'Silent accounts, overdue promises, risks, and upcoming work', 'Choose calls, approvals, and follow-up'],
        ['Access review', 'Systems, permissions, approver, and removal date', 'Remove access that the role does not need'],
        ['Tool review', 'Allowed tools, allowed data, checker, and source record', 'Approve changes before client use'],
      ],
    },
    chart: [
      { label: 'Teams meetings', value: 23, color: '#0f766e' },
      { label: 'Teams chat', value: 19, color: '#6366f1' },
      { label: 'Email', value: 15, color: '#f26b4e' },
      { label: 'Creation time', value: 43, color: '#d6b36a' },
    ],
    quote: {
      text: 'This year’s milestones underscore the incredible dedication and innovation within our industry. These achievements are a testament to our collective efforts. As we step into 2025, we are poised to seize new opportunities and drive the Philippines’ position as a global IT-BPM leader,',
      source: 'Jack Madrid, President and CEO of IBPAP, January 16, 2025',
      url: 'https://admin.ibpap.org/api/v1/articles/21',
    },
    script: [
      'The account record is current through [date and time]. The client’s next expected result is [result] by [date].',
      'The open item is [item], and [owner] needs to decide [decision] by [time]. The supporting message or file is linked in the account record.',
      'If no decision arrives by that time, use this approved holding note: “I have shared this with the account owner and will update you by [time].”',
    ],
    faqs: [
      { q: 'How often should a Philippines-based account manager send updates?', a: 'Use one short daily note for active work and one fuller weekly review for account health. Send an urgent alert only for the events listed in the plan.' },
      { q: 'What decisions should stay with the US business owner?', a: 'Keep contract changes, refunds, credits, legal statements, unusual commitments, and other high-risk choices with an approved owner. The Filipino account manager can collect facts and prepare the reply.' },
      { q: 'Should every client message get reviewed?', a: 'No, if the message matches an approved example and stays within the assigned work. Review new situations, sensitive data, and any message that changes what the business promised.' },
      { q: 'What belongs in a shift handoff?', a: 'Include the event, client expectation, next action, owner, deadline, and link to the source record. Leave routine items in the normal account note so urgent work stays easy to spot.' },
    ],
    sources: [
      { name: 'IT and Business Process Association of the Philippines, 2024 milestones', date: 'January 16, 2025', url: 'https://admin.ibpap.org/api/v1/articles/21', note: 'Reports 1.82 million Philippine IT-BPM jobs and USD 38 billion in 2024 revenue, and contains the exact Jack Madrid quote.' },
      { name: 'Microsoft Work Trend Index Annual Report', date: 'May 9, 2023', url: 'https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work', note: 'Reports the 57% communication and 43% creation split, with a 31,000-person survey and Microsoft 365 activity.' },
      { name: 'IT and Business Process Association of the Philippines, agentic AI survey', date: 'February 3, 2025', url: 'https://admin.ibpap.org/api/v1/articles/23', note: 'Reports 11% full use and 56% active integration among surveyed IT-BPM firms; no sample size is stated.' },
      { name: 'National Privacy Commission, Data Privacy Act of 2012', date: 'August 15, 2012', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Publishes Republic Act No. 10173 and its rules for personal information systems.' },
      { name: 'NIST Computer Security Resource Center, least privilege glossary', date: 'accessed July 25, 2026', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Defines least privilege and points to the supporting NIST and CNSSI publications.' },
    ],
  },
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
