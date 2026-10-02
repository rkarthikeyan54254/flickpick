import type { SanghiProfile } from '../types/sanghi';
import { hardenedCorpus50CPart1 } from './hardenedCorpus50CPart1';
import { hardenedCorpus50CPart2 } from './hardenedCorpus50CPart2';
import { hardenedCorpus50CPart3 } from './hardenedCorpus50CPart3';
import { hardenedCorpus50CPart4 } from './hardenedCorpus50CPart4';
import { hardenedCorpus50CPart5 } from './hardenedCorpus50CPart5';

export const hardenedCorpus50C: SanghiProfile[] = [
  ...hardenedCorpus50CPart1,
  ...hardenedCorpus50CPart2,
  ...hardenedCorpus50CPart3,
  ...hardenedCorpus50CPart4,
  ...hardenedCorpus50CPart5,
];

if (hardenedCorpus50C.length !== 50) {
  throw new Error(`Expected hardened 50C-film tranche, got ${hardenedCorpus50C.length}`);
}

const normalizedTitles = hardenedCorpus50C.map((profile) =>
  profile.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim(),
);

if (new Set(normalizedTitles).size !== hardenedCorpus50C.length) {
  throw new Error('Hardened 50C tranche contains duplicate titles');
}
