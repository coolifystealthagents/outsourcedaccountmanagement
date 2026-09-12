import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-data.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const branchStart = source.indexOf("post.slug === 'account-handoff-acceptance-check'");
const branchEnd = source.indexOf("post.slug === 'account-risk-evidence-thresholds'", branchStart);

assert.ok(branchStart >= 0 && branchEnd > branchStart, 'account handoff branch is missing or malformed');
const branch = source.slice(branchStart, branchEnd);
assert.match(branch, /updated: '2026-09-12'/, 'handoff must refresh its actual modified date');
assert.match(branch, /href: '\/services\/implementation-handoff-support'/, 'handoff must use the existing implementation handoff service');
assert.match(branch, /organize approved context, open work, and the next review/, 'handoff must retain the permitted preparation task');
assert.match(branch, /access decisions, contract changes, and client commitments/, 'handoff must retain the owner decision boundary');
assert.match(renderer, /p\.serviceHandoff&&<p>/, 'research renderer must render the data-owned handoff inside the article');
assert.match(renderer, /modifiedTime:`\$\{p\.updated\}T00:00:00\.000Z`/, 'research metadata must use the record modified date');

console.log('account handoff acceptance source contract passed');