import { NextRequest, NextResponse } from 'next/server';

const canonicalHost = 'outsourcedaccountmanagement.com';

const serviceAliases: Record<string, string> = {
  'account-coverage-planning': 'account-health-monitoring',
  'account-planning-support': 'account-health-monitoring',
  'account-review-coordination': 'customer-qbr-preparation',
  'account-transition-support': 'implementation-handoff-support',
  'account-workflow-coordination': 'client-request-routing',
  'client-approval-coordination': 'client-request-routing',
  'client-communication-support': 'client-request-routing',
  'client-deliverable-coordination': 'account-reporting',
  'client-meeting-coordination': 'customer-qbr-preparation',
  'service-level-reporting': 'account-reporting',
};

const canonicalServices = new Set([
  'client-onboarding-coordination', 'account-health-monitoring', 'renewal-administration',
  'customer-qbr-preparation', 'crm-account-maintenance', 'client-request-routing',
  'upsell-opportunity-tracking', 'account-reporting', 'contract-milestone-tracking',
  'customer-feedback-administration', 'implementation-handoff-support', 'escalation-coordination',
]);

export function middleware(request: NextRequest) {
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '').split(':')[0].toLowerCase();
  const protocol = request.headers.get('x-forwarded-proto') || request.nextUrl.protocol.replace(':', '');
  const isLocal = host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');
  if (request.nextUrl.pathname.toLowerCase().startsWith('/services/')) {
    let requestedSlug: string;
    try { requestedSlug = decodeURIComponent(request.nextUrl.pathname.slice('/services/'.length)); }
    catch { return new NextResponse('Invalid URL encoding', { status: 400 }); }
    const normalized = requestedSlug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    const target = serviceAliases[normalized] || (canonicalServices.has(normalized) ? normalized : '');
    if (target && requestedSlug !== target) {
      const url = request.nextUrl.clone();
      url.pathname = `/services/${target}`;
      return NextResponse.redirect(url, 308);
    }
  }
  if (!isLocal && (host === `www.${canonicalHost}` || host === canonicalHost) && (host !== canonicalHost || protocol !== 'https')) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = canonicalHost;
    url.port = '';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
