import React from 'react';
import { AlertTriangle, HelpCircle, Scale, ShieldCheck } from 'lucide-react';
import type { SanghiProfile } from '../types/sanghi';
import { certificationLabels, topPositiveDimensions } from '../services/sanghi';
import { isPublicationEligible } from '../services/editorialGate';
import { getCertificationVisual } from './certificationVisuals';

interface SanghiBadgeProps {
  profile: SanghiProfile;
  compact?: boolean;
}

export function SanghiBadge({ profile, compact = false }: SanghiBadgeProps) {
  const top = topPositiveDimensions(profile, 3);
  const eligible = isPublicationEligible(profile);
  const Icon = profile.status === 'certified' ? ShieldCheck : profile.status === 'mixed' ? Scale : HelpCircle;
  const visual = getCertificationVisual(profile.status);
  const reviewLabel = profile.reviewDepth ? profile.reviewDepth.replace('-', ' ') : 'calibration pass';
  const verdictLabel = eligible ? certificationLabels[profile.status] : `Provisional · ${certificationLabels[profile.status]}`;

  return (
    <div className={`relative rounded-[1.75rem] border ${visual.panel} ${compact ? 'p-5' : 'p-6'} overflow-hidden`}>
      <div className={`absolute inset-y-0 left-0 w-1.5 ${visual.accentDot}`} aria-hidden="true" />
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-text-secondary">Culture Check verdict</p>
            <div className="flex items-center gap-3">
              <span className={`w-11 h-11 rounded-full border flex items-center justify-center ${visual.icon}`}>
                {profile.status === 'certified' && eligible ? (
                  <span className="text-xl leading-none" aria-hidden="true">🪷</span>
                ) : (
                  <Icon className="w-4 h-4" />
                )}
              </span>
              <div>
                <p className={`text-xl md:text-2xl font-black tracking-tight ${visual.heading}`}>{verdictLabel}</p>
                {profile.status === 'certified' && eligible && (
                  <p className="text-[10px] font-bold text-orange-200 mt-0.5">Called an insult. Worn as a badge.</p>
                )}
                <p className="text-[10px] uppercase tracking-[0.18em] text-text-secondary font-bold mt-1">
                  {profile.confidence} confidence · {reviewLabel}
                </p>
              </div>
            </div>
          </div>

          {top.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              {top.map(item => (
                <span key={item.key} className="px-3 py-1.5 rounded-full border border-white/10 bg-black/20 text-[9px] uppercase tracking-[0.14em] font-black text-text-secondary">
                  {item.label} <span className="text-text-primary">{item.value}/5</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {!eligible && (
          <div className="rounded-2xl border border-amber-200/15 bg-amber-300/[0.06] px-4 py-3 text-xs leading-relaxed text-text-secondary">
            Calibration record. This verdict has not yet passed the editorial publication gate.
          </div>
        )}

        {compact && (
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p className="text-[9px] font-black uppercase tracking-[0.24em] text-text-secondary">Why this result</p>
            <div className="space-y-2">
              {profile.reasons.slice(0, 2).map((reason, index) => (
                <div key={reason} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                  <span className="text-[9px] font-black pt-1 text-text-primary/60">0{index + 1}</span>
                  <p>{reason}</p>
                </div>
              ))}
            </div>

            {profile.integrityFlags.length > 0 && (
              <div className="mt-3 rounded-2xl border border-white/10 bg-black/20 p-3.5 flex gap-3">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-200" />
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-amber-100">Narrative integrity · {profile.integrityFlags.length} finding{profile.integrityFlags.length === 1 ? '' : 's'}</p>
                  <p className="text-xs leading-relaxed text-text-secondary">{profile.integrityFlags[0].summary}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
