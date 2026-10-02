import React, { useState } from 'react';
import { Flag, Send, X } from 'lucide-react';
import type { SanghiProfile } from '../types/sanghi';

const REASONS = [
  ['factual-error', 'Factual error'],
  ['missing-context', 'Missing Bharatiya / regional context'],
  ['evidence-quality', 'Evidence quality'],
  ['editorial-disagreement', 'Editorial disagreement'],
] as const;

export function CertificationChallenge({ profile }: { profile: SanghiProfile }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const form = new FormData(event.currentTarget);
    const payload = new URLSearchParams();
    form.forEach((value, key) => payload.append(key, String(value)));

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload.toString(),
    });

    setSending(false);
    if (response.ok) setSubmitted(true);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-secondary hover:text-orange-300 transition-colors"
      >
        <Flag className="w-4 h-4" /> Challenge this certification
      </button>
    );
  }

  return (
    <section className="rounded-[2rem] border border-orange-300/20 bg-orange-500/5 p-6 md:p-8 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-orange-300">Structured review request</p>
          <h3 className="text-xl font-black tracking-tight mt-2">Challenge this certification</h3>
          <p className="text-sm text-text-secondary mt-2 max-w-2xl">
            Challenges do not change a verdict by vote count. Evidence-backed submissions enter the editorial review queue.
          </p>
        </div>
        <button aria-label="Close challenge form" onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-white/5">
          <X className="w-4 h-4" />
        </button>
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-sm font-bold">
          Challenge recorded for editorial review. The current verdict remains unchanged unless the evidence warrants a revision.
        </div>
      ) : (
        <form name="certification-challenge" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit} className="space-y-5">
          <input type="hidden" name="form-name" value="certification-challenge" />
          <input type="hidden" name="movie" value={`${profile.title} (${profile.year})`} />
          <input type="hidden" name="current-verdict" value={profile.status} />
          <p className="hidden"><label>Do not fill this out <input name="bot-field" /></label></p>

          <label className="block space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-text-secondary">Reason</span>
            <select name="reason" required className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm">
              {REASONS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>

          <label className="block space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-text-secondary">Your evidence or argument</span>
            <textarea name="rationale" required minLength={40} rows={5} className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm" placeholder="Explain what is wrong, missing, or misread. Be specific." />
          </label>

          <label className="block space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-text-secondary">Evidence URL</span>
            <input name="evidence-url" type="url" className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm" placeholder="https://..." />
          </label>

          <label className="block space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-text-secondary">Email (optional)</span>
            <input name="email" type="email" className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-sm" placeholder="Only if you want a follow-up" />
          </label>

          <button disabled={sending} className="chic-btn-primary inline-flex items-center gap-2 px-6 py-3 disabled:opacity-50">
            <Send className="w-4 h-4" /> {sending ? 'Submitting…' : 'Submit challenge'}
          </button>
        </form>
      )}
    </section>
  );
}
