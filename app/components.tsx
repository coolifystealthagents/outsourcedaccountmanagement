import * as data from './data';

const dataAny = data as any;
const site = dataAny.site || {};
const footerItems = (dataAny.services || dataAny.roles || dataAny.industries || dataAny.blogPosts || []).slice(0, 6);
const getTitle = (item: any) => typeof item === 'string' ? item : (item.title || item.name || item.label || item.question || String(item));
const getSlug = (item: any) => typeof item === 'string'
  ? item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  : (item.slug || getTitle(item).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
const domain = site.domain || 'this site';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap">
    <img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" />
    <span className="logo-name">{site.brand || domain}</span>
  </span>;
}

export function Header() {
  return <header className="nav">
    <div className="nav-inner">
      <a className="logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a>
      <nav className="links" aria-label="Main navigation">
        <a href="/#account-work">Services</a>
        <a href="/#account-work">Account work</a>
        <a href="/blog">Guides</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="btn nav-cta" href="/contact">Request account plan</a>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="footer legit-footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <a className="footer-logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a>
        <p>Practical help for teams that need client follow-ups, CRM upkeep, renewal prep, and account reporting handled with clear limits.</p>
        <p className="footer-note">We recruit and hire talent only in the Philippines. This is an independent informational website. If you submit a request, we may route it to a suitable staffing team or service partner.</p>
      </div>
      <div>
        <h3>Account services</h3>
        <div className="footer-links">
          {footerItems.map((item: any, index: number) => <a href={`/services/${getSlug(item)}`} key={index}>{getTitle(item)}</a>)}
        </div>
      </div>
      <div>
        <h3>Website</h3>
        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/blog">Guides</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/cancellation-policy">Cancellation Policy</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {year} {site.brand || domain}. All rights reserved.</span>
      <span>{domain}</span>
    </div>
  </footer>;
}

export function CTA() {
  return <section className="final-cta">
    <p className="eyebrow">Plan the first handoff</p>
    <h2>Start with the account work that keeps slipping.</h2>
    <p>Share the client tasks, systems, schedule, and approval limits. We will help you shape a workable scope.</p>
    <a className="btn primary" href="/contact">Request an account plan</a>
  </section>;
}
