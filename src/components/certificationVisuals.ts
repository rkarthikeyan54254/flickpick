import type { CertificationStatus } from '../types/sanghi';

export interface CertificationVisual {
  pill: string;
  panel: string;
  icon: string;
  heading: string;
  card: string;
  accentDot: string;
}

export const certificationVisuals: Record<CertificationStatus, CertificationVisual> = {
  certified: {
    pill: 'border-orange-300/70 bg-orange-400/25 text-orange-50 shadow-lg shadow-orange-500/20',
    panel: 'border-orange-300/40 bg-gradient-to-br from-orange-400/[0.20] via-orange-300/[0.06] to-transparent shadow-2xl shadow-orange-500/10',
    icon: 'border-orange-200/60 bg-orange-400/20 text-orange-100',
    heading: 'text-orange-100',
    card: 'border-orange-300/40 ring-1 ring-orange-400/20 shadow-2xl shadow-orange-500/10',
    accentDot: 'bg-orange-400',
  },
  mixed: {
    pill: 'border-amber-300/40 bg-amber-300/10 text-amber-100',
    panel: 'border-amber-300/30 bg-gradient-to-br from-amber-300/[0.12] via-white/[0.025] to-transparent',
    icon: 'border-amber-200/40 bg-amber-300/10 text-amber-100',
    heading: 'text-amber-100',
    card: 'border-amber-300/20',
    accentDot: 'bg-amber-300',
  },
  neutral: {
    pill: 'border-sky-300/30 bg-sky-300/10 text-sky-100',
    panel: 'border-sky-300/25 bg-gradient-to-br from-sky-300/[0.09] via-white/[0.02] to-transparent',
    icon: 'border-sky-200/30 bg-sky-300/10 text-sky-100',
    heading: 'text-sky-100',
    card: 'border-sky-300/20',
    accentDot: 'bg-sky-300',
  },
  'not-certified': {
    pill: 'border-rose-300/40 bg-rose-400/10 text-rose-100',
    panel: 'border-rose-300/30 bg-gradient-to-br from-rose-400/[0.11] via-white/[0.02] to-transparent',
    icon: 'border-rose-200/30 bg-rose-400/10 text-rose-100',
    heading: 'text-rose-100',
    card: 'border-rose-300/20',
    accentDot: 'bg-rose-400',
  },
  unrated: {
    pill: 'border-white/20 bg-white/[0.05] text-text-secondary',
    panel: 'border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent',
    icon: 'border-white/10 bg-white/[0.04] text-text-secondary',
    heading: 'text-text-primary',
    card: 'border-white/10',
    accentDot: 'bg-white/40',
  },
};

export function getCertificationVisual(status: CertificationStatus) {
  return certificationVisuals[status];
}
