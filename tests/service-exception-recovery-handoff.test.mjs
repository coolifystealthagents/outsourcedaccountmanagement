import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-data.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("post.slug === 'service-exception-recovery-evidence'");
const end = source.indexOf('\n        : post);', start);

assert.ok(start >= 0 && end > start, 'selected service-exception research record must own its handoff');
const record = source.slice(start, end);

assert.match(record, /updated: '2026-10-18'/, 'handoff must refresh the record modified date');
assert.match(record, /label: 'review escalation coordination support'/, 'handoff must name the matching escalation service');
assert.match(record, /href: '\/services\/escalation-coordination'/, 'handoff must use the approved escalation destination');
assert.match(record, /A Philippines-based specialist can gather the facts, prepare an approved update, and route the issue\. Your team decides remediation, client commitments, and when recovery is verified\./, 'handoff must preserve preparation and owner-decision boundaries');
assert.doesNotMatch(record, /client communication support/, 'handoff must not reuse an unrelated generic service label');
assert.match(renderer, /const nextLinks = post\.internalLinks\.filter\(\(link\) => link\.href !== post\.serviceHandoff\?\.href\);/, 'shared research renderer must suppress a duplicate next-step link when the inline handoff owns the destination');

console.log('service exception recovery handoff contract passed');
