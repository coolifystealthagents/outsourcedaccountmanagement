import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return { title: post?.title || 'Guide', description: post?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const detail = blogDetails[post.slug as keyof typeof blogDetails];
  const base = `https://${site.domain.toLowerCase()}`;
  const articleUrl = `${base}/blog/${post.slug}`;
  const fallbackFaqs = [
    {
      q: 'What should I prepare before hiring?',
      a: 'Prepare task examples, tool access rules, daily output targets, and escalation rules before a provider starts work.',
    },
    {
      q: 'What should stay with my team?',
      a: 'Keep sensitive decisions, pricing, refunds, contracts, and customer complaints with your owner until written approval rules exist.',
    },
  ];
  const faqs = detail?.faqs || fallbackFaqs;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: articleUrl,
        mainEntityOfPage: articleUrl,
        author: { '@type': 'Organization', name: site.brand, url: base },
        publisher: { '@type': 'Organization', name: site.brand, url: base },
        citation: detail?.sources?.map((source) => source.url),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${base}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <article className="container" style={{ maxWidth: 920 }}>
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{detail?.summary || post.excerpt}</p>

          <div className="card">
            <h2>The short answer</h2>
            <p>
              Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.
            </p>
            {detail ? (
              <ul className="list">
                {detail.takeaways.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : null}
          </div>

          {detail ? (
            <>
              <div className="card" style={{ marginTop: 24 }}>
                <h2>Weak answer vs useful answer</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
                  {detail.comparisonRows.map((row) => (
                    <div key={row.weak} className="callout">
                      <b>Weak:</b> {row.weak}<br />
                      <b>Ask instead:</b> {row.useful}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ marginTop: 24 }}>
                {detail.sections.map((section) => (
                  <section key={section.heading}>
                    <h2>{section.heading}</h2>
                    <p>{section.body}</p>
                  </section>
                ))}
              </div>

              <div className="card" style={{ marginTop: 24 }}>
                <h2>Copy this provider call script</h2>
                {detail.script.map((line) => <p className="quote" key={line}>"{line}"</p>)}
              </div>

              <div className="card" style={{ marginTop: 24 }}>
                <h2>Sources</h2>
                <ul className="list">
                  {detail.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url}>{source.name}</a> - {source.note}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="card" style={{ marginTop: 24 }}>
              <h2>What to prepare</h2>
              <ul>
                <li>Task examples and sample replies</li>
                <li>Tool access and permission rules</li>
                <li>Daily output target</li>
                <li>Escalation rules for anything sensitive</li>
              </ul>
              <h2>Questions to ask</h2>
              <ul>
                <li>Who screens the worker?</li>
                <li>Who checks quality?</li>
                <li>What happens if fit is poor?</li>
                <li>How are passwords and customer data handled?</li>
              </ul>
            </div>
          )}

          <div className="card" style={{ marginTop: 24 }}>
            <h2>FAQ</h2>
            {faqs.map((faq) => (
              <section key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </section>
            ))}
          </div>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
