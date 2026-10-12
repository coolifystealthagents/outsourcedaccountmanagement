import fs from 'node:fs';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';

const fail=(message)=>{throw new Error(message)};
const read=(file)=>fs.readFileSync(file,'utf8');
const manifest=JSON.parse(read('publishing/2026-10-12/manifest.json'));
const source=read('app/october12-content.ts');
const parse=(pattern,label)=>{const match=source.match(pattern);if(!match)fail(`cannot parse ${label}`);return JSON.parse(match[1]);};
const blogs=parse(/export const october12BlogPosts = ([\s\S]*?) as const;/,'Blog registry');
const rich=parse(/export const october12RichArticles: Record<string, RichArticle> = ([\s\S]*?);\n\nexport const october12ResearchPosts/,'Blog articles');
const research=parse(/export const october12ResearchPosts: ResearchPost\[\] = ([\s\S]*?);\n$/,'Research articles');
if(manifest.site!=='OutsourcedAccountManagement.com'||manifest.publicationDate!=='2026-10-12')fail('site or date mismatch');
if(blogs.length!==12||Object.keys(rich).length!==12||research.length!==5)fail('expected exactly 12 Blog and 5 Research');
const all=[...blogs.map(x=>({...x,type:'Blog',article:rich[x.slug]})),...research.map(x=>({...x,type:'Research',article:x}))];
if(all.some(x=>!x.article))fail('registry item lacks article');
if(new Set(all.map(x=>x.slug)).size!==17||new Set(all.map(x=>x.title)).size!==17)fail('slug or title duplicate');
if(all.some(x=>/\b(?:2026|oct(?:ober)?\s+12|10[-/]12)\b/i.test(x.title)))fail('date found in title');
if(manifest.entries.length!==17||manifest.blogCount!==12||manifest.researchCount!==5)fail('manifest counts mismatch');
const wiring={blog:read('app/data.ts'),rich:read('app/rich-articles.ts'),research:read('app/research-data.ts'),blogDetail:read('app/blog/[slug]/page.tsx'),blogIndex:read('app/blog/page.tsx'),blogPages:read('app/blog/page/[page]/page.tsx'),researchDetail:read('app/research/[slug]/page.tsx'),researchIndex:read('app/research/page.tsx'),researchPages:read('app/research/page/[page]/page.tsx'),sitemap:read('app/sitemap.xml/route.ts')};
if(!wiring.blog.includes('...october12BlogPosts')||!wiring.rich.includes('october12RichArticles')||!wiring.research.includes('...october12ResearchPosts'))fail('registry wiring missing');
if(!wiring.blogDetail.includes('Published <time')||!wiring.blogIndex.includes('Published <time')||!wiring.blogPages.includes('Published <time'))fail('visible Blog dates missing');
if(!wiring.researchDetail.includes('Published <time')||!wiring.researchIndex.includes('Published <time')||!wiring.researchPages.includes('Published <time'))fail('visible Research dates missing');
if(!wiring.sitemap.includes('...blogPosts.map')||!wiring.sitemap.includes('...researchPosts.map'))fail('sitemap registry routes missing');
for(const item of all){
  if(item.article.published!=='2026-10-12'||item.article.updated!=='2026-10-12')fail(`date mismatch: ${item.slug}`);
  const record=manifest.entries.find(x=>x.slug===item.slug&&x.title===item.title&&x.type===item.type);
  if(!record||record.words<1100)fail(`manifest/word floor failed: ${item.slug} (${record?.words})`);
  const file=`public${record.thumbnail}`;
  if(!fs.existsSync(file))fail(`missing thumbnail: ${file}`);
  const svg=read(file);
  if(!svg.includes('width="1200" height="630"')||!svg.includes(`<title id="title">${item.title.replaceAll('&','&amp;')}</title>`))fail(`thumbnail contract failed: ${item.slug}`);
  let prior='';try{prior=execFileSync('git',['grep','-F',item.slug,'HEAD','--','app','content'],{encoding:'utf8'});}catch{}
  if(prior.trim())fail(`slug collision with HEAD: ${item.slug}`);
}
const allowed=new Set(['www.nist.gov','csrc.nist.gov','www.gao.gov','www.ftc.gov','www.cisa.gov','www.sba.gov','privacy.gov.ph','www.iso.org','legalinstruments.oecd.org']);
for(const item of research){
  if(item.datePublished!=='2026-10-12'||item.sources.length!==10||item.externalSources.length!==10)fail(`Research source/date depth failed: ${item.slug}`);
  for(const sourceItem of item.sources){const url=new URL(sourceItem.url);if(url.protocol!=='https:'||!allowed.has(url.hostname))fail(`non-authoritative source: ${sourceItem.url}`);}
  if(item.related.length<3||item.internalLinks.length<2||!item.serviceHandoff)fail(`Research related/sidebar behavior missing: ${item.slug}`);
}
const paragraphs=[];
for(const item of all){for(const p of [...(item.article.intro??[]),...item.article.sections.flatMap(s=>s.paragraphs)]){const normalized=p.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();if(normalized.split(' ').length>=20)paragraphs.push({slug:item.slug,raw:p,normalized});}}
const seen=new Map();for(const p of paragraphs){if(seen.has(p.normalized))fail(`duplicate substantive paragraph: ${seen.get(p.normalized)} and ${p.slug}`);seen.set(p.normalized,p.slug);}
for(const p of paragraphs){let prior='';try{prior=execFileSync('git',['grep','-F',p.raw,'HEAD','--','app','content'],{encoding:'utf8',maxBuffer:1024*1024});}catch{}if(prior.trim())fail(`paragraph duplicates HEAD: ${p.slug}`);}
const hashes=[];for(const e of manifest.entries){const bytes=fs.readFileSync(`public${e.thumbnail}`);hashes.push(crypto.createHash('sha256').update(bytes).digest('hex'));}
if(new Set(hashes).size!==17)fail('thumbnails are not 17 unique files');
console.log(JSON.stringify({status:'PASS',date:'2026-10-12',blog:12,research:5,minBlogWords:Math.min(...manifest.entries.filter(x=>x.type==='Blog').map(x=>x.words)),minResearchWords:Math.min(...manifest.entries.filter(x=>x.type==='Research').map(x=>x.words)),sourcesPerResearch:10,uniqueExactTitleThumbnails:17,visibleDates:true,separateSystems:true,duplicateSubstantiveParagraphs:0,headCollisions:0},null,2));
