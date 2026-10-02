import React from 'react';
import { AlertTriangle, ExternalLink, HelpCircle, Scale, ShieldCheck } from 'lucide-react';
import type { SanghiProfile } from '../types/sanghi';
import { certificationLabels, dimensionLabels } from '../services/sanghi';
import { evaluateEditorialGate } from '../services/editorialGate';

interface SanghiPanelProps {
  profile: SanghiProfile;
}

export function SanghiPanel({ profile }: SanghiPanelProps) {
  const dimensions = Object.entries(profile.dimensions).filter(([, value]) => typeof value === 'number');
  const Icon = profile.status === 'certified' ? ShieldCheck : profile.status === 'mixed' ? Scale : HelpCircle;
  const reviewDepth = profile.reviewDepth ? profile.reviewDepth.replace('-', ' ').toUpperCase() : 'CALIBRATION PASS';
  const auditStatus = profile.auditStatus ? profile.auditStatus.toUpperCase() : 'PROVISIONAL';
  const gate = evaluateEditorialGate(profile);
  const verdictLabel = gate.eligible ? certificationLabels[profile.status] : `Provisional · ${certificationLabels[profile.status]}`;

  return (
    <section className="rounded-[2.75rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.015] shadow-2xl">
      <div className="p-8 md:p-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">
          <div className="space-y-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-black/20 text-[9px] font-black uppercase tracking-[0.24em] text-text-secondary">
                <Icon className="w-4 h-4" /> Culture Check verdict
              </span>
              <span className="text-[9px] uppercase tracking-[0.20em] text-text-secondary font-bold">
                methodology v{profile.methodologyVersion} · reviewed {profile.reviewedAt}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-none">{verdictLabel}</h3>
              {profile.status === 'certified' && gate.eligible && (
                <p className="text-sm font-black text-orange-200">Called an insult. Worn as a badge.</p>
              )}
              <p className="text-sm md:text-base text-text-secondary font-medium">
                {profile.confidence.toUpperCase()} confidence · {reviewDepth} · {auditStatus}
              </p>
            </div>

            {!gate.eligible && (
              <div className="rounded-2xl border border-amber-200/15 bg-amber-300/[0.06] p-4 text-sm leading-relaxed text-text-secondary">
                <span className="font-black text-amber-100">Publication gate pending.</span>{' '}
                This calibration record remains provisional until the editorial gate is fully documented.
              </div>
            )}

            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.26em] text-text-secondary">Why this result</p>
              <div className="space-y-3">
                {profile.reasons.map((reason, index) => (
                  <div key={reason} className="grid grid-cols-[36px_1fr] gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 md:p-5">
                    <span className="text-[10px] font-black text-text-primary/50 pt-1">0{index + 1}</span>
                    <p className="text-base md:text-lg leading-relaxed text-text-secondary">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.26em] text-text-secondary">Bharatiya signal map</p>
                <p className="mt-2 text-sm text-text-secondary">Context for the verdict, not a quality score.</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                {profile.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[9px] font-black uppercase tracking-[0.16em] text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5 md:p-6 space-y-4">
              {dimensions.length === 0 ? (
                <p className="text-sm text-text-secondary">The current record is qualitative; dimension values have not yet been backfilled for this title.</p>
              ) : dimensions.map(([key, rawValue]) => {
                const value = rawValue as number;
                const isRisk = key === 'contemptRisk';
                const width = `${Math.max(0, Math.min(100, value * 20))}%`;
                return (
                  <div key={key} className="grid grid-cols-[120px_1fr_36px] md:grid-cols-[150px_1fr_42px] gap-3 items-center">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-text-secondary font-black">{dimensionLabels[key] || key}</p>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${isRisk && value >= 3 ? 'bg-amber-300/80' : 'bg-orange-100/75'}`}
                        style={{ width }}
                      />
                    </div>
                    <p className={`text-xs text-right font-black ${isRisk && value >= 3 ? 'text-amber-200' : 'text-text-primary'}`}>{value}/5</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12 space-y-10">
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.26em] text-text-secondary">Narrative Integrity</p>
              <h4 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">What changed, what it may mean, and what we can actually prove.</h4>
            </div>
            {profile.integrityFlags.length > 0 && (
              <span className="px-3 py-2 rounded-full border border-amber-200/20 bg-amber-300/[0.08] text-[9px] font-black uppercase tracking-[0.18em] text-amber-100">
                {profile.integrityFlags.length} finding{profile.integrityFlags.length === 1 ? '' : 's'}
              </span>
            )}
          </div>

          {profile.integrityFlags.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-text-secondary">
              No material Narrative Integrity concern is recorded in the current review.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {profile.integrityFlags.map(flag => (
                <article key={`${flag.type}-${flag.summary}`} className="rounded-[2rem] border border-white/10 bg-black/20 p-5 md:p-6 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-200" />
                    <span className="text-xs font-black uppercase tracking-[0.16em]">{flag.type.replace(/-/g, ' ')}</span>
                    <span className="px-2.5 py-1 rounded-full bg-white/[0.05] text-[9px] uppercase tracking-[0.16em] text-text-secondary font-black">{flag.status}</span>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-text-secondary">{flag.summary}</p>

                  {(flag.fact || flag.interpretation || flag.intent) && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                      {flag.fact && (
                        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-text-secondary mb-2">Fact</p>
                          <p className="text-sm leading-relaxed text-text-secondary">{flag.fact}</p>
                        </div>
                      )}
                      {flag.interpretation && (
                        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-text-secondary mb-2">Interpretation</p>
                          <p className="text-sm leading-relaxed text-text-secondary">{flag.interpretation}</p>
                        </div>
                      )}
                      {flag.intent && (
                        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-text-secondary mb-2">Intent</p>
                          <p className="text-sm leading-relaxed text-text-secondary">{flag.intent}</p>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>

        <details className="group rounded-[2rem] border border-white/10 bg-black/20 overflow-hidden">
          <summary className="cursor-pointer list-none p-5 md:p-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-text-secondary">Evidence trail</p>
              <p className="mt-1 text-sm text-text-secondary">{profile.evidence.length} source note{profile.evidence.length === 1 ? '' : 's'} behind this review</p>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.16em] text-text-secondary group-open:text-text-primary">Open</span>
          </summary>
          <div className="border-t border-white/10 p-5 md:p-6 space-y-3">
            {profile.evidence.length === 0 ? (
              <p className="text-sm text-text-secondary">No source note is attached to this calibration record yet.</p>
            ) : profile.evidence.map((item, index) => (
              <div key={`${item.source}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 space-y-2">
                <p className="text-[9px] uppercase tracking-[0.18em] font-black text-text-secondary">{item.kind} · {item.source}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{item.claim}</p>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] hover:text-orange-200">
                    View source <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </details>

        <p className="text-[11px] text-text-secondary leading-relaxed border-t border-white/10 pt-6">
          Culture Check is a declared Bharatiya cultural signal, not a quality rating. Facts, interpretation and claims about intent are kept separate, and factual caveats do not automatically override the certification axis.
        </p>
      </div>
    </section>
  );
}
