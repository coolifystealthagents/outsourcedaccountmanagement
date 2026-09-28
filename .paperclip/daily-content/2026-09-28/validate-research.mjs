import fs from 'node:fs';
import crypto from 'node:crypto';

const slugs = [
  'client-stakeholder-authority-drift-study',
  'renewal-notice-evidence-chain-research',
  'client-escalation-audience-sequencing-analysis',
  'account-priority-override-outcome-study',
  'client-meeting-decision-ambiguity-research',
];

const decode = (value) => value
  .replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');

const bodies = new Map();
for (const slug of slugs) {
  const path = `.next/server/app/research/${slug}.html`;
  const html = fs.readFileSync(path, 'utf8');
  const start = html.indexOf('<section><h2>');
  const end = html.indexOf('<h2>Review table', start);
  if (start < 0 || end < 0) throw new Error(`${slug}: rendered substantive-body boundaries missing`);
  const body = decode(html.slice(start, end).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
  const words = body.match(/[\p{L}\p{N}][\p{L}\p{N}’'/-]*/gu) ?? [];
  if (words.length < 1200) throw new Error(`${slug}: ${words.length} substantive words; minimum is 1200`);
  if (!html.includes(`https://outsourcedaccountmanagement.com/research/${slug}`)) throw new Error(`${slug}: canonical URL missing`);
  if (!html.includes('2026-09-28')) throw new Error(`${slug}: candidate publication date missing`);
  bodies.set(slug, { body: body.toLowerCase(), words: words.length, hash: crypto.createHash('sha256').update(body).digest('hex') });
}

const shingles = (text) => {
  const words = text.match(/[a-z0-9]+/g) ?? [];
  const set = new Set();
  for (let i = 0; i + 4 < words.length; i += 1) set.add(words.slice(i, i + 5).join(' '));
  return set;
};

let maximumOverlap = 0;
let maximumPair = [];
const overlaps = [];
for (let i = 0; i < slugs.length; i += 1) {
  for (let j = i + 1; j < slugs.length; j += 1) {
    const left = shingles(bodies.get(slugs[i]).body);
    const right = shingles(bodies.get(slugs[j]).body);
    let intersection = 0;
    for (const value of left) if (right.has(value)) intersection += 1;
    const score = intersection / (left.size + right.size - intersection);
    overlaps.push({ pair: [slugs[i], slugs[j]], jaccard: Number(score.toFixed(6)) });
    if (score > maximumOverlap) { maximumOverlap = score; maximumPair = [slugs[i], slugs[j]]; }
  }
}
if (maximumOverlap >= 0.5) throw new Error(`maximum five-word-shingle overlap ${maximumOverlap} is at least 0.5`);

console.log(JSON.stringify({
  required: 5,
  validated: bodies.size,
  articles: slugs.map((slug) => ({ slug, substantiveWords: bodies.get(slug).words, contentHash: bodies.get(slug).hash })),
  fiveWordShingleJaccard: { maximum: Number(maximumOverlap.toFixed(6)), pair: maximumPair, allPairs: overlaps },
}, null, 2));
