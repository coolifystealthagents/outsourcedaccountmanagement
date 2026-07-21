import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const base = `https://${site.domain.toLowerCase()}`;
  const url = `${base}/services/${slug}`;

  return {
    title: service?.title || 'Account management service',
    description: service?.desc,
    alternates: { canonical: url },
    openGraph: {
      title: service?.title || 'Account management service',
      description: service?.desc,
      url,
      type: 'website',
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const base = `https://${site.domain.toLowerCase()}`;
  const url = `${base}/services/${service.slug}`;
  const serviceId = `${url}#service`;
  const howToId = `${url}#first-week`;
  const faqId = `${url}#faq`;
  const breadcrumbId = `${url}#breadcrumb`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: service.title,
        description: service.desc,
        mainEntity: { '@id': serviceId },
        hasPart: [{ '@id': howToId }, { '@id': faqId }],
        breadcrumb: { '@id': breadcrumbId },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: service.title,
        description: service.desc,
        url,
        provider: {
          '@type': 'Organization',
          name: site.brand,
          url: base,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.title} task scope`,
          itemListElement: service.bestTasks.map((task) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: task },
          })),
        },
      },
      {
        '@type': 'HowTo',
        '@id': howToId,
        name: `How to launch ${service.title.toLowerCase()} in the first week`,
        step: service.firstWeek.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: `Step ${index + 1}`,
          text: step,
          url: `${url}#step-${index + 1}`,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: service.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.desc}</p>
              <a className="btn primary" href="/contact">Plan this role</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt={`${service.title} team reviewing account work`} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cards">
            <div className="card">
              <h2>Best tasks</h2>
              <ul className="list">
                {service.bestTasks.map((task) => <li key={task}>{task}</li>)}
              </ul>
            </div>
            <div className="card">
              <h2>Quality controls</h2>
              <ul className="list">
                {service.controls.map((control) => <li key={control}>{control}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="relationship" id="first-week">
          <div className="container">
            <p className="eyebrow">First week</p>
            <h2>Start small, check the work, then add more accounts.</h2>
            <div className="cards">
              {service.firstWeek.map((step, index) => (
                <article className="card" id={`step-${index + 1}`} key={step}>
                  <p className="eyebrow">Step {index + 1}</p>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container" style={{ maxWidth: 920 }}>
            <p className="eyebrow">Buyer questions</p>
            <h2>What to settle before the work starts</h2>
            <div className="cards">
              {service.faqs.map((faq) => (
                <article className="card" key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
