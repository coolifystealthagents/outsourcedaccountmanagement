import type { RichArticle } from './rich-articles';

type Topic = readonly [string, string, string, string, string, string];
const topics: Topic[] = [
  ['client-promise-verification-desk','Client promise verification desk','contract-milestone-tracking','check a promised action against the record before it appears in a client update','promise wording, source, owner, due date, current proof, and client consequence','2026-08-31-client-commitment-sunset-review.png'],
  ['account-risk-signal-recheck','Account risk signal recheck','account-health-monitoring','revisit a risk signal when newer account evidence changes its meaning','original signal, observed date, newer evidence, affected decision, reviewer, and next check','2026-08-31-client-metric-definition-card.png'],
  ['renewal-evidence-gap-queue','Renewal evidence gap queue','renewal-administration','keep missing renewal inputs visible without turning assumptions into facts','missing input, source owner, evidence cutoff, decision impact, and escalation date','2026-08-31-renewal-evidence-freeze.png'],
  ['qbr-number-reconciliation-note','QBR number reconciliation note','customer-qbr-preparation','resolve two credible versions of a review metric before either reaches the client','metric definition, reporting period, both sources, calculation difference, owner, and approved value','2026-08-31-qbr-question-backlog.png'],
  ['client-contact-change-handoff','Client contact change handoff','crm-account-maintenance','transfer relationship context when a client contact changes without copying private speculation','departing contact, replacement, confirmed role, open decisions, approved history, and first follow-up','2026-08-31-stakeholder-absence-plan.png'],
  ['shared-inbox-owner-recovery','Shared inbox owner recovery','client-request-routing','restore ownership when a client request sits in a shared inbox without a reliable assignee','message, received time, client impact, former routing, current owner, and acknowledgement deadline','2026-08-31-client-silence-follow-up-rule.png'],
  ['escalation-update-fact-check','Escalation update fact check','escalation-coordination','check a sensitive client update against current technical and owner-approved facts','incident state, verified time, source owner, approved wording, unknowns, and next update','2026-08-31-escalation-audience-map.png'],
  ['account-review-follow-through-audit','Account review follow-through audit','account-reporting','test whether decisions from an account review reached action and verification','review decision, action owner, due date, work evidence, client message, and acceptance state','2026-08-31-qbr-question-backlog.png'],
  ['implementation-dependency-waitlist','Implementation dependency waitlist','implementation-handoff-support','separate genuine dependency waits from work that has quietly lost an owner','blocked item, dependency, request date, dependency owner, interim step, and recheck date','2026-08-31-handoff-shadow-review.png'],
  ['client-approval-expiry-check','Client approval expiry check','client-request-routing','reconfirm an old approval before changed facts make it unsafe to reuse','approved action, approval date, evidence snapshot, expiry trigger, changed facts, and reconfirmation owner','2026-08-31-client-decision-expiry-register.png'],
  ['portfolio-coverage-return-brief','Portfolio coverage return brief','account-health-monitoring','return temporarily covered accounts to their usual owner with open work intact','coverage window, accounts touched, decisions made, open questions, client updates, and return acceptance','2026-08-31-portfolio-exception-budget.png'],
  ['service-credit-evidence-prep','Service credit evidence prep','escalation-coordination','assemble incident and contract facts for the commercial owner without deciding the remedy','client request, service record, contract reference, verified impact, open dispute, and decision owner','2026-08-31-service-credit-preparation-boundary.png'],
];
const sources=[
  {name:'NIST Cybersecurity Framework 2.0',date:'February 26, 2024',url:'https://www.nist.gov/publications/cybersecurity-framework-csf-20',note:'Governance vocabulary, not an account-performance benchmark.'},
  {name:'ISO quality management principles',date:'accessed September 4, 2026',url:'https://www.iso.org/quality-management/principles',note:'Evidence-based decision and process-review principles.'},
  {name:'NIST accountability glossary',date:'accessed September 4, 2026',url:'https://csrc.nist.gov/glossary/term/accountability',note:'Traceable responsibility vocabulary.'},
];
function make([short,name,service,purpose,fields,image]:Topic):RichArticle{
  const subject=name.toLowerCase();
  const openings:Record<string,string>={
    'client-promise-verification-desk':'A promise often sounds settled before anyone can show the completed work.',
    'account-risk-signal-recheck':'Risk labels have a habit of lingering after the underlying facts change.',
    'renewal-evidence-gap-queue':'A renewal packet can look polished and still have a hole in the middle.',
    'qbr-number-reconciliation-note':'Two dashboards can be correct while answering different questions.',
    'client-contact-change-handoff':'A contact change is more than a CRM edit; open approvals need a deliberate handoff.',
    'shared-inbox-owner-recovery':'Shared inboxes hide ownership surprisingly well.',
    'escalation-update-fact-check':'During an escalation, yesterday\'s accurate sentence may be wrong today.',
    'account-review-follow-through-audit':'Meeting notes are easy to finish. Following the decision to proof is harder.',
    'implementation-dependency-waitlist':'The word blocked can conceal a missing decision, missing access, or missing owner.',
    'client-approval-expiry-check':'Approval belongs to a set of facts, even when the message does not say so.',
    'portfolio-coverage-return-brief':'Temporary coverage ends badly when the returning owner gets a vague summary.',
    'service-credit-evidence-prep':'Account support can prepare a service-credit review without choosing the answer.',
  };
  return {title:`Philippines account management ${subject}`,description:`A September 4, 2026 field guide to ${purpose}.`,published:'2026-09-04',updated:'2026-09-04',readMinutes:11,heroImage:`/blog-heroes/${image}`,
    intro:[`Published September 4, 2026. ${openings[short]} This ${subject} helps a Philippines-based team ${purpose}.`,`Its working record contains ${fields}. Another account manager should understand the next move without a private chat or a guess.`],
    takeaways:[`Write down ${fields}.`,'Keep the client consequence beside the task.','Name the work owner and the person allowed to decide.','Close against proof, then state what would reopen the item.'],
    sections:[
      {heading:`Give the ${subject} one job`,paragraphs:[`Use this routine to ${purpose}. Start with the account, triggering event, and decision or update it supports. Put unrelated work in a separate record.`,`Do not tidy away uncertainty. Mark a missing source or disputed fact plainly, then assign the smallest check that can settle it.`]},
      {heading:'Work from the record, not the retelling',paragraphs:[`Link the CRM entry, agreement, approved message, meeting record, or delivery proof beside the fact it supports. A source that controls scope may say nothing about current delivery, so record that limit.`,`When sources disagree, keep both visible. Name the reconciliation owner and the action that must wait.`]},
      {heading:'Make the status mean something',paragraphs:[`Use observable states: captured, checking, awaiting decision, approved to communicate, verifying, and closed. Each needs an entry rule and exit proof.`,`Sent does not mean accepted. Done does not mean verified. The ${subject} should preserve those differences.`]},
      {heading:'Put authority next to ownership',paragraphs:[`A Philippines-based specialist can gather approved facts, maintain the record, prepare neutral wording, and route an exception. Contract terms, money, legal positions, security controls, access, and service scope stay with authorized owners.`,`For temporary authority, record the allowed decision class, start, end, and exclusions. A job title alone is not enough.`]},
      {heading:'Write the next useful client update',paragraphs:[`If the answer is open, tell the client what was received, what is confirmed, who owns the decision, and when the next approved update is due.`,`Read the draft beside the current source record. Save the approved version and any later correction.`]},
      {heading:'Test the routine with a real case',paragraphs:[`Once a week, ask a teammate to reconstruct the state, authority, and next action from the record alone.`,`Anything that must be explained verbally points to a missing field, weak definition, or absent source link.`]},
      {heading:'Close carefully',paragraphs:[`Close when the stated action happened, the authorized owner accepted the result, and required client communication was sent. Link the proof.`,`Reopen when evidence changes, a client corrects the record, approval expires, or verification fails.`]},
    ],
    banners:[{label:'Working record',title:'Keep the source close',body:'A reviewer should be able to reproduce the fact.',href:`/services/${service}`,link:'See related support'},{label:'Owner check',title:'Name the decision owner',body:'Preparation and approval are different jobs.',href:'/services/account-reporting',link:'See reporting support'},{label:'Next step',title:'Build a controlled routine',body:'Start with a small queue and visible review.',href:'/contact-us',link:'Contact Us'}],
    table:{caption:`${name} working fields`,headers:['Question','Record','Check'],rows:[['What happened?','Source, date, observed fact','Can another person find it?'],['Why now?','Client consequence and due date','Is the timing current?'],['Who decides?','Work owner and decision owner','Is authority explicit?'],['What ends it?','Proof and reopen rule','Was the result verified?']]},
    chart:[{label:'Source',value:100,color:'#e8c98e'},{label:'Decision',value:72,color:'#b9dfce'},{label:'Proof',value:46,color:'#ffd9ce'}],chartMeta:{title:`${name} review path`,desc:'A process aid linking source, decision, and proof.',heading:'Source, decision, proof',method:'Illustrative workflow, not measured performance.'},quote:{text:'Accountability allows actions to be traced to an entity.',source:'NIST accountability glossary',url:'https://csrc.nist.gov/glossary/term/accountability'},
    script:[`We checked ${subject} against [source] on [date]. We can confirm [fact]. [Owner] is reviewing [open point].`,'Your next approved update is due [date]. We will close this item when [proof] is available.'],
    faqs:[{q:`What belongs in a ${subject}?`,a:`Record ${fields}, plus the client consequence and closure rule.`},{q:'Who makes sensitive decisions?',a:'The named authorized owner handles commercial, legal, security, privacy, access, and scope decisions.'},{q:'When should it reopen?',a:'Reopen when evidence changes, approval expires, the client corrects a fact, or verification fails.'}],sources};
}
export const september4BlogPosts=topics.map(t=>({slug:`philippines-account-management-${t[0]}`,title:`Philippines account management ${t[1].toLowerCase()}`,published:'2026-09-04' as const,excerpt:`A September 4, 2026 guide to ${t[3]}.`,minutes:11}));
export const september4RichArticles:Array<[string,RichArticle]>=topics.map(t=>[`philippines-account-management-${t[0]}`,make(t)]);
