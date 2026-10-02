import React from 'react';
import { History } from 'lucide-react';
import { certificationLabels, getProfileRevisionHistory } from '../services/sanghi';
import type { SanghiProfile } from '../types/sanghi';

export function RevisionHistory({ profile }: { profile: SanghiProfile }) {
  const versions = getProfileRevisionHistory(profile);

  return (
    <details className="rounded-[2rem] border border-white/10 bg-black/20 overflow-hidden">
      <summary className="cursor-pointer list-none p-5 md:p-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <History className="w-4 h-4 text-orange-200" />
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-text-secondary">Editorial revision history</p>
            <p className="mt-1 text-sm text-text-secondary">{versions.length} recorded version{versions.length === 1 ? '' : 's'}</p>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.16em] text-text-secondary">Open</span>
      </summary>
      <div className="border-t border-white/10 p-5 md:p-6 space-y-3">
        {versions.map((version, index) => (
          <div key={`${version.methodologyVersion}-${version.reviewedAt}-${index}`} className="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] font-black text-orange-200">v{version.methodologyVersion}</p>
              <p className="text-xs text-text-secondary mt-1">{version.reviewedAt}</p>
            </div>
            <div>
              <p className="font-black">{certificationLabels[version.status]}</p>
              <p className="text-sm text-text-secondary mt-1">{version.reasons[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}
