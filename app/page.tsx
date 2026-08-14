import * as data from './data';
import { Header, Footer, JsonLd } from './components';

const d = data as any;
const site = d.site || {};
const services = (d.services || []).slice(0, 4);
const posts = (d.blogPosts || []).slice(0, 3);

const title = (item: any) => item.title || item.name || 'Account support';
const text = (item: any) => item.desc || item.excerpt || '';
const slug = (item: any) => item.slug || title(item).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const workflow = [
  { label: 'Client follow-up', copy: 'Approved updates go out on time, and unanswered messages return to a named owner.' },
  { label: 'CRM upkeep', copy: 'Notes, dates, open requests, and next steps stay current enough to guide the week.' },
  { label: 'Renewal prep', copy: 'Your team gets a clean brief before the conversation, without handing over terms or scope.' },
  { label: 'Weekly review', copy: 'A short account list shows what moved, what stalled, and where an owner needs to decide.' },
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: `https://${site.domain}`,
  };

  return <>
    <Header />
    <main className="account-desk" data-design="account-desk-2026" data-gi-rollout="two-illustration-packs-one-icon-pack">
      <JsonLd data={schema} />

      <section className="desk-hero">
        <div className="container desk-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Filipino account support</p>
            <h1>Keep every client account moving.</h1>
            <p className="hero-lead">Work with Filipino talent in the Philippines on follow-ups, CRM notes, renewal prep, and weekly reporting. Your team keeps the relationships and the commercial calls.</p>
            <div className="hero-actions">
              <a className="btn primary" href="/contact-us">Request an account plan</a>
              <a className="text-link" href="#account-work">See the work we cover <span aria-hidden="true">↓</span></a>
            </div>
            <p className="routing-note">This independent site may route your request to a staffing partner. Every staffing request is limited to talent based in the Philippines.</p>
            <div className="hero-guardrails" aria-label="Account support guardrails">
              <span>CRM kept current</span>
              <span>Every follow-up has an owner</span>
              <span>Commercial decisions stay in-house</span>
            </div>
          </div>

          <div className="portfolio-visual" aria-label="Sample account portfolio view">
            <div className="photo-frame">
              <img src="/illustrations/getillustrations/communication-illustrations-pack-svg/client-account-support.webp" alt="Illustration of a client account specialist managing support conversations" />
              <span className="photo-caption">A steady desk behind the client book</span>
            </div>
            <div className="portfolio-board">
              <div className="board-top">
                <div><span className="board-kicker">Sample weekly view</span><strong>Account portfolio</strong></div>
                <span className="live-dot">Review ready</span>
              </div>
              <div className="account-row">
                <span className="account-icon coral"><img src="/icons/getillustrations/blueprint-communication-icons-svg/follow-up.svg" alt="Client follow-up task"/></span>
                <div><strong>Reply follow-up</strong><small>Owner note is ready</small></div>
                <span className="status">Today</span>
              </div>
              <div className="account-row">
                <span className="account-icon mint"><img src="/icons/getillustrations/blueprint-communication-icons-svg/client-email.svg" alt="Client renewal email"/></span>
                <div><strong>Renewal brief</strong><small>Open items collected</small></div>
                <span className="status">Review</span>
              </div>
              <div className="account-row">
                <span className="account-icon sand"><img src="/icons/getillustrations/blueprint-communication-icons-svg/owner-call.svg" alt="Account owner decision"/></span>
                <div><strong>Owner decision</strong><small>Escalation is documented</small></div>
                <span className="status">Handoff</span>
              </div>
              <div className="board-foot"><span>Next account review</span><strong>Agenda prepared</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="desk-strip">
        <div className="container strip-inner">
          <p>Built for agencies and B2B teams with a client book that has outgrown sticky notes and good intentions.</p>
          <a href="/contact-us">Map the account desk <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="container section work-section" id="account-work">
        <div className="section-intro">
          <p className="eyebrow">The weekly workload</p>
          <h2>Give repeat account work a proper home.</h2>
          <p>Client relationships rarely break because of one dramatic mistake. More often, small follow-ups slip, CRM notes age, and nobody can see the next step. The account desk keeps that routine visible.</p>
        </div>
        <div className="workflow-grid">
          {workflow.map((item, index) => <article className="workflow-card" key={item.label}>
            <span className="card-number">0{index + 1}</span>
            <h3>{item.label}</h3>
            <p>{item.copy}</p>
          </article>)}
        </div>
      </section>

      <section className="service-field">
        <div className="container service-grid">
          <div className="service-heading">
            <p className="eyebrow">Choose the starting lane</p>
            <h2>Start where the client book feels messy.</h2>
            <p>You do not need to hand over every account. Pick a small group, define the limits, and see whether the weekly review gets easier.</p>
            <a className="text-link light" href="/contact-us">Talk through the first scope <span aria-hidden="true">↗</span></a>
          </div>
          <div className="service-list">
            {services.map((service: any, index: number) => <a href={`/services/${slug(service)}`} key={slug(service)}>
              <span className="service-index">0{index + 1}</span>
              <div><h3>{title(service)}</h3><p>{text(service)}</p></div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </a>)}
          </div>
        </div>
      </section>

      <section className="container section handoff-section" id="handoff-boundaries">
        <div className="handoff-copy">
          <p className="eyebrow">A controlled handoff</p>
          <h2>The outside desk handles the routine. Your account owner keeps the judgment.</h2>
          <p>Set the account list, message examples, access level, and escalation rules before work begins. If a client asks for a refund, new terms, or a promise the team has not approved, it comes back to you.</p>
        </div>
        <div className="boundary-board">
          <div className="boundary-column can-own">
            <span className="boundary-label">The desk can own</span>
            <ul>
              <li>CRM notes and next steps</li>
              <li>Approved client follow-ups</li>
              <li>Meeting prep and action lists</li>
              <li>Weekly account reports</li>
            </ul>
          </div>
          <div className="boundary-column stays-in">
            <span className="boundary-label">Keep with your team</span>
            <ul>
              <li>Commercial and contract changes</li>
              <li>Credits and refunds</li>
              <li>Unapproved service promises</li>
              <li>Sensitive client resolutions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="launch-section">
        <div className="container">
          <div className="section-intro launch-intro">
            <p className="eyebrow">A small, sensible start</p>
            <h2>Test the desk on a short account list.</h2>
          </div>
          <div className="launch-steps">
            <article><span>1</span><h3>Map the book</h3><p>Choose the accounts, recurring tasks, systems, and decisions that still need an internal owner.</p></article>
            <article><span>2</span><h3>Show good work</h3><p>Share a finished account note, a useful follow-up, and the weekly view your team already trusts.</p></article>
            <article><span>3</span><h3>Review before expanding</h3><p>Check the first work closely. Add more accounts only when the handoffs feel boring and dependable.</p></article>
          </div>
        </div>
      </section>

      <section className="container gi-proof" aria-label="Account communication controls">
        <img className="gi-proof-art" src="/illustrations/getillustrations/grain-teamwork-illustrations-svg/account-review-meeting.svg" alt="Account team reviewing client follow-ups"/>
        <div><p className="eyebrow">Keep the relationship visible</p><h2>Follow up, document, and return decisions.</h2><div className="gi-icon-row"><span><img src="/icons/getillustrations/blueprint-communication-icons-svg/follow-up.svg" alt="Account follow-up"/>Follow-up</span><span><img src="/icons/getillustrations/blueprint-communication-icons-svg/client-email.svg" alt="Client email"/>Client email</span><span><img src="/icons/getillustrations/blueprint-communication-icons-svg/owner-call.svg" alt="Account owner call"/>Owner call</span></div></div>
      </section>

      <section className="container section guide-section">
        <div className="guide-heading">
          <p className="eyebrow">Field notes</p>
          <h2>Read before you hand over the client book.</h2>
          <a href="/blog">View all guides <span aria-hidden="true">↗</span></a>
        </div>
        <div className="guide-grid">
          {posts.map((post: any, index: number) => <a href={`/blog/${post.slug}`} key={post.slug}>
            <span className="guide-meta">Guide 0{index + 1} · {post.minutes || 7} min</span>
            <h3>{title(post)}</h3>
            <p>{text(post)}</p>
            <strong>Read the guide <span aria-hidden="true">→</span></strong>
          </a>)}
        </div>
      </section>

      <section className="container closing-card">
        <div>
          <p className="eyebrow">Start with the actual work</p>
          <h2>Bring us the account list that keeps slipping.</h2>
          <p>Your request can be matched with a Philippines-based staffing partner who understands the scope, limits, and first weekly review.</p>
        </div>
        <a className="btn primary" href="/contact-us">Request an account plan</a>
      </section>
    </main>
    <Footer />
  </>;
}
