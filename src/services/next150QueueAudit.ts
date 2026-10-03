import { batch02Profiles } from '../data/batch02Profiles';
import { certificationNext150Queue, hindi50G, tamil50H, telugu50I } from '../data/certificationNext150Queue';
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
import { hardenedCorpus50E } from '../data/hardenedCorpus50E';
import { hardenedCorpus50F } from '../data/hardenedCorpus50F';
import { hardenedCorpusNextA } from '../data/hardenedCorpusNextA';
import { hardenedCorpusNextB } from '../data/hardenedCorpusNextB';
import { hinduLensCalibrationRevisions } from '../data/hinduLensCalibrationRevisions';
import { latestCertificationProfiles } from '../data/latestCertificationProfiles';
import { latestCertificationProfilesExtra } from '../data/latestCertificationProfilesExtra';
import { rangDeBasantiRevision } from '../data/rangDeBasantiRevision';
import { sanghiProfileRevisions } from '../data/sanghiProfileRevisions';
import { sanghiProfiles } from '../data/sanghiProfiles';
import type { SanghiProfile } from '../types/sanghi';

function normalizeTitle(value: string) {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
}

function key(value: { title: string; year: number }) {
  return `${normalizeTitle(value.title)}::${value.year}`;
}

const priorProfiles: SanghiProfile[] = [
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
  ...hardenedCorpus50F,
  ...hardenedCorpus50E,
  ...hardenedCorpus50D,
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

const priorKeys = new Set(priorProfiles.map(key));
const queueKeys = certificationNext150Queue.map(key);

const duplicateWithinQueue = queueKeys.filter((value, index) => queueKeys.indexOf(value) !== index);
const overlapsWithExistingCorpus = certificationNext150Queue
  .filter((candidate) => priorKeys.has(key(candidate)))
  .map((candidate) => ({ ...candidate, key: key(candidate) }));

const counts = {
  Hindi: hindi50G.length,
  Tamil: tamil50H.length,
  Telugu: telugu50I.length,
};

const wrongCohortLanguage = certificationNext150Queue.filter((candidate) => {
  if (candidate.cohort === '50G') return candidate.language !== 'Hindi';
  if (candidate.cohort === '50H') return candidate.language !== 'Tamil';
  return candidate.language !== 'Telugu';
});

export const next150QueueAudit = {
  total: certificationNext150Queue.length,
  unique: new Set(queueKeys).size,
  counts,
  duplicateWithinQueue,
  overlapsWithExistingCorpus,
  wrongCohortLanguage,
  candidates: certificationNext150Queue,
};
