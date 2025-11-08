import { useState, useEffect } from 'react';
import { Bug, Search } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = 'text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white grid place-items-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Bug className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm leading-none text-slate-500">Premium AI Pest ID</p>
            <p className="text-lg leading-none font-semibold tracking-tight">PestHub</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className={navLink}>Home</a>
          <a href="#classify" className={navLink}>Classify</a>
          <a href="#directory" className={navLink}>Directory</a>
          <a href="#about" className={navLink}>About</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#directory" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm transition-colors">
            <Search className="w-4 h-4" />
            Browse Pests
          </a>
          <a href="#classify" className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:opacity-95 transition-opacity">
            Start Detection
          </a>
        </div>
      </div>
    </header>
  );
}
