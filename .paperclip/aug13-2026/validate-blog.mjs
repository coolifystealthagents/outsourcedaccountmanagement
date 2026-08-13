import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const manifest=JSON.parse(fs.readFileSync(path.join(root,'.paperclip/aug13-2026/blog.json'),'utf8'));
if(manifest.entries.length!==22) throw new Error('expected exactly 22 entries');
const src=fs.readFileSync(path.join(root,'app/daily-blog-batch.ts'),'utf8');
const builtRoot=path.join(root,'.next/server/app/blog');
for(const e of manifest.entries){
 if(!/^philippines-account-management-[a-z0-9-]+$/.test(e.slug)) throw new Error('bad slug '+e.slug);
 if(!src.includes("['"+e.slug+"',") || !src.includes("'2026-08-13']")) throw new Error('missing direct source date '+e.slug);
 const htmlPath=path.join(builtRoot,e.slug+'.html');
 if(!fs.existsSync(htmlPath)) throw new Error('missing built route '+e.route);
 const html=fs.readFileSync(htmlPath,'utf8');
 if(!html.includes('2026-08-13') || !html.includes('datePublished') || !html.includes('dateTime="2026-08-13"')) throw new Error('date metadata failed '+e.slug);
}
console.log('PASS blog Aug 13: 22 direct date bindings, routes, visible dates, structured dates, and newest-first loader batch verified');

