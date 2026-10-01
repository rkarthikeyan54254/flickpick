import React from 'react';
import { ShieldCheck, HelpCircle, Scale } from 'lucide-react';
import type { SanghiProfile } from '../types/sanghi';
import { certificationLabels, topPositiveDimensions } from '../services/sanghi';

interface SanghiBadgeProps {
  profile: SanghiProfile;
  compact?: boolean;
}

export function SanghiBadge({ profile, compact = false }: SanghiBadgeProps) {
  const top = topPositiveDimensions(profile, 3);
  const Icon = profile.status === 'certified' ? ShieldCheck : profile.status === 'mixed' ? Scale : HelpCircle;

  return (
    <div className={`rounded-2xl border border-orange-300/20 bg-orange-400/10 ${compact ? 'p-4' : 'p-5'} space-y-3`}>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-orange-300">
          <Icon className="w-5 h-5" />
          <span className="font-black uppercase tracking-widest text-xs">{certificationLabels[profile.status]}</span>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">
          {profile.confidence} confidence
        </span>
      </div>
      {top.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {top.map(item => (
            <span key={item.key} className="px-3 py-1 rounded-full bg-black/20 text-[10px] uppercase tracking-widest font-black text-text-secondary">
              {item.label} {item.value}/5
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
