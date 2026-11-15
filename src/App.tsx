/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { PageId } from './data/missionData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MissionPage } from './pages/MissionPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { GalleryPage } from './pages/GalleryPage';
import { JournalPage } from './pages/JournalPage';
import { PartnerPage } from './pages/PartnerPage';

const VALID_PAGES: PageId[] = ['home', 'mission', 'leadership', 'gallery', 'journal', 'partner'];

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
        {currentPage === 'partner' && <PartnerPage />}
      </main>

      <Footer onNavigate={(page) => handleNavigate(page)} />
    </div>
  );
}
