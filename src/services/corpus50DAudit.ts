import { batch02Profiles } from '../data/batch02Profiles';
import { chakDeIndiaRevision } from '../data/chakDeIndiaRevision';
import { continuousCorpusProfiles } from '../data/continuousCorpusProfiles';
import { corpusExpansion01 } from '../data/corpusExpansion01';
import { corpusExpansion02 } from '../data/corpusExpansion02';
import { corpusExpansionIntegrityRevisions } from '../data/corpusExpansionIntegrityRevisions';
import { editorialIntegrityRevisions } from '../data/editorialIntegrityRevisions';
import { fullRecertificationV2Batch01 } from '../data/fullRecertificationV2Batch01';
import { fullRecertificationV2Batch02 } from '../data/fullRecertificationV2Batch02';
import { fullRecertificationV2Batch03 } from '../data/fullRecertificationV2Batch03';
import { fullRecertificationV2Batch04 } from '../data/fullRecertificationV2Batch04';
import { fullRecertificationV2Batch05 } from '../data/fullRecertificationV2Batch05';
import { fullRecertificationV2OwnerExceptions } from '../data/fullRecertificationV2OwnerExceptions';
import { fullRecertificationV2Overrides } from '../data/fullRecertificationV2Overrides';
import { fullRecertificationV2Residual } from '../data/fullRecertificationV2Residual';
import { fullRecertificationV2Worker2Batch01 } from '../data/fullRecertificationV2Worker2Batch01';
import { fullRecertificationV2Worker3Batch01 } from '../data/fullRecertificationV2Worker3Batch01';
import { fullRecertificationV2Worker3Batch02 } from '../data/fullRecertificationV2Worker3Batch02';
import { fullRecertificationV2Worker4Batch01 } from '../data/fullRecertificationV2Worker4Batch01';
import { fullRecertificationV2Worker4Batch02 } from '../data/fullRecertificationV2Worker4Batch02';
import { fullRecertificationV2Worker4Batch03 } from '../data/fullRecertificationV2Worker4Batch03';
import { hardenedCorpus50 } from '../data/hardenedCorpus50';
import { hardenedCorpus50B } from '../data/hardenedCorpus50B';
import { hardenedCorpus50C } from '../data/hardenedCorpus50C';
import { hardenedCorpus50D } from '../data/hardenedCorpus50D';
import { hardenedCorpusNextA } from '../data/hardenedCorpusNextA';
import { hardenedCorpusNextB } from '../data/hardenedCorpusNextB';
import { hinduLensCalibrationRevisions } from '../data/hinduLensCalibrationRevisions';
import { latestCertificationProfiles } from '../data/latestCertificationProfiles';
import { latestCertificationProfilesExtra } from '../data/latestCertificationProfilesExtra';
import { rangDeBasantiRevision } from '../data/rangDeBasantiRevision';
import { sanghiProfileRevisions } from '../data/sanghiProfileRevisions';
import { sanghiProfiles } from '../data/sanghiProfiles';
import type { SanghiProfile } from '../types/sanghi';
import { isPublicationEligible } from './editorialGate';

function normalizeTitle(value: string) {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
}

function key(profile: Pick<SanghiProfile, 'title' | 'year'>) {
  return `${normalizeTitle(profile.title)}::${profile.year}`;
}

function isV2(profile: SanghiProfile) {
  return Boolean(profile.researchDossier) && profile.methodologyVersion.startsWith('2.0');
}

const pre50DProfiles: SanghiProfile[] = [
  ...hinduLensCalibrationRevisions,
  ...fullRecertificationV2Overrides,
  ...fullRecertificationV2OwnerExceptions,
  ...fullRecertificationV2Residual,
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

const previousV2Keys = new Set(pre50DProfiles.filter(isV2).map(key));
const keys = hardenedCorpus50D.map(key);
const duplicateWithin = keys.filter((value, index) => keys.indexOf(value) !== index);
const overlaps = hardenedCorpus50D.filter((profile) => previousV2Keys.has(key(profile))).map(key);
const notPublicationEligible = hardenedCorpus50D.filter((profile) => !isPublicationEligible(profile)).map(key);
const wrongLens = hardenedCorpus50D
  .filter((profile) => profile.researchDossier?.editorialLens !== 'bharatiya-hindu-civilizational')
  .map(key);
const incompleteDossiers = hardenedCorpus50D
  .filter((profile) => !profile.researchDossier?.complete || profile.researchDossier?.riskProbes.length !== 11)
  .map(key);

const mandatory = new Set(['dhurandhar::2025', 'dhurandhar the revenge::2026']);
const missingMandatory = [...mandatory].filter((required) => !new Set(keys).has(required));

const verdictCounts = hardenedCorpus50D.reduce<Record<string, number>>((counts, profile) => {
  counts[profile.status] = (counts[profile.status] || 0) + 1;
  return counts;
}, {});

export const corpus50DAudit = {
  total: hardenedCorpus50D.length,
  unique: new Set(keys).size,
  duplicateWithin,
  overlaps,
  notPublicationEligible,
  wrongLens,
  incompleteDossiers,
  missingMandatory,
  verdictCounts,
  titles: hardenedCorpus50D.map((profile) => ({ title: profile.title, year: profile.year, status: profile.status })),
};
