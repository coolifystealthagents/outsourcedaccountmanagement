import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-data.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const branchStart = source.indexOf("post.slug === 'renewal-signal-calibration'");
const branchEnd = source.indexOf("post.slug === 'account-risk-evidence-thresholds'", branchStart);

assert.ok(branchStart >= 0 && branchEnd > branchStart, 'renewal signal handoff branch is missing or malformed');
const branch = source.slice(branchStart, branchEnd);
assert.match(branch, /updated: '2026-09-10'/, 'renewal signal handoff must refresh its actual modified date');
assert.match(branch, /href: '\/services\/renewal-administration'/, 'renewal signal handoff must use the existing renewal service');
assert.match(branch, /collect dated evidence and prepare the record/, 'handoff must retain the permitted preparation task');
assert.match(branch, /contract terms, pricing, and the final renewal decision/, 'handoff must retain the owner decision boundary');
assert.match(renderer, /p\.serviceHandoff&&<p>/, 'research renderer must render the data-owned handoff inside the article');
assert.match(renderer, /modifiedTime:`\$\{p\.updated\}T00:00:00\.000Z`/, 'research metadata must use the record modified date');

console.log('renewal signal handoff source contract passed');