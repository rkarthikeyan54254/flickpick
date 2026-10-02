import React, { useEffect, useState } from 'react';
import { CalendarDays, CheckCircle2, Clock3, ImageOff, Sparkles } from 'lucide-react';
import type { OttReleaseItem } from '../data/latestOtt';
import { fetchOttArtwork, type OttArtwork } from '../services/tmdb';

function editorialLabel(item: OttReleaseItem) {
  switch (item.editorialState) {
    case 'sanghi-certified': return '🪷 Sanghi Certified';
    case 'pre-release-check': return 'Pre-release check';
    default: return 'Review pending';
  }
}

function releaseLabel(releaseDate: string) {
  const now = new Date();
  const release = new Date(`${releaseDate}T00:00:00+05:30`);
  const diffDays = Math.round((release.getTime() - now.getTime()) / (24 * 60 * 60 * 1000));
  if (diffDays < 0 && diffDays >= -7) return 'New this week';
  if (diffDays === 0) return 'Today';
  if (diffDays > 0) return 'Coming soon';
  return 'Streaming';
}

function verificationLabel(lastVerifiedAt: string) {
  const ageHours = Math.max(0, Math.floor((Date.now() - new Date(lastVerifiedAt).getTime()) / (60 * 60 * 1000)));
  if (ageHours < 2) return 'Verified recently';
  if (ageHours < 24) return `Verified ${ageHours}h ago`;
  return 'Verified within 72h';
}

export function OttReleaseCard({ item }: { item: OttReleaseItem }) {
  const [artwork, setArtwork] = useState<OttArtwork | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchOttArtwork(item.title, item.releaseDate)
      .then((result) => {
        if (!cancelled) setArtwork(result);
      })
      .finally(() => {
        if (!cancelled) setLoaded(true);
      });
    return () => { cancelled = true; };
  }, [item.title, item.releaseDate]);

  const imageUrl = artwork?.posterUrl || artwork?.backdropUrl;

  return (
    <article className="group min-w-[220px] max-w-[240px] snap-start overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.025] shadow-xl">
      <div className="relative aspect-[2/3] overflow-hidden bg-gradient-to-br from-orange-500/10 via-black to-black">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${item.title} artwork`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            {!loaded ? (
              <div className="w-9 h-9 rounded-full border-2 border-orange-200 border-t-transparent animate-spin" />
            ) : (
              <>
                <ImageOff className="w-8 h-8 text-text-secondary" />
                <p className="text-sm font-black tracking-tight">Artwork pending</p>
              </>
            )}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/65 to-transparent" />
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <span className="rounded-full border border-white/15 bg-black/60 backdrop-blur-md px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.13em] text-white">{item.platform}</span>
          <span className="rounded-full border border-white/15 bg-black/60 backdrop-blur-md px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.13em] text-white/80">{releaseLabel(item.releaseDate)}</span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-black tracking-tight leading-tight">{item.title}</h3>
          <p className="mt-2 flex items-center gap-2 text-[11px] font-bold text-text-secondary">
            <CalendarDays className="w-3.5 h-3.5" />
            {item.language} · {new Date(`${item.releaseDate}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
        </div>

        <div className="space-y-2 border-t border-white/10 pt-4">
          <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-orange-200">
            <Sparkles className="w-3 h-3" /> {editorialLabel(item)}
          </span>
          <div className="flex items-center justify-between gap-3 text-[9px] font-black uppercase tracking-wider text-text-secondary">
            <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> {item.confidence}</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="w-3 h-3" /> {verificationLabel(item.lastVerifiedAt)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
