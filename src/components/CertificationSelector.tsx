import React from 'react';
import type { CertificationStatus } from '../types/sanghi';
import { certificationLabels } from '../services/sanghi';
import { getCertificationVisual } from './certificationVisuals';

export type CertificationFilter = 'all' | 'certified' | 'reviewed';

interface CertificationSelectorProps {
  value: CertificationFilter;
  onChange: (value: CertificationFilter) => void;
}

const options: Array<{ value: CertificationFilter; label: string; activeClass: string }> = [
  { value: 'all', label: 'All movies', activeClass: 'border-white/25 bg-white/10 text-text-primary' },
  { value: 'certified', label: '🪷 Sanghi Certified', activeClass: 'border-orange-300/70 bg-orange-400/25 text-orange-50 shadow-lg shadow-orange-500/15' },
  { value: 'reviewed', label: 'Reviewed only', activeClass: 'border-sky-300/35 bg-sky-300/10 text-sky-100' }
];

const verdictKey: CertificationStatus[] = ['certified', 'mixed', 'neutral', 'not-certified'];

export function CertificationSelector({ value, onChange }: CertificationSelectorProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap justify-center gap-2">
        {options.map(option => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`border px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
              value === option.value
                ? option.activeClass
                : 'border-white/10 chic-glass text-text-secondary hover:bg-white/5'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5" aria-label="Culture Check verdict color key">
        <span className="mr-1 text-[8px] font-black uppercase tracking-[0.16em] text-text-secondary">Verdict colors</span>
        {verdictKey.map((status) => {
          const visual = getCertificationVisual(status);
          return (
            <span key={status} className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.1em] ${visual.pill}`}>
              {status === 'certified' ? (
                <span aria-hidden="true">🪷</span>
              ) : (
                <span className={`w-1.5 h-1.5 rounded-full ${visual.accentDot}`} aria-hidden="true" />
              )}
              {certificationLabels[status]}
            </span>
          );
        })}
      </div>
    </div>
  );
}
