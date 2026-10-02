import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  CircleDot,
  Compass,
  FileSearch,
  Flag,
  Landmark,
  Scale,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { SEO } from '../components/SEO';

const dimensions = [
  ['Dharma', 'Whether duty, moral responsibility, sacred obligation and civilizational ethics are treated with seriousness rather than contempt.'],
  ['Civilizational continuity', 'Whether India is presented as a living civilization with continuity across language, memory, family, faith, custom and place.'],
  ['Rashtra', 'How the film treats India’s national cohesion, constitutional sovereignty, territorial integrity and collective confidence.'],
  ['Itihasa', 'How historical memory, invasions, colonialism, resistance and inherited narratives are represented.'],
  ['Parampara', 'Whether inherited practices and inter-generational cultural transmission are portrayed with understanding, criticism, reverence or caricature.'],
  ['Local roots', 'Whether regional cultures, languages, communities and sacred geographies are allowed to remain specific rather than flattened into generic categories.'],
  ['Raksha', 'How the story treats protection of people, borders, security, defence, coercive conversion, radicalisation and civilizational threats.'],
  ['Social Dharma', 'Whether social responsibility, justice, dignity and reform are handled without assuming that criticism of a social wrong equals contempt for Bharat.'],
  ['Sacred regard', 'Whether Hindu and other Indian sacred symbols, rituals, deities, temples and practices are engaged in good faith or used primarily as ridicule.'],
  ['Contempt risk', 'Whether dramatic force depends on caricaturing Hindu identity, Indian civilization, national belonging or specific communities without sufficient narrative basis.'],
];

const process = [
  ['01', 'Research the public record', 'We collect film metadata, creator statements, reviews, interviews, public reporting, historical records and public conversation where relevant.'],
  ['02', 'Run an adversarial pass', 'We actively look for evidence that would make our first reading incomplete or wrong, especially around identity, history, religion, adaptation and real people.'],
  ['03', 'Check the Bharatiya dimensions', 'The film is read through the declared Culture Check framework rather than a generic Western left/right scale.'],
  ['04', 'Audit Narrative Integrity separately', 'True-story, historical and biographical films are checked for substitutions, omitted identities, changed events, inflated claims and source-fidelity problems.'],
  ['05', 'Separate fact, interpretation and intent', 'A documented change is a fact. What that change means is interpretation. Motive is not asserted without evidence.'],
  ['06', 'Publish, hold or escalate', 'Strong records auto-publish. Weak evidence is held as provisional. High-risk factual or identity cases enter an exception review lane.'],
  ['07', 'Keep listening', 'Readers can challenge a result with evidence. Challenges trigger review; popularity or vote count does not rewrite a verdict.'],
];

const contract = [
  'A Culture Check verdict is not a review of whether a film is entertaining or well made.',
  'Sanghi Certified does not require a film to praise a government, avoid social criticism, or be overtly devotional.',
  'Criticism of caste hierarchy, patriarchy, police abuse, corruption or institutional failure is not automatically anti-Bharatiya.',
  'A factual or adaptation problem does not automatically revoke Sanghi Certified. Bharatiya alignment and Narrative Integrity are separate axes.',
  'Social-media claims are leads, not proof. Virality increases investigation priority, not truth confidence.',
  'Neutral means reviewed with no strong directional signal. It does not mean unreviewed.',
  'Unrated means we have not completed a durable editorial review.',
];

export function Methodology() {
  return (
    <div className="max-w-6xl mx-auto py-10 md:py-16 space-y-16 md:space-y-24">
      <SEO
        title="Methodology"
        description="How Culture Check evaluates films through a declared Bharatiya editorial framework, separates Narrative Integrity from certification, and handles evidence, confidence and challenges."
        url="https://justflickpick.netlify.app/methodology"
      />

      <div>
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-secondary hover:text-orange-200 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Culture Check
        </Link>
      </div>

      <header className="max-w-4xl space-y-7">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-300/20 bg-orange-400/10 text-orange-200 text-[10px] font-black uppercase tracking-[0.22em]">
          <BookOpenCheck className="w-4 h-4" /> Methodology v1 · Bharatiya editorial framework
        </div>
        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-[-0.055em]">
          A declared lens.<br /><span className="text-orange-200">A visible evidence trail.</span>
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed text-text-secondary max-w-3xl">
          Culture Check asks a specific question: how does a film look when read from within Bharat — its civilizational memory, national interest, sacred traditions, regional cultures, historical experience and social realities?
        </p>
        <p className="text-sm md:text-base leading-relaxed text-text-secondary max-w-3xl">
          “Bharat’s values” on this site means the editorial framework defined below. It is a declared point of view, not a claim that every Indian agrees on one universal value system.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
        <div className="rounded-[2.5rem] border border-orange-300/20 bg-gradient-to-br from-orange-400/[0.12] via-white/[0.03] to-transparent p-8 md:p-10 sticky lg:top-10">
          <p className="text-[10px] font-black uppercase tracking-[0.26em] text-orange-200">Signature certification</p>
          <div className="mt-5 flex items-center gap-4">
            <span className="w-14 h-14 rounded-full border border-orange-300/30 bg-black/20 flex items-center justify-center text-2xl">🪷</span>
            <div>
              <h2 className="text-3xl font-black tracking-tight">Sanghi Certified</h2>
              <p className="text-sm font-bold text-orange-200 mt-1">Called an insult. Worn as a badge.</p>
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed mt-6">
            The badge marks films whose underlying treatment of Bharat, Hindu civilizational continuity, sacred tradition, national integrity or rooted Indian life is substantially compatible with this framework — without requiring factual caveats to disappear.
          </p>
          <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-text-secondary">Important distinction</p>
            <p className="text-sm leading-relaxed text-text-secondary mt-2">Certification answers <strong className="text-text-primary">what the film affirms or undermines</strong>. Narrative Integrity answers <strong className="text-text-primary">how faithfully it represents facts, people and source material</strong>.</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-orange-200" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-text-secondary">What we evaluate</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Ten Bharatiya dimensions</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dimensions.map(([name, description], index) => (
              <article key={name} className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-black tracking-tight">{name}</h3>
                  <span className="text-[10px] font-black text-text-secondary/60">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary mt-3">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-orange-200">How a title gets rated</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2">Research first. Verdict last.</h2>
          <p className="text-text-secondary leading-relaxed mt-4">The process is designed to make the system scalable without turning the owner into a reviewer for every film.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {process.map(([number, title, description]) => (
            <article key={number} className="rounded-[2rem] border border-white/10 bg-black/20 p-6 md:p-7 grid grid-cols-[44px_1fr] gap-4">
              <span className="text-sm font-black text-orange-200">{number}</span>
              <div>
                <h3 className="text-xl font-black tracking-tight">{title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary mt-2">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <article className="rounded-[2rem] border border-emerald-300/15 bg-emerald-300/[0.05] p-7">
          <CheckCircle2 className="w-6 h-6 text-emerald-200" />
          <h3 className="text-xl font-black mt-5">Auto-publish</h3>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">All hard evidence gates pass and no calibrated high-risk exception fires. This is the normal path at scale.</p>
        </article>
        <article className="rounded-[2rem] border border-amber-300/15 bg-amber-300/[0.05] p-7">
          <Scale className="w-6 h-6 text-amber-200" />
          <h3 className="text-xl font-black mt-5">Human exception review</h3>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">The evidence gate passes, but a material historical, identity, numerical or source-fidelity risk needs explicit review.</p>
        </article>
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7">
          <CircleDot className="w-6 h-6 text-text-secondary" />
          <h3 className="text-xl font-black mt-5">Provisional hold</h3>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">Evidence is not yet strong enough for a durable verdict. We show the uncertainty rather than manufacture confidence.</p>
        </article>
      </section>

      <section className="rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 md:p-12 space-y-8">
        <div className="flex items-start gap-4">
          <FileSearch className="w-7 h-7 text-orange-200 shrink-0 mt-1" />
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-text-secondary">Narrative Integrity</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-2">A separate forensic layer</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-200">Fact</p>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">What can be documented: a changed name, omitted identity, altered chronology, numerical claim, source quotation or real-world event.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-200">Interpretation</p>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">What the documented change plausibly does to the viewer’s understanding of the character, community, event or historical record.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-200">Intent</p>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">Why the filmmakers made the choice. We do not claim motive unless creator statements or other strong evidence support it.</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Landmark className="w-5 h-5 text-orange-200" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">The editorial contract</h2>
          </div>
          <div className="space-y-3">
            {contract.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <CheckCircle2 className="w-4 h-4 text-orange-200 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Flag className="w-5 h-5 text-orange-200" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Challenge a verdict</h2>
          </div>
          <div className="rounded-[2rem] border border-orange-300/20 bg-orange-400/[0.06] p-7 space-y-5">
            <p className="text-text-secondary leading-relaxed">Every reviewed title has a structured challenge path. We ask readers to identify the kind of problem and provide a specific argument or source.</p>
            <div className="grid grid-cols-2 gap-3 text-xs font-black uppercase tracking-wider text-text-secondary">
              <span className="rounded-xl border border-white/10 p-3">Factual error</span>
              <span className="rounded-xl border border-white/10 p-3">Missing context</span>
              <span className="rounded-xl border border-white/10 p-3">Evidence quality</span>
              <span className="rounded-xl border border-white/10 p-3">Editorial disagreement</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">There are no public vote totals and no open comment threads. A strong challenge changes the evidence record; a popular challenge does not automatically change the verdict.</p>
          </div>
        </div>
      </section>

      <section className="rounded-[2.75rem] border border-orange-300/20 bg-orange-400/[0.07] p-8 md:p-12 text-center">
        <ShieldCheck className="w-8 h-8 text-orange-200 mx-auto" />
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-5">The standard is consistency, not artificial neutrality.</h2>
        <p className="text-text-secondary leading-relaxed max-w-3xl mx-auto mt-4">Culture Check is explicit about its Bharatiya perspective. The safeguard is not pretending to have no point of view; it is applying the same rubric, documenting evidence, preserving uncertainty and making revisions visible.</p>
        <Link to="/" className="chic-btn-primary inline-flex items-center gap-2 mt-8 px-7 py-3">
          <Sparkles className="w-4 h-4" /> Explore the ratings
        </Link>
      </section>
    </div>
  );
}
