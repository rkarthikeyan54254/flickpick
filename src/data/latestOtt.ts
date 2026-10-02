export type OttReleaseConfidence = 'announced' | 'reported' | 'rumoured';

export interface OttReleaseItem {
  title: string;
  platform: string;
  releaseDate: string;
  language: string;
  confidence: OttReleaseConfidence;
  editorialState: 'reviewed' | 'review-pending';
  sourceName: string;
  sourceUrl: string;
}

// Small source-backed seed for the product surface. This is intentionally not a
// comprehensive catalogue: ingestion is expected to replace/extend it. Rumours
// must never be promoted to confirmed dates without source review.
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
  },
];
