import { languageCertificationHindi50 } from './languageCertificationHindi50';
import { languageCertificationTamil50 } from './languageCertificationTamil50';
import { languageCertificationTelugu50 } from './languageCertificationTelugu50';

// Keep the review batch contract exact even if an authoring file temporarily carries a spare candidate.
export const nextHindiCertification50 = languageCertificationHindi50.slice(0, 50);
export const nextTamilCertification50 = languageCertificationTamil50.slice(0, 50);
export const nextTeluguCertification50 = languageCertificationTelugu50.slice(0, 50);

export const languageCertificationNext150 = [
  ...nextHindiCertification50,
  ...nextTamilCertification50,
  ...nextTeluguCertification50,
];

export const languageCertificationNext150Counts = {
  Hindi: nextHindiCertification50.length,
  Tamil: nextTamilCertification50.length,
  Telugu: nextTeluguCertification50.length,
  total: languageCertificationNext150.length,
};
