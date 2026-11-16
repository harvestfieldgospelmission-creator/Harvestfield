import type { PageId } from './data/missionData';

export function getPagePath(page: PageId, subId?: string | null): string {
  if (page === 'home') return '/';
  return subId ? `/${page}/${encodeURIComponent(subId)}` : `/${page}`;
}
