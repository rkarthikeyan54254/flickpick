export type OttReleaseConfidence = 'announced' | 'reported' | 'rumoured';
export type OttEditorialState = 'sanghi-certified' | 'pre-release-check' | 'review-pending';

export interface OttReleaseItem {
  title: string;
  platform: string;
  releaseDate: string;
  language: string;
  confidence: OttReleaseConfidence;
  editorialState: OttEditorialState;
  /** Internal provenance: kept for audit/reconciliation, not shown as primary UI copy. */
  sourceName: string;
  sourceUrl: string;
  /** ISO timestamp of the last successful re-verification by the release monitor. */
  lastVerifiedAt: string;
}

/**
 * Runtime freshness contract.
 *
 * The home page must never keep showing a release record simply because it was
 * once committed to the repository. Records disappear if they have not been
 * re-verified within 72 hours, and the rail is restricted to a rolling window
 * from the previous 7 days through the next 30 days.
 *
 * Rumours remain in the internal feed for reconciliation but are not shown in
 * the consumer rail until corroborated to at least `reported`.
 */
export function getFreshOttReleases(now = new Date()): OttReleaseItem[] {
  const nowMs = now.getTime();
  const maxVerificationAgeMs = 72 * 60 * 60 * 1000;
  const earliestReleaseMs = nowMs - 7 * 24 * 60 * 60 * 1000;
  const latestReleaseMs = nowMs + 30 * 24 * 60 * 60 * 1000;

  return latestOttReleases
    .filter((item) => {
      const verifiedMs = new Date(item.lastVerifiedAt).getTime();
      const releaseMs = new Date(`${item.releaseDate}T00:00:00+05:30`).getTime();
      if (!Number.isFinite(verifiedMs) || !Number.isFinite(releaseMs)) return false;
      if (item.confidence === 'rumoured') return false;
      return nowMs - verifiedMs <= maxVerificationAgeMs
        && releaseMs >= earliestReleaseMs
        && releaseMs <= latestReleaseMs;
    })
    .sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
}

// Bootstrap records. The automated release monitor refreshes/reconciles this
// dataset throughout the day and adds newly announced Indian OTT releases.
export const latestOttReleases: OttReleaseItem[] = [
  {
    title: 'Sardar 2',
    platform: 'Prime Video',
    releaseDate: '2026-10-01',
    language: 'Tamil',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Loksatta OTT roundup',
    sourceUrl: 'https://www.loksatta.com/manoranjan/ott/ott-releases-this-week-october-2-netflix-prime-video-zee5-hotstar-hrc-97-6167248/',
    lastVerifiedAt: '2026-10-02T10:45:00+05:30',
  },
  {
    title: 'Pooja Meri Jaan',
    platform: 'ZEE5',
    releaseDate: '2026-10-02',
    language: 'Hindi',
    confidence: 'announced',
    editorialState: 'review-pending',
    sourceName: 'Times of India OTT roundup',
    sourceUrl: 'https://timesofindia.indiatimes.com/web-series/news/hindi/friday-ott-releases-october-2-2026-pooja-meri-jaan-bethlehem-kudumba-unit-love-the-last-first-winter-k2-and-more-headline-a-diverse-weekend-watchlist/articleshow/134617419.cms',
    lastVerifiedAt: '2026-10-02T10:45:00+05:30',
  },
  {
    title: 'Bethlehem Kudumba Unit',
    platform: 'JioHotstar',
    releaseDate: '2026-10-02',
    language: 'Malayalam',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Economic Times OTT roundup',
    sourceUrl: 'https://m.economictimes.com/magazines/panache/friday-ott-releases-of-the-week-bethlehem-kudumba-unit-to-doing-life-to-pooja-meri-jaan-new-movies-and-shows-on-netflix-jiohotstar-prime-video-and-zee5/articleshow/134629828.cms',
    lastVerifiedAt: '2026-10-02T10:45:00+05:30',
  },
  {
    title: '#Love',
    platform: 'Netflix',
    releaseDate: '2026-10-02',
    language: 'Tamil',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Economic Times OTT roundup',
    sourceUrl: 'https://m.economictimes.com/magazines/panache/friday-ott-releases-of-the-week-bethlehem-kudumba-unit-to-doing-life-to-pooja-meri-jaan-new-movies-and-shows-on-netflix-jiohotstar-prime-video-and-zee5/articleshow/134629828.cms',
    lastVerifiedAt: '2026-10-02T10:45:00+05:30',
  },
];
