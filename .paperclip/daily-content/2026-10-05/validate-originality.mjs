import fs from 'node:fs';
import path from 'node:path';

const files=fs.readdirSync('app').filter(f=>/^october5-blog-batch.*\.ts$/.test(f)).sort();
const text=f=>[...fs.readFileSync(path.join('app',f),'utf8').matchAll(/'((?:\\.|[^'\\])*)'/g)].map(m=>m[1].replace(/\\'/g,"'")).filter(s=>s.split(/\s+/).length>=8).join('\n');
const normalize=s=>s.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
const shingles=s=>{const w=normalize(s).split(' '),o=new Set();for(let i=0;i+4<w.length;i++)o.add(w.slice(i,i+5).join(' '));return o};
const jac=(a,b)=>{let n=0;for(const x of a)if(b.has(x))n++;return n/(a.size+b.size-n)};
const current=files.map(file=>({file,body:text(file)}));
let max={value:0,pair:[]};for(let i=0;i<current.length;i++)for(let j=i+1;j<current.length;j++){const v=jac(shingles(current[i].body),shingles(current[j].body));if(v>max.value)max={value:v,pair:[current[i].file,current[j].file]}}
const paras=new Map();for(const x of current)for(const p of x.body.split('\n').map(normalize).filter(p=>p.split(' ').length>=20)){const seen=paras.get(p)||[];seen.push(x.file);paras.set(p,seen)}
const repeated=[...paras].filter(([,v])=>new Set(v).size>1).map(([p,v])=>({paragraph:p,files:[...new Set(v)]}));
const priorFiles=fs.readdirSync('app').filter(f=>/(september|october2).*blog-batch\.ts$/.test(f));let priorMax={value:0,pair:[]};for(const x of current)for(const pf of priorFiles){const v=jac(shingles(x.body),shingles(text(pf)));if(v>priorMax.value)priorMax={value:v,pair:[x.file,pf]}}
const report={files:files.length,maximumFiveWordShingleJaccard:+max.value.toFixed(6),pair:max.pair,exactRepeatedSubstantiveParagraphs:repeated.length,priorCorpusMaximumFiveWordShingleJaccard:+priorMax.value.toFixed(6),priorPair:priorMax.pair,qualitativeReviewRequired:true};
console.log(JSON.stringify(report,null,2));if(files.length!==9||max.value>=0.5||repeated.length)process.exit(1);
