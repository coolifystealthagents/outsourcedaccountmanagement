import type { Metadata } from 'next';
import { Header, Footer } from '../components';

export const metadata: Metadata = { title: 'Thanks: What Happens Next', description: 'Your meeting is confirmed. Review the next steps for your account support consultation.', alternates: { canonical: '/thanks-whats-next' }, robots: { index: false, follow: false } };

export default function ThanksWhatsNextPage() {
  return <><Header/><main className="section" id="main-content" tabIndex={-1}><div className="container thanks-next"><p className="eyebrow">Meeting confirmed</p><h1>Thanks. Here is what happens next.</h1><p className="lead">The Stealth Agents team will review the information you provided before the scheduled conversation.</p><div className="cards"><article className="card"><h2>Prepare the workload</h2><p>Bring the recurring tasks, portfolio size, current tools, and examples of the account work you want supported.</p></article><article className="card"><h2>Name the boundaries</h2><p>Identify who approves pricing, contract changes, client promises, credits, access, and escalations.</p></article><article className="card"><h2>Join the consultation</h2><p>Use the calendar confirmation sent by OnceHub. If plans change, use the reschedule link in that message.</p></article></div><p><a className="btn primary" href="/services">Review account support services</a></p></div></main><Footer/></>;
}
