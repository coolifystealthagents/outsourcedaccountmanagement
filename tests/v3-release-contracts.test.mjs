import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const components = read('app/components.tsx');
const css = read('app/globals.css');
const contact = read('app/contact-us/page.tsx');
const reviews = read('app/booking-components.tsx');
const serviceContent = read('app/service-content.ts');
const servicePage = read('app/services/[slug]/page.tsx');
const blog = read('app/blog/[slug]/page.tsx');
const research = read('app/research/[slug]/page.tsx');
const config = read('next.config.mjs');
const form = read('app/contact-us/StandardContactForm.tsx');
const leadRoute = read('app/api/contact/route.ts');
const augustArticles = read('app/aug19-content.tsx');
const comparison = read('app/blog/top-30-account-management-outsourcing-companies/page.tsx');
const middleware = read('middleware.ts');
const layout = read('app/layout.tsx');

assert.match(css, /\.nav\{position:sticky;top:0\}/, 'header must remain sticky');
assert.deepEqual([...components.matchAll(/<nav[^>]*>[\s\S]*?<\/nav>/g)].flatMap(([nav]) => [...nav.matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g)].map(([, href, label]) => [href, label])), [['/', 'Home'], ['/services', 'Services'], ['/contact-us', 'Contact Us']], 'primary navigation must have exactly the approved links');
assert.ok((components.match(/Powered by/g) || []).length >= 1, 'shared attribution is missing');
assert.ok((components.match(/<ParentBrandMark\/>/g) || []).length >= 2, 'official parent logo must appear in header and footer');

const testimonialRecords = [...reviews.matchAll(/\{ name: '([^']+)', role: '([^']+)', quote: '([^']+)' \}/g)];
assert.equal(testimonialRecords.length, 10, 'exactly ten approved review records are required');
assert.equal(new Set(testimonialRecords.map((match) => match[1])).size, 10, 'reviewers must be distinct');
assert.doesNotMatch(reviews, /Play reviews|Pause reviews|previous|pagination|scrubber/i, 'review marquee must not expose playback controls');
assert.match(css, /animation:v3-review-marquee/, 'review marquee must auto-scroll');
assert.match(css, /prefers-reduced-motion:reduce/, 'review motion must honor reduced-motion preferences');

const heroPosition = contact.indexOf('tc-hero');
const teamPosition = contact.indexOf('tc-official-team');
const nextSectionPosition = contact.indexOf('tc-strip');
assert.ok(heroPosition >= 0 && teamPosition > heroPosition && nextSectionPosition > teamPosition, 'official team section must immediately follow the first-fold composition');
assert.match(contact, /Official team, Bacolod/, 'required official-team plate is missing');
assert.match(contact, /stealth-agents-team-bacolod\.jpg/, 'approved official team photo is missing');
assert.match(contact, /stealth-agents-logo\.png/, 'official parent logo is missing from contact page');
assert.ok(existsSync(new URL('../public/brand/stealth-agents-team-bacolod.jpg', import.meta.url)), 'official team asset is missing');
assert.ok(existsSync(new URL('../public/brand/stealth-agents-logo.png', import.meta.url)), 'official logo asset is missing');

assert.equal((serviceContent.match(/^\s+slug\s*:\s*'/gm) || []).length, 12, 'all twelve services need detailed content');
for (const field of ['outcomes', 'deliverables', 'workflow', 'boundaries', 'faqs', 'related']) assert.match(serviceContent, new RegExp(`\\b${field}:`), `service content missing ${field}`);
assert.doesNotMatch(servicePage, /<span>\{index \+ 1\}<\/span>/, 'service workflow must not use decorative numeric labels');
assert.match(servicePage, /FAQPage/, 'service FAQ schema is missing');

assert.match(blog, /EditorialLayout/, 'blog detail renderer needs the editorial layout');
assert.match(research, /EditorialLayout/, 'research detail renderer needs the editorial layout');
assert.match(blog, /const toc =/, 'blog TOC contract is missing');
assert.match(research, /const toc =/, 'research TOC contract is missing');
assert.match(augustArticles, /EditorialLayout items=\{toc\}/, 'dedicated August articles need a complete editorial sidebar');
assert.match(comparison, /<EditorialLayout items=/, 'comparison article needs a complete editorial sidebar');
assert.match(research, /post\.faqs\.map/, 'research FAQs must remain visible');
assert.match(research, /\{source\.date\}/, 'research source dates must remain visible');

assert.match(form, /window\.location\.assign\("\/thank-you"\)/, 'successful lead route is wrong');
assert.match(form, /if \(!result\?\.ok\) throw/, 'form must require upstream delivery confirmation');
assert.match(leadRoute, /result\?\.ok !== true/, 'lead API must require explicit upstream acceptance');
assert.match(leadRoute, /readBoundedBody/, 'lead API must bound streamed request bodies');
assert.match(leadRoute, /fields\.countryCode.*fields\.phoneLocal/s, 'native form phone fields must be accepted server-side');
assert.match(leadRoute, /NextResponse\.redirect\(new URL\('\/thank-you\?lead=accepted'/, 'native successful form posts must redirect to thank-you');
assert.ok(existsSync(new URL('../app/thanks-whats-next/page.tsx', import.meta.url)), 'booking confirmation route is missing');
assert.match(read('app/thank-you/page.tsx'), /go\.oncehub\.com\/StealthAgentsTeam/, 'OnceHub scheduler URL changed');

for (const header of ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Content-Type-Options', 'X-Frame-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.match(config, new RegExp(header), `missing ${header}`);
assert.match(config, /source: '\/contact'.*destination: '\/contact-us'.*permanent: true/s, 'legacy contact redirect is missing');
assert.match(config, /source: '\/cancellation'.*destination: '\/cancellation-policy'.*permanent: true/s, 'duplicate cancellation redirect is missing');
assert.match(config, /x-forwarded-proto'.*value: 'http'.*https:\/\/outsourcedaccountmanagement\.com\/:path\*/s, 'HTTP requests must redirect to the canonical HTTPS origin behind the proxy');
assert.match(config, /cf-visitor'.*value: '\.\*http\.\*'.*https:\/\/outsourcedaccountmanagement\.com\/:path\*/s, 'Cloudflare HTTP visitors must redirect to the canonical HTTPS origin');
assert.match(middleware, /try \{ requestedSlug = decodeURIComponent/, 'malformed service URLs must be handled safely');
assert.doesNotMatch(layout, /alternates:\s*\{\s*canonical:\s*'\/'/, 'root layout must not force the homepage canonical onto every route');

const textPaths = globSync(['app/**/*.{ts,tsx,json,md}', 'content/**/*.{md,json}'], { cwd: fileURLToPath(new URL('..', import.meta.url)) });
for (const path of globSync('app/**/*.tsx', { cwd: fileURLToPath(new URL('..', import.meta.url)) })) {
  for (const [tag] of read(path).matchAll(/<img\b[^>]*>/gs)) {
    assert.match(tag, /\balt=\{?(["'`]).+?\1\}?/s, `${path} contains an image without descriptive alt text`);
  }
}
const banned = textPaths.flatMap((path) => {
  const source = read(path);
  return source.includes('—') || source.includes('–') ? [path] : [];
});
assert.deepEqual(banned, [], `visible-copy punctuation ban failed in: ${banned.join(', ')}`);

console.log('V3 release contracts passed');
