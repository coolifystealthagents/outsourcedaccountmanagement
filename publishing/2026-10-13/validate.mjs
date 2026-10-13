import fs from 'node:fs';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';

const fail = (message) => { throw new Error(message); };
const read = (file) => fs.readFileSync(file, 'utf8');
const manifest = JSON.parse(read('publishing/2026-10-13/manifest.json'));
const source = read('app/october13-content.ts');
const parse = (pattern, label) => { const match = source.match(pattern); if (!match) fail(`cannot parse ${label}`); return JSON.parse(match[1]); };
const blogs = parse(/export const october13BlogPosts = ([\s\S]*?) as const;/, 'Blog registry');
const rich = parse(/export const october13RichArticles: Record<string, RichArticle> = ([\s\S]*?);\n\nexport const october13ResearchPosts/, 'Blog articles');
const research = parse(/export const october13ResearchPosts: ResearchPost\[\] = ([\s\S]*?);\n$/, 'Research articles');
const all = [...blogs.map((item) => ({ ...item, type: 'Blog', article: rich[item.slug] })), ...research.map((item) => ({ ...item, type: 'Research', article: item }))];

if (manifest.site !== 'OutsourcedAccountManagement.com' || manifest.canonicalDomain !== 'https://outsourcedaccountmanagement.com') fail('site identity mismatch');
if (manifest.publicationDate !== '2026-10-13' || manifest.baseSha !== '124c64c5f7262ca1eee9bbdfcbf9ebfc2410b319') fail('date or immutable base mismatch');
if (blogs.length !== 12 || Object.keys(rich).length !== 12 || research.length !== 5 || manifest.entries.length !== 17) fail('expected exactly 12 Blog and 5 Research');
if (all.some((item) => !item.article)) fail('registry item lacks article');
if (new Set(all.map((item) => item.slug)).size !== 17 || new Set(all.map((item) => item.title)).size !== 17) fail('slug or title duplicate');
if (all.some((item) => /\b(?:2026|oct(?:ober)?\s+13|10[-/]13)\b/i.test(item.title))) fail('date found in title');

const wiring = {
  blog: read('app/data.ts'), rich: read('app/rich-articles.ts'), research: read('app/research-data.ts'),
  blogDetail: read('app/blog/[slug]/page.tsx'), blogIndex: read('app/blog/page.tsx'), blogPages: read('app/blog/page/[page]/page.tsx'),
  researchDetail: read('app/research/[slug]/page.tsx'), researchIndex: read('app/research/page.tsx'), researchPages: read('app/research/page/[page]/page.tsx'),
  sitemap: read('app/sitemap.xml/route.ts')
};
if (!wiring.blog.includes('...october13BlogPosts') || !wiring.rich.includes('october13RichArticles') || !wiring.research.includes('...october13ResearchPosts')) fail('separate registry wiring missing');
if (!wiring.blogDetail.includes('Published <time') || !wiring.blogIndex.includes('Published <time') || !wiring.blogPages.includes('Published <time')) fail('visible Blog dates missing');
if (!wiring.researchDetail.includes('Published <time') || !wiring.researchIndex.includes('Published <time') || !wiring.researchPages.includes('Published <time')) fail('visible Research dates missing');
if (!wiring.blogDetail.includes('Related Blog guides') || !wiring.researchDetail.includes('Related research')) fail('family-specific related content missing');
if (!wiring.blogDetail.includes('takeaway-box') || !wiring.researchDetail.includes('Headline signal')) fail('family-specific sidebar/panel architecture missing');
if (!wiring.sitemap.includes('...blogPosts.map') || !wiring.sitemap.includes('...researchPosts.map')) fail('sitemap registry routes missing');

const paragraphs = [];
const imageHashes = new Set();
for (const item of all) {
  if (item.article.published !== '2026-10-13' || item.article.updated !== '2026-10-13') fail(`date mismatch: ${item.slug}`);
  const entry = manifest.entries.find((value) => value.slug === item.slug && value.title === item.title && value.type === item.type);
  if (!entry || entry.words < (item.type === 'Research' ? 2400 : 1800)) fail(`manifest or depth failed: ${item.slug} (${entry?.words})`);
  const collision = spawnSync('git', ['grep', '-F', item.slug, manifest.baseSha, '--', 'app', 'content'], { encoding: 'utf8' });
  if (collision.status === 0) fail(`slug collision with immutable base: ${item.slug}`);
  const imageFile = `public${entry.thumbnail}`;
  if (!fs.existsSync(imageFile)) fail(`missing thumbnail: ${imageFile}`);
  const svg = read(imageFile);
  if (!svg.includes('width="1200" height="630"') || !svg.includes(`<title id="title">${item.title.replaceAll('&', '&amp;')}</title>`)) fail(`thumbnail contract failed: ${item.slug}`);
  if (/October 13|2026-10-13/i.test(svg)) fail(`dated thumbnail: ${item.slug}`);
  imageHashes.add(crypto.createHash('sha256').update(svg).digest('hex'));
  for (const paragraph of [...(item.article.intro ?? []), ...item.article.sections.flatMap((section) => section.paragraphs)]) {
    const normalized = paragraph.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (normalized.split(' ').length >= 20) paragraphs.push({ slug: item.slug, raw: paragraph, normalized });
  }
}
if (imageHashes.size !== 17) fail('thumbnails are not 17 unique native files');

const allowed = new Set(['www.nist.gov', 'csrc.nist.gov', 'www.gao.gov', 'www.ftc.gov', 'www.cisa.gov', 'www.sba.gov', 'privacy.gov.ph', 'www.iso.org', 'legalinstruments.oecd.org']);
for (const item of research) {
  if (item.datePublished !== '2026-10-13' || item.sources.length !== 10 || item.externalSources.length !== 10) fail(`Research source/date depth failed: ${item.slug}`);
  if (new Set(item.sources.map((sourceItem) => sourceItem.url)).size !== 10) fail(`Research sources not unique: ${item.slug}`);
  for (const sourceItem of item.sources) { const url = new URL(sourceItem.url); if (url.protocol !== 'https:' || !allowed.has(url.hostname)) fail(`non-authoritative source: ${sourceItem.url}`); }
  if (item.related.length < 3 || item.internalLinks.length < 2 || !item.serviceHandoff) fail(`Research related/sidebar behavior missing: ${item.slug}`);
  if (!item.sections.some((section) => section.paragraphs.some((paragraph) => paragraph.startsWith('Limitations.')))) fail(`Research limitations missing: ${item.slug}`);
}
for (const item of Object.values(rich)) if (!item.related || item.related.length < 3) fail(`Blog related behavior missing: ${item.title}`);

const seen = new Map();
for (const paragraph of paragraphs) { if (seen.has(paragraph.normalized)) fail(`duplicate substantive paragraph: ${seen.get(paragraph.normalized)} and ${paragraph.slug}`); seen.set(paragraph.normalized, paragraph.slug); }
const priorFiles = execFileSync('git', ['ls-tree', '-r', '--name-only', manifest.baseSha, '--', 'app', 'content'], { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
const priorCorpus = priorFiles.map((file) => { try { return execFileSync('git', ['show', `${manifest.baseSha}:${file}`], { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 }); } catch { return ''; } }).join('\n');
for (const paragraph of paragraphs) if (priorCorpus.includes(paragraph.raw)) fail(`paragraph duplicates immutable base: ${paragraph.slug}`);

console.log(JSON.stringify({ status: 'PASS', date: '2026-10-13', blog: 12, research: 5, minBlogWords: Math.min(...manifest.entries.filter((x) => x.type === 'Blog').map((x) => x.words)), minResearchWords: Math.min(...manifest.entries.filter((x) => x.type === 'Research').map((x) => x.words)), sourcesPerResearch: 10, uniqueExactTitleThumbnails: 17, visibleDates: true, separateSystems: true, duplicateSubstantiveParagraphs: 0, immutableBaseCollisions: 0 }, null, 2));
