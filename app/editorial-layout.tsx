import type { ReactNode } from 'react';
import { normalizeInternalHref } from './lib/content-contracts';

export type TocItem = { id: string; label: string };
export type EditorialLink = { href: string; label: string };

export function EditorialLayout({ items, related = [], children }: { items: TocItem[]; related?: EditorialLink[]; children: ReactNode }) {
  return <div className="editorial-layout">
    <details className="editorial-toc-mobile"><summary>Table of contents</summary><nav aria-label="Table of contents"><ol>{items.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}</ol></nav></details>
    <aside className="editorial-sidebar" aria-label="Article navigation">
      <nav aria-label="Table of contents"><h2>Table of contents</h2><ol>{items.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}</ol></nav>
      <section aria-labelledby="editorial-related-title"><h2 id="editorial-related-title">Continue exploring</h2><ul><li><a href="/services">Account support services</a></li><li><a href="/contact-us">Plan a consultation</a></li>{related.slice(0, 4).map((item) => <li key={item.href}><a href={normalizeInternalHref(item.href)}>{item.label}</a></li>)}</ul></section>
    </aside>
    <div className="editorial-content">{children}</div>
  </div>;
}
