import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenCheck, ChevronLeft, ChevronRight, RefreshCw, Settings2, ShieldCheck } from 'lucide-react';
import { LanguageSelector } from '../components/LanguageSelector';
import { DecadeSelector } from '../components/DecadeSelector';
import { RegionSelector } from '../components/RegionSelector';
import { GenreSelector } from '../components/GenreSelector';
import { SortSelector } from '../components/SortSelector';
import { ProviderSelector } from '../components/ProviderSelector';
import { SearchBar } from '../components/SearchBar';
import { MovieCard } from '../components/MovieCard';
import { SkeletonCard } from '../components/SkeletonCard';
import { NoResults } from '../components/NoResults';
import { SEO } from '../components/SEO';
import { CertificationSelector, type CertificationFilter } from '../components/CertificationSelector';
import { OttReleaseCard } from '../components/OttReleaseCard';
import { fetchCuratedMovies, fetchMoviesByLanguage, searchMovies, PROVIDERS } from '../services/tmdb';
import { fetchIndiaStreamingProviders, type StreamingProviderOption } from '../services/providerRegistry';
import { getProfilesForSelection, matchesCertificationFilter } from '../services/sanghi';
import { getFreshOttReleases } from '../data/latestOtt';
import type { Movie } from '../types/movie';

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function scrollToPickedFilm() {
  window.setTimeout(() => {
    document.getElementById('picked-film')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 0);
}

function scrollToDiscoveryControls() {
  window.setTimeout(() => {
    document.getElementById('discovery-controls')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 0);
}

export function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
  const [selectedDecade, setSelectedDecade] = useState('2020s');
  const [selectedRegion, setSelectedRegion] = useState('IN');
  const [providerOptions, setProviderOptions] = useState<StreamingProviderOption[]>([]);
  const [selectedProviders, setSelectedProviders] = useState<number[]>(() => PROVIDERS['IN'].map(p => p.id));
  const [selectedGenre, setSelectedGenre] = useState<number | undefined>(undefined);
  const [selectedSort, setSelectedSort] = useState('popularity.desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [certificationFilter, setCertificationFilter] = useState<CertificationFilter>('certified');

  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [unusedMovies, setUnusedMovies] = useState<Movie[]>([]);
  const [usedMovies, setUsedMovies] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const latestRailRef = useRef<HTMLDivElement>(null);
  const freshOttReleases = getFreshOttReleases();
  const pickDisabled = isLoading || (movies.length === 0 && selectedProviders.length > 0);

  useEffect(() => {
    let cancelled = false;
    async function syncProviders() {
      if (selectedRegion === 'IN') {
        const providers = await fetchIndiaStreamingProviders();
        if (!cancelled) {
          setProviderOptions(providers);
          setSelectedProviders(providers.map((provider) => provider.id));
        }
      } else {
        const regionProviders = PROVIDERS[selectedRegion as keyof typeof PROVIDERS] || PROVIDERS['IN'];
        setProviderOptions([]);
        setSelectedProviders(regionProviders.map(p => p.id));
      }
    }
    syncProviders();
    return () => { cancelled = true; };
  }, [selectedRegion]);

  const loadMovies = useCallback(async () => {
    if (selectedProviders.length === 0) {
      setMovies([]);
      setCurrentMovie(null);
      return;
    }

    setIsLoading(true);
    let fetchedMovies: Movie[] = [];

    if (searchQuery) {
      fetchedMovies = await searchMovies(searchQuery, selectedRegion);
    } else if (certificationFilter !== 'all') {
      const profiles = getProfilesForSelection(certificationFilter, selectedLanguage, selectedDecade);
      fetchedMovies = await fetchCuratedMovies(profiles, selectedRegion, selectedProviders);
    } else {
      fetchedMovies = await fetchMoviesByLanguage(
        selectedLanguage,
        selectedDecade,
        selectedRegion,
        selectedSort,
        selectedGenre,
        selectedProviders
      );
    }

    let visibleMovies = fetchedMovies.filter(movie => matchesCertificationFilter(movie, certificationFilter));
    if (certificationFilter !== 'all' && selectedGenre !== undefined) {
      visibleMovies = visibleMovies.filter(movie => movie.genres?.some(genre => genre.id === selectedGenre) ?? true);
    }

    setMovies(visibleMovies);
    setUnusedMovies(shuffleArray([...visibleMovies]));
    setUsedMovies(new Set());

    if (visibleMovies.length > 0) {
      const randomMovie = visibleMovies[Math.floor(Math.random() * visibleMovies.length)];
      setCurrentMovie(randomMovie);
      setUsedMovies(new Set([randomMovie.id]));
    } else {
      setCurrentMovie(null);
    }

    setIsLoading(false);
  }, [selectedLanguage, selectedDecade, selectedRegion, selectedGenre, selectedSort, searchQuery, selectedProviders, certificationFilter]);

  useEffect(() => { loadMovies(); }, [loadMovies]);

  const handleShuffle = () => {
    if (movies.length === 0) return;
    if (usedMovies.size >= movies.length) {
      setUsedMovies(new Set());
      const shuffled = shuffleArray([...movies]);
      setUnusedMovies(shuffled);
      const first = shuffled[0];
      setCurrentMovie(first);
      setUsedMovies(new Set([first.id]));
      scrollToPickedFilm();
      return;
    }
    const availableMovies = unusedMovies.filter(movie => !usedMovies.has(movie.id));
    if (availableMovies.length > 0) {
      const nextMovie = availableMovies[0];
      setCurrentMovie(nextMovie);
      setUsedMovies(new Set([...usedMovies, nextMovie.id]));
      scrollToPickedFilm();
    }
  };

  const handleEditPreferences = () => {
    setShowFilters(true);
    scrollToDiscoveryControls();
  };

  const scrollLatest = (direction: -1 | 1) => {
    const rail = latestRailRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * Math.max(320, rail.clientWidth * 0.82),
      behavior: 'smooth',
    });
  };

  const toggleProvider = (id: number) => {
    setSelectedProviders(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  const handleBroadenSearch = () => {
    setSelectedDecade('2020s');
    setSelectedGenre(undefined);
    setCertificationFilter('all');
  };

  const handleUniversalShuffle = () => {
    setSelectedLanguage('Hindi');
    setSelectedDecade('2020s');
    setSelectedGenre(undefined);
    setCertificationFilter('all');
    const allProviders = providerOptions.length > 0 ? providerOptions.map(p => p.id) : PROVIDERS['IN'].map(p => p.id);
    setSelectedProviders(allProviders);
    setSearchQuery('');
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Culture Check",
    "url": "https://culturechk.netlify.app/",
    "description": "Every film held up to Bharat's values: Indian cinema discovery, OTT availability and evidence-backed Bharatiya editorial analysis.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://culturechk.netlify.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="space-y-10 md:space-y-14 lg:space-y-16 animate-fade-in">
      <SEO
        title="Culture Check — Every film held up to Bharat's values."
        description="Discover Indian films across cinemas and major OTT platforms, then read an evidence-backed Bharatiya cultural assessment before you watch."
        schemaData={homeSchema}
      />

      <header id="discovery-controls" className="max-w-6xl mx-auto text-center space-y-6 relative scroll-mt-24">
        <div className="absolute top-[-70px] left-1/2 -translate-x-1/2 w-[112%] h-[400px] pointer-events-none opacity-[0.16] -z-10">
          <img src="/hero.png" alt="Indian cinema" className="w-full h-full object-cover mask-radial grayscale-[35%]" />
        </div>

        <div className="space-y-4 pt-6 md:pt-8 lg:pt-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-300/20 bg-orange-400/10 text-orange-200 text-[9px] font-black uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3.5 h-3.5" /> Continuously audited · freshness monitored
          </div>
          <div>
            <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.28em] text-orange-300">A Bharatiya lens on Indian cinema</p>
            <h1 className="mt-3 mx-auto max-w-4xl text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.05em] leading-[0.94]">
              EVERY FILM.<br /><span className="text-orange-200 italic">HELD UP TO BHARAT'S VALUES.</span>
            </h1>
          </div>
          <p className="text-base md:text-[17px] text-text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
            Know what a film affirms, distorts or dismisses before you press play — across culture, civilization, national integrity, sacred traditions, regional roots and historical memory.
          </p>
          <Link to="/methodology" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-text-secondary hover:text-orange-200 transition-colors">
            <BookOpenCheck className="w-3.5 h-3.5" /> Read the methodology
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 justify-center">
          <div className="w-full md:max-w-xl">
            <SearchBar onSearch={setSearchQuery} onClear={() => setSearchQuery('')} />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className={`chic-btn-secondary flex items-center gap-2 ${showFilters ? 'bg-orange-500/10' : ''}`}>
            <Settings2 className="w-5 h-5" /> Preferences
          </button>
        </div>

        <div className="flex flex-col items-center gap-2.5">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-text-secondary">🪷 Sanghi Certified</p>
            <p className="text-[11px] font-bold text-orange-200 mt-1">Called an insult. Worn as a badge.</p>
          </div>
          <CertificationSelector value={certificationFilter} onChange={setCertificationFilter} />
        </div>

        {showFilters && !searchQuery && (
          <div className="chic-glass rounded-[2rem] p-8 md:p-12 space-y-10 text-left animate-scale-in border border-orange-300/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Region</label>
                <RegionSelector selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Streaming apps</label>
                <ProviderSelector selectedRegion={selectedRegion} selectedProviders={selectedProviders} onProviderToggle={toggleProvider} providers={selectedRegion === 'IN' ? providerOptions : undefined} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Language</label>
                <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Decade</label>
                <DecadeSelector selectedDecade={selectedDecade} onDecadeChange={setSelectedDecade} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Genre</label>
                <GenreSelector selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Sort by</label>
                <SortSelector selectedSort={selectedSort} onSortChange={setSelectedSort} />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center pt-0.5">
          <button onClick={handleShuffle} disabled={pickDisabled} className="chic-btn-primary px-9 py-3.5 text-base flex items-center gap-2.5 animate-breath group">
            <RefreshCw className={`w-5 h-5 group-hover:rotate-180 transition-transform duration-500 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Scanning India…' : 'Pick a film'}
          </button>
        </div>
      </header>

      <section id="latest" className="max-w-6xl mx-auto space-y-5 scroll-mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-8">
          <div className="shrink-0">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-orange-300">Indian cinema · live release watch</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mt-2">Now and coming next.</h2>
          </div>
          <div className="flex flex-col lg:items-end gap-3">
            <p className="text-sm text-text-secondary max-w-xl leading-relaxed lg:text-right">
              The release feed is re-verified throughout the day across theatrical and streaming releases. Films already public enter full Culture Check immediately; genuinely unreleased films can carry a clearly labeled pre-release assessment, never a trailer-only final verdict.
            </p>
            {freshOttReleases.length > 1 && (
              <div className="hidden md:flex items-center gap-2" aria-label="Latest release navigation">
                <button onClick={() => scrollLatest(-1)} className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.025] inline-flex items-center justify-center text-text-secondary hover:text-orange-200 hover:border-orange-300/20 transition-colors" aria-label="Previous releases">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={() => scrollLatest(1)} className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.025] inline-flex items-center justify-center text-text-secondary hover:text-orange-200 hover:border-orange-300/20 transition-colors" aria-label="Next releases">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
        {freshOttReleases.length > 0 ? (
          <div ref={latestRailRef} className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide overscroll-x-contain scroll-smooth">
            {freshOttReleases.map((item) => (
              <OttReleaseCard key={`${item.title}-${item.releaseDate}`} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.025] p-8 text-sm text-text-secondary">
            Release feed is refreshing. Stale records are hidden rather than left on the site.
          </div>
        )}
      </section>

      <main id="picked-film" className="max-w-6xl mx-auto pb-28 md:pb-14 scroll-mt-24">
        {isLoading ? (
          <div className="space-y-8"><SkeletonCard /></div>
        ) : currentMovie ? (
          <div className="space-y-4">
            <div className="hidden md:flex sticky top-20 z-30 items-center justify-between gap-5 rounded-[1.5rem] border border-orange-300/20 bg-bg-primary/90 backdrop-blur-xl px-5 py-4 shadow-2xl shadow-black/20">
              <div className="min-w-0 text-left">
                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-orange-300">Your current pick</p>
                <p className="text-sm font-bold text-text-secondary mt-1">Keep exploring from here — no trip back to the top.</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={handleEditPreferences} className="chic-btn-secondary px-4 py-2.5 flex items-center gap-2 text-sm">
                  <Settings2 className="w-4 h-4" /> Preferences
                </button>
                <button onClick={handleShuffle} disabled={pickDisabled} className="chic-btn-primary px-5 py-2.5 flex items-center gap-2 text-sm group">
                  <RefreshCw className={`w-4 h-4 group-hover:rotate-180 transition-transform duration-500 ${isLoading ? 'animate-spin' : ''}`} />
                  Pick another
                </button>
              </div>
            </div>
            <div className="spotlight-reveal"><MovieCard movie={currentMovie} /></div>
          </div>
        ) : (
          <NoResults selectedLanguage={selectedLanguage} selectedDecade={selectedDecade} hasProviders={selectedProviders.length > 0} onBroadenSearch={handleBroadenSearch} onUniversalShuffle={handleUniversalShuffle} />
        )}
      </main>

      {currentMovie && !isLoading && (
        <div className="md:hidden fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-orange-300/20 bg-bg-primary/95 backdrop-blur-xl p-2.5 shadow-2xl shadow-black/40 safe-area-pb">
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <button onClick={handleShuffle} disabled={pickDisabled} className="chic-btn-primary min-h-12 flex items-center justify-center gap-2 text-sm group">
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              Pick another
            </button>
            <button onClick={handleEditPreferences} className="chic-btn-secondary min-h-12 px-4 flex items-center justify-center" aria-label="Change preferences">
              <Settings2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <section className="sr-only">
        <h2>Culture Check: Indian cinema across theatres, Netflix, Prime Video, JioHotstar, SonyLIV, ZEE5, Sun NXT and regional streaming services</h2>
        <p>Explore Indian cinema across languages with a source-audited Bharatiya editorial framework.</p>
      </section>
    </div>
  );
}
