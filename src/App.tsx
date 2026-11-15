/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { PageId } from './data/missionData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MissionPage } from './pages/MissionPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { GalleryPage } from './pages/GalleryPage';
import { JournalPage } from './pages/JournalPage';
import { PartnerPage } from './pages/PartnerPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

const VALID_PAGES: PageId[] = ['home', 'mission', 'leadership', 'gallery', 'journal', 'partner', 'contact', 'admin'];

function parseHash(): { page: PageId; subId: string | null } {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw) return { page: 'home', subId: null };
  const [pagePart, ...rest] = raw.split('/');
  const page = VALID_PAGES.includes(pagePart as PageId) ? (pagePart as PageId) : 'home';
  const subId = rest.length > 0 && rest[0] ? rest.join('/') : null;
  return { page, subId };
}

export default function App() {
  const initial = parseHash();
  const [currentPage, setCurrentPage] = useState<PageId>(initial.page);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(
    initial.page === 'journal' ? initial.subId : null
  );
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(
    initial.page === 'gallery' ? initial.subId : null
  );
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const next = parseHash();
      setCurrentPage(next.page);
      setSelectedArticleSlug(next.page === 'journal' ? next.subId : null);
      setSelectedPhotoId(next.page === 'gallery' ? next.subId : null);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const updateBackToTopVisibility = () => setShowBackToTop(window.scrollY > 400);
    updateBackToTopVisibility();
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateBackToTopVisibility);
  }, []);

  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const targets = document.querySelectorAll<HTMLElement>(
      'main section, main article, main aside, main .gallery-card'
    );
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
    );

    targets.forEach((target) => {
      target.classList.add('scroll-reveal');
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [currentPage, selectedArticleSlug, selectedPhotoId]);

  const handleNavigate = (page: PageId, subId: string | null = null) => {
    setCurrentPage(page);
    setSelectedArticleSlug(page === 'journal' ? subId : null);
    setSelectedPhotoId(page === 'gallery' ? subId : null);

    if (page === 'home') {
      window.location.hash = '';
    } else if (subId) {
      window.location.hash = `${page}/${subId}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (slug: string | null) => {
    setSelectedArticleSlug(slug);
    window.location.hash = slug ? `journal/${slug}` : 'journal';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGalleryPhoto = (photoId: string) => {
    handleNavigate('gallery', photoId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f4] text-[#1c1917] overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={(page) => handleNavigate(page)} />
      <div aria-hidden="true" className="h-[4.1rem] shrink-0" />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => handleNavigate(page)}
            onSelectArticle={(slug) => handleNavigate('journal', slug)}
            onOpenPhoto={handleOpenGalleryPhoto}
          />
        )}
        {currentPage === 'mission' && <MissionPage onNavigate={(page) => handleNavigate(page)} />}
        {currentPage === 'leadership' && <LeadershipPage onNavigate={(page) => handleNavigate(page)} />}
        {currentPage === 'gallery' && (
          <GalleryPage
            initialPhotoId={selectedPhotoId}
            onClearInitialPhoto={() => setSelectedPhotoId(null)}
          />
        )}
        {currentPage === 'journal' && (
          <JournalPage
            selectedSlug={selectedArticleSlug}
            onSelectArticle={handleSelectArticle}
          />
        )}
        {currentPage === 'partner' && (
          <PartnerPage onNavigate={(page) => handleNavigate(page)} />
        )}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'admin' && <AdminPage />}
      </main>

      <Footer onNavigate={(page) => handleNavigate(page)} />
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest-900 text-white shadow-lg transition-colors hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-400 focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
