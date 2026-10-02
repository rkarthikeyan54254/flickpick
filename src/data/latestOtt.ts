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

// Live seed/reconciliation set. The release monitor refreshes these records,
// removes stale entries, and adds newly announced theatrical + OTT films.
export const latestOttReleases: OttReleaseItem[] = [
  {
    title: 'Yezhu Kadal Yezhu Malai',
    platform: 'In cinemas',
    releaseDate: '2026-10-01',
    language: 'Tamil',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Indian Express Malayalam',
    sourceUrl: 'https://malayalam.indianexpress.com/entertainment/yezhu-kadal-yezhu-malai-teaser-8000-year-old-nivin-pauly-12184290',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Sardar 2',
    platform: 'Prime Video',
    releaseDate: '2026-10-01',
    language: 'Tamil',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Loksatta OTT roundup',
    sourceUrl: 'https://www.loksatta.com/manoranjan/ott/ott-releases-this-week-october-2-netflix-prime-video-zee5-hotstar-hrc-97-6167248/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Ohh My Dog',
    platform: 'Netflix',
    releaseDate: '2026-10-01',
    language: 'Hindi',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Times of India OTT roundup',
    sourceUrl: 'https://timesofindia.indiatimes.com/web-series/news/hindi/ott-releases-this-week-september-28-to-october-4-2026-dupahiya-season-2-pooja-meri-jaan-ohh-my-dog-lego-one-piece-and-more/photostory/134541698.cms',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
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
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Bethlehem Kudumba Unit',
    platform: 'JioHotstar',
    releaseDate: '2026-10-02',
    language: 'Malayalam',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Times of India OTT roundup',
    sourceUrl: 'https://timesofindia.indiatimes.com/web-series/news/hindi/friday-ott-releases-october-2-2026-pooja-meri-jaan-bethlehem-kudumba-unit-love-the-last-first-winter-k2-and-more-headline-a-diverse-weekend-watchlist/articleshow/134617419.cms',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: '#Love',
    platform: 'Netflix',
    releaseDate: '2026-10-02',
    language: 'Tamil',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Times of India OTT roundup',
    sourceUrl: 'https://timesofindia.indiatimes.com/web-series/news/hindi/friday-ott-releases-october-2-2026-pooja-meri-jaan-bethlehem-kudumba-unit-love-the-last-first-winter-k2-and-more-headline-a-diverse-weekend-watchlist/articleshow/134617419.cms',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Drishyam 3',
    platform: 'In cinemas',
    releaseDate: '2026-10-02',
    language: 'Hindi',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Loksatta October releases',
    sourceUrl: 'https://www.loksatta.com/manoranjan/bollywood/ajay-devgn-drishyam-3-nai-naveli-october-2026-bollywood-movie-releases-udta-teer-prahaar-nsp-98-6160869/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: "Don't Trouble the Trouble",
    platform: 'In cinemas',
    releaseDate: '2026-10-02',
    language: 'Telugu',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/entertainment/telugu/fahadh-faasil-dont-trouble-the-trouble-early-review-mahesh-babu-deeply-moving-10901194/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Prem Keetanu',
    platform: 'In cinemas',
    releaseDate: '2026-10-02',
    language: 'Hindi',
    confidence: 'reported',
    editorialState: 'review-pending',
    sourceName: 'Loksatta October releases',
    sourceUrl: 'https://www.loksatta.com/manoranjan/bollywood/ajay-devgn-drishyam-3-nai-naveli-october-2026-bollywood-movie-releases-udta-teer-prahaar-nsp-98-6160869/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Udta Teer',
    platform: 'In cinemas',
    releaseDate: '2026-10-09',
    language: 'Hindi',
    confidence: 'reported',
    editorialState: 'pre-release-check',
    sourceName: 'Loksatta October releases',
    sourceUrl: 'https://www.loksatta.com/manoranjan/bollywood/ajay-devgn-drishyam-3-nai-naveli-october-2026-bollywood-movie-releases-udta-teer-prahaar-nsp-98-6160869/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Jailer 2',
    platform: 'In cinemas',
    releaseDate: '2026-10-15',
    language: 'Tamil',
    confidence: 'reported',
    editorialState: 'pre-release-check',
    sourceName: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/entertainment/telugu/vijay-deverakonda-ranabaali-dussehra-release-clash-with-rajinikanth-jailer-2-10851827/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Ranabaali',
    platform: 'In cinemas',
    releaseDate: '2026-10-16',
    language: 'Telugu',
    confidence: 'announced',
    editorialState: 'pre-release-check',
    sourceName: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/entertainment/telugu/vijay-deverakonda-ranabaali-dussehra-release-clash-with-rajinikanth-jailer-2-10851827/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'OM: Chapter 1',
    platform: 'In cinemas',
    releaseDate: '2026-10-16',
    language: 'Tamil',
    confidence: 'reported',
    editorialState: 'pre-release-check',
    sourceName: 'Indian Express',
    sourceUrl: 'https://indianexpress.com/article/entertainment/telugu/vijay-deverakonda-ranabaali-dussehra-release-clash-with-rajinikanth-jailer-2-10851827/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Prahaar: The Untold Story of Ujjwal Nikam',
    platform: 'In cinemas',
    releaseDate: '2026-10-16',
    language: 'Hindi',
    confidence: 'reported',
    editorialState: 'pre-release-check',
    sourceName: 'Loksatta October releases',
    sourceUrl: 'https://www.loksatta.com/manoranjan/bollywood/ajay-devgn-drishyam-3-nai-naveli-october-2026-bollywood-movie-releases-udta-teer-prahaar-nsp-98-6160869/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Nai Naveli',
    platform: 'In cinemas',
    releaseDate: '2026-10-16',
    language: 'Hindi',
    confidence: 'reported',
    editorialState: 'pre-release-check',
    sourceName: 'Loksatta October releases',
    sourceUrl: 'https://www.loksatta.com/manoranjan/bollywood/ajay-devgn-drishyam-3-nai-naveli-october-2026-bollywood-movie-releases-udta-teer-prahaar-nsp-98-6160869/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
  {
    title: 'Pehla Pyaar Dusra Baar',
    platform: 'In cinemas',
    releaseDate: '2026-10-23',
    language: 'Hindi',
    confidence: 'reported',
    editorialState: 'pre-release-check',
    sourceName: 'Loksatta October releases',
    sourceUrl: 'https://www.loksatta.com/manoranjan/bollywood/ajay-devgn-drishyam-3-nai-naveli-october-2026-bollywood-movie-releases-udta-teer-prahaar-nsp-98-6160869/',
    lastVerifiedAt: '2026-10-02T11:40:00+05:30',
  },
];
