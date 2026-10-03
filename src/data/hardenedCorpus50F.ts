import type { SanghiProfile } from '../types/sanghi';
import { hardenedCorpus50FPart1 } from './hardenedCorpus50FPart1';
import { hardenedCorpus50FPart2 } from './hardenedCorpus50FPart2';
import { hardenedCorpus50FPart3 } from './hardenedCorpus50FPart3';
import { hardenedCorpus50FPart4 } from './hardenedCorpus50FPart4';
import { hardenedCorpus50FPart5 } from './hardenedCorpus50FPart5';

export const hardenedCorpus50F: SanghiProfile[] = [
  ...hardenedCorpus50FPart1,
  ...hardenedCorpus50FPart2,
  ...hardenedCorpus50FPart3,
  ...hardenedCorpus50FPart4,
  ...hardenedCorpus50FPart5,
];

if (hardenedCorpus50F.length !== 50) throw new Error(`Expected hardened 50F Tamil-only tranche to contain 50 profiles, got ${hardenedCorpus50F.length}`);

const normalizedTitleYears = hardenedCorpus50F.map((profile) =>
  `${profile.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim()}::${profile.year}`,
);
if (new Set(normalizedTitleYears).size !== hardenedCorpus50F.length) throw new Error('Hardened 50F Tamil-only tranche contains duplicate title/year records');
if (hardenedCorpus50F.some((profile) => profile.language !== 'Tamil')) throw new Error('Hardened 50F tranche must contain Tamil profiles only');
