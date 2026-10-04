import type { SanghiProfile } from '../types/sanghi';
import { languageCertificationNext150 } from './languageCertificationNext150';
import { languageCertificationHindi50B } from './languageCertificationHindi50B';
import { languageCertificationTamil50B } from './languageCertificationTamil50B';
import { languageCertificationTelugu50B } from './languageCertificationTelugu50B';

function normalizedKey(profile: Pick<SanghiProfile, 'title' | 'year'>) {
  return `${profile.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim()}::${profile.year}`;
}

function assertLanguageBatch(name: string, language: string, batch: SanghiProfile[]) {
  if (batch.length !== 50) throw new Error(`Expected ${name} tranche of 50, got ${batch.length}`);
  const wrongLanguage = batch.filter((profile) => profile.language !== language);
  if (wrongLanguage.length) throw new Error(`${name} tranche contains ${wrongLanguage.length} non-${language} records`);
  const keys = batch.map(normalizedKey);
  if (new Set(keys).size !== keys.length) throw new Error(`${name} tranche contains duplicate title/year records`);
}

assertLanguageBatch('Hindi B', 'Hindi', languageCertificationHindi50B);
assertLanguageBatch('Tamil B', 'Tamil', languageCertificationTamil50B);
assertLanguageBatch('Telugu B', 'Telugu', languageCertificationTelugu50B);

export const languageCertificationNext150B: SanghiProfile[] = [
  ...languageCertificationHindi50B,
  ...languageCertificationTamil50B,
  ...languageCertificationTelugu50B,
];

if (languageCertificationNext150B.length !== 150) {
  throw new Error(`Expected second 150-film language expansion, got ${languageCertificationNext150B.length}`);
}

const trancheBKeys = languageCertificationNext150B.map(normalizedKey);
if (new Set(trancheBKeys).size !== trancheBKeys.length) {
  throw new Error('Second 150-film expansion contains cross-language duplicate title/year records');
}

const priorKeys = new Set(languageCertificationNext150.map(normalizedKey));
const overlaps = languageCertificationNext150B.filter((profile) => priorKeys.has(normalizedKey(profile)));
if (overlaps.length) {
  throw new Error(`Second 150-film expansion overlaps tranche A: ${overlaps.map(normalizedKey).join(', ')}`);
}
