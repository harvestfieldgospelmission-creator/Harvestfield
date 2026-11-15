import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../data/missionData';
import { MissionMark } from './MissionMark';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'mission', label: 'About Us' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'journal', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#faf8f4]/95 backdrop-blur-xl border-b border-stone-200/80 shadow-[0_8px_30px_rgba(10,34,22,0.045)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[4.1rem] flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="lg:justify-self-start inline-flex items-center gap-2.5 font-serif text-lg sm:text-xl font-semibold tracking-tight text-forest-950 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 rounded-sm cursor-pointer"
        >
          <MissionMark className="w-7 h-7 text-forest-900 shrink-0" />
          <span className="flex flex-col items-start leading-none"><span>Harvest Field</span><span className="mt-1 font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.19em] text-harvest-600">Gospel Mission Int’l</span></span>
        </button>

        {/* Zone 2: Centered 6 single-line text navigation links */}
        <nav
          className="hidden lg:flex lg:justify-self-center items-center gap-5 xl:gap-8"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 rounded-sm ${
                  isActive
                    ? 'text-forest-950 font-semibold'
                    : 'text-stone-600 hover:text-forest-900'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 bg-harvest-500 transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary Donate CTA + mobile drawer toggle */}
        <div className="lg:justify-self-end flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => handleNav('partner')}
            className={`hidden lg:inline-flex px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-800 ${
              currentPage === 'partner'
                ? 'bg-harvest-600 text-white'
                : 'bg-forest-900 hover:bg-forest-800 text-white'
            }`}
          >
            Donate &amp; Partner
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-stone-800 hover:bg-stone-200/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="hf-mobile-navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="hf-mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-stone-200 bg-[#faf8f4] px-4 py-4 space-y-1.5"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-forest-900 text-white'
                    : 'text-stone-800 hover:bg-stone-200/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
