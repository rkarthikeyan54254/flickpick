import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BookOpenCheck, Heart, ShieldCheck } from 'lucide-react';
import { Home } from './pages/Home';
import { MovieDetail } from './pages/MovieDetail';
import { Methodology } from './pages/Methodology';
import { ThemeToggle } from './components/ThemeToggle';
import { CultureCheckMark } from './components/CultureCheckMark';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-500 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-12%] left-[-8%] w-[42%] h-[42%] bg-orange-500/10 blur-[140px] rounded-full" />
        <div className="absolute top-[18%] right-[-12%] w-[34%] h-[34%] bg-amber-500/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[35%] w-[32%] h-[32%] bg-emerald-600/5 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <nav className="flex justify-between items-center py-6 md:py-8 border-b border-white/5">
          <Link to="/" className="group">
            <CultureCheckMark />
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <Link
              to="/methodology"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/[0.025] text-[10px] font-black uppercase tracking-widest text-text-secondary hover:text-orange-200 hover:border-orange-300/20 transition-colors"
            >
              <BookOpenCheck className="w-3.5 h-3.5" /> Methodology
            </Link>
            <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full border border-orange-300/15 bg-orange-400/5 text-[10px] font-black uppercase tracking-widest text-text-secondary">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-300" /> Evidence before verdict
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <main className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/methodology" element={<Methodology />} />
          </Routes>
        </main>

        <footer className="py-12 mt-20 border-t border-glass-border">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-7 text-text-secondary text-sm">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                <span>© {new Date().getFullYear()} Culture Check</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>Movie data by TMDb · availability by JustWatch</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-70">🪷 Sanghi Certified · Called an insult. Worn as a badge.</p>
            </div>
            <div className="flex items-center gap-5">
              <Link to="/methodology" className="text-xs font-black uppercase tracking-widest hover:text-orange-200 transition-colors">Methodology</Link>
              <span className="hidden sm:flex items-center gap-2 font-medium">Made with <Heart className="w-4 h-4 text-orange-400 fill-current" /> for Indian cinema</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
