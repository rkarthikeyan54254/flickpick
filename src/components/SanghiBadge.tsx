import React from 'react';
import { AlertTriangle, HelpCircle, Scale, ShieldCheck } from 'lucide-react';
import type { SanghiProfile } from '../types/sanghi';
import { certificationLabels, topPositiveDimensions } from '../services/sanghi';

interface SanghiBadgeProps {
  profile: SanghiProfile;
  compact?: boolean;
}

export function SanghiBadge({ profile, compact = false }: SanghiBadgeProps) {
  const top = topPositiveDimensions(profile, 3);
  const Icon = profile.status === 'certified' ? ShieldCheck : profile.status === 'mixed' ? Scale : HelpCircle;
  const tone = profile.status === 'certified'
    ? 'border-orange-300/25 bg-gradient-to-br from-orange-400/[0.14] via-white/[0.03] to-transparent'
    : profile.status === 'mixed'
      ? 'border-amber-200/20 bg-gradient-to-br from-amber-300/[0.10] via-white/[0.03] to-transparent'
      : 'border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent';

  return (
    <div className={`rounded-[1.75rem] border ${tone} ${compact ? 'p-5' : 'p-6'} overflow-hidden`}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-text-secondary">Editorial lens</p>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full border border-white/10 bg-black/20 flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </span>
              <div>
                <p className="text-lg md:text-xl font-black tracking-tight">{certificationLabels[profile.status]}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-text-secondary font-bold">
                  {profile.confidence} confidence{profile.reviewDepth ? ` · ${profile.reviewDepth.replace('-', ' ')}` : ''}
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

        {compact && (
          <div className="border-t border-white/10 pt-4 space-y-3">
            <p className="text-[9px] font-black uppercase tracking-[0.24em] text-text-secondary">Why you’re seeing this</p>
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
