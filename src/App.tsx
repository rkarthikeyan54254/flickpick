import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Heart, ShieldCheck } from 'lucide-react';
import { Home } from './pages/Home';
import { MovieDetail } from './pages/MovieDetail';
import { ThemeToggle } from './components/ThemeToggle';

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
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl shadow-lg overflow-hidden flex items-center justify-center bg-chic-gray ring-1 ring-orange-300/20">
              <img src="/favicon.jpg" alt="FlickPick" className="w-full h-full object-cover" />
            </div>
            <div className="leading-none">
              <span className="block text-xl font-black tracking-tighter uppercase">FlickPick</span>
              <span className="hidden sm:block text-[9px] font-black uppercase tracking-[0.22em] text-orange-300 mt-1">A Bharatiya cinema guide</span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full border border-orange-300/15 bg-orange-400/5 text-[10px] font-black uppercase tracking-widest text-text-secondary">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-300" /> Evidence before verdict
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <main className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>

        <footer className="py-12 mt-20 border-t border-glass-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-text-secondary text-sm">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span>© {new Date().getFullYear()} FlickPick™</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>Movie data by TMDB · availability by JustWatch</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-70">Sanghi Certified is an editorial lens, not a crowdsourced popularity vote.</p>
            </div>
            <div className="flex items-center gap-2 font-medium">
              Made with <Heart className="w-4 h-4 text-orange-400 fill-current" /> for Indian cinema
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}