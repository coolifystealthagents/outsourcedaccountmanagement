import type { Metadata } from "next";
import { Header, Footer } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Us: Account Management Consultation",
  description: "Book a free consultation to scope reliable outsourced account management support for your client portfolio.",
  alternates: { canonical: "/contact-us" },
  robots: { index: true, follow: true },
  openGraph: { title: "Plan Outsourced Account Support", description: "Scope client follow-up, CRM hygiene, renewal preparation, and account reporting support.", url: "/contact-us" },
};

const services = [
  ["Client follow-up", "Coordinate approved check-ins, document responses, and keep next steps and owners visible."],
  ["CRM stewardship", "Maintain account records, contact details, activity notes, and clearly sourced status updates."],
  ["Renewal preparation", "Organize dates, open issues, usage evidence, and stakeholder context for the account owner."],
  ["Portfolio reporting", "Prepare consistent account summaries, exception queues, and source-backed review materials."],
];

const controls = [
  ["One source of truth", "Define where approved account facts, commitments, owners, and next steps must be recorded."],
  ["Clear authority limits", "Separate preparation and follow-up from pricing, commitments, concessions, and commercial decisions."],
  ["Reviewable service", "Use a named manager, recurring quality checks, and a portfolio scorecard to keep support accountable."],
];

export default function ContactUsPage(){return <>
  <Header/>
  <main className="trusted-contact">
    <section className="tc-hero"><div className="container tc-hero-grid">
      <div className="tc-copy"><p className="tc-kicker">More consistent client coverage</p><h1>Keep every account visible, current, and moving.</h1><p className="tc-lead">Tell us about your portfolio, CRM, follow-up cadence, renewal workflow, and approval boundaries. We’ll help scope account support that gives owners more capacity without blurring authority.</p><div className="tc-proof-row"><span>35+ industries</span><span>Account support specialists</span><span>Free consultation</span></div><a className="tc-text-link" href="#account-support">Explore the coverage model →</a></div>
      <StandardContactForm endpoint="/api/contact" encoding="form"/>
    </div></section>
    <section className="tc-strip"><div className="container tc-strip-grid"><strong>A focused consultation</strong><span>✓ Portfolio map</span><span>✓ CRM workflow</span><span>✓ Authority limits</span><span>✓ Review cadence</span></div></section>
    <section className="tc-section" id="account-support"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">Where account support fits</p><h2>Protect client continuity across the portfolio.</h2></div><p>Reliable account support keeps facts, commitments, handoffs, and exceptions visible while the account owner retains relationship and commercial authority.</p></div><div className="tc-card-grid">{services.map(([title,body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tc-inline-cta"><strong>Know where coverage breaks down?</strong><a href="#contactPageForm">Discuss it with our team</a></div></div></section>
    <section className="tc-controls"><div className="container"><p className="tc-kicker">A controlled service model</p><h2>Support the relationship without overstepping it.</h2><div className="tc-control-grid">{controls.map(([title,body])=><article key={title}><div aria-hidden="true">✓</div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Consultation checklist</p><h2>Define the account desk before staffing it.</h2><p>We’ll map the conditions that help an outsourced account specialist stay useful, accurate, and easy to govern.</p></div><ul><li>Portfolio size, tiers, and lifecycle stages</li><li>CRM fields and source-of-truth rules</li><li>Follow-up cadence and approved language</li><li>Escalation and commercial authority</li><li>Renewal and review preparation workflow</li><li>First-month quality scorecard</li></ul></div></section>
    <section className="tc-why"><div className="container tc-why-grid"><img src="/account-team.jpg" width="1800" height="1200" alt="Account support specialists reviewing a client portfolio and documented next steps"/><div><p className="tc-kicker">Why structure matters</p><h2>Every client commitment needs an owner and a record.</h2><p>We shape account support around accurate CRM notes, defined follow-up, secure access, decision boundaries, and clear escalation points—so coverage improves without sending mixed messages.</p><a href="#contactPageForm">Scope my account support →</a></div></div></section>
    <section className="tc-about"><div className="container tc-about-grid"><div><p className="tc-kicker">Powered by a proven team</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p></div><a href="https://stealthagents.com" target="_blank" rel="noopener noreferrer">Powered by Stealth Agents</a></div></section>
    <section className="container tc-final"><div><p className="tc-kicker">A clearer account desk</p><h2>Build client coverage your team can confidently trust.</h2><p>Share the portfolio, systems, workflow, and boundaries. We’ll help define the role and next steps.</p></div><a href="#contactPageForm">Book a free consultation</a></section>
  </main>
  <Footer/>
</>}
