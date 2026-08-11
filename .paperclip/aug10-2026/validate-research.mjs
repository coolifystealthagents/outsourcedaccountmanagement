import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/research.json'), 'utf8'));
const fail = (message) => { throw new Error(message); };
if (manifest.entries.length !== 10 || manifest.entries.length < manifest.minimum) fail('accepted count must be exactly 10');
const source = fs.readFileSync(path.join(root, 'app/research-data.ts'), 'utf8');
const slugs = new Set();
const sourceRecords = [...source.matchAll(/^\s*\['([^']+)'[^\n]*'([^']+)'\],?$/gm)];
const sourceDates = new Map(sourceRecords.map((match) => [match[1], match[2]]));
for (const entry of manifest.entries) {
  if (slugs.has(entry.slug)) fail(`duplicate slug: ${entry.slug}`); slugs.add(entry.slug);
  if (entry.route !== `/research/${entry.slug}`) fail(`bad research route: ${entry.route}`);
  if (!fs.existsSync(path.join(root, entry.sourcePath))) fail(`missing source: ${entry.sourcePath}`);
  if (entry.sourceDateField !== 'articleDate' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') fail(`bad manifest date: ${entry.slug}`);
  if (sourceDates.get(entry.slug) !== '2026-08-10') fail(`bad source articleDate: ${entry.slug}`);
  let parent = ''; try { parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:${entry.sourcePath}`], {encoding:'utf8'}); } catch {}
  const introduced = execFileSync('git', ['show', `${entry.introducedByCommit}:${entry.sourcePath}`], {encoding:'utf8'});
  if (parent.includes(`'${entry.slug}'`) || !introduced.includes(`'${entry.slug}'`)) fail(`provenance failed: ${entry.slug}`);
  if (!sourceDates.has(entry.slug)) fail(`source record missing: ${entry.slug}`);
}
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
if (!sitemap.includes('researchPosts.map(p=>`/research/${p.slug}`)')) fail('research sitemap membership missing');
if (!source.includes('}).sort((a, b) => b.published.localeCompare(a.published))')) fail('research index is not newest-first');
const orderedDates = manifest.entries.map((entry) => sourceDates.get(entry.slug));
if (orderedDates.some((date, index) => index > 0 && date > orderedDates[index - 1])) fail('manifest entries are not newest-first');
const builtRoot = path.join(root, '.next/server/app/research');
for (const entry of manifest.entries) {
  const htmlPath = path.join(builtRoot, `${entry.slug}.html`);
  if (!fs.existsSync(htmlPath)) fail(`built route missing: ${entry.route}`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  const renderedDate = html.includes('datePublished') || html.includes('article:published_time') || html.includes('dateTime="2026-08-10"');
  if (!html.includes('2026-08-10') || !renderedDate) fail(`rendered date audit failed: ${entry.slug}`);
  if (!html.includes(`rel="canonical" href="https://outsourcedaccountmanagement.com${entry.route}"`)) fail(`canonical route missing: ${entry.slug}`);
  if (!html.includes(`article:published_time`) || !html.includes(`dateTime="2026-08-10"`)) fail(`rendered metadata/visible date missing: ${entry.slug}`);
}
console.log(`PASS research v6 regression: ${manifest.entries.length} entries, source/rendered dates, routes, sitemap, provenance, and canonical checks verified`);
