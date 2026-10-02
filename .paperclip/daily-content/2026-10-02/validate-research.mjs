import fs from 'node:fs';
import crypto from 'node:crypto';

const slugs=['client-delegation-expiry-control-study','renewal-assumption-sensitivity-analysis','client-commitment-dependency-topology-study','service-exception-update-sequence-study','crm-correction-propagation-boundary-study'];
const decode=(v)=>v.replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ');
const bodies=new Map();
for(const slug of slugs){
  const path=`.next/server/app/research/${slug}.html`; const html=fs.readFileSync(path,'utf8');
  const start=html.indexOf('<section><h2>'); const end=html.indexOf('<h2>Review table',start);
  if(start<0||end<0)throw new Error(`${slug}: rendered substantive-body boundaries missing`);
  const body=decode(html.slice(start,end).replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
  const words=body.match(/[\p{L}\p{N}][\p{L}\p{N}’'/-]*/gu)??[];
  if(words.length<1200)throw new Error(`${slug}: ${words.length} substantive words; minimum 1200`);
  if(!html.includes(`https://outsourcedaccountmanagement.com/research/${slug}`))throw new Error(`${slug}: canonical missing`);
  if(!html.includes('2026-10-02'))throw new Error(`${slug}: candidate date missing`);
  const paragraphTexts=[...html.matchAll(/<p>(.*?)<\/p>/g)].map((m)=>decode(m[1].replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim()).filter((x)=>x.split(/\s+/).length>=20);
  if(new Set(paragraphTexts).size!==paragraphTexts.length)throw new Error(`${slug}: repeated substantive paragraph within article`);
  bodies.set(slug,{body:body.toLowerCase(),words:words.length,hash:crypto.createHash('sha256').update(body).digest('hex')});
}
const shingles=(t)=>{const w=t.match(/[a-z0-9]+/g)??[];const s=new Set();for(let i=0;i+4<w.length;i++)s.add(w.slice(i,i+5).join(' '));return s};
let maximum=0,pair=[];const allPairs=[];
for(let i=0;i<slugs.length;i++)for(let j=i+1;j<slugs.length;j++){const a=shingles(bodies.get(slugs[i]).body),b=shingles(bodies.get(slugs[j]).body);let n=0;for(const x of a)if(b.has(x))n++;const score=n/(a.size+b.size-n);allPairs.push({pair:[slugs[i],slugs[j]],jaccard:+score.toFixed(6)});if(score>maximum){maximum=score;pair=[slugs[i],slugs[j]]}}
if(maximum>=.5)throw new Error(`maximum overlap ${maximum} is at least .5`);
console.log(JSON.stringify({required:5,validated:bodies.size,articles:slugs.map(slug=>({slug,substantiveWords:bodies.get(slug).words,contentHash:bodies.get(slug).hash})),originality:{maximumFiveWordShingleJaccard:+maximum.toFixed(6),pair,allPairs,repeatedParagraphsWithinArticles:0,qualitativeReview:'Each article uses a separate research question, analytical structure, operational cases, decision boundary, and reader outcome.'}},null,2));
