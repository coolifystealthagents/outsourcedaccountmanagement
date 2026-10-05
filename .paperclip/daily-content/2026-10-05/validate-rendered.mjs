import crypto from 'node:crypto';
const base='http://127.0.0.1:3107';
const blog=['philippines-account-management-client-approval-bottleneck-review','philippines-account-management-client-change-request-dependency-map','philippines-account-management-renewal-evidence-freeze-check','philippines-account-management-qbr-decision-readiness-check','philippines-account-management-crm-stale-contact-recovery','philippines-account-management-client-escalation-audience-plan','philippines-account-management-portfolio-capacity-rebalance','philippines-account-management-implementation-handoff-exception-review','philippines-account-management-client-feedback-closure-proof','philippines-account-management-service-milestone-acceptance-gap','philippines-account-management-account-health-signal-conflict-review','philippines-account-management-expansion-evidence-boundary'];
const research=['client-evidence-expiry-trigger-study','client-meeting-action-survivorship-study','escalation-severity-reviewer-agreement-study','account-portfolio-interruption-load-study','client-offboarding-residual-obligation-study'];
const decode=s=>s.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&(?:nbsp|#x27|#39);/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const results=[];const internal=new Set();
for(const [family,slugs] of [['blog',blog],['research',research]])for(const slug of slugs){
 const url=`${base}/${family}/${slug}`,r=await fetch(url),html=await r.text();if(r.status!==200)throw new Error(`${url} ${r.status}`);
 const article=html.match(/<article[\s\S]*?<\/article>/i)?.[0];if(!article)throw new Error(`${slug} missing article`);const body=decode(article),words=body.split(' ').length,min=family==='blog'?900:1200;if(words<min)throw new Error(`${slug} only ${words} rendered words`);
 const canonical=html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];if(canonical!==`https://outsourcedaccountmanagement.com/${family}/${slug}`)throw new Error(`${slug} canonical ${canonical}`);
 if(!html.includes('2026-10-06')||!html.includes('datePublished'))throw new Error(`${slug} date/schema missing`);
 const title=decode(html.match(/<h1[^>]*>[\s\S]*?<\/h1>/i)?.[0]||'');if(!title)throw new Error(`${slug} title missing`);
 const img=html.match(/(?:src|content)="([^" ]*(?:blog-images|blog-heroes|research-heroes)[^" ]*)"/i)?.[1];if(!img)throw new Error(`${slug} image missing`);const ir=await fetch(new URL(img,base));const bytes=new Uint8Array(await ir.arrayBuffer());const png=bytes.length>8&&bytes[0]===137&&bytes[1]===80&&bytes[2]===78&&bytes[3]===71;if(ir.status!==200||!ir.headers.get('content-type')?.startsWith('image/')||!png)throw new Error(`${slug} bad image ${img}`);
 for(const m of article.matchAll(/href="(\/[^"]+)"/g))internal.add(m[1]);
 results.push({family,slug,status:r.status,title,words,date:'2026-10-06',canonical,image:img,imageBytes:bytes.length,hash:crypto.createHash('sha256').update(body).digest('hex')});
}
for(const p of internal){const r=await fetch(new URL(p,base));if(r.status!==200)throw new Error(`internal ${p} ${r.status}`)}
const [bi,ri,sm]=await Promise.all(['/blog','/research','/sitemap.xml'].map(p=>fetch(base+p).then(r=>r.text())));for(const x of results){const path=`/${x.family}/${x.slug}`;if(!(x.family==='blog'?bi:ri).includes(path))throw new Error(`${path} absent index`);if(!sm.includes(path))throw new Error(`${path} absent sitemap`)}
console.log(JSON.stringify({validated:results.length,blog:blog.length,research:research.length,internalLinks:internal.size,results},null,2));
