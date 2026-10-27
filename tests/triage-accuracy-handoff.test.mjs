import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/october26-research.ts', import.meta.url), 'utf8');
const start = source.indexOf('"slug": "triage-accuracy"');
const end = source.indexOf('\n  },\n  {', start);
assert.ok(start >= 0 && end > start, 'triage-accuracy research record must exist');
const record = source.slice(start, end);

assert.match(record, /"updated": "2026-10-27"/, 'the route update must refresh its modified date');
assert.match(record, /"label": "prepare a controlled client request route"/, 'the reader-facing handoff must name the practical next step');
assert.match(record, /"href": "\/services\/client-request-routing"/, 'the handoff must lead to the matching client request routing service');
assert.match(record, /The Philippines-based support specialist can prepare the request record, apply approved routing rules, and flag missing facts\. The account owner decides priority, exceptions, and client-facing commitments\./, 'the handoff must retain preparation and owner-decision boundaries');
assert.doesNotMatch(record, /"href": "\/services"/, 'the record must retire the generic Services-hub handoff');

console.log('triage accuracy handoff contract passed');
