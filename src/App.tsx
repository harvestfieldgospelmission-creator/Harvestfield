/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUp } from 'lucide-react';
import { JOURNAL_POSTS, PageId, SITE_ORIGIN } from './data/missionData';
import { getPagePath } from './routing';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MissionPage } from './pages/MissionPage';
import { AcademyPage } from './pages/AcademyPage';
import { ImpactPage } from './pages/ImpactPage';
import { PrayerPage } from './pages/PrayerPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { GalleryPage } from './pages/GalleryPage';
import { JournalPage } from './pages/JournalPage';
import { PartnerPage } from './pages/PartnerPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { JoinUsPage } from './pages/JoinUsPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { LanguageProvider, type Language } from './i18n';
import { localizeJournalPost } from './data/journalTranslations';

const VALID_PAGES: PageId[] = [
  'home',
  'mission',
  'academy',
  'impact',
  'leadership',
  'gallery',
  'journal',
  'partner',
  'contact',
  'join',
  'prayer',
  'admin',
];

const PAGE_METADATA: Record<PageId, { title: string; description: string }> = {
  home: {
    title: "Harvest Field Gospel Mission Int'l — Taking the Nations for Christ",
    description:
      'Harvest Field Gospel Mission Int’l equips believers for evangelism, discipleship, and rural and foreign missions.',
  },
  mission: {
    title: "Our Mission | Harvest Field Gospel Mission Int'l",
    description:
      'Learn about Harvest Field Gospel Mission, its outreach, discipleship, and community work.',
  },
  academy: {
    title: "Harvest Field Academy | Harvest Field Gospel Mission Int'l",
    description: 'Discover Harvest Field Academy and the mission’s vision for equipping believers for discipleship, evangelism and cross-cultural ministry.',
  },
  impact: {
    title: "Impact & Stories | Harvest Field Gospel Mission Int'l",
    description: 'Explore field photographs and journal stories from Harvest Field Gospel Mission outreach, discipleship and cross-border mission work.',
  },
  leadership: {
    title: "Leadership | Harvest Field Gospel Mission Int'l",
    description:
      'Learn about the founder of Harvest Field Gospel Mission and the ministry’s leadership.',
  },
  gallery: {
    title: "Mission Gallery | Harvest Field Gospel Mission Int'l",
    description:
      'View photographs from Harvest Field school outreaches, rural evangelism, and foreign missions.',
  },
  journal: {
    title: "Mission Journal | Harvest Field Gospel Mission Int'l",
    description:
      'Read field reports, youth outreach stories, discipleship notes, and ministry articles.',
  },
  partner: {
    title: "Partner with Us | Harvest Field Gospel Mission Int'l",
    description:
      'Learn how to pray, give, and partner with Harvest Field Gospel Mission.',
  },
  contact: {
    title: "Contact | Harvest Field Gospel Mission Int'l",
    description:
      'Contact Harvest Field Gospel Mission for prayer, counselling, outreach invitations, or enquiries.',
  },
  join: {
    title: "Join Us | Harvest Field Gospel Mission Int'l",
    description:
      'Apply to serve with Harvest Field Gospel Mission and tell us what inspires you to join.',
  },
  prayer: {
    title: "Prayer Request | Harvest Field Gospel Mission Int'l",
    description: 'Share a prayer request with the Harvest Field Gospel Mission team.',
  },
  admin: {
    title: "Staff Sign In | Harvest Field Gospel Mission Int'l",
    description: 'Staff sign-in for the Harvest Field Gospel Mission blog editor.',
  },
};


const PAGE_METADATA_KEYS: Record<PageId, { title: string; description: string }> = {
  home: { title: 'metadata.home.title', description: 'metadata.home.description' },
  mission: { title: 'metadata.mission.title', description: 'metadata.mission.description' },
  academy: { title: 'metadata.academy.title', description: 'metadata.academy.description' },
  impact: { title: 'metadata.impact.title', description: 'metadata.impact.description' },
  leadership: { title: 'metadata.leadership.title', description: 'metadata.leadership.description' },
  gallery: { title: 'metadata.gallery.title', description: 'metadata.gallery.description' },
  journal: { title: 'metadata.journal.title', description: 'metadata.journal.description' },
  partner: { title: 'metadata.partner.title', description: 'metadata.partner.description' },
  contact: { title: 'metadata.contact.title', description: 'metadata.contact.description' },
  join: { title: 'metadata.join.title', description: 'metadata.join.description' },
  prayer: { title: 'metadata.prayer.title', description: 'metadata.prayer.description' },
  admin: { title: 'metadata.admin.title', description: 'metadata.admin.description' },
};

function parseRoute(raw: string): { page: PageId; subId: string | null } {
  const cleaned = raw.replace(/^#\/?/, '').replace(/^\/+|\/+$/g, '');
  if (!cleaned) return { page: 'home', subId: null };
  const [pagePart, ...rest] = cleaned.split('/');
  const page = VALID_PAGES.includes(pagePart as PageId) ? (pagePart as PageId) : 'home';
  const subId = rest.length > 0 && rest[0] ? rest.join('/') : null;
  return { page, subId };
}

function parseLocation(): { page: PageId; subId: string | null } {
  return parseRoute(window.location.hash || window.location.pathname);
}

export default function App() {
  const { t, i18n } = useTranslation();
  const initial = parseLocation();
  const [currentPage, setCurrentPage] = useState<PageId>(initial.page);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(
    initial.page === 'journal' ? initial.subId : null
  );
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(
    initial.page === 'gallery' ? initial.subId : null
  );
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isThankYouPage, setIsThankYouPage] = useState(window.location.pathname === '/thank-you');

  useEffect(() => {
    const syncRoute = () => {
      const next = parseLocation();
      setIsThankYouPage(window.location.pathname === '/thank-you');
      setCurrentPage(next.page);
      setSelectedArticleSlug(next.page === 'journal' ? next.subId : null);
      setSelectedPhotoId(next.page === 'gallery' ? next.subId : null);
      if (window.location.hash) {
        window.history.replaceState(null, '', getPagePath(next.page, next.subId));
      }
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  useEffect(() => {
    if (isThankYouPage) {
      document.title = t('metadata.thankYou.title');
      const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (description) description.content = t('metadata.thankYou.description');
      let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
      if (!robots) {
        robots = document.createElement('meta');
        robots.name = 'robots';
        document.head.appendChild(robots);
      }
      robots.content = 'noindex, nofollow';
      return;
    }

    const metadata = PAGE_METADATA[currentPage];
    const article = selectedArticleSlug
      ? JOURNAL_POSTS.find((post) => post.slug === selectedArticleSlug)
      : null;
    const localizedArticle = article
      ? localizeJournalPost(article, i18n.language as Language)
      : null;
    document.title = localizedArticle
      ? `${localizedArticle.title} | Harvest Field Journal`
      : t(PAGE_METADATA_KEYS[currentPage].title, { defaultValue: metadata.title });

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = localizedArticle?.excerpt || t(PAGE_METADATA_KEYS[currentPage].description, { defaultValue: metadata.description });

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    const routeSubId =
      currentPage === 'journal' ? selectedArticleSlug : currentPage === 'gallery' ? selectedPhotoId : null;
    canonical.href = `${SITE_ORIGIN}${getPagePath(currentPage, routeSubId)}`;

    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = currentPage === 'admin' ? 'noindex, nofollow' : 'index, follow';
  }, [currentPage, selectedArticleSlug, selectedPhotoId, isThankYouPage, t]);

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
    setIsThankYouPage(false);
    setCurrentPage(page);
    setSelectedArticleSlug(page === 'journal' ? subId : null);
    setSelectedPhotoId(page === 'gallery' ? subId : null);
    window.history.pushState(null, '', getPagePath(page, subId));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (slug: string | null) => {
    handleNavigate('journal', slug);
  };

  const handleOpenGalleryPhoto = (photoId: string) => {
    handleNavigate('gallery', photoId);
  };

  const handleClearInitialPhoto = () => {
    setSelectedPhotoId(null);
    if (currentPage === 'gallery' && selectedPhotoId) {
      window.history.replaceState(null, '', getPagePath('gallery'));
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#faf8f4] text-[#1c1917] overflow-x-hidden">
        <Navbar currentPage={currentPage} onNavigate={(page) => handleNavigate(page)} />
        <div aria-hidden="true" className="h-[4.1rem] shrink-0" />

        <main className="flex-1">
        {isThankYouPage ? <ThankYouPage /> : <>
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => handleNavigate(page)}
            onSelectArticle={(slug) => handleNavigate('journal', slug)}
            onOpenPhoto={handleOpenGalleryPhoto}
          />
        )}
        {currentPage === 'mission' && <MissionPage onNavigate={(page) => handleNavigate(page)} />}
        {currentPage === 'academy' && <AcademyPage onNavigate={(page) => handleNavigate(page)} />}
        {currentPage === 'impact' && <ImpactPage onNavigate={(page) => handleNavigate(page)} onSelectArticle={(slug) => handleNavigate('journal', slug)} onOpenPhoto={handleOpenGalleryPhoto} />}
        {currentPage === 'leadership' && <LeadershipPage onNavigate={(page) => handleNavigate(page)} />}
        {currentPage === 'gallery' && (
          <GalleryPage
            initialPhotoId={selectedPhotoId}
            onClearInitialPhoto={handleClearInitialPhoto}
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
        {currentPage === 'join' && <JoinUsPage />}
        {currentPage === 'prayer' && <PrayerPage />}
        {currentPage === 'admin' && <AdminPage />}
        </>}
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
    </LanguageProvider>
  );
}
