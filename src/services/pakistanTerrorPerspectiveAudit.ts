import { pakistanTerrorPerspectiveRevisions } from '../data/pakistanTerrorPerspectiveRevisions';
import type { Movie } from '../types/movie';
import { evaluateEditorialGate, isPublicationEligible } from './editorialGate';
import { getSanghiProfileForAudit } from './sanghi';

const liveProfiles = pakistanTerrorPerspectiveRevisions.map((revision) => {
  const movie = {
    id: -1,
    title: revision.title,
    release_date: `${revision.year}-01-01`,
  } as Movie;
  return getSanghiProfileForAudit(movie);
});

export const pakistanTerrorPerspectiveAudit = {
  expected: pakistanTerrorPerspectiveRevisions.length,
  resolved: liveProfiles.filter(Boolean).length,
  missing: pakistanTerrorPerspectiveRevisions
    .filter((_, index) => !liveProfiles[index])
    .map((profile) => `${profile.title}::${profile.year}`),
  wrongStatus: liveProfiles
    .filter((profile) => profile && profile.status !== 'not-certified')
    .map((profile) => `${profile!.title}::${profile!.year}=${profile!.status}`),
  wrongGate: liveProfiles
    .filter((profile) => profile && profile.pakistanTerrorPerspectiveGate !== 'fail')
    .map((profile) => `${profile!.title}::${profile!.year}=${profile!.pakistanTerrorPerspectiveGate ?? 'unset'}`),
  notPublicationEligible: liveProfiles
    .filter((profile) => profile && !isPublicationEligible(profile))
    .map((profile) => `${profile!.title}::${profile!.year}:${evaluateEditorialGate(profile!).failures.join('|')}`),
  certifiedHardStopConflicts: liveProfiles
    .filter((profile) => profile?.status === 'certified' && profile.pakistanTerrorPerspectiveGate === 'fail')
    .map((profile) => `${profile!.title}::${profile!.year}`),
};
