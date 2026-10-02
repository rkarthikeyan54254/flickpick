import { sanghiProfiles } from '../data/sanghiProfiles';
import { sanghiProfileRevisions } from '../data/sanghiProfileRevisions';
import { batch02Profiles } from '../data/batch02Profiles';
import { chakDeIndiaRevision } from '../data/chakDeIndiaRevision';
import { rangDeBasantiRevision } from '../data/rangDeBasantiRevision';
import { editorialIntegrityRevisions } from '../data/editorialIntegrityRevisions';
import { fullRecertificationV2Batch01 } from '../data/fullRecertificationV2Batch01';
import { fullRecertificationV2Batch02 } from '../data/fullRecertificationV2Batch02';
import { fullRecertificationV2Batch03 } from '../data/fullRecertificationV2Batch03';
import { fullRecertificationV2Batch04 } from '../data/fullRecertificationV2Batch04';
import { fullRecertificationV2Batch05 } from '../data/fullRecertificationV2Batch05';
import { fullRecertificationV2OwnerExceptions } from '../data/fullRecertificationV2OwnerExceptions';
import { fullRecertificationV2Overrides } from '../data/fullRecertificationV2Overrides';
import { fullRecertificationV2Worker2Batch01 } from '../data/fullRecertificationV2Worker2Batch01';
import { fullRecertificationV2Worker3Batch01 } from '../data/fullRecertificationV2Worker3Batch01';
import { fullRecertificationV2Worker3Batch02 } from '../data/fullRecertificationV2Worker3Batch02';
import { fullRecertificationV2Worker4Batch01 } from '../data/fullRecertificationV2Worker4Batch01';
import { fullRecertificationV2Worker4Batch02 } from '../data/fullRecertificationV2Worker4Batch02';
import { fullRecertificationV2Worker4Batch03 } from '../data/fullRecertificationV2Worker4Batch03';
import { corpusExpansion01 } from '../data/corpusExpansion01';
import { corpusExpansion02 } from '../data/corpusExpansion02';
import { corpusExpansionIntegrityRevisions } from '../data/corpusExpansionIntegrityRevisions';
import { continuousCorpusProfiles } from '../data/continuousCorpusProfiles';
import { hardenedCorpusNextA } from '../data/hardenedCorpusNextA';
import { hardenedCorpusNextB } from '../data/hardenedCorpusNextB';
import { hardenedCorpus50 } from '../data/hardenedCorpus50';
import { hardenedCorpus50B } from '../data/hardenedCorpus50B';
import { hardenedCorpus50C } from '../data/hardenedCorpus50C';
import { latestCertificationProfiles } from '../data/latestCertificationProfiles';
import { latestCertificationProfilesExtra } from '../data/latestCertificationProfilesExtra';
import type { Movie } from '../types/movie';
import type { SanghiProfile } from '../types/sanghi';
import { isPublicationEligible } from './editorialGate';
import { getCorpusStats, getSanghiProfileForAudit } from './sanghi';

function normalizeTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function key(profile: Pick<SanghiProfile, 'title' | 'year'>) {
  return `${normalizeTitle(profile.title)}::${profile.year}`;
}

const candidateProfiles: SanghiProfile[] = [
  ...fullRecertificationV2Overrides,
  ...fullRecertificationV2OwnerExceptions,
  ...fullRecertificationV2Worker2Batch01,
  ...fullRecertificationV2Worker3Batch02,
  ...fullRecertificationV2Worker3Batch01,
  ...fullRecertificationV2Worker4Batch03,
  ...fullRecertificationV2Worker4Batch02,
  ...fullRecertificationV2Worker4Batch01,
  ...fullRecertificationV2Batch05,
  ...fullRecertificationV2Batch04,
  ...fullRecertificationV2Batch03,
  ...fullRecertificationV2Batch02,
  ...fullRecertificationV2Batch01,
  ...editorialIntegrityRevisions,
  chakDeIndiaRevision,
  rangDeBasantiRevision,
  ...latestCertificationProfilesExtra,
  ...latestCertificationProfiles,
  ...hardenedCorpus50C,
  ...hardenedCorpus50B,
  ...hardenedCorpus50,
  ...hardenedCorpusNextA,
  ...hardenedCorpusNextB,
  ...sanghiProfileRevisions,
  ...corpusExpansionIntegrityRevisions,
  ...corpusExpansion02,
  ...corpusExpansion01,
  ...continuousCorpusProfiles,
  ...batch02Profiles,
  ...sanghiProfiles,
];

export function getFullRecertificationAudit() {
  const candidateKeys = new Set<string>();
  const resolved = new Map<string, SanghiProfile>();

  for (const candidate of candidateProfiles) {
    const candidateKey = key(candidate);
    if (candidateKeys.has(candidateKey)) continue;
    candidateKeys.add(candidateKey);

    const movie = {
      id: -1,
      title: candidate.title,
      release_date: `${candidate.year}-01-01`,
    } as Movie;
    const current = getSanghiProfileForAudit(movie);
    if (current) resolved.set(key(current), current);
  }

  const currentProfiles = [...resolved.values()];
  const legacyHeld = currentProfiles.filter(
    (profile) =>
      (!profile.researchDossier || !profile.methodologyVersion.startsWith('2.0')) &&
      !isPublicationEligible(profile)
  );
  const legacyPublished = currentProfiles.filter(
    (profile) =>
      (!profile.researchDossier || !profile.methodologyVersion.startsWith('2.0')) &&
      isPublicationEligible(profile)
  );

  return {
    ...getCorpusStats(),
    legacyHeld: legacyHeld.map(({ title, year, language, methodologyVersion }) => ({
      title,
      year,
      language,
      methodologyVersion,
    })),
    legacyPublished: legacyPublished.map(({ title, year, language, methodologyVersion }) => ({
      title,
      year,
      language,
      methodologyVersion,
    })),
  };
}
