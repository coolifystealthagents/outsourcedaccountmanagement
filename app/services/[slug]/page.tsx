import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';
import { getServiceDetail, serviceDetails } from '../../service-content';
import { seoTitle } from '../../lib/content-contracts';

const base = `https://${String(site.domain).toLowerCase()}`;

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return { title: 'Service not found' };
  return {
    title: seoTitle(`${service.title} | Account support`),
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.summary, url: `${base}/services/${service.slug}`, images: [{ url: `${base}${service.heroImage}`, alt: `${service.title} workflow illustration` }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();
  const url = `${base}/services/${service.slug}`;
  const related = service.related.map((item) => services.find((candidate) => candidate.slug === item)).filter(Boolean);
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return <>
    <Header />
    <main id="main-content" tabIndex={-1}>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.summary, url, areaServed: 'Philippines', provider: { '@type': 'Organization', name: site.brand, url: base } }} />
      <JsonLd data={faqSchema} />
      <section className="service-hero"><div className="container service-detail-hero">
        <div><p className="eyebrow">Philippines-based account support</p><h1>{service.title}</h1><p className="lead">{service.summary}</p><a className="btn primary" href="/contact-us">Discuss this service</a></div>
        <img src={service.heroImage} width="900" height="700" alt={`${service.title} team workflow illustration`} />
      </div></section>
      <section className="section"><div className="container service-detail-layout">
        <div><p className="eyebrow">Practical outcomes</p><h2>What this support is designed to improve</h2><p>Start with a documented source of truth, limited permissions, and a named reviewer. The specialist handles recurring coordination while accountable owners retain judgment and authority.</p></div>
        <ul className="service-outcomes">{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
      </div></section>
      <section className="service-detail-band"><div className="container"><p className="eyebrow">Working deliverables</p><h2>Artifacts your team can inspect and use</h2><div className="service-deliverables">{service.deliverables.map((item) => <article key={item}><h3>{item}</h3><p>Created from approved systems and templates, then maintained on the agreed review cadence.</p></article>)}</div></div></section>
      <section className="section"><div className="container"><p className="eyebrow">Operating workflow</p><h2>A controlled path from intake to review</h2><div className="service-workflow">{service.workflow.map((step) => <article key={step.title}><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></div></section>
      <section className="relationship"><div className="container"><p className="eyebrow">Authority boundaries</p><h2>Useful support with decisions kept in the right hands</h2><div className="service-boundaries"><article><h3>The specialist can support</h3><ul>{service.boundaries.supports.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Your accountable owner keeps</h3><ul>{service.boundaries.ownerKeeps.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>
      <section className="section"><div className="container service-faq"><p className="eyebrow">Frequently asked questions</p><h2>Planning this service</h2>{service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
      <section className="container related-services" aria-labelledby="related-services-title"><h2 id="related-services-title">Related account support services</h2><div className="cards">{related.map((item) => item ? <a className="card" href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.desc}</p><strong>Explore service</strong></a> : null)}</div></section>
      <div className="container"><CTA /></div>
    </main>
    <Footer />
  </>;
}
