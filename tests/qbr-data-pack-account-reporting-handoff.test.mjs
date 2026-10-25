import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

test('QBR data-pack guide has a bounded account-reporting handoff', () => {
  const source = readFileSync(new URL('../app/october22-content.ts', import.meta.url), 'utf8');
  const start = source.indexOf('"qbr-data-pack-reconciliation": {');
  const end = source.indexOf('\n  "account-health-score-override-control": {', start);
  assert.ok(start >= 0 && end > start, 'selects only the QBR data-pack record');
  const record = source.slice(start, end);

  assert.match(record, /"updated": "2026-10-25"/, 'refreshes the QBR guide date');
  assert.match(record, /"href": "\/services\/account-reporting"/, 'routes the reader to the matching generated service');
  assert.match(record, /Prepare the account reporting handoff/, 'keeps the handoff specific to the reader next step');
  assert.match(record, /The account owner approves the narrative and any promise to the client\./, 'keeps client commitments with the account owner');
  assert.doesNotMatch(record, /specialist approves the narrative/i, 'does not grant the specialist approval authority');

  const renderer = readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(renderer, /\?\? rich\.banners\[0\]/, 'does not repeat one banner in every banner slot');
  assert.match(renderer, /return banner \? <aside className="article-banner"/, 'renders a banner only when its slot has a record');
});
