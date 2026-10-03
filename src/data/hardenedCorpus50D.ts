import type { SanghiProfile } from '../types/sanghi';
import { hardenedCorpus50DPart1 } from './hardenedCorpus50DPart1';
import { hardenedCorpus50DPart2 } from './hardenedCorpus50DPart2';
import { hardenedCorpus50DPart3 } from './hardenedCorpus50DPart3';
import { hardenedCorpus50DPart4 } from './hardenedCorpus50DPart4';
import { hardenedCorpus50DPart5 } from './hardenedCorpus50DPart5';
import { hardenedCorpus50DPart6 } from './hardenedCorpus50DPart6';

export const hardenedCorpus50D: SanghiProfile[] = [
  ...hardenedCorpus50DPart1,
  ...hardenedCorpus50DPart2,
  ...hardenedCorpus50DPart3,
  ...hardenedCorpus50DPart4,
  ...hardenedCorpus50DPart5,
  ...hardenedCorpus50DPart6,
];

if (hardenedCorpus50D.length !== 50) {
  throw new Error(`Expected hardened 50D-film tranche, got ${hardenedCorpus50D.length}`);
}

const normalizedTitleYears = hardenedCorpus50D.map((profile) =>
  `${profile.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim()}::${profile.year}`,
);

if (new Set(normalizedTitleYears).size !== hardenedCorpus50D.length) {
  throw new Error('Hardened 50D tranche contains duplicate title/year records');
}
