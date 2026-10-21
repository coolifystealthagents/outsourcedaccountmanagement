import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

assert.match(source, /import \{\s*researchPosts,\s*site\s*\} from '..\/..\/data';/, 'research renderer must use the established site identity');
assert.match(source, /const base = `https:\/\/\$\{site\.domain\.toLowerCase\(\)\}`;/, 'canonical base must derive from the site identity');
assert.match(source, /const organization = \{ '@type': 'Organization', name: site\.brand, url: base \};/, 'research Article identity must derive name and canonical URL from the on-site Organization');
assert.match(source, /author: organization, publisher: organization/, 'research Article must identify the same on-site Organization as author and publisher');

console.log('research Article Organization identity contract passed');
