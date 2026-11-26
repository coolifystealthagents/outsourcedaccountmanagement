export const serviceImages: Record<string, string> = {
  'client-onboarding-coordination': '/aug19-heroes/client-account-management-launch-readiness-review.webp',
  'account-health-monitoring': '/aug19-heroes/client-account-management-quality-review-cadence.webp',
  'renewal-administration': '/aug19-heroes/client-account-management-weekly-decision-brief.webp',
  'customer-qbr-preparation': '/aug19-heroes/client-account-management-source-of-truth-map.webp',
  'crm-account-maintenance': '/aug19-heroes/client-account-management-intake-source-register.webp',
  'client-request-routing': '/aug19-heroes/client-account-management-work-queue-ownership.webp',
  'upsell-opportunity-tracking': '/aug19-heroes/client-account-management-approval-evidence-matrix.webp',
  'account-reporting': '/aug19-heroes/client-account-management-source-of-truth-map.webp',
  'contract-milestone-tracking': '/aug19-heroes/client-account-management-change-control-record.webp',
  'customer-feedback-administration': '/aug19-heroes/client-account-management-exception-queue-triage.webp',
  'implementation-handoff-support': '/aug19-heroes/client-account-management-handoff-acceptance-log.webp',
  'escalation-coordination': '/aug19-heroes/client-account-management-escalation-path-design.webp',
};

export const researchFallbackImages: Record<string, string> = {
  'Hiring Controls': '/research-heroes/2026-09-24-evidence-lineage.png',
  'Scope Benchmarks': '/research-heroes/2026-09-24-sampling-bias.png',
  'Workflow Design': '/research-heroes/2026-09-24-owner-continuity.png',
};

export function researchImage(post: { hero?: string; cluster: string }) {
  return post.hero || researchFallbackImages[post.cluster] || '/research-heroes/2026-09-24-evidence-lineage.png';
}
