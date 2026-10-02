import React, { useEffect, useState } from 'react';
import { CalendarDays, ExternalLink, ImageOff, Sparkles } from 'lucide-react';
import type { OttReleaseItem } from '../data/latestOtt';
import { fetchOttArtwork, type OttArtwork } from '../services/tmdb';

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
          <span className="rounded-full border border-white/15 bg-black/60 backdrop-blur-md px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.13em] text-white/80">{item.confidence}</span>
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

        <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-orange-200">
            <Sparkles className="w-3 h-3" /> {item.editorialState === 'reviewed' ? 'Review ready' : 'Review pending'}
          </span>
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={item.sourceName}
            className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-text-secondary hover:text-orange-200"
          >
            Source <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </article>
  );
}
