import type { ResearchProbeId, SanghiProfile } from '../types/sanghi';
import { hardenedCorpus50DPart1 } from './hardenedCorpus50DPart1';
import { hardenedCorpus50DPart2 } from './hardenedCorpus50DPart2';
import { hardenedCorpus50DPart3 } from './hardenedCorpus50DPart3';
import { hardenedCorpus50DPart4 } from './hardenedCorpus50DPart4';
import { hardenedCorpus50DPart5 } from './hardenedCorpus50DPart5';
import { hardenedCorpus50DPart6 } from './hardenedCorpus50DPart6';
import { hardenedCorpus50DPart7 } from './hardenedCorpus50DPart7';

function normalizedKey(profile: Pick<SanghiProfile, 'title' | 'year'>) {
  return `${profile.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim()}::${profile.year}`;
}

// These two records were independently discovered by the 50D research pass but already
// have evidence-derived v2 profiles elsewhere in the corpus. Preserve the research files
// as history, exclude them from 50D publication, and replace them with genuinely new titles.
const priorV2Overlaps = new Set(['chhaava::2025', 'kantara chapter 1::2025']);

// These probes were initially stored as ambiguous because they were explicitly red-teamed.
// The title-specific evidence actually resolves the narrow publication question: none of
// these records establishes generalized community contempt or Hindu sacred ridicule.
// Keep the counter-reading in the dossier/red-team record while marking the probe itself clear.
const clearedNegativeValence: Record<string, ResearchProbeId[]> = {
  'dhurandhar::2025': ['community-contempt'],
  'retro::2025': ['sacred-religious-valence'],
  'thandel::2025': ['community-contempt'],
  'hari hara veera mallu::2025': ['community-contempt'],
  'l2 empuraan::2025': ['community-contempt'],
  'lokah chapter 1 chandra::2025': ['sacred-religious-valence'],
  'su from so::2025': ['sacred-religious-valence'],
  'dashavatar::2025': ['sacred-religious-valence'],
};

function applyResolvedProbeCalibration(profile: SanghiProfile): SanghiProfile {
  const probeIds = clearedNegativeValence[normalizedKey(profile)];
  if (!probeIds?.length || !profile.researchDossier) return profile;

  return {
    ...profile,
    researchDossier: {
      ...profile.researchDossier,
      riskProbes: profile.researchDossier.riskProbes.map((probe) =>
        probeIds.includes(probe.id)
          ? {
              ...probe,
              status: 'clear',
              materiality: 'low',
              summary: `${probe.summary} Red-team concern retained; title-specific evidence clears the narrow publication threshold.`,
            }
          : probe,
      ),
    },
  };
}

const researched50D = [
  ...hardenedCorpus50DPart1,
  ...hardenedCorpus50DPart2,
  ...hardenedCorpus50DPart3,
  ...hardenedCorpus50DPart4,
  ...hardenedCorpus50DPart5,
  ...hardenedCorpus50DPart6,
];

export const hardenedCorpus50D: SanghiProfile[] = [
  ...researched50D
    .filter((profile) => !priorV2Overlaps.has(normalizedKey(profile)))
    .map(applyResolvedProbeCalibration),
  ...hardenedCorpus50DPart7,
];

if (hardenedCorpus50D.length !== 50) {
  throw new Error(`Expected hardened 50D-film tranche, got ${hardenedCorpus50D.length}`);
}

const normalizedTitleYears = hardenedCorpus50D.map(normalizedKey);

if (new Set(normalizedTitleYears).size !== hardenedCorpus50D.length) {
  throw new Error('Hardened 50D tranche contains duplicate title/year records');
}
