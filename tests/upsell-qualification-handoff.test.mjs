import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research-data.ts', import.meta.url), 'utf8');
const start = source.indexOf("slug:'upsell-qualification-boundary-study'");
const end = source.indexOf('\n', start);
assert.ok(start >= 0 && end > start, 'selected upsell research record must exist');
const record = source.slice(start, end);

assert.match(record, /updated:'2026-10-05'/, 'handoff must refresh the record modified date');
assert.match(record, /serviceHandoff:\{before:'When an account team needs to record a possible expansion need without making a sales promise, ',label:'review upsell opportunity tracking support',href:'\/services\/upsell-opportunity-tracking'/, 'handoff must use the approved upsell service and visible decision context');
assert.match(record, /A Philippines-based specialist can organize the observed need and route it to the commercial owner\. Your team decides fit, pricing, scope, and whether to begin a sales conversation\./, 'handoff must preserve preparation and commercial-owner boundaries');
assert.doesNotMatch(record, /label:'See upsell opportunity tracking support'/, 'retire the generic duplicate service link when the inline handoff is present');

console.log('upsell qualification handoff contract passed');
