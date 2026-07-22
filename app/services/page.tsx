import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../components';
import { services, site } from '../data';

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
    <main>
      <JsonLd data={serviceCollectionSchema} />
      <section className="architecture-hero">
        <div className="container">
          <p className="eyebrow">Philippines service directory</p>
          <h1>Specialized support for a defined workload.</h1>
          <p className="lead">Choose a Filipino support lane built around repeatable tasks and written controls. Each service page explains the role before the staffing intake begins.</p>
        </div>
      </section>
      <section className="section">
        <div className="container service-directory">
          {services.map((service) => <a className="card" href={`/services/${service.slug}`} key={service.slug}>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <span>Explore service →</span>
          </a>)}
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </>;
}
