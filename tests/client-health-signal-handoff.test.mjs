import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-data.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const branchStart = source.indexOf("post.slug === 'client-health-signal-calibration'");
const branchEnd = source.indexOf("post.slug === 'account-risk-evidence-thresholds'", branchStart);

assert.ok(branchStart >= 0 && branchEnd > branchStart, 'client health handoff branch is missing or malformed');
const branch = source.slice(branchStart, branchEnd);
assert.match(branch, /updated: '2026-09-14'/, 'handoff must refresh its actual modified date');
assert.match(branch, /href: '\/services\/account-health-monitoring'/, 'handoff must use the existing account health service');
assert.match(branch, /prepare the source trail, open commitments, and next check/, 'handoff must retain the permitted preparation task');
assert.match(branch, /client sentiment, retention, commercial, access, or client-commitment judgment/, 'handoff must retain the owner decision boundary');
assert.match(renderer, /p\.serviceHandoff&&<p>/, 'research renderer must render the data-owned handoff inside the article');
assert.match(renderer, /modifiedTime:`\$\{p\.updated\}T00:00:00\.000Z`/, 'research metadata must use the record modified date');

console.log('client health signal handoff source contract passed');
