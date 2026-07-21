import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedaccountmanagement.com'), title: { default: 'Outsourced Account Management | Client account support', template: '%s | Outsourced Account Management' }, description: 'Practical outsourced account support for client follow-ups, CRM upkeep, renewal prep, reporting, and controlled handoffs.', openGraph: { title: 'Outsourced Account Management', description: 'A practical account desk for recurring client work.', url: 'https://outsourcedaccountmanagement.com', siteName: 'Outsourced Account Management', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
