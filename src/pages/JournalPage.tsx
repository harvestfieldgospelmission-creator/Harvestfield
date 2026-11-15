import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Bookmark, Search } from 'lucide-react';
import { JOURNAL_POSTS, JournalPost } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';

interface JournalPageProps {
  selectedSlug: string | null;
  onSelectArticle: (slug: string | null) => void;
}

const CATEGORIES: ('All' | JournalPost['category'] | 'Saved')[] = [
  'All',
  'Field Reports',
  'Youth & Schools',
  'Discipleship',
  'Devotional',
  'Saved',
];

export const JournalPage: React.FC<JournalPageProps> = ({
  selectedSlug,
  onSelectArticle,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | JournalPost['category'] | 'Saved'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('hf_saved_articles');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const activeArticle = selectedSlug
    ? JOURNAL_POSTS.find((p) => p.slug === selectedSlug) || null
    : null;

  useEffect(() => {
    try {
      localStorage.setItem('hf_saved_articles', JSON.stringify(savedIds));
    } catch {
      // ignore storage quota
    }
  }, [savedIds]);

  useEffect(() => {
    if (!activeArticle) {
      setScrollProgress(0);
      return;
    }
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(100);
        return;
      }
      const pct = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));
      setScrollProgress(pct);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeArticle]);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Article Reading Mode
  if (activeArticle) {
    const isSaved = savedIds.includes(activeArticle.id);
    const relatedPosts = JOURNAL_POSTS.filter((p) => p.id !== activeArticle.id).slice(0, 2);

    return (
      <div>
        {/* Thin Reading Progress Bar */}
        <div className="fixed top-16 left-0 right-0 h-0.5 bg-stone-200 z-30">
          <div
            className="h-full bg-harvest-500 transition-[width] duration-100"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button
              type="button"
              onClick={() => onSelectArticle(null)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-600 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Mission Journal</span>
            </button>

            <button
              type="button"
              onClick={() => toggleSave(activeArticle.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-forest-900 text-white border-forest-900'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{isSaved ? 'Saved to Reading List' : 'Save Dispatch'}</span>
            </button>
          </div>

          <header className="max-w-3xl space-y-4 pb-8 border-b border-stone-200">
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
              <span className="font-semibold text-harvest-600">{activeArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{activeArticle.region}</span>
              <span aria-hidden="true">·</span>
              <span>{activeArticle.date}</span>
              <span aria-hidden="true">·</span>
              <span>{activeArticle.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest-950 leading-[1.12]">
              {activeArticle.title}
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              {activeArticle.subtitle}
            </p>
            <p className="text-xs sm:text-sm font-medium text-stone-700 pt-1">
              By {activeArticle.author} <span aria-hidden="true">·</span> {activeArticle.authorRole}
            </p>
          </header>

          <figure className="my-8 max-w-4xl">
            <div className="aspect-[16/9] bg-stone-200 rounded-2xl overflow-hidden border border-stone-200">
              <SafeImage
                src={activeArticle.coverImage}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-xs font-serif italic text-stone-500 mt-3">
              {activeArticle.coverCaption}
            </figcaption>
          </figure>

          {/* Asymmetric 70/30 Editorial Reading Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
            <div className="lg:col-span-8 max-w-2xl space-y-5 text-base sm:text-[17px] text-stone-800 leading-[1.78]">
              {activeArticle.body.map((para, index) => (
                <p key={index} className={index === 0 ? 'editorial-dropcap' : ''}>
                  {para}
                </p>
              ))}
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="bg-limestone/70 border border-stone-200 rounded-xl p-5 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
                  {activeArticle.marginNote.heading}
                </p>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {activeArticle.marginNote.detail}
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                  More Field Dispatches
                </p>
                <div className="space-y-4 divide-y divide-stone-100">
                  {relatedPosts.map((rel) => (
                    <button
                      key={rel.id}
                      type="button"
                      onClick={() => {
                        onSelectArticle(rel.slug);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="block w-full text-left pt-3 first:pt-0 space-y-1 cursor-pointer group"
                    >
                      <p className="text-xs text-stone-500">
                        {rel.category} <span aria-hidden="true">·</span> {rel.date}
                      </p>
                      <p className="font-serif text-base font-semibold text-forest-950 group-hover:text-harvest-600 transition-colors leading-snug">
                        {rel.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    );
  }

  // Filter logic for Journal Front Page
  const filteredPosts = JOURNAL_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === 'All'
        ? true
        : activeCategory === 'Saved'
        ? savedIds.includes(post.id)
        : post.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.region.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const leadPost = filteredPosts[0];
  const secondaryPosts = filteredPosts.slice(1, 3);
  const archivePosts = filteredPosts.slice(3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      {/* Header + Search + Category Bar */}
      <div className="space-y-6 pb-8 border-b border-stone-200">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
              Editorial Dispatches &amp; Blog
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-950">
              Mission Journal
            </h1>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Field reports from Northern Cameroon, Tchad Republic, and Côte d&apos;Ivoire alongside
              youth outreach stories, discipleship notes, and devotional calls.
            </p>
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dispatches or fields..."
              aria-label="Search mission journal dispatches"
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
            />
          </div>
        </div>

        <div
          className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/75 rounded-lg w-fit"
          role="tablist"
          aria-label="Filter journal dispatches"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-forest-950 shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              {cat === 'Saved' ? `Saved (${savedIds.length})` : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-forest-950">
            No matching dispatches found
          </h2>
          <p className="text-sm text-stone-600 max-w-md mx-auto">
            {activeCategory === 'Saved'
              ? 'You have not saved any dispatches yet. Open any article to bookmark it for later reading.'
              : 'Try clearing your search filter or switching to All Dispatches.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-forest-900 rounded-lg cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Tier 1: Lead Story */}
          {leadPost && (
            <article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-stone-200 rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <button
                type="button"
                onClick={() => onSelectArticle(leadPost.slug)}
                className="lg:col-span-6 aspect-[16/10] lg:aspect-auto min-h-[280px] bg-stone-200 overflow-hidden cursor-pointer"
                aria-label={`Read ${leadPost.title}`}
              >
                <SafeImage
                  src={leadPost.coverImage}
                  alt={leadPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </button>
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                    <span className="font-semibold text-harvest-600">{leadPost.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadPost.region}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadPost.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadPost.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-forest-950 leading-tight">
                    <button
                      type="button"
                      onClick={() => onSelectArticle(leadPost.slug)}
                      className="text-left hover:text-forest-800 transition-colors cursor-pointer"
                    >
                      {leadPost.title}
                    </button>
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    {leadPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onSelectArticle(leadPost.slug)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-600 transition-colors cursor-pointer"
                  >
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSave(leadPost.id)}
                    className="p-2 rounded-lg text-stone-500 hover:text-forest-900 hover:bg-stone-100 cursor-pointer"
                    aria-label="Bookmark article"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        savedIds.includes(leadPost.id) ? 'fill-forest-900 text-forest-900' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* Tier 2: Secondary Features */}
          {secondaryPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between transition-shadow duration-200 hover:shadow-md"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => onSelectArticle(post.slug)}
                      className="block w-full aspect-[16/9] bg-stone-200 overflow-hidden cursor-pointer"
                      aria-label={`Read ${post.title}`}
                    >
                      <SafeImage
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </button>
                    <div className="p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                        <span className="font-semibold text-harvest-600">{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-forest-950 leading-snug">
                        <button
                          type="button"
                          onClick={() => onSelectArticle(post.slug)}
                          className="text-left hover:text-forest-800 transition-colors cursor-pointer"
                        >
                          {post.title}
                        </button>
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectArticle(post.slug)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-900 hover:text-harvest-600 cursor-pointer"
                    >
                      <span>Open Dispatch</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleSave(post.id)}
                      className="p-2 rounded-lg text-stone-500 hover:text-forest-900 hover:bg-stone-100 cursor-pointer"
                      aria-label="Bookmark article"
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          savedIds.includes(post.id) ? 'fill-forest-900 text-forest-900' : ''
                        }`}
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Tier 3: Compact Archive Rows */}
          {archivePosts.length > 0 && (
            <div className="bg-white border border-stone-200 rounded-xl divide-y divide-stone-200">
              {archivePosts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 max-w-2xl">
                    <p className="text-xs text-stone-500">
                      <span className="font-semibold text-harvest-600">{post.category}</span>{' '}
                      <span aria-hidden="true">·</span> {post.region}{' '}
                      <span aria-hidden="true">·</span> {post.date}{' '}
                      <span aria-hidden="true">·</span> {post.readTime}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-forest-950">
                      <button
                        type="button"
                        onClick={() => onSelectArticle(post.slug)}
                        className="text-left hover:text-forest-800 transition-colors cursor-pointer"
                      >
                        {post.title}
                      </button>
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{post.excerpt}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectArticle(post.slug)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-forest-950 bg-limestone hover:bg-stone-200/80 rounded-lg whitespace-nowrap shrink-0 self-start sm:self-center cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
