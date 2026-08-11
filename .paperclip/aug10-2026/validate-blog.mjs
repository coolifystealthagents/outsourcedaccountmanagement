import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const manifestPath = path.join(root, '.paperclip/aug10-2026/blog.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const fail = (message) => { throw new Error(message); };
if (manifest.entries.length < manifest.minimum) fail('accepted count below minimum');
const slugs = new Set();
for (const entry of manifest.entries) {
  if (slugs.has(entry.slug)) fail(`duplicate slug: ${entry.slug}`);
  slugs.add(entry.slug);
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) fail(`bad blog route: ${entry.route}`);
  if (!fs.existsSync(path.join(root, entry.sourcePath))) fail(`missing source: ${entry.sourcePath}`);
  if (entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') fail(`bad date: ${entry.slug}`);
  if (entry.sourceDateField !== 'published' || !entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) fail(`date fields incomplete: ${entry.slug}`);
  let parent = '';
  try { parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:${entry.sourcePath}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch {}
  const introduced = execFileSync('git', ['show', `${entry.introducedByCommit}:${entry.sourcePath}`], { encoding: 'utf8' });
  if (parent.includes(entry.slug) || !introduced.includes(entry.slug)) fail(`provenance failed: ${entry.slug}`);
}
const source = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const daily = fs.readFileSync(path.join(root, 'app/daily-blog-batch.ts'), 'utf8');
if (!source.includes('blogPosts = [...dailyBlogPosts, ...baseBlogPosts]')) fail('index is not newest-first');
for (const entry of manifest.entries) if (!daily.includes(`['${entry.slug}',`)) fail(`slug not routed: ${entry.slug}`);
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
if (!sitemap.includes('blogPosts.map(p=>`/blog/${p.slug}`)')) fail('blog sitemap membership missing');
const builtRoot = path.join(root, '.next/server/app/blog');
if (!fs.existsSync(builtRoot)) fail('clean build output missing');
for (const entry of manifest.entries) {
  const html = path.join(builtRoot, `${entry.slug}.html`);
  if (!fs.existsSync(html)) fail(`built route missing: ${entry.route}`);
  const rendered = fs.readFileSync(html, 'utf8');
  if (!rendered.includes('2026-08-10') || !rendered.includes('datePublished') || !rendered.includes('dateTime="2026-08-10"')) fail(`rendered date audit failed: ${entry.slug}`);
  if (!rendered.includes(`canonical`) && !rendered.includes(entry.route)) fail(`canonical route evidence missing: ${entry.slug}`);
}
console.log(`PASS blog v6 regression: ${manifest.entries.length} entries, source/rendered dates, routes, sitemap, provenance, and newest-first index verified`);
