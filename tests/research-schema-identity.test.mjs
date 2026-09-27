import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

assert.match(source, /import \{researchPosts,site\} from '..\/..\/data';/, 'research renderer must use the established site identity');
assert.match(source, /const organization=\{"@type":"Organization",name:site\.brand,url:`https:\/\/\$\{site\.domain\.toLowerCase\(\)\}`\}/, 'research Article identity must derive name and canonical URL from the on-site Organization');
assert.match(source, /author:organization,publisher:organization/, 'research Article must identify the same on-site Organization as author and publisher');

console.log('research Article Organization identity contract passed');
