import fs from 'node:fs';
import crypto from 'node:crypto';

const publicationDate = '2026-09-28';
const blog = [
  'client-onboarding-permission-expiry-review', 'account-health-signal-conflict-triage',
  'renewal-decision-dependency-map', 'qbr-metric-restatement-protocol',
  'crm-contact-consent-source-check', 'client-request-acceptance-test-draft',
  'expansion-discovery-boundary-brief', 'portfolio-review-exclusion-register',
  'milestone-partial-acceptance-record', 'feedback-theme-evidence-threshold',
  'handoff-automation-owner-transfer', 'escalation-resolution-claim-check',
].map((slug) => `philippines-account-management-${slug}`);
const research = [
  'client-stakeholder-authority-drift-study',
  'renewal-notice-evidence-chain-research',
  'client-escalation-audience-sequencing-analysis',
  'account-priority-override-outcome-study',
  'client-meeting-decision-ambiguity-research',
];

const decode = (value) => value.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const inspect = (family, slug) => {
  const html = fs.readFileSync(`.next/server/app/${family}/${slug}.html`, 'utf8');
  // Exclude the Blog intro/takeaway shell and both families' source appendices.
  const startNeedle = family === 'blog' ? '<section' : '<section><h2>';
  const endNeedle = family === 'blog' ? '<h2>Sources' : '<h2>Review table';
  const start = html.indexOf(startNeedle);
  const end = html.indexOf(endNeedle, start);
  if (start < 0 || end < 0) throw new Error(`${family}/${slug}: substantive-body boundaries missing`);
  const body = decode(html.slice(start, end).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
  const words = body.match(/[\p{L}\p{N}][\p{L}\p{N}’'/-]*/gu) ?? [];
  const minimum = family === 'blog' ? 900 : 1200;
  if (words.length < minimum) throw new Error(`${family}/${slug}: ${words.length} substantive words; minimum ${minimum}`);
  const canonical = `https://outsourcedaccountmanagement.com/${family}/${slug}`;
  if (!html.includes(canonical)) throw new Error(`${family}/${slug}: canonical missing`);
  if (!html.includes(publicationDate)) throw new Error(`${family}/${slug}: publication date missing`);
  return { slug, substantiveWords: words.length, contentHash: crypto.createHash('sha256').update(body).digest('hex'), body: body.toLowerCase() };
};
const shingles = (text) => {
  // Use the same Unicode word tokens as the body-depth audit; hyphenated operational
  // terms remain one word rather than becoming multiple artificial shingles.
  const words = text.match(/[\p{L}\p{N}][\p{L}\p{N}’'/-]*/gu) ?? []; const result = new Set();
  for (let i = 0; i + 4 < words.length; i += 1) result.add(words.slice(i, i + 5).join(' '));
  return result;
};
const audit = (items) => {
  let maximum = 0; let pair = []; const failures = [];
  for (let i = 0; i < items.length; i += 1) for (let j = i + 1; j < items.length; j += 1) {
    const left = shingles(items[i].body); const right = shingles(items[j].body); let intersection = 0;
    for (const value of left) if (right.has(value)) intersection += 1;
    const score = intersection / (left.size + right.size - intersection);
    if (score >= 0.5) failures.push({ pair: [items[i].slug, items[j].slug], score: Number(score.toFixed(6)) });
    if (score > maximum) { maximum = score; pair = [items[i].slug, items[j].slug]; }
  }
  return { maximum: Number(maximum.toFixed(6)), pair, failures };
};
const blogResults = blog.map((slug) => inspect('blog', slug));
const researchResults = research.map((slug) => inspect('research', slug));
const audits = { blog: audit(blogResults), research: audit(researchResults) };
console.log(JSON.stringify({ publicationDate, required: { blog: 12, research: 5 }, validated: { blog: blogResults.length, research: researchResults.length }, blog: blogResults.map(({body, ...item}) => item), research: researchResults.map(({body, ...item}) => item), fiveWordShingleJaccard: audits }, null, 2));
if (audits.blog.failures.length || audits.research.failures.length) throw new Error(`five-word-shingle threshold failed for ${audits.blog.failures.length} Blog and ${audits.research.failures.length} Research pairs`);
