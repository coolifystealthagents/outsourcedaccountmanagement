import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const fail = (message) => { throw new Error(message); };
const read = (path) => fs.readFileSync(path, 'utf8');
const blogManifest = JSON.parse(read('.paperclip/daily-content/2026-10-08/blog.json'));
const researchManifest = JSON.parse(read('.paperclip/daily-content/2026-10-08/research.json'));
const content = read('app/oct8-content.ts');
const blogIndex = read('app/blog/page.tsx');
const blogPages = read('app/blog/page/[page]/page.tsx');
const blogDetail = read('app/blog/[slug]/page.tsx');
const researchIndex = read('app/research/page.tsx');
const researchPages = read('app/research/page/[page]/page.tsx');
const researchDetail = read('app/research/[slug]/page.tsx');

if (blogManifest.date !== '2026-10-08' || researchManifest.date !== '2026-10-08') fail('manifest date mismatch');
if (blogManifest.requiredCount !== 12 || blogManifest.entries.length !== 12) fail('Blog count must be 12');
if (researchManifest.requiredCount !== 5 || researchManifest.entries.length !== 5) fail('Research count must be 5');
const entries = [...blogManifest.entries, ...researchManifest.entries];
const slugs = entries.map((entry) => entry.slug);
if (new Set(slugs).size !== 17) fail('new slugs are not unique');
if (blogManifest.entries.some((entry) => entry.words < 1100)) fail('Blog body below 1,100 words');
if (researchManifest.entries.some((entry) => entry.words < 1100)) fail('Research body below 1,100 words');
for (const slug of slugs) {
  if (!content.includes(`"slug": "${slug}"`) && !content.includes(`"${slug}",`)) fail(`missing generated content: ${slug}`);
  let prior = '';
  try { prior = execFileSync('git', ['grep', '-F', slug, 'HEAD', '--', 'app'], { encoding: 'utf8' }); } catch {}
  if (prior.trim()) fail(`slug already existed in HEAD: ${slug}`);
}
if ((content.match(/"published": "2026-10-08"/g) ?? []).length !== 17) fail('all 17 published dates must be exact');
if ((content.match(/"datePublished": "2026-10-08"/g) ?? []).length !== 5) fail('all Research datePublished values must be exact');
if ((content.match(/"externalSources": \[/g) ?? []).length !== 5) fail('all Research entries need externalSources');
if ((content.match(/https:\/\/www\.nist\.gov\/cyberframework/g) ?? []).length < 5) fail('authoritative NIST citations missing');
try { execFileSync('git', ['cat-file', '-e', 'HEAD:public/research-heroes/2026-09-24-evidence-lineage.png']); } catch { fail('referenced hero asset is not tracked'); }
if (!blogDetail.includes('Published <time') || !blogIndex.includes('Published <time') || !blogPages.includes('Published <time')) fail('visible Blog date missing');
if (!researchDetail.includes('Published <time') || !researchIndex.includes('Published <time') || !researchPages.includes('Published <time')) fail('visible Research date missing');
if (!read('app/data.ts').includes('...october8BlogPosts') || !read('app/rich-articles.ts').includes('october8RichArticles') || !read('app/research-data.ts').includes('...october8ResearchPosts')) fail('registry wiring missing');
console.log(JSON.stringify({ status: 'PASS', blog: 12, research: 5, total: 17, date: '2026-10-08', blogMinWords: Math.min(...blogManifest.entries.map((x) => x.words)), researchMinWords: Math.min(...researchManifest.entries.map((x) => x.words)), visibleDetailAndListings: true, authoritativeCitations: true, assetExists: true }, null, 2));
