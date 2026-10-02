import type { SanghiProfile } from '../types/sanghi';
import { batch02Profiles } from './batch02Profiles';
import { continuousCorpusProfiles } from './continuousCorpusProfiles';
import { corpusExpansion01 } from './corpusExpansion01';
import { corpusExpansion02 } from './corpusExpansion02';
import { hardenedCorpus50 } from './hardenedCorpus50';
import { hardenedCorpusNextA } from './hardenedCorpusNextA';
import { hardenedCorpusNextB } from './hardenedCorpusNextB';
import { sanghiProfiles } from './sanghiProfiles';
import { sanghiProfileRevisions } from './sanghiProfileRevisions';
import { hardenedCorpus50BPart1 } from './hardenedCorpus50BPart1';
import { hardenedCorpus50BPart2 } from './hardenedCorpus50BPart2';
import { hardenedCorpus50BPart3 } from './hardenedCorpus50BPart3';
import { hardenedCorpus50BPart4 } from './hardenedCorpus50BPart4';
import { hardenedCorpus50BPart5 } from './hardenedCorpus50BPart5';

function normalizeTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export const hardenedCorpus50B: SanghiProfile[] = [
  ...hardenedCorpus50BPart1,
  ...hardenedCorpus50BPart2,
  ...hardenedCorpus50BPart3,
  ...hardenedCorpus50BPart4,
  ...hardenedCorpus50BPart5,
];

if (hardenedCorpus50B.length !== 50) {
  throw new Error(`Expected next hardened 50-film tranche, got ${hardenedCorpus50B.length}`);
}

const normalizedBatchTitles = hardenedCorpus50B.map((profile) => normalizeTitle(profile.title));
const duplicatedInsideBatch = normalizedBatchTitles.find((title, index) => normalizedBatchTitles.indexOf(title) !== index);
if (duplicatedInsideBatch) {
  throw new Error(`Duplicate title inside next hardened tranche: ${duplicatedInsideBatch}`);
}

const priorProfiles = [
  ...hardenedCorpus50,
  ...hardenedCorpusNextA,
  ...hardenedCorpusNextB,
  ...corpusExpansion01,
  ...corpusExpansion02,
  ...continuousCorpusProfiles,
  ...batch02Profiles,
  ...sanghiProfileRevisions,
  ...sanghiProfiles,
];
const priorTitles = new Set(priorProfiles.map((profile) => normalizeTitle(profile.title)));
const overlap = hardenedCorpus50B.find((profile) => priorTitles.has(normalizeTitle(profile.title)));
if (overlap) {
  throw new Error(`Next hardened tranche duplicates an existing corpus title: ${overlap.title}`);
}
