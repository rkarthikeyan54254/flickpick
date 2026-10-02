import React from 'react';
import type { CertificationStatus } from '../types/sanghi';
import { certificationLabels } from '../services/sanghi';
import { getCertificationVisual } from './certificationVisuals';

const statuses: CertificationStatus[] = ['certified', 'mixed', 'neutral', 'not-certified'];

export function CertificationLegend() {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Culture Check verdict color key">
      <span className="text-[9px] font-black uppercase tracking-[0.18em] text-text-secondary mr-1">Verdict key</span>
      {statuses.map((status) => {
        const visual = getCertificationVisual(status);
        return (
          <span
            key={status}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] ${visual.pill}`}
          >
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
  );
}
