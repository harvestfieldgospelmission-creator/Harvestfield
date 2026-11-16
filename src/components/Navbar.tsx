import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../data/missionData';
import { getPagePath } from '../routing';
import { MissionMark } from './MissionMark';
import { LocalizedContent, useLanguage } from '../i18n';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'mission', label: 'About Us' },
  { id: 'academy', label: 'Academy' },
  { id: 'impact', label: 'Impact & Stories' },
  { id: 'prayer', label: 'Prayer' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'journal', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const mobileMenuRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return;
      if (
        mobileMenuRef.current?.contains(event.target) ||
        menuToggleRef.current?.contains(event.target)
      ) {
        return;
      }
      setMobileOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const languageSelector = (className: string) => (
    <label className={className}>
      <span className="sr-only">Select language</span>
      <select
        value={language}
        onChange={(event) => {
          const value = event.currentTarget.value;
          if (value === 'en' || value === 'fr' || value === 'es') setLanguage(value);
        }}
        aria-label="Select language"
        className="h-10 rounded-lg border border-stone-300 bg-white px-2.5 text-xs font-semibold text-forest-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
      </select>
    </label>
  );

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <LocalizedContent>
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
              <a
                key={item.id}
                href={getPagePath(item.id)}
                aria-current={isActive ? "page" : undefined}
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => {
                  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                  event.preventDefault();
                  handleNav(item.id);
                }}
                className={`relative inline-flex py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 rounded-sm ${
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
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary Donate CTA + mobile drawer toggle */}
        <div className="lg:justify-self-end flex items-center gap-2.5 shrink-0">
          {languageSelector('hidden sm:block')}
          <a
            href={getPagePath('partner')}
            onClick={(event) => {
              if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              handleNav('partner');
            }}
            className={`hidden lg:inline-flex px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-800 ${
              currentPage === 'partner'
                ? 'bg-harvest-600 text-white'
                : 'bg-forest-900 hover:bg-forest-800 text-white'
            }`}
          >
            Donate &amp; Partner
          </a>

          <button
            type="button"
            ref={menuToggleRef}
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
      <nav
        ref={mobileMenuRef}
        id="hf-mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={`lg:hidden overflow-y-auto overflow-x-hidden border-t border-stone-200 bg-[#faf8f4] px-4 space-y-1.5 transition-[max-height,opacity,transform,padding] duration-300 ease-out motion-reduce:transition-none ${
          mobileOpen
            ? 'max-h-[calc(100dvh-4.1rem)] translate-y-0 py-4 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-2 border-transparent py-0 opacity-0'
        }`}
      >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={getPagePath(item.id)}
                onClick={(event) => {
                  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                  event.preventDefault();
                  handleNav(item.id);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-forest-900 text-white'
                    : 'text-stone-800 hover:bg-stone-200/70'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="grid grid-cols-2 gap-2 px-2 pt-3">
            <a
              href={getPagePath('join')}
              onClick={(event) => {
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                handleNav('join');
              }}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-forest-800 px-3 py-3 text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
            >
              Join Us
            </a>
            <a
              href={getPagePath('partner')}
              onClick={(event) => {
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                handleNav('partner');
              }}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-forest-900 px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500"
            >
              Support the Mission
            </a>
          </div>
          <div className="px-4 pt-3">{languageSelector('block sm:hidden')}</div>
      </nav>
    </header>
    </LocalizedContent>
  );
};
