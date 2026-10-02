import type { SanghiProfile } from '../types/sanghi';
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
const duplicatedInsideBatch = normalizedBatchTitles.find(
  (title, index) => normalizedBatchTitles.indexOf(title) !== index,
);

if (duplicatedInsideBatch) {
  throw new Error(`Duplicate title inside next hardened tranche: ${duplicatedInsideBatch}`);
}
