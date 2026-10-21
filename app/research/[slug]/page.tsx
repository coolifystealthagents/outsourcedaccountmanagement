import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { EditorialLayout } from '../../editorial-layout';
import { seoTitle } from '../../lib/content-contracts';
import { researchPosts, site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;
const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const formatReaderDate = (value: string) => readerDate.format(new Date(`${value}T00:00:00Z`));
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function generateStaticParams() { return researchPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Research report not found' };
  const image = post.hero ? `${base}${post.hero}` : undefined;
  return { title: seoTitle(post.title), description: post.excerpt, alternates: { canonical: `/research/${post.slug}` }, openGraph: { type: 'article', title: post.title, description: post.excerpt, publishedTime: `${post.published}T00:00:00.000Z`, modifiedTime: `${post.updated}T00:00:00.000Z`, url: `${base}/research/${post.slug}`, images: image ? [{ url: image, alt: post.title }] : undefined }, twitter: { card: image ? 'summary_large_image' : 'summary', title: post.title, description: post.excerpt, images: image ? [image] : undefined } };
}

export default async function ResearchPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const published = post.datePublished ?? post.published;
  const canonical = `${base}/research/${post.slug}`;
  const organization = { '@type': 'Organization', name: site.brand, url: base };
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt, datePublished: published, dateModified: post.updated, mainEntityOfPage: canonical, image: post.hero ? `${base}${post.hero}` : undefined, author: organization, publisher: organization, citation: post.sources.map((source) => source.url) };
  const sectionItems = post.sections.map((section, index) => ({ id: `${slugify(section.heading)}-${index + 1}`, label: section.heading }));
  const toc = [{ id: 'headline-signal', label: 'Headline signal' }, { id: 'key-takeaways', label: 'Key takeaways' }, ...sectionItems, { id: 'review-table', label: 'Review table' }, { id: 'methodology', label: 'Methodology and limitations' }, { id: 'frequently-asked-questions', label: 'Frequently asked questions' }, { id: 'sources', label: 'Sources' }];
  const nextLinks = post.internalLinks.filter((link) => link.href !== post.serviceHandoff?.href);
  const related = nextLinks.map((link) => ({ href: link.href, label: link.label }));

  return <><Header/><main className="article-page" id="main-content" tabIndex={-1}><article className="container rich-article research-detail">
    <JsonLd data={schema}/>
    <header className="article-hero">{post.hero && <img src={post.hero} alt={`${post.title} editorial illustration`} width="716" height="716" className="article-hero-image"/>}<p className="eyebrow">{post.cluster} research report</p><h1>{post.title}</h1><p className="article-deck">{post.excerpt}</p><p className="article-meta">Published <time dateTime={published}>{formatReaderDate(published)}</time> · Updated <time dateTime={post.updated}>{formatReaderDate(post.updated)}</time> · {post.sources.length} sources</p></header>
    <EditorialLayout items={toc} related={related}><div className="article-body">
      {post.serviceHandoff && <p className="article-source-note">{post.serviceHandoff.before}<a href={post.serviceHandoff.href}>{post.serviceHandoff.label}</a>{post.serviceHandoff.after}</p>}
      <section id="headline-signal"><h2>Headline signal</h2><p><strong>{post.headlineStat}.</strong> Source: {post.statSource}. This is contextual evidence, not a claim about this company or a performance guarantee.</p></section>
      <section id="key-takeaways"><h2>Key takeaways</h2><ul>{post.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></section>
      {post.sections.map((section, index) => <section id={sectionItems[index].id} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
      <section id="review-table"><h2>Review table</h2><div className="table-wrap" role="region" aria-label="Scrollable research control checklist" tabIndex={0}><table><caption>Research control checklist</caption><thead><tr>{post.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{post.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></section>
      <section id="methodology"><h2>Methodology and limitations</h2><p>{post.researchMethodology || 'This report synthesizes the cited first-party and institutional sources, then applies their published control principles to the bounded account-operations question described above.'}</p><p>The evidence is contextual. It does not measure this company, guarantee an outcome, or replace legal, security, financial, or commercial judgment. Readers should verify source dates, definitions, and applicability before acting.</p></section>
      <section id="frequently-asked-questions"><h2>Frequently asked questions</h2>{post.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</section>
      <section id="sources" className="article-sources"><h2>Sources</h2><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noreferrer">{source.name}</a>. {source.date}. {source.note}</li>)}</ol></section>
      {nextLinks.length > 0 && <aside className="card"><h2>Related reading</h2><ul>{nextLinks.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></aside>}
    </div></EditorialLayout>
  </article><div className="container"><CTA/></div></main><Footer/></>;
}
