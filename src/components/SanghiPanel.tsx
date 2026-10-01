import React from 'react';
import { AlertTriangle, ExternalLink, ShieldCheck } from 'lucide-react';
import type { SanghiProfile } from '../types/sanghi';
import { certificationLabels, dimensionLabels } from '../services/sanghi';

interface SanghiPanelProps {
  profile: SanghiProfile;
}

export function SanghiPanel({ profile }: SanghiPanelProps) {
  const dimensions = Object.entries(profile.dimensions).filter(([, value]) => typeof value === 'number');

  return (
    <section className="chic-glass rounded-[2.5rem] p-8 md:p-10 space-y-8 border border-orange-300/20">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-orange-300">
            <ShieldCheck className="w-6 h-6" />
            <p className="text-xs font-black uppercase tracking-[0.25em]">Sanghi Certified · Beta</p>
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter">{certificationLabels[profile.status]}</h3>
          <p className="text-text-secondary font-medium">
            {profile.confidence.toUpperCase()} confidence · methodology v{profile.methodologyVersion} · reviewed {profile.reviewedAt}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.tags.map(tag => (
            <span key={tag} className="px-3 py-2 rounded-full bg-orange-400/10 text-orange-200 text-[10px] font-black uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {dimensions.map(([key, rawValue]) => {
          const value = rawValue as number;
          const isRisk = key === 'contemptRisk';
          return (
            <div key={key} className="rounded-2xl bg-black/20 p-4 space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-text-secondary font-black">{dimensionLabels[key] || key}</p>
              <div className="flex items-end gap-1">
                <span className={`text-2xl font-black ${isRisk && value >= 3 ? 'text-orange-300' : 'text-text-primary'}`}>{value}</span>
                <span className="text-xs text-text-secondary pb-1">/5</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-black uppercase tracking-widest">Why this result</h4>
        <ul className="space-y-3 text-text-secondary text-lg leading-relaxed">
          {profile.reasons.map(reason => <li key={reason}>• {reason}</li>)}
        </ul>
      </div>

      {profile.integrityFlags.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-glass-border">
          <h4 className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-300" /> Narrative integrity
          </h4>
          <div className="space-y-3">
            {profile.integrityFlags.map(flag => (
              <div key={`${flag.type}-${flag.summary}`} className="rounded-2xl bg-black/20 p-5">
                <div className="flex flex-wrap gap-2 items-center mb-2">
                  <span className="text-xs font-black uppercase tracking-widest">{flag.type}</span>
                  <span className="text-[10px] uppercase tracking-widest text-orange-300 font-black">{flag.status}</span>
                </div>
                <p className="text-text-secondary leading-relaxed">{flag.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {profile.evidence.length > 0 && (
        <details className="pt-6 border-t border-glass-border group">
          <summary className="cursor-pointer text-sm font-black uppercase tracking-widest text-text-secondary group-open:text-text-primary">
            Evidence notes ({profile.evidence.length})
          </summary>
          <div className="mt-5 space-y-4">
            {profile.evidence.map((item, index) => (
              <div key={`${item.source}-${index}`} className="rounded-2xl bg-black/20 p-5 space-y-2">
                <p className="text-xs uppercase tracking-widest font-black text-orange-200">{item.kind} · {item.source}</p>
                <p className="text-text-secondary leading-relaxed">{item.claim}</p>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-orange-200">
                    Source <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </details>
      )}

      <p className="text-[11px] text-text-secondary leading-relaxed border-t border-glass-border pt-6">
        This is a worldview/discovery signal, not a quality rating. Certification uses an explicitly India-grounded editorial methodology and separates factual findings, interpretation and inferred intent.
      </p>
    </section>
  );
}
