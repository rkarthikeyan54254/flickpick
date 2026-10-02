import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenCheck, RefreshCw, Settings2, ShieldCheck } from 'lucide-react';
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
  const freshOttReleases = getFreshOttReleases();

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
      return;
    }
    const availableMovies = unusedMovies.filter(movie => !usedMovies.has(movie.id));
    if (availableMovies.length > 0) {
      const nextMovie = availableMovies[0];
      setCurrentMovie(nextMovie);
      setUsedMovies(new Set([...usedMovies, nextMovie.id]));
    }
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
    <div className="space-y-12 md:space-y-16 lg:space-y-20 animate-fade-in">
      <SEO
        title="Culture Check — Every film held up to Bharat's values."
        description="Discover Indian films across cinemas and major OTT platforms, then read an evidence-backed Bharatiya cultural assessment before you watch."
        schemaData={homeSchema}
      />

      <header className="max-w-6xl mx-auto text-center space-y-7 md:space-y-8 relative">
        <div className="absolute top-[-90px] left-1/2 -translate-x-1/2 w-[120%] h-[460px] pointer-events-none opacity-20 -z-10">
          <img src="/hero.png" alt="Indian cinema" className="w-full h-full object-cover mask-radial grayscale-[35%]" />
        </div>

        <div className="space-y-5 pt-10 md:pt-14 lg:pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-300/20 bg-orange-400/10 text-orange-200 text-[10px] font-black uppercase tracking-[0.2em]">
            <ShieldCheck className="w-4 h-4" /> Continuously audited · freshness monitored
          </div>
          <div>
            <p className="text-[11px] md:text-xs font-black uppercase tracking-[0.32em] text-orange-300">A Bharatiya lens on Indian cinema</p>
            <h1 className="mt-4 mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-[-0.055em] leading-[0.92]">
              EVERY FILM.<br /><span className="text-orange-200 italic">HELD UP TO BHARAT'S VALUES.</span>
            </h1>
          </div>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto font-medium leading-relaxed">
            Know what a film affirms, distorts or dismisses before you press play — across culture, civilization, national integrity, sacred traditions, regional roots and historical memory.
          </p>
          <Link to="/methodology" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-secondary hover:text-orange-200 transition-colors">
            <BookOpenCheck className="w-4 h-4" /> Read the methodology
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <div className="w-full md:max-w-lg">
            <SearchBar onSearch={setSearchQuery} onClear={() => setSearchQuery('')} />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className={`chic-btn-secondary flex items-center gap-2 ${showFilters ? 'bg-orange-500/10' : ''}`}>
            <Settings2 className="w-5 h-5" /> Preferences
          </button>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">🪷 Sanghi Certified</p>
            <p className="text-xs font-bold text-orange-200 mt-1">Called an insult. Worn as a badge.</p>
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

        <div className="flex justify-center pt-1">
          <button onClick={handleShuffle} disabled={isLoading || (movies.length === 0 && selectedProviders.length > 0)} className="chic-btn-primary px-10 py-4 text-lg flex items-center gap-3 animate-breath group">
            <RefreshCw className={`w-5 h-5 group-hover:rotate-180 transition-transform duration-500 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Scanning India…' : 'Pick a film'}
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-8">
          <div className="shrink-0">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-orange-300">Indian cinema · live release watch</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mt-2">Now and coming next.</h2>
          </div>
          <p className="text-sm text-text-secondary max-w-xl leading-relaxed lg:text-right">
            The release feed is re-verified throughout the day across theatrical and streaming releases. Films already public enter full Culture Check immediately; genuinely unreleased films can carry a clearly labeled pre-release assessment, never a trailer-only final verdict.
          </p>
        </div>
        {freshOttReleases.length > 0 ? (
          <div className="flex gap-3 overflow-x-auto pb-4 pr-1 snap-x snap-mandatory scrollbar-hide overscroll-x-contain">
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

      <main className="max-w-6xl mx-auto pb-16">
        {isLoading ? (
          <div className="space-y-8"><SkeletonCard /></div>
        ) : currentMovie ? (
          <div className="spotlight-reveal"><MovieCard movie={currentMovie} /></div>
        ) : (
          <NoResults selectedLanguage={selectedLanguage} selectedDecade={selectedDecade} hasProviders={selectedProviders.length > 0} onBroadenSearch={handleBroadenSearch} onUniversalShuffle={handleUniversalShuffle} />
        )}
      </main>

      <section className="sr-only">
        <h2>Culture Check: Indian cinema across theatres, Netflix, Prime Video, JioHotstar, SonyLIV, ZEE5, Sun NXT and regional streaming services</h2>
        <p>Explore Indian cinema across languages with a source-audited Bharatiya editorial framework.</p>
      </section>
    </div>
  );
}
