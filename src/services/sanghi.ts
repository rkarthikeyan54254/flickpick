import { sanghiProfiles } from '../data/sanghiProfiles';
import type { Movie } from '../types/movie';
import type { CertificationStatus, SanghiProfile } from '../types/sanghi';

function normalizeTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function movieYear(movie: Movie) {
  return Number(movie.release_date?.slice(0, 4)) || undefined;
}

export function getSanghiProfile(movie: Movie): SanghiProfile | undefined {
  const year = movieYear(movie);
  const normalizedMovieTitle = normalizeTitle(movie.title);

  return sanghiProfiles.find(profile => {
    if (profile.tmdbId && profile.tmdbId === movie.id) return true;
    const titleMatches = normalizeTitle(profile.title) === normalizedMovieTitle;
    return titleMatches && (!year || profile.year === year);
  });
}

export function isReviewed(movie: Movie) {
  return Boolean(getSanghiProfile(movie));
}

export function matchesCertificationFilter(
  movie: Movie,
  filter: 'all' | 'certified' | 'reviewed'
) {
  if (filter === 'all') return true;
  const profile = getSanghiProfile(movie);
  if (!profile) return false;
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
