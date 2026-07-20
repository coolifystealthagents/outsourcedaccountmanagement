import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedaccountmanagement.com'), title: { default: 'Outsourced Account Management | Offshore outsourcing guides', template: '%s | Outsourced Account Management' }, description: 'our staffing team-style guides for outsourced account management: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Outsourced Account Management', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedaccountmanagement.com', siteName: 'Outsourced Account Management', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
