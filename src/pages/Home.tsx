import React, { useState, useEffect, useCallback } from 'react';
import { CalendarDays, ExternalLink, RefreshCw, Settings2, ShieldCheck, Sparkles } from 'lucide-react';
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
import { fetchCuratedMovies, fetchMoviesByLanguage, searchMovies, PROVIDERS } from '../services/tmdb';
import { fetchIndiaStreamingProviders, type StreamingProviderOption } from '../services/providerRegistry';
import { getCorpusStats, getProfilesForSelection, matchesCertificationFilter } from '../services/sanghi';
import { latestOttReleases } from '../data/latestOtt';
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
  const [certificationFilter, setCertificationFilter] = useState<CertificationFilter>('all');

  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [unusedMovies, setUnusedMovies] = useState<Movie[]>([]);
  const [usedMovies, setUsedMovies] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const corpusStats = getCorpusStats();

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
    "name": "FlickPick",
    "url": "https://justflickpick.netlify.app/",
    "description": "Indian cinema discovery with India streaming availability and a Bharatiya editorial lens.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://justflickpick.netlify.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="space-y-12 md:space-y-20 animate-fade-in">
      <SEO schemaData={homeSchema} />

      <header className="max-w-6xl mx-auto text-center space-y-8 md:space-y-10 relative">
        <div className="absolute top-[-90px] left-1/2 -translate-x-1/2 w-[120%] h-[480px] pointer-events-none opacity-25 -z-10">
          <img src="/hero.png" alt="Indian cinema" className="w-full h-full object-cover mask-radial grayscale-[20%]" />
        </div>

        <div className="space-y-5 pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-300/20 bg-orange-400/10 text-orange-200 text-[10px] font-black uppercase tracking-[0.2em]">
            <ShieldCheck className="w-4 h-4" /> {corpusStats.batch02Published} reviewed · {corpusStats.batch02Provisional} held for more evidence
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-[-0.05em] leading-[0.92]">
            INDIAN CINEMA.<br /><span className="text-orange-200 italic">READ FROM HERE.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-medium leading-relaxed">
            Find what is streaming across India, then see the film through a declared Bharatiya lens: cultural memory, national integrity, sacred regard, local roots and evidence-backed representation review.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <div className="w-full md:max-w-md">
            <SearchBar onSearch={setSearchQuery} onClear={() => setSearchQuery('')} />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className={`chic-btn-secondary flex items-center gap-2 ${showFilters ? 'bg-orange-500/10' : ''}`}>
            <Settings2 className="w-5 h-5" /> Preferences
          </button>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">Bharatiya editorial lens</p>
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

        <div className="flex justify-center pt-2">
          <button onClick={handleShuffle} disabled={isLoading || (movies.length === 0 && selectedProviders.length > 0)} className="chic-btn-primary px-12 py-5 text-xl flex items-center gap-3 animate-breath group">
            <RefreshCw className={`w-6 h-6 group-hover:rotate-180 transition-transform duration-500 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Scanning India…' : 'Pick a film'}
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto space-y-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-orange-300 flex items-center gap-2"><CalendarDays className="w-4 h-4" /> New on Indian OTT</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-2">Arriving now, queued for review.</h2>
          </div>
          <p className="text-xs text-text-secondary max-w-md">Release dates carry source confidence. An upcoming title is never certified from a trailer alone.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestOttReleases.map((item) => (
            <article key={`${item.title}-${item.releaseDate}`} className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 space-y-4">
              <div className="flex justify-between gap-3 items-start">
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-orange-200">{item.platform}</span>
                <span className="text-[9px] font-black uppercase tracking-[0.14em] text-text-secondary">{item.confidence}</span>
              </div>
              <div>
                <h3 className="text-lg font-black tracking-tight">{item.title}</h3>
                <p className="text-xs text-text-secondary mt-1">{item.language} · {new Date(`${item.releaseDate}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
              </div>
              <div className="flex items-center justify-between gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-text-secondary"><Sparkles className="w-3 h-3" /> Review pending</span>
                <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider hover:text-orange-200">Source <ExternalLink className="w-3 h-3" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <main className="max-w-6xl mx-auto pb-20">
        {isLoading ? (
          <div className="space-y-8"><SkeletonCard /></div>
        ) : currentMovie ? (
          <div className="spotlight-reveal"><MovieCard movie={currentMovie} /></div>
        ) : (
          <NoResults selectedLanguage={selectedLanguage} selectedDecade={selectedDecade} hasProviders={selectedProviders.length > 0} onBroadenSearch={handleBroadenSearch} onUniversalShuffle={handleUniversalShuffle} />
        )}
      </main>

      <section className="sr-only">
        <h2>Discover Indian movies across Netflix, Prime Video, JioHotstar, SonyLIV, ZEE5, Sun NXT and regional streaming services</h2>
        <p>Explore Hindi, Tamil, Telugu, Malayalam and Kannada cinema with a source-audited Bharatiya editorial layer.</p>
      </section>
    </div>
  );
}
