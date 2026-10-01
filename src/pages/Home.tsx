import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Settings2, ShieldCheck } from 'lucide-react';
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
import { getProfilesForSelection, matchesCertificationFilter } from '../services/sanghi';
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
  const [selectedProviders, setSelectedProviders] = useState<number[]>(() =>
    PROVIDERS['IN'].map(p => p.id)
  );
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

  useEffect(() => {
    const regionProviders = PROVIDERS[selectedRegion as keyof typeof PROVIDERS] || PROVIDERS['IN'];
    setSelectedProviders(regionProviders.map(p => p.id));
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
      const profiles = getProfilesForSelection(
        certificationFilter,
        selectedLanguage,
        selectedDecade
      );
      fetchedMovies = await fetchCuratedMovies(
        profiles,
        selectedRegion,
        selectedProviders
      );
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

    let visibleMovies = fetchedMovies.filter(movie =>
      matchesCertificationFilter(movie, certificationFilter)
    );

    if (certificationFilter !== 'all' && selectedGenre !== undefined) {
      visibleMovies = visibleMovies.filter(movie =>
        movie.genres?.some(genre => genre.id === selectedGenre) ?? true
      );
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

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

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
    setSelectedProviders(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
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
    const allProviders = PROVIDERS[selectedRegion as keyof typeof PROVIDERS].map(p => p.id);
    setSelectedProviders(allProviders);
    setSearchQuery('');
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FlickPick",
    "url": "https://justflickpick.netlify.app/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://justflickpick.netlify.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="space-y-12 md:space-y-20 animate-fade-in">
      <SEO schemaData={homeSchema} />

      <header className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12 relative">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[120%] h-[500px] pointer-events-none opacity-50 -z-10">
          <img
            src="/hero.png"
            alt="Cinematic Discovery"
            className="w-full h-full object-cover mask-radial"
          />
        </div>

        <div className="space-y-4 pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-300/20 bg-orange-400/10 text-orange-200 text-[10px] font-black uppercase tracking-[0.2em]">
            <ShieldCheck className="w-4 h-4" /> Sanghi Certified Beta · 30 reviewed films
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
            FLICK<span className="text-gradient-chic italic">PICK.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-medium">
            Indian cinema, seen from here. Shuffle by language, streaming service and worldview.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <div className="w-full md:max-w-md">
            <SearchBar onSearch={setSearchQuery} onClear={() => setSearchQuery('')} />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`chic-btn-secondary flex items-center gap-2 ${showFilters ? 'bg-purple-500/20' : ''}`}
          >
            <Settings2 className="w-5 h-5" />
            Preferences
          </button>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">Worldview filter</p>
          <CertificationSelector value={certificationFilter} onChange={setCertificationFilter} />
        </div>

        {showFilters && !searchQuery && (
          <div className="chic-glass rounded-[2rem] p-8 md:p-12 space-y-10 text-left animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Region</label>
                <RegionSelector selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Streaming Apps</label>
                <ProviderSelector
                  selectedRegion={selectedRegion}
                  selectedProviders={selectedProviders}
                  onProviderToggle={toggleProvider}
                />
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

            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Genre</label>
                <GenreSelector selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Sort By</label>
                <SortSelector selectedSort={selectedSort} onSortChange={setSelectedSort} />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center pt-4">
          <button
            onClick={handleShuffle}
            disabled={isLoading || (movies.length === 0 && selectedProviders.length > 0)}
            className="chic-btn-primary px-12 py-5 text-xl flex items-center gap-3 animate-breath group"
          >
            <RefreshCw className={`w-6 h-6 group-hover:rotate-180 transition-transform duration-500 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Scanning...' : 'Shuffle Choice'}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto pb-20">
        {isLoading ? (
          <div className="space-y-8">
            <SkeletonCard />
          </div>
        ) : currentMovie ? (
          <div className="spotlight-reveal">
            <MovieCard movie={currentMovie} />
          </div>
        ) : (
          <NoResults
            selectedLanguage={selectedLanguage}
            selectedDecade={selectedDecade}
            hasProviders={selectedProviders.length > 0}
            onBroadenSearch={handleBroadenSearch}
            onUniversalShuffle={handleUniversalShuffle}
          />
        )}
      </main>

      <section className="sr-only">
        <h2>Discover Indian movies across Netflix, Amazon Prime Video and Zee5</h2>
        <p>Explore Hindi, Tamil, Telugu, Malayalam and Kannada cinema with optional Sanghi Certified editorial filtering.</p>
        <p>FlickPick combines streaming discovery with an India-grounded worldview layer.</p>
      </section>
    </div>
  );
}
