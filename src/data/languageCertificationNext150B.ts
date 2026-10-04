import type { SanghiProfile } from '../types/sanghi';
import { sanghiProfiles } from './sanghiProfiles';
import { sanghiProfileRevisions } from './sanghiProfileRevisions';
import { batch02Profiles } from './batch02Profiles';
import { editorialIntegrityRevisions } from './editorialIntegrityRevisions';
import { hinduLensCalibrationRevisions } from './hinduLensCalibrationRevisions';
import { fullRecertificationV2Batch01 } from './fullRecertificationV2Batch01';
import { fullRecertificationV2Batch02 } from './fullRecertificationV2Batch02';
import { fullRecertificationV2Batch03 } from './fullRecertificationV2Batch03';
import { fullRecertificationV2Batch04 } from './fullRecertificationV2Batch04';
import { fullRecertificationV2Batch05 } from './fullRecertificationV2Batch05';
import { fullRecertificationV2OwnerExceptions } from './fullRecertificationV2OwnerExceptions';
import { fullRecertificationV2Overrides } from './fullRecertificationV2Overrides';
import { fullRecertificationV2Residual } from './fullRecertificationV2Residual';
import { fullRecertificationV2Worker2Batch01 } from './fullRecertificationV2Worker2Batch01';
import { fullRecertificationV2Worker3Batch01 } from './fullRecertificationV2Worker3Batch01';
import { fullRecertificationV2Worker3Batch02 } from './fullRecertificationV2Worker3Batch02';
import { fullRecertificationV2Worker4Batch01 } from './fullRecertificationV2Worker4Batch01';
import { fullRecertificationV2Worker4Batch02 } from './fullRecertificationV2Worker4Batch02';
import { fullRecertificationV2Worker4Batch03 } from './fullRecertificationV2Worker4Batch03';
import { corpusExpansion01 } from './corpusExpansion01';
import { corpusExpansion02 } from './corpusExpansion02';
import { corpusExpansionIntegrityRevisions } from './corpusExpansionIntegrityRevisions';
import { continuousCorpusProfiles } from './continuousCorpusProfiles';
import { hardenedCorpusNextA } from './hardenedCorpusNextA';
import { hardenedCorpusNextB } from './hardenedCorpusNextB';
import { hardenedCorpus50 } from './hardenedCorpus50';
import { hardenedCorpus50B } from './hardenedCorpus50B';
import { hardenedCorpus50C } from './hardenedCorpus50C';
import { hardenedCorpus50D } from './hardenedCorpus50D';
import { hardenedCorpus50E } from './hardenedCorpus50E';
import { hardenedCorpus50F } from './hardenedCorpus50F';
import { latestCertificationProfiles } from './latestCertificationProfiles';
import { pakistanTerrorPerspectiveRevisions } from './pakistanTerrorPerspectiveRevisions';
import { languageCertificationNext150 } from './languageCertificationNext150';
import { languageCertificationHindi50B } from './languageCertificationHindi50B';
import { languageCertificationTamil50B } from './languageCertificationTamil50B';
import { languageCertificationTelugu50B } from './languageCertificationTelugu50B';
import {
  languageCertificationHindiBReplacements,
  languageCertificationTamilBReplacements,
  languageCertificationTeluguBReplacements,
} from './languageCertificationBReplacements';

function normalizedKey(profile: Pick<SanghiProfile, 'title' | 'year'>) {
  return `${profile.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim()}::${profile.year}`;
}

const existingCorpus: SanghiProfile[] = [
  ...pakistanTerrorPerspectiveRevisions,
  ...hinduLensCalibrationRevisions,
  ...fullRecertificationV2Overrides,
  ...fullRecertificationV2OwnerExceptions,
  ...fullRecertificationV2Residual,
  ...fullRecertificationV2Worker2Batch01,
  ...fullRecertificationV2Worker3Batch01,
  ...fullRecertificationV2Worker3Batch02,
  ...fullRecertificationV2Worker4Batch01,
  ...fullRecertificationV2Worker4Batch02,
  ...fullRecertificationV2Worker4Batch03,
  ...fullRecertificationV2Batch05,
  ...fullRecertificationV2Batch04,
  ...fullRecertificationV2Batch03,
  ...fullRecertificationV2Batch02,
  ...fullRecertificationV2Batch01,
  ...editorialIntegrityRevisions,
  ...latestCertificationProfiles,
  ...hardenedCorpus50F,
  ...hardenedCorpus50E,
  ...hardenedCorpus50D,
  ...hardenedCorpus50C,
  ...hardenedCorpus50B,
  ...hardenedCorpus50,
  ...hardenedCorpusNextA,
  ...hardenedCorpusNextB,
  ...corpusExpansionIntegrityRevisions,
  ...corpusExpansion02,
  ...corpusExpansion01,
  ...continuousCorpusProfiles,
  ...batch02Profiles,
  ...sanghiProfileRevisions,
  ...sanghiProfiles,
  ...languageCertificationNext150,
];

const priorKeys = new Set(existingCorpus.map(normalizedKey));

function selectNew(
  name: string,
  language: string,
  candidates: SanghiProfile[],
  replacements: SanghiProfile[],
) {
  const retained = candidates.filter((profile) => !priorKeys.has(normalizedKey(profile)));
  const selected = [...retained, ...replacements];
  if (selected.length !== 50) {
    throw new Error(`${name} active tranche expected 50 after overlap replacement, got ${selected.length} (${retained.length} retained + ${replacements.length} replacements)`);
  }
  const wrongLanguage = selected.filter((profile) => profile.language !== language);
  if (wrongLanguage.length) throw new Error(`${name} active tranche contains ${wrongLanguage.length} non-${language} records`);
  const keys = selected.map(normalizedKey);
  if (new Set(keys).size !== keys.length) throw new Error(`${name} active tranche contains duplicate title/year records`);
  const overlaps = selected.filter((profile) => priorKeys.has(normalizedKey(profile)));
  if (overlaps.length) {
    throw new Error(`${name} replacements still overlap existing corpus: ${overlaps.map(normalizedKey).join(', ')}`);
  }
  return selected;
}

export const languageCertificationHindi50BActive = selectNew(
  'Hindi B', 'Hindi', languageCertificationHindi50B, languageCertificationHindiBReplacements,
);
export const languageCertificationTamil50BActive = selectNew(
  'Tamil B', 'Tamil', languageCertificationTamil50B, languageCertificationTamilBReplacements,
);
export const languageCertificationTelugu50BActive = selectNew(
  'Telugu B', 'Telugu', languageCertificationTelugu50B, languageCertificationTeluguBReplacements,
);

export const languageCertificationNext150B: SanghiProfile[] = [
  ...languageCertificationHindi50BActive,
  ...languageCertificationTamil50BActive,
  ...languageCertificationTelugu50BActive,
];

if (languageCertificationNext150B.length !== 150) {
  throw new Error(`Expected second 150-film language expansion, got ${languageCertificationNext150B.length}`);
}

const trancheBKeys = languageCertificationNext150B.map(normalizedKey);
if (new Set(trancheBKeys).size !== trancheBKeys.length) {
  throw new Error('Second 150-film expansion contains cross-language duplicate title/year records');
}
