import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/november04-research.ts', import.meta.url), 'utf8');
const start = source.indexOf('"slug": "how-long-do-account-escalations-wait-for-an-owner"');
const end = source.indexOf('\n },\n {', start);
assert.ok(start >= 0 && end > start, 'the escalation-owner research record must exist');
const record = source.slice(start, end);

assert.match(record, /"updated": "2026-11-05"/, 'the route update must refresh its modified date');
assert.match(record, /"label": "review escalation coordination support"/, 'the handoff must name the reader\'s next practical step');
assert.match(record, /"href": "\/services\/escalation-coordination"/, 'the handoff must lead to the matching escalation service');
assert.match(record, /A Philippines-based specialist can assemble the facts and route the issue; the account owner decides the response, commitments, and closure\./, 'the handoff must retain preparation and owner-decision boundaries');
assert.match(record, /"href": "\/research"/, 'the related reading path must keep the research-library route');
assert.doesNotMatch(record, /"label": "Services"/, 'the generic Services-hub handoff must be retired');

console.log('escalation owner handoff contract passed');
