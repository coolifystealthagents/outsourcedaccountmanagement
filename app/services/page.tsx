import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../components';
import { services, site } from '../data';
import { serviceImages } from '../editorial-images';

const base = `https://${String(site.domain).toLowerCase()}`;
const url = `${base}/services`;
const description = 'Compare Philippines-based account management services, task scope, approval limits, and review steps.';

export const metadata: Metadata = {
  title: 'Philippines account management services',
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    title: `Philippines account management services | ${site.brand}`,
    description,
    url,
    type: 'website',
  },
};

const itemListId = `${url}/#service-list`;

const serviceCollectionSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${url}/#page`,
      name: 'Philippines account management services',
      description,
      url,
      about: { '@type': 'Country', name: 'Philippines' },
      mainEntity: { '@id': itemListId },
    },
    {
      '@type': 'ItemList',
      '@id': itemListId,
      name: 'Account management services staffed from the Philippines',
      numberOfItems: services.length,
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.title,
        url: `${base}/services/${service.slug}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: base },
        { '@type': 'ListItem', position: 2, name: 'Services', item: url },
      ],
    },
  ],
};

export default function Services() {
  return <>
    <Header />
    <main id="main-content" tabIndex={-1}>
      <JsonLd data={serviceCollectionSchema} />
      <section className="architecture-hero service-index-hero">
        <div className="container service-index-hero-grid"><div>
          <p className="eyebrow">Philippines service directory</p>
          <h1>Specialized support for a defined workload.</h1>
          <p className="lead">Choose a Filipino support lane built around repeatable tasks and written controls. Each service page explains the role before the staffing intake begins.</p>
          <a className="btn primary" href="/contact-us">Discuss your account workflow</a>
        </div><figure><img src="/aug19-heroes/client-account-management-source-of-truth-map.webp" width="900" height="600" alt="Team reviewing connected account records and ownership"/><figcaption>Choose a service around the records, handoffs, and decisions your team already uses.</figcaption></figure></div>
      </section>
      <section className="section service-index-section">
        <div className="container service-directory">
          {services.map((service) => <a className="card" href={`/services/${service.slug}`} key={service.slug}>
            <img className="service-card-image" src={serviceImages[service.slug]} width="600" height="400" alt="" loading="lazy" />
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <span>Explore service →</span>
          </a>)}
        </div>
      </section>
      <section className="container service-index-process"><p className="eyebrow">How to choose</p><h2>Start with one repeatable lane.</h2><div><article><strong>01 · Define the work</strong><p>List the recurring tasks, source records, and deadlines that need dependable coverage.</p></article><article><strong>02 · Set the boundary</strong><p>Name who approves messages, resolves exceptions, and makes commercial decisions.</p></article><article><strong>03 · Review the result</strong><p>Agree on a short weekly view so the account owner can see what moved and what needs attention.</p></article></div></section>
      <CTA />
    </main>
    <Footer />
  </>;
}
