import type { SanghiProfile } from '../types/sanghi';
import { hardenedCorpus50Part1 } from './hardenedCorpus50Part1';
import { hardenedCorpus50Part2 } from './hardenedCorpus50Part2';
import { hardenedCorpus50Part3 } from './hardenedCorpus50Part3';
import { hardenedCorpus50Part4 } from './hardenedCorpus50Part4';
import { hardenedCorpus50Part5 } from './hardenedCorpus50Part5';

export const hardenedCorpus50: SanghiProfile[] = [
  ...hardenedCorpus50Part1,
  ...hardenedCorpus50Part2,
  ...hardenedCorpus50Part3,
  ...hardenedCorpus50Part4,
  ...hardenedCorpus50Part5,
];

if (hardenedCorpus50.length !== 50) {
  throw new Error(`Expected hardened 50-film tranche, got ${hardenedCorpus50.length}`);
}
