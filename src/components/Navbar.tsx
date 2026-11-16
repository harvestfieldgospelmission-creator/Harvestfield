import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { PageId } from '../data/missionData';
import { getPagePath } from '../routing';
import { MissionMark } from './MissionMark';
import { LocalizedContent, useLanguage } from '../i18n';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_GROUPS: { label: string; items: { id: PageId; label: string }[] }[] = [
  {
    label: 'About',
    items: [
      { id: 'mission', label: 'About the Mission' },
      { id: 'leadership', label: 'Founder & Leadership' },
    ],
  },
  {
    label: 'Our Work',
    items: [
      { id: 'academy', label: 'Harvest Field Academy' },
      { id: 'impact', label: 'Impact & Stories' },
    ],
  },
  {
    label: 'Stories',
    items: [
      { id: 'gallery', label: 'Field Gallery' },
      { id: 'journal', label: 'Journal & Articles' },
    ],
  },
  {
    label: 'Connect',
    items: [
      { id: 'prayer', label: 'Prayer Request' },
      { id: 'join', label: 'Join the Mission' },
      { id: 'contact', label: 'Contact Us' },
    ],
  },
];

const MOBILE_LINK_CLASS =
  'flex min-h-11 w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800';
const DESKTOP_LINK_CLASS =
  'block rounded-lg px-3 py-2.5 text-sm text-stone-700 transition-colors hover:bg-stone-100 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800';

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
  const mobileMenuRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen && !openDropdown) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return;
      if (mobileOpen && (mobileMenuRef.current?.contains(event.target) || menuToggleRef.current?.contains(event.target))) return;
      setMobileOpen(false);
      setOpenDropdown(null);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen, openDropdown]);

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
        className="h-10 w-full rounded-lg border border-stone-300 bg-white px-2.5 text-xs font-semibold text-forest-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
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
    setOpenDropdown(null);
  };

  const pageLink = (id: PageId, label: string, className: string) => (
    <a
      key={id}
      href={getPagePath(id)}
      aria-current={currentPage === id ? 'page' : undefined}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        handleNav(id);
      }}
      className={className}
    >
      {label}
    </a>
  );

  return (
    <LocalizedContent>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-[#faf8f4]/95 shadow-[0_8px_30px_rgba(10,34,22,0.045)] backdrop-blur-xl">
        <div className="mx-auto flex h-[4.1rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-5 lg:px-8">
          <button
            type="button"
            onClick={() => handleNav('home')}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-sm font-serif text-lg font-semibold tracking-tight text-forest-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 sm:text-xl lg:justify-self-start"
          >
            <MissionMark className="h-7 w-7 shrink-0 text-forest-900" />
            <span className="flex flex-col items-start leading-none">
              <span>Harvest Field</span>
              <span className="mt-1 font-sans text-[9px] font-semibold uppercase tracking-[0.19em] text-harvest-600 sm:text-[10px]">Gospel Mission Int’l</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Primary navigation">
            {pageLink('home', 'Home', `relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 ${currentPage === 'home' ? 'text-forest-950' : 'text-stone-600'}`)}
            {NAV_GROUPS.map((group) => {
              const isGroupActive = group.items.some((item) => item.id === currentPage);
              const isOpen = openDropdown === group.label;
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(group.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onFocus={() => setOpenDropdown(group.label)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenDropdown(null);
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenDropdown(isOpen ? null : group.label)}
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 ${isGroupActive ? 'text-forest-950' : 'text-stone-600'}`}
                  >
                    {group.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`absolute left-0 top-full z-50 mt-2 w-60 rounded-xl border border-stone-200 bg-white p-2 shadow-xl transition-all duration-150 ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
                    role="menu"
                  >
                    {group.items.map((item) => pageLink(
                      item.id,
                      item.label,
                      `${DESKTOP_LINK_CLASS} ${currentPage === item.id ? 'bg-forest-50 font-semibold text-forest-900' : ''}`,
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 lg:justify-self-end">
            {languageSelector('hidden sm:block')}
            {pageLink(
              'partner',
              'Support the Mission',
              `hidden rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-800 xl:inline-flex ${currentPage === 'partner' ? 'bg-harvest-600 text-white' : 'bg-forest-900 text-white hover:bg-forest-800'}`,
            )}
            <button
              type="button"
              ref={menuToggleRef}
              onClick={() => setMobileOpen((previous) => !previous)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-stone-800 transition-colors hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 lg:hidden"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="hf-mobile-navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-x-0 bottom-0 top-[4.1rem] bg-forest-950/35 lg:hidden"
          />
        )}

        <nav
          ref={mobileMenuRef}
          id="hf-mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!mobileOpen}
          inert={!mobileOpen}
          className={`fixed right-0 top-[4.1rem] z-[60] flex h-[calc(100dvh-4.1rem)] w-[clamp(300px,40vw,420px)] max-w-[calc(100vw-0.75rem)] flex-col overflow-hidden border-l border-stone-200 bg-[#faf8f4] shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none lg:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
            <div>
              <p className="font-serif text-lg font-semibold text-forest-950">Explore the Mission</p>
              <p className="mt-0.5 text-xs text-stone-500">Find a page or get involved</p>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-600 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3">
            {pageLink('home', 'Home', `${MOBILE_LINK_CLASS} mb-2 ${currentPage === 'home' ? 'bg-forest-900 text-white hover:bg-forest-800 hover:text-white' : ''}`)}
            {NAV_GROUPS.map((group) => (
              <section key={group.label} className="border-t border-stone-200 py-3">
                <h2 className="px-3 pb-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-harvest-600">{group.label}</h2>
                <div className="space-y-0.5">
                  {group.items.map((item) => pageLink(
                    item.id,
                    item.label,
                    `${MOBILE_LINK_CLASS} ${currentPage === item.id ? 'bg-forest-900 text-white hover:bg-forest-800 hover:text-white' : ''}`,
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="shrink-0 border-t border-stone-200 bg-[#faf8f4] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
            <div className="grid grid-cols-2 gap-2">
              {pageLink('join', 'Join Us', 'inline-flex min-h-11 items-center justify-center rounded-lg border border-forest-800 px-3 py-2.5 text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800')}
              {pageLink('partner', 'Support Mission', 'inline-flex min-h-11 items-center justify-center rounded-lg bg-forest-900 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500')}
            </div>
            <div className="mt-3">{languageSelector('block sm:hidden')}</div>
          </div>
        </nav>
      </header>
    </LocalizedContent>
  );
};
