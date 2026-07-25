import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';
import { richArticles } from '../../rich-articles';

const base = `https://${String(site.domain).toLowerCase()}`;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Article not found' };
  const rich = richArticles[slug];
  return {
    title: rich?.title || post.title,
    description: rich?.description || post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: rich?.title || post.title,
      description: rich?.description || post.excerpt,
      url: `${base}/blog/${slug}`,
      publishedTime: rich?.published,
      modifiedTime: rich?.updated,
    },
  };
}

function CommunicationChart({ points, meta }: { points: Array<{ label: string; value: number; color: string }>; meta?: { title: string; desc: string; heading: string; method: string } }) {
  const chart = meta || {
    title: 'Where Microsoft 365 work time went',
    desc: 'Horizontal bars show 23 percent in Teams meetings, 19 percent in Teams chat, 15 percent in email, and 43 percent creating files.',
    heading: 'Where the workday went',
    method: 'Microsoft reported the split from aggregated Microsoft 365 activity over 180 days. Meetings, chat, and email add to 57% communication time; file creation adds to 43%. The report was published May 9, 2023.',
  };
  return <figure className="article-visual" data-visual="communication-chart" role="region" aria-label={`Scrollable chart: ${chart.title}`} tabIndex={0}>
    <svg viewBox="0 0 760 330" role="img" aria-labelledby="communication-chart-title communication-chart-desc">
      <title id="communication-chart-title">{chart.title}</title>
      <desc id="communication-chart-desc">{chart.desc}</desc>
      <text x="30" y="42" className="svg-title">{chart.heading}</text>
      {points.map((point, index) => {
        const y = 80 + index * 58;
        return <g key={point.label}>
          <text x="30" y={y + 21} className="svg-label">{point.label}</text>
          <rect x="190" y={y} width="500" height="30" rx="6" fill="#e6ded0" />
          <rect x="190" y={y} width={Math.max(0, Math.min(100, point.value)) * 5} height="30" rx="6" fill={point.color} />
          <text x={Math.min(680, 205 + Math.max(0, Math.min(100, point.value)) * 5)} y={y + 21} className="svg-value">{point.value}%</text>
        </g>;
      })}
    </svg>
    <figcaption><strong>Method note:</strong> {chart.method}</figcaption>
  </figure>;
}

function HandoffGraphic({ graphic }: { graphic?: { title: string; desc: string; heading: string; steps: Array<{ title: string; line1: string; line2: string; color: string }>; caption: string } }) {
  const visual = graphic || {
    title: 'Three-part account handoff path',
    desc: 'A process graphic moves an account from the outgoing manager to a written account record, then to the incoming Filipino account manager with owner review.',
    heading: 'A clean handoff path',
    steps: [
      { title: '1  Capture', line1: 'History, promises,', line2: 'risks, next action', color: '#e8c98e' },
      { title: '2  Check', line1: 'Owner, access,', line2: 'approval limits', color: '#b9dfce' },
      { title: '3  Review', line1: 'First notes, client', line2: 'message, risk view', color: '#ffd9ce' },
    ],
    caption: 'The handoff record sits between the old owner and the new manager. The internal account owner checks the record and the first live work before the account list grows.',
  };
  return <figure className="article-visual" data-visual="handoff-ownership-graphic" role="region" aria-label={`Scrollable graphic: ${visual.title}`} tabIndex={0}>
    <svg viewBox="0 0 760 300" role="img" aria-labelledby="handoff-graphic-title handoff-graphic-desc">
      <title id="handoff-graphic-title">{visual.title}</title>
      <desc id="handoff-graphic-desc">{visual.desc}</desc>
      <text x="30" y="42" className="svg-title">{visual.heading}</text>
      {visual.steps.slice(0, 3).map((step, index) => <g key={step.title} transform={`translate(${30 + index * 255} 78)`}>
        <rect width="190" height="150" rx="16" fill={step.color} />
        <text x="20" y="38" className="svg-step">{step.title}</text>
        <text x="20" y="70" className="svg-copy">{step.line1}</text>
        <text x="20" y="94" className="svg-copy">{step.line2}</text>
      </g>)}
      <path d="M230 153 H278" stroke="#132a2f" strokeWidth="4" markerEnd="url(#arrow)" />
      <path d="M485 153 H533" stroke="#132a2f" strokeWidth="4" markerEnd="url(#arrow)" />
      <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#132a2f" /></marker></defs>
    </svg>
    <figcaption>{visual.caption}</figcaption>
  </figure>;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const rich = richArticles[slug];
  const url = `${base}/blog/${post.slug}`;

  if (!rich) {
    return <><Header hidePricing /><main className="section"><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt, url }} /><article className="container guide-article"><p className="eyebrow">Philippines staffing blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><div className="card"><h2>Start with a defined role</h2><p>Write the recurring tasks, examples, tools, and approval boundaries before a Filipino specialist begins. This gives the role owner a practical basis for review.</p><h2>Build a controlled handoff</h2><p>Begin with low-risk samples and only the permissions required for the approved Philippines-based workload. Record questions and exceptions for the owner.</p><h2>Review the workload</h2><p>Use a weekly check of completed work, open decisions, and changing priorities. Update the role notes when the process changes.</p></div></article><CTA /></main><Footer hidePricing /></>;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: rich.title,
    description: rich.description,
    url,
    datePublished: rich.published,
    dateModified: rich.updated,
    author: { '@type': 'Organization', name: site.brand },
    publisher: { '@type': 'Organization', name: site.brand, url: base },
    citation: rich.sources.map((source) => source.url),
    mainEntityOfPage: url,
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: rich.faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${base}/blog` },
      { '@type': 'ListItem', position: 3, name: rich.title, item: url },
    ],
  };

  return <><Header hidePricing /><main className="article-page">
    <JsonLd data={articleSchema} /><JsonLd data={faqSchema} /><JsonLd data={breadcrumbSchema} />
    <article className="container rich-article" data-article-slug={slug}>
      <header className="article-hero">
        <p className="eyebrow">Philippines account support</p>
        <h1>{rich.title}</h1>
        <p className="article-deck">{rich.description}</p>
        <p className="article-meta">Published July 25, 2026 · {rich.readMinutes} minute read</p>
      </header>

      <div className="article-body">
        {rich.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <aside className="takeaway-box"><h2>{rich.takeawaysTitle || 'What to carry into the handoff'}</h2><ul>{rich.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></aside>

        {rich.sections.map((section, index) => <section key={section.heading} id={`section-${index + 1}`}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          {index === 1 && <>
            <div className="table-wrap" role="region" aria-label={`Scrollable table: ${rich.table.caption}`} tabIndex={0}><table><caption>{rich.table.caption}</caption><thead><tr>{rich.table.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{rich.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
            <CommunicationChart points={rich.chart} meta={rich.chartMeta} />
          </>}
          {index === 3 && <blockquote className="expert-quote"><p>“{rich.quote.text}”</p><cite><a href={rich.quote.url} rel="noreferrer">{rich.quote.source}</a></cite></blockquote>}
          {index === 4 && <HandoffGraphic graphic={rich.graphic} />}
          {(index === 0 || index === 2 || index === 4) && (() => {
            const banner = rich.banners[index === 0 ? 0 : index === 2 ? 1 : 2];
            return <aside className="article-banner" data-banner={banner.label}><p>{banner.label}</p><h3>{banner.title}</h3><p>{banner.body}</p><a href={banner.href}>{banner.link}</a></aside>;
          })()}
        </section>)}

        <section className="client-script">
          <h2>{rich.scriptTitle || 'A short client handoff note'}</h2>
          <p>{rich.scriptIntro || 'Use this as a starting point, then replace the bracketed date and match the wording to the client relationship. Send it only after the account owner checks the handoff map.'}</p>
          <div className="script-copy">{rich.script.map((line) => <p key={line}>{line}</p>)}</div>
        </section>

        <section className="article-faq">
          <h2>{rich.faqTitle || 'Questions about the handoff'}</h2>
          {rich.faqs.map((faq) => <div key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></div>)}
        </section>

        <section className="article-sources">
          <h2>Sources</h2>
          <ol>{rich.sources.map((source) => <li key={source.url}><a href={source.url} rel="noreferrer">{source.name}</a> ({source.date}). {source.note}</li>)}</ol>
        </section>
      </div>
    </article>
    <div className="container"><CTA /></div>
  </main><Footer hidePricing /></>;
}
