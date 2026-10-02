import { sanghiProfiles } from '../data/sanghiProfiles';
import { sanghiProfileRevisions } from '../data/sanghiProfileRevisions';
import { batch02Profiles } from '../data/batch02Profiles';
import { chakDeIndiaRevision } from '../data/chakDeIndiaRevision';
import { rangDeBasantiRevision } from '../data/rangDeBasantiRevision';
import { corpusExpansion01 } from '../data/corpusExpansion01';
import { corpusExpansion02 } from '../data/corpusExpansion02';
import { corpusExpansionIntegrityRevisions } from '../data/corpusExpansionIntegrityRevisions';
import { continuousCorpusProfiles } from '../data/continuousCorpusProfiles';
import { hardenedCorpusNextA } from '../data/hardenedCorpusNextA';
import { hardenedCorpusNextB } from '../data/hardenedCorpusNextB';
import { hardenedCorpus50 } from '../data/hardenedCorpus50';
import type { Movie } from '../types/movie';
import type { CertificationStatus, SanghiProfile } from '../types/sanghi';
import { evaluateEditorialGate, isPublicationEligible } from './editorialGate';

function normalizeTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function profileKey(profile: Pick<SanghiProfile, 'title' | 'year'>) {
  return `${normalizeTitle(profile.title)}::${profile.year}`;
}

function allProfileVersions() {
  const hardenedNextTitles = new Set(
    [...hardenedCorpus50, ...hardenedCorpusNextA, ...hardenedCorpusNextB].map((profile) => normalizeTitle(profile.title))
  );
  const focusedExpansionTitles = new Set(
    [
      ...corpusExpansionIntegrityRevisions,
      ...corpusExpansion02,
      ...corpusExpansion01,
    ].map((profile) => normalizeTitle(profile.title))
  );

  return [
    chakDeIndiaRevision,
    rangDeBasantiRevision,
    ...hardenedCorpus50,
    ...hardenedCorpusNextA,
    ...hardenedCorpusNextB,
    ...sanghiProfileRevisions.filter((profile) => !hardenedNextTitles.has(normalizeTitle(profile.title))),
    ...corpusExpansionIntegrityRevisions.filter((profile) => !hardenedNextTitles.has(normalizeTitle(profile.title))),
    ...corpusExpansion02.filter((profile) => !hardenedNextTitles.has(normalizeTitle(profile.title))),
    ...corpusExpansion01.filter((profile) => !hardenedNextTitles.has(normalizeTitle(profile.title))),
    ...continuousCorpusProfiles.filter(
      (profile) =>
        !hardenedNextTitles.has(normalizeTitle(profile.title)) &&
        !focusedExpansionTitles.has(normalizeTitle(profile.title))
    ),
    ...batch02Profiles.filter((profile) => !hardenedNextTitles.has(normalizeTitle(profile.title))),
    ...sanghiProfiles.filter((profile) => !hardenedNextTitles.has(normalizeTitle(profile.title))),
  ];
}

function currentProfiles() {
  const ordered = allProfileVersions();
  const seen = new Set<string>();
  return ordered.filter((profile) => {
    const key = profileKey(profile);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function movieYear(movie: Movie) {
  return Number(movie.release_date?.slice(0, 4)) || undefined;
}

function yearMatchesDecade(year: number, decade: string) {
  const currentYear = new Date().getFullYear();
  switch (decade) {
    case '70s': return year >= 1970 && year <= 1979;
    case '80s': return year >= 1980 && year <= 1989;
    case '90s': return year >= 1990 && year <= 1999;
    case '2K': return year >= 2000 && year <= 2009;
    case '2010s': return year >= 2010 && year <= 2019;
    case '2020s': return year >= 2020 && year <= currentYear;
    case 'Latest': return year >= currentYear - 2 && year <= currentYear;
    default: return true;
  }
}

export function getSanghiProfile(movie: Movie): SanghiProfile | undefined {
  const year = movieYear(movie);
  const normalizedMovieTitle = normalizeTitle(movie.title);

  return currentProfiles().find(profile => {
    if (profile.tmdbId && profile.tmdbId === movie.id) return true;
    const titleMatches = normalizeTitle(profile.title) === normalizedMovieTitle;
    return titleMatches && (!year || profile.year === year);
  });
}

export function getProfileRevisionHistory(profile: Pick<SanghiProfile, 'title' | 'year'>) {
  const key = profileKey(profile);
  return allProfileVersions()
    .filter((candidate) => profileKey(candidate) === key)
    .sort((a, b) => b.reviewedAt.localeCompare(a.reviewedAt));
}

export function getProfilesForSelection(
  filter: 'certified' | 'reviewed',
  language: string,
  decade: string
) {
  return currentProfiles().filter(profile => {
    if (profile.language !== language) return false;
    if (!yearMatchesDecade(profile.year, decade)) return false;
    if (!isPublicationEligible(profile)) return false;
    if (filter === 'certified') return profile.status === 'certified';
    return profile.status !== 'unrated';
  });
}

export function getCorpusStats() {
  const profiles = currentProfiles();
  const batch = batch02Profiles;
  const results = batch.map(evaluateEditorialGate);
  return {
    totalProfiles: profiles.length,
    batch02Total: batch.length,
    batch02GatePassed: results.filter((result) => result.gatePassed).length,
    batch02Published: results.filter((result) => result.eligible).length,
    batch02AutoPublish: results.filter((result) => result.lane === 'auto-publish').length,
    batch02HumanReview: results.filter((result) => result.lane === 'human-review').length,
    batch02Provisional: results.filter((result) => result.lane === 'provisional-hold').length,
  };
}

export function isReviewed(movie: Movie) {
  const profile = getSanghiProfile(movie);
  return Boolean(profile && isPublicationEligible(profile));
}

export function matchesCertificationFilter(
  movie: Movie,
  filter: 'all' | 'certified' | 'reviewed'
) {
  if (filter === 'all') return true;
  const profile = getSanghiProfile(movie);
  if (!profile || !isPublicationEligible(profile)) return false;
  if (filter === 'reviewed') return true;
  return profile.status === 'certified';
}

export const certificationLabels: Record<CertificationStatus, string> = {
  certified: 'Sanghi Certified',
  mixed: 'Mixed / Contested',
  neutral: 'Reviewed · Neutral',
  'not-certified': 'Reviewed · Not Certified',
  unrated: 'Unrated'
};

export const dimensionLabels: Record<string, string> = {
  dharma: 'Dharma',
  civilizationalContinuity: 'Civilization',
  rashtra: 'Rashtra',
  itihasa: 'Itihasa',
  parampara: 'Parampara',
  localRoots: 'Local Roots',
  raksha: 'Raksha',
  socialDharma: 'Social Dharma',
  sacredRegard: 'Sacred Regard',
  contemptRisk: 'Contempt Risk'
};

export function topPositiveDimensions(profile: SanghiProfile, limit = 3) {
  const entries = Object.entries(profile.dimensions)
    .filter(([key, value]) => key !== 'contemptRisk' && typeof value === 'number')
    .sort((a, b) => Number(b[1]) - Number(a[1]));
  return entries.slice(0, limit).map(([key, value]) => ({
    key,
    label: dimensionLabels[key] || key,
    value: value as number
  }));
}
