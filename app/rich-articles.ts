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
  'philippines-account-management-renewal-readiness-checklist': {
    title: 'Philippines account management renewal readiness checklist',
    description: 'A practical checklist for US teams that use a Philippines-based account manager to prepare renewal records, owner decisions, and client follow-up.',
    published: '2026-07-25',
    updated: '2026-07-25',
    readMinutes: 12,
    intro: [
      'A renewal can drift when the account manager has to rebuild the client story from old email, CRM notes, and meeting files. A Philippines-based account manager can prepare the record and chase missing facts, but the business owner should make contract, legal, money, and unusual client decisions.',
      'This checklist keeps the work simple. It covers the source record, open promises, client signals, access limits, owner review, the client note, and the final account update.',
    ],
    takeawaysTitle: 'The short version',
    takeaways: [
      'Start with the signed record, current scope, and exact renewal date.',
      'List every open promise with its source, owner, due date, and client effect.',
      'Keep contract changes and unusual commitments with the named business owner.',
      'Save the approved outcome and next action in the account record after the client reply.',
    ],
    sections: [
      {
        heading: 'Open one renewal record before chasing updates',
        paragraphs: [
          'The Philippine IT-BPM industry closed 2024 with 1.82 million jobs and USD 38 billion in revenue, according to an IBPAP release dated January 16, 2025. Those figures show the size of the local business-services workforce, but each client renewal still depends on a small set of records that one person can check.',
          'Create one renewal record for the account. Add the client name, internal owner, signed document, current work, renewal date, notice rule, open commitments, recent client feedback, service issues, next meeting, and every decision that still needs approval.',
          'Link to the source instead of copying half the story into a new file. If the signed record and the CRM disagree, flag the difference for the owner rather than choosing the version that looks newer.',
        ],
      },
      {
        heading: 'Check facts, promises, and dates one by one',
        paragraphs: [
          'Read the signed record, approved change notes, client meeting recaps, support history, delivery board, and CRM timeline. For every promise, write what was promised, who approved it, when it is due, whether it is done, and where the proof lives.',
          'Separate a confirmed fact from a team guess. The note "client asked for a revised handoff on July 18" can be checked, while "client may leave" needs a source or should sit in a clearly marked owner-assessment field.',
          'Do not hide an open problem inside a long summary. Put missed work, unclear scope, unresolved complaints, and owner-only choices in a short exception list so the account owner can see what must be settled before the client conversation.',
        ],
      },
      {
        heading: 'Build the review around choices the owner must make',
        paragraphs: [
          'Microsoft reported on May 9, 2023 that commercial Microsoft 365 users in its activity analysis spent 57% of their intentional app time communicating and 43% creating files. The analysis used a rolling 28-day period ending in March 2023, excluded weekends and education users, and measured activity in named Microsoft 365 apps rather than client renewals.',
          'Use that finding as a reason to make the owner review shorter, not as a claim about renewal results. Put the open choice, supporting fact, client effect, recommended next step, and decision date on one line, then link to the full record.',
          'The Philippines-based account manager can prepare options and note what each option changes in the work plan. Contract wording, money movement, credits, legal statements, unusual commitments, and any change outside the approved scope should stay with the named owner.',
        ],
      },
      {
        heading: 'Protect client records while the account is under review',
        paragraphs: [
          'Republic Act No. 10173, the Philippine Data Privacy Act of 2012, covers personal information systems in government and the private sector. Keep client contacts, private notes, signed files, and review drafts in the business systems approved for that account.',
          'A person preparing the renewal record may need to read assigned CRM notes, approved reports, support history, and meeting files. They usually do not need bulk export, deletion, user administration, or access to every client in the company.',
          'Use named logins and match access to assigned tasks. If the client work changes after the owner decision, ask the system owner to review access instead of assuming the old permission still fits.',
        ],
      },
      {
        heading: 'Prepare the client note from approved facts',
        paragraphs: [
          'The client note should state the reason for the meeting, the period being reviewed, completed work, open items, confirmed next actions, and any question the client needs to answer. Keep internal guesses, private team comments, and unapproved promises out of the client version.',
          'Some surveyed IT-BPM firms reported using agentic AI. In a February 3, 2025 release, IBPAP said 11% had fully put it into use and 56% were actively adding it to operations, but the release did not state a sample size.',
          'An approved tool can help prepare a draft only when its data use fits the account rules and a person checks every claim against the source. Keep the original client wording when it affects a promise, complaint, or decision, because a smooth summary can quietly change what was said.',
        ],
      },
      {
        heading: 'Record the outcome and the next account action',
        paragraphs: [
          'After the client conversation, save the approved outcome beside the source record. Note what stays the same, what changes, what still waits for an answer, the owner of each follow-up, the due date, and the next client update.',
          'If the relationship continues, update the account plan, access list, reporting fields, open commitments, and meeting schedule. If the work ends or moves to another team, use a controlled handoff so client files, open tasks, and owner decisions do not disappear with the old assignment.',
          'Review the checklist after the account closes its renewal cycle. Fix the missing field, vague owner limit, late source check, or weak client note in the template itself so the next account does not depend on somebody remembering the lesson.',
        ],
      },
    ],
    banners: [
      { label: 'Renewal check 1 of 3', title: 'Keep milestones in one record', body: 'Track client promises, source proof, owners, and due dates before the review starts.', href: '/services/contract-milestone-tracking', link: 'See milestone tracking support' },
      { label: 'Renewal check 2 of 3', title: 'Prepare a decision-ready review', body: 'Give the owner verified facts, open exceptions, and the client questions that still need answers.', href: '/services/customer-qbr-preparation', link: 'See QBR preparation support' },
      { label: 'Renewal check 3 of 3', title: 'Watch the account after the decision', body: 'Record the client reply, changed work, open follow-up, and the next health check.', href: '/services/account-health-monitoring', link: 'See account health support' },
    ],
    table: {
      caption: 'Renewal readiness record for a Philippines-based account manager',
      headers: ['Record', 'Account manager check', 'Source proof', 'Owner decision'],
      rows: [
        ['Current agreement', 'Confirm dates, scope, and notice rule', 'Signed record and approved changes', 'Choose any contract action'],
        ['Open commitments', 'List promise, state, due date, and client effect', 'Approved recap or task record', 'Settle exceptions and ownership'],
        ['Client signals', 'Record exact feedback and recent contact', 'Meeting note, message, or survey record', 'Choose the client response'],
        ['Service issues', 'Show open issue, effect, and current action', 'Support or delivery record', 'Approve recovery steps'],
        ['Next period', 'Draft work plan, owners, and check dates', 'Approved account plan', 'Confirm what the team may do'],
      ],
    },
    chart: [
      { label: 'Communicating', value: 57, color: '#0f766e' },
      { label: 'Creating files', value: 43, color: '#6366f1' },
    ],
    chartMeta: {
      title: 'Communication and creation share in Microsoft 365 work activity',
      desc: 'Two horizontal bars show 57 percent of work time spent communicating and 43 percent spent creating files.',
      heading: 'Make the owner review easy to scan',
      method: 'Microsoft published these figures on May 9, 2023. They came from intentional activity by commercial Microsoft 365 users in Outlook, Teams, Word, PowerPoint, Excel, and OneNote during a rolling 28-day period ending in March 2023; weekends and education users were excluded. The figures do not measure renewal work or results.',
    },
    graphic: {
      title: 'Three-step renewal readiness path',
      desc: 'A process graphic moves from source records to an owner decision and then to an approved client update with account follow-up.',
      heading: 'Check, decide, record',
      steps: [
        { title: '1  Check', line1: 'Terms, promises,', line2: 'issues, client facts', color: '#e8c98e' },
        { title: '2  Decide', line1: 'Owner choices,', line2: 'limits, next action', color: '#b9dfce' },
        { title: '3  Record', line1: 'Client outcome,', line2: 'owners, due dates', color: '#ffd9ce' },
      ],
      caption: 'The account manager checks the source record and marks exceptions. The owner makes the business decisions, and the approved outcome returns to the client record with a named next action.',
    },
    quote: {
      text: 'A security principle that a system should restrict the access privileges of users (or processes acting on behalf of users) to the minimum necessary to accomplish assigned tasks.',
      source: 'NIST Computer Security Resource Center, citing CNSSI 4009-2015 and NIST SP 800-12 Rev. 1',
      url: 'https://csrc.nist.gov/glossary/term/least_privilege',
    },
    scriptTitle: 'A copy-ready owner review note',
    scriptIntro: 'Send this with the renewal record before the client meeting. Replace every bracketed item, link each exception to its source, and leave no owner field blank.',
    script: [
      'This review covers [client] and the period ending [date]. I checked the signed record, approved changes, open commitments, client feedback, service issues, and current account plan on [date and time].',
      'Please decide these items by [date]: [owner choices]. The supporting records are [links], and the confirmed client effect is [effect].',
      'After your review, I will prepare the client note, record the approved outcome in [system], and assign each follow-up to [owner] with a due date.',
    ],
    faqTitle: 'Questions about renewal readiness',
    faqs: [
      { q: 'What should a Philippines-based account manager prepare for a renewal?', a: 'Prepare the signed record, approved changes, open commitments, client feedback, service issues, source links, owner decisions, next actions, and due dates.' },
      { q: 'Which decisions should stay with the business owner?', a: 'Keep contract language, money movement, credits, legal statements, unusual commitments, and work outside the approved scope with the named owner.' },
      { q: 'Can the account manager send the client review note?', a: 'Yes, when the note uses approved facts and follows the written message rules. An owner should first check exceptions and any statement that changes a promise or business decision.' },
      { q: 'What happens after the client responds?', a: 'Save the outcome, changed work, open questions, owners, due dates, and next update in the account record. Review access and the handoff plan if the assignment changes.' },
    ],
    sources: [
      { name: 'IT and Business Process Association of the Philippines, 2024 milestones', date: 'January 16, 2025', url: 'https://admin.ibpap.org/api/v1/articles/21', note: 'Reports 1.82 million Philippine IT-BPM jobs and USD 38 billion in 2024 revenue.' },
      { name: 'Microsoft Work Trend Index Annual Report', date: 'May 9, 2023', url: 'https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work', note: 'Reports the 57% communication and 43% creation split for intentional activity by commercial Microsoft 365 users and gives the rolling 28-day window.' },
      { name: 'National Privacy Commission, Data Privacy Act of 2012', date: 'August 15, 2012', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Publishes Republic Act No. 10173 and its rules for personal information systems.' },
      { name: 'NIST Computer Security Resource Center, least privilege glossary', date: 'accessed July 25, 2026', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Provides the exact least-privilege definition quoted in this checklist.' },
      { name: 'IT and Business Process Association of the Philippines, agentic AI survey', date: 'February 3, 2025', url: 'https://admin.ibpap.org/api/v1/articles/23', note: 'Reports 11% full use and 56% active integration among surveyed IT-BPM firms; the release does not state a sample size.' },
    ],
  },
  'philippines-account-management-escalation-matrix': {
    title: 'Philippines account management escalation matrix',
    description: 'A practical escalation matrix for US teams that use a Philippines-based account manager to sort client issues, reach the right owner, and close the record.',
    published: '2026-07-25',
    updated: '2026-07-25',
    readMinutes: 12,
    intro: [
      'A client escalation gets harder when the account manager has to guess what counts as urgent or who can make the call. A Philippines-based account manager needs a short matrix that separates routine follow-up from an issue that needs a US owner now.',
      'This guide gives the team four alert levels, a fact record, owner limits, a client holding note, and a closure check. The account manager can gather facts and keep the client informed, while contract changes, unusual promises, money movement, legal statements, and security decisions stay with the approved owner.',
    ],
    takeawaysTitle: 'The short version',
    takeaways: [
      'Set alert levels before a difficult client message arrives.',
      'Route facts, client effect, owner, and next update time in one record.',
      'Keep contract, legal, security, and unusual promise decisions with the named owner.',
      'Close the escalation only after the client record and follow-up task show the same owner and next action.',
    ],
    sections: [
      {
        heading: 'Write the matrix before the account goes live',
        paragraphs: [
          'The Philippine IT-BPM industry closed 2024 with 1.82 million jobs and USD 38 billion in revenue, according to an IBPAP release dated January 16, 2025. Those figures show the size of the industry, but they do not tell one account manager when to contact an owner or what to say to a waiting client.',
          'Start with four alert levels that fit the business: routine, watch, urgent, and critical. Give each level a plain trigger, a first action, a named owner, a backup, and the time for the next client update.',
          'Test the words against real examples from the last few months. A late internal task may be routine, while exposed client data, a broken live service, or a missed hard commitment may need an urgent or critical route.',
        ],
      },
      {
        heading: 'Put the facts in one escalation record',
        paragraphs: [
          'The first record should answer six questions: what happened, which client is affected, when it started, what is blocked, what proof exists, and what decision is needed. Add the source message, ticket, CRM record, or system notice so the owner can check the facts without asking the account manager to retell the story.',
          'Microsoft reported on May 9, 2023 that 62% of survey respondents struggled with too much time spent searching for information during the workday. The same report said 68% lacked enough uninterrupted focus time, so a useful escalation record should reduce search and review time instead of creating a new meeting with no clear choice.',
          'Write observed facts apart from guesses. The note "client portal returned an error for three named users at 10:20 a.m." gives an owner something to check, while "the client may leave" belongs in a separate risk field unless the client actually said it.',
        ],
      },
      {
        heading: 'Match each alert level to a clear owner limit',
        paragraphs: [
          'Routine work can stay with the Philippines-based account manager when it follows an approved step, such as finding a missing file, confirming a meeting, or checking an open task. A watch item may need an owner to review the next message, but it does not need the same channel as a live service failure.',
          'Urgent and critical items need a named business owner who can make the decision. Keep contract changes, credits, refunds, legal claims, public comments, security notices, broad access changes, and promises outside the agreed work with that owner.',
          'Give the account manager a backup route when the first owner does not answer. The backup should know whether to decide, find another approver, or send an approved holding note, rather than quietly inheriting authority the business never gave them.',
        ],
      },
      {
        heading: 'Use a separate route for personal data and security events',
        paragraphs: [
          'Republic Act No. 10173, the Philippine Data Privacy Act of 2012, protects personal information in government and private-sector information systems. A client escalation matrix should therefore point a suspected data mistake to the business security or privacy owner instead of asking the account manager to decide whether a legal notice is required.',
          'NIST published SP 800-61 Revision 3 in April 2025 to help organizations place incident response inside broader cyber risk management. Use the security plan for technical review, containment, legal checks, and outside notice decisions; use the account record only for approved client facts, contacts, and update times.',
          'Do not ask the account manager to investigate through a personal device, copy private records into chat, or promise that an event is harmless. They can preserve the source message, stop the routine task if told to do so, reach the named owner, and send only wording that the owner has approved.',
        ],
      },
      {
        heading: 'Send a holding note without making a new promise',
        paragraphs: [
          'A client often needs to know that the issue has an owner before the business knows the final answer. Give the account manager an approved note that confirms receipt, names the next update time, and avoids guessing about cause, blame, recovery, or a contract result.',
          'The Microsoft report also found that 64% of people struggled with the time and energy needed to do their job, while 60% of leaders were concerned about a lack of new ideas on their teams. Those figures came from a 31,000-person survey across 31 countries, and they support a simple rule: make the route easy enough to use during a busy day.',
          'Keep the note short and put the full facts in the internal record. If the next update will be late, send a new time before the old one passes and state what the owner is still checking without filling the gap with an unapproved answer.',
        ],
      },
      {
        heading: 'Close the record and fix the weak step',
        paragraphs: [
          'Close an escalation after the owner has made the decision, the approved client message has gone out, and the account record shows the next action. Record the cause that was confirmed, the action taken, the client reply, any open follow-up, and the person who will check it.',
          'Some IT-BPM firms are adding more AI tools. In a February 3, 2025 release, IBPAP said 11% of surveyed firms had fully put agentic AI into use and 56% were actively adding it to operations, but the release did not state a sample size. An automatic summary can help prepare a draft only when the tool is approved and a person checks every fact against the original record.',
          'Review the matrix after the first few live cases. Fix a vague trigger, missing backup, slow owner response, broad access rule, or weak client note in the matrix itself so the next account manager does not face the same guess.',
        ],
      },
    ],
    banners: [
      { label: 'Escalation check 1 of 3', title: 'Set the owner route now', body: 'Give every alert level a named owner, backup, and next update time before client work starts.', href: '/services/escalation-coordination', link: 'See escalation support' },
      { label: 'Escalation check 2 of 3', title: 'Keep requests moving', body: 'Sort routine follow-up, owner decisions, and blocked work without losing the source record.', href: '/services/client-request-routing', link: 'See request routing support' },
      { label: 'Escalation check 3 of 3', title: 'Watch the account after closure', body: 'Check the client reply, open follow-up, and any new risk after the first issue is closed.', href: '/services/account-health-monitoring', link: 'See account health support' },
    ],
    table: {
      caption: 'Four-level escalation matrix for a Philippines-based account manager',
      headers: ['Alert level', 'Example trigger', 'Account manager action', 'Owner action'],
      rows: [
        ['Routine', 'Approved follow-up or missing record with no client block', 'Complete the normal step and update the CRM', 'Review in the normal account check'],
        ['Watch', 'Repeated delay, unclear promise, or early client concern', 'Gather facts and prepare the next message', 'Check the message and choose the next action'],
        ['Urgent', 'Hard deadline at risk, active client block, or serious complaint', 'Open the urgent route and send the approved holding note', 'Decide the response and next update time'],
        ['Critical', 'Suspected data event, live service failure, or legal threat', 'Preserve the source, stop assigned work if directed, and alert the account and security owners', 'Lead security, legal, service, and client decisions'],
      ],
    },
    chart: [
      { label: 'Time and energy', value: 64, color: '#0f766e' },
      { label: 'Leader concern', value: 60, color: '#6366f1' },
      { label: 'Focus time short', value: 68, color: '#f26b4e' },
      { label: 'Time spent searching', value: 62, color: '#d6b36a' },
    ],
    chartMeta: {
      title: 'Workday pressure reported in the 2023 Microsoft Work Trend Index',
      desc: 'Horizontal bars show 64 percent reporting time and energy strain, 60 percent of leaders concerned about a lack of innovation, 68 percent reporting too little uninterrupted focus time, and 62 percent reporting too much time spent searching for information.',
      heading: 'Busy teams need a short escalation route',
      method: 'Microsoft published these figures on May 9, 2023 from a survey of 31,000 people in 31 countries. The 60% figure describes leaders; the other three describe people or survey respondents. These are workday findings and do not measure account escalations.',
    },
    graphic: {
      title: 'Three-step client escalation path',
      desc: 'A process graphic moves from a fact record to an owner decision and then to an approved client update with a closure check.',
      heading: 'Record, route, close',
      steps: [
        { title: '1  Record', line1: 'Event, client effect,', line2: 'proof, update time', color: '#e8c98e' },
        { title: '2  Route', line1: 'Alert level, owner,', line2: 'backup, decision', color: '#b9dfce' },
        { title: '3  Close', line1: 'Approved reply,', line2: 'follow-up, record', color: '#ffd9ce' },
      ],
      caption: 'The account manager records what happened and routes the needed choice. The owner approves the response, and the account manager closes the client record only after the next action has a person and date.',
    },
    quote: {
      text: 'The mitigation of violations of security policies and recommended practices.',
      source: 'NIST Computer Security Resource Center, incident response glossary, citing CNSSI 4009-2015',
      url: 'https://csrc.nist.gov/glossary/term/incident_response',
    },
    scriptTitle: 'A copy-ready client holding note',
    scriptIntro: 'Use this only after the alert level and owner are set. Replace each bracketed item, keep the internal evidence out of the client note, and send no claim the owner has not approved.',
    script: [
      'We received your message about [issue] at [time and time zone]. [Owner name or team] is checking the facts now, and your next update will arrive by [time].',
      'The work affected right now is [confirmed client effect]. We will keep the account record open and share the next approved action in that update.',
      'If you need to add a fact before then, please reply in [approved channel] and include [record or account reference].',
    ],
    faqTitle: 'Questions about the escalation matrix',
    faqs: [
      { q: 'What should a Philippines-based account manager escalate?', a: 'Escalate any event that matches the written alert levels, falls outside approved work, blocks a client, or needs a contract, legal, security, access, or unusual business decision.' },
      { q: 'Can the account manager promise a fix time?', a: 'Only when an approved owner has confirmed that time. The manager can promise the next update time when the matrix allows it, which keeps the client informed without inventing a result.' },
      { q: 'What belongs in the internal record?', a: 'Record what happened, the affected client, start time, confirmed effect, source proof, alert level, owner, backup, decision needed, next update time, and closure follow-up.' },
      { q: 'When should the team change the matrix?', a: 'Review it after live escalations, owner changes, new systems, new client promises, and security-plan updates. Change the weak rule or missing route instead of relying on people to remember an exception.' },
    ],
    sources: [
      { name: 'IT and Business Process Association of the Philippines, 2024 milestones', date: 'January 16, 2025', url: 'https://admin.ibpap.org/api/v1/articles/21', note: 'Reports 1.82 million Philippine IT-BPM jobs and USD 38 billion in 2024 revenue.' },
      { name: 'Microsoft Work Trend Index Annual Report', date: 'May 9, 2023', url: 'https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work', note: 'Reports the four workday survey figures in the chart and describes the 31,000-person, 31-country survey.' },
      { name: 'Lawphil, Republic Act No. 10173', date: 'August 15, 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Publishes the Philippine Data Privacy Act of 2012 and its coverage of personal information systems.' },
      { name: 'NIST SP 800-61 Revision 3', date: 'April 2025', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final', note: 'Gives current NIST incident response recommendations within Cybersecurity Framework 2.0 risk management.' },
      { name: 'NIST Computer Security Resource Center, incident response glossary', date: 'accessed July 25, 2026', url: 'https://csrc.nist.gov/glossary/term/incident_response', note: 'Provides the exact incident response definition quoted in this guide.' },
      { name: 'IT and Business Process Association of the Philippines, agentic AI survey', date: 'February 3, 2025', url: 'https://admin.ibpap.org/api/v1/articles/23', note: 'Reports 11% full use and 56% active integration among surveyed IT-BPM firms; the release does not state a sample size.' },
    ],
  },
  'philippines-account-management-client-reporting-checklist': {
    title: 'Philippines account management client reporting checklist',
    description: 'A practical checklist for US teams that use a Philippines-based account manager to prepare client reports, QBR notes, and owner decision lists.',
    published: '2026-07-25',
    updated: '2026-07-25',
    readMinutes: 12,
    intro: [
      'A client report should help an owner make a choice, not make them search through five tools for the story. A Philippines-based account manager can gather the facts and prepare a clean draft while the US team keeps control of contract changes, unusual promises, money movement, and legal statements.',
      'This checklist covers the source record, report fields, review steps, client-safe wording, access limits, and follow-up after the report goes out. It works for a weekly account note, a monthly review, or a customer QBR pack.',
    ],
    takeawaysTitle: 'The short version',
    takeaways: [
      'Build every claim from a linked source record and a clear time window.',
      'Show the next action, owner, due date, and decision needed for every open item.',
      'Keep client facts apart from internal notes and unapproved guesses.',
      'Have the account owner check exceptions before the report reaches the client.',
    ],
    sections: [
      {
        heading: 'Start with the decision the report must support',
        paragraphs: [
          'The Philippine IT-BPM industry ended 2024 with 1.82 million jobs and USD 38 billion in revenue, according to an IBPAP release dated January 16, 2025. That is a large business-services workforce, but a client report still needs a narrow purpose that one account manager can explain in a sentence.',
          'Write the reader and the decision at the top of the report brief. A weekly owner note may need to show blocked work and client risk, while a QBR draft may need to show results, open commitments, and the choices planned for the next period.',
          'Do not fill a report with every field the CRM can export. Choose the facts that answer the stated question, then link each fact to its source so the owner can check it without starting a second search.',
        ],
      },
      {
        heading: 'Use one report record for facts and follow-up',
        paragraphs: [
          'Create one row for each item the client or owner may ask about. Record the measure, time window, source link, last checked time, account manager, next action, owner, due date, and any decision that still waits for approval.',
          'Write a short note when a number has a limit. If a support count covers only one inbox, say so beside the count instead of leaving the reader to assume it covers every channel.',
          'The table below gives a basic report shape. Keep the source and review columns even when the report looks simple, because those two fields make later corrections much easier.',
        ],
      },
      {
        heading: 'Check the source before writing the story',
        paragraphs: [
          'Open the CRM view, task list, support record, meeting note, and approved client file used in the report. Check that the date window matches, duplicate records are removed, and the account name is the same across the sources.',
          'The Philippine Data Privacy Act of 2012 covers personal information systems in government and the private sector. Keep client contacts, private notes, and report files inside the business systems approved for the account, and do not move a client list to a personal file just because it is easier to sort.',
          'Account teams are also testing more AI tools. In a February 3, 2025 release, IBPAP said 11% of surveyed IT-BPM firms had fully put agentic AI into use and 56% were actively adding it to operations, but the release did not state a sample size. If a tool drafts a summary, the account manager should compare every claim with the source and keep the approved final note in the client record.',
        ],
      },
      {
        heading: 'Give the account manager enough access, not every control',
        paragraphs: [
          'A report preparer may need to read assigned CRM records, open approved dashboards, view support history, and edit a working draft. That does not mean the person needs bulk export, user control, deletion, contract editing, or access to every client in the business.',
          'Use a named login and match each permission to a report task. Test the access on one small account group, note any blocked step, and ask the system owner to add only the permission needed for that step.',
          'The NIST definition of least privilege gives the owner a plain test for this setup. The exact definition below keeps the access check tied to assigned work rather than job title or convenience.',
        ],
      },
      {
        heading: 'Run a short owner review before client delivery',
        paragraphs: [
          'Microsoft reported on May 9, 2023 that the average Microsoft 365 employee spent 57% of work time communicating and 43% creating files. The study combined a survey of 31,000 people in 31 countries with Microsoft 365 activity, so a report review should cut search time instead of adding another long meeting.',
          'Ask the account manager to mark changed facts, client concerns, overdue commitments, and owner decisions in the draft. The owner can then check those marked items, confirm the next action, and approve the client-safe version without rereading every old message.',
          'Use the three-step path in the graphic below. Gather linked facts, check exceptions with the owner, and send the approved report with a dated follow-up action.',
        ],
      },
      {
        heading: 'Close the loop after the report is sent',
        paragraphs: [
          'Save the final report beside the source record and note when it was sent. Add client corrections, questions, and new commitments to the account record instead of leaving them only in email or chat.',
          'At the next review, compare the last report with what actually happened. Fix a missing source, unclear owner, weak date window, or late decision in the report template so the same problem does not return next month.',
          'Keep the report useful enough that another person can take over the account for a day. They should be able to see the current result, open promise, next action, owner, and supporting record without asking the report writer to explain the whole history.',
        ],
      },
    ],
    banners: [
      { label: 'Report check 1 of 3', title: 'Build the source record first', body: 'Tie each client result, open item, and next action to a record the owner can open.', href: '/services/account-reporting', link: 'See account reporting support' },
      { label: 'Report check 2 of 3', title: 'Prepare the review around decisions', body: 'Put changed facts, client concerns, and owner choices where the reviewer can find them fast.', href: '/services/customer-qbr-preparation', link: 'See QBR preparation support' },
      { label: 'Report check 3 of 3', title: 'Watch what happens next', body: 'Compare the report with later client replies, completed work, and new account risk.', href: '/services/account-health-monitoring', link: 'See account health support' },
    ],
    table: {
      caption: 'Client report record for a Philippines-based account manager',
      headers: ['Report field', 'What to record', 'Source proof', 'Owner check'],
      rows: [
        ['Result', 'Measure, time window, and short context', 'CRM view or approved dashboard', 'Confirm scope and date window'],
        ['Open item', 'Client request, current state, and next action', 'Task or source message', 'Choose owner and due date'],
        ['Commitment', 'Exact promise, person, and date', 'Approved recap or contract record', 'Check any exception'],
        ['Account risk', 'Observed fact and likely effect', 'Linked note, ticket, or event', 'Choose client response'],
        ['Follow-up', 'Action after delivery and check date', 'Final report and account record', 'Confirm closure'],
      ],
    },
    chart: [
      { label: 'Teams meetings', value: 23, color: '#0f766e' },
      { label: 'Teams chat', value: 19, color: '#6366f1' },
      { label: 'Email', value: 15, color: '#f26b4e' },
      { label: 'Creating files', value: 43, color: '#d6b36a' },
    ],
    chartMeta: {
      title: 'Where Microsoft 365 work time went',
      desc: 'Horizontal bars show 23 percent in Teams meetings, 19 percent in Teams chat, 15 percent in email, and 43 percent creating files.',
      heading: 'Communication took 57% of work time',
      method: 'Microsoft reported this split from Microsoft 365 activity in a rolling 28-day period ending in March 2023, with weekends excluded. Meetings, chat, and email add to 57% communication time; file creation makes up 43%.',
    },
    graphic: {
      title: 'Three-step client report review path',
      desc: 'A process graphic moves from linked client facts to an owner exception check and then to an approved report with a dated follow-up.',
      heading: 'Gather, check, send',
      steps: [
        { title: '1  Gather', line1: 'Facts, window,', line2: 'source, owner', color: '#e8c98e' },
        { title: '2  Check', line1: 'Changes, risk,', line2: 'open decisions', color: '#b9dfce' },
        { title: '3  Send', line1: 'Approved report,', line2: 'next check date', color: '#ffd9ce' },
      ],
      caption: 'The account manager gathers linked facts and marks exceptions. The owner checks those items before the approved report goes to the client, then the account record holds the next action.',
    },
    quote: {
      text: 'A security principle that a system should restrict the access privileges of users (or processes acting on behalf of users) to the minimum necessary to accomplish assigned tasks.',
      source: 'NIST Computer Security Resource Center, citing CNSSI 4009-2015 and NIST SP 800-12 Rev. 1',
      url: 'https://csrc.nist.gov/glossary/term/least_privilege',
    },
    scriptTitle: 'A copy-ready report review note',
    scriptIntro: 'Send this note with the draft to the account owner. Replace every bracketed item and keep the source links inside the report record.',
    script: [
      'This report covers [client or account group] from [start date] through [end date]. The source records were last checked on [date and time].',
      'Please review these changed facts or exceptions: [items]. The decisions needed are [choices], owned by [name], by [date].',
      'After approval, I will send the report through [approved channel] and record client questions, corrections, and the next action in [account record].',
    ],
    faqTitle: 'Questions about client reporting',
    faqs: [
      { q: 'What should a Philippines-based account manager put in a client report?', a: 'Include the result, time window, source, open items, commitments, account risk, next actions, owners, and due dates that fit the report purpose.' },
      { q: 'Who should approve the report?', a: 'The named account owner should check exceptions, contract-related wording, unusual promises, private information, and any decision outside the account manager’s assigned work.' },
      { q: 'Can AI write the client summary?', a: 'It may draft a summary only in an approved tool with allowed data. A person should compare each claim with the source and approve the final client wording.' },
      { q: 'How can the team make report review faster?', a: 'Mark only changed facts, open risk, and needed decisions in the draft. Keep source links beside each item so the owner can check the evidence without searching.' },
    ],
    sources: [
      { name: 'IT and Business Process Association of the Philippines, 2024 milestones', date: 'January 16, 2025', url: 'https://admin.ibpap.org/api/v1/articles/21', note: 'Reports 1.82 million Philippine IT-BPM jobs and USD 38 billion in 2024 revenue.' },
      { name: 'IT and Business Process Association of the Philippines, agentic AI survey', date: 'February 3, 2025', url: 'https://admin.ibpap.org/api/v1/articles/23', note: 'Reports 11% full use and 56% active integration among surveyed IT-BPM firms; the release does not state a sample size.' },
      { name: 'Microsoft Work Trend Index Annual Report', date: 'May 9, 2023', url: 'https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work', note: 'Reports the 57% communication and 43% creation split, based on a 31,000-person survey and Microsoft 365 activity.' },
      { name: 'National Privacy Commission, Data Privacy Act of 2012', date: 'August 15, 2012', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Publishes Republic Act No. 10173 and its rules for personal information systems.' },
      { name: 'NIST Computer Security Resource Center, least privilege glossary', date: 'accessed July 25, 2026', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Provides the exact least-privilege definition quoted in this checklist.' },
    ],
  },
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
