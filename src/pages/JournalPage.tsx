import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Bookmark, Search, Share2 } from 'lucide-react';
import { JOURNAL_POSTS, JournalPost, SITE_ORIGIN } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { fetchPublishedPosts } from '../lib/sanity';
import { LocalizedContent, useLanguage } from '../i18n';
import { localizeJournalPost } from '../data/journalTranslations';
import { getPagePath } from '../routing';

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
  const { language } = useLanguage();
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
  const [shareNotice, setShareNotice] = useState('');
  const [postsError, setPostsError] = useState(false);

  const [publishedPosts, setPublishedPosts] = useState<JournalPost[]>([]);
  useEffect(() => {
    let alive = true;
    fetchPublishedPosts(language)
      .then((items) => { if (alive) setPublishedPosts(items); })
      .catch((error: unknown) => {
        console.error('Unable to load published blog articles:', error);
        if (alive) setPostsError(true);
      });
    return () => { alive = false; };
  }, [language]);
  // Use the editorial starter stories only until the first CMS article is published.
  // Once Sanity has content, the blog is driven entirely by the pastor's published articles.
  const posts = publishedPosts.length > 0
    ? publishedPosts
    : JOURNAL_POSTS.map((post) => localizeJournalPost(post, language));

  const activeArticle = selectedSlug
    ? posts.find((p) => p.slug === selectedSlug) || null
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

  const shareArticle = async (post: JournalPost) => {
    const articleUrl = new URL(getPagePath('journal', post.slug), SITE_ORIGIN).toString();

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: articleUrl,
        });
        setShareNotice('Article shared.');
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(articleUrl);
      setShareNotice('Article link copied to clipboard.');
    } catch {
      setShareNotice('Unable to share the article. Copy its URL from the address bar.');
    }
  };

  const handleArticleLink = (
    event: React.MouseEvent<HTMLAnchorElement>,
    slug: string
  ) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onSelectArticle(slug);
  };

  // Article Reading Mode
  if (activeArticle) {
    const isSaved = savedIds.includes(activeArticle.id);
    const activeArticleUrl = new URL(getPagePath('journal', activeArticle.slug), SITE_ORIGIN).toString();
    const relatedPosts = posts.filter((p) => p.id !== activeArticle.id).slice(0, 2);

    return (
      <LocalizedContent>
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
              <span>Back to Harvest Field Blog</span>
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
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${activeArticle.title} ${activeArticleUrl}`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border border-stone-200 bg-white text-stone-700 transition-colors hover:bg-stone-100"
            >WhatsApp</a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(activeArticleUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border border-stone-200 bg-white text-stone-700 transition-colors hover:bg-stone-100"
            >Facebook</a>
            <button
              type="button"
              onClick={() => void shareArticle(activeArticle)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border border-stone-200 bg-white text-stone-700 transition-colors hover:bg-stone-100 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Share Article</span>
            </button>
          </div>
          {shareNotice && (
            <p className="mb-6 text-sm text-forest-800" role="status" aria-live="polite">
              {shareNotice}
            </p>
          )}

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
              {activeArticle.bodyBlocks?.length ? activeArticle.bodyBlocks.map((block, index) => {
                if (block._type === 'image' && block.asset?.url) {
                  return (
                    <figure key={block._key || index} className="my-8">
                      <img src={block.asset.url} alt={block.alt || activeArticle.title} loading="lazy" className="w-full rounded-xl object-cover" />
                      {block.caption && <figcaption className="mt-2 text-xs italic text-stone-500">{block.caption}</figcaption>}
                    </figure>
                  );
                }
                if (block._type === 'block') {
                  const content = (block.children || []).map((child, childIndex) => {
                    let node: React.ReactNode = child.text || '';
                    (child.marks || []).forEach((mark) => {
                      if (mark === 'strong') node = <strong>{node}</strong>;
                      else if (mark === 'em') node = <em>{node}</em>;
                      else if (mark === 'underline') node = <u>{node}</u>;
                      else if (mark === 'code') node = <code className="rounded bg-stone-100 px-1 py-0.5 text-[.9em]">{node}</code>;
                      else {
                        const definition = (block.markDefs || []).find((item) => item._key === mark);
                        if (definition?._type === 'link' && definition.href) {
                          node = <a href={definition.href} target="_blank" rel="noreferrer" className="font-medium text-harvest-700 underline underline-offset-4 hover:text-forest-900">{node}</a>;
                        }
                      }
                    });
                    return <React.Fragment key={childIndex}>{node}</React.Fragment>;
                  });
                  if (!(block.children || []).some((child) => child.text)) return null;
                  if (block.style === 'h2' || block.style === 'h3') {
                    return block.style === 'h2'
                      ? <h2 key={block._key || index} className="font-serif text-2xl font-semibold text-forest-950 mt-8">{content}</h2>
                      : <h3 key={block._key || index} className="font-serif text-xl font-semibold text-forest-950 mt-6">{content}</h3>;
                  }
                  return <p key={block._key || index} className={index === 0 ? 'editorial-dropcap' : ''}>{content}</p>;
                }
                return null;
              }) : activeArticle.body.map((para, index) => (
                <p key={index} className={index === 0 ? 'editorial-dropcap' : ''}>{para}</p>
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
                  Related Articles
                </p>
                <div className="space-y-4 divide-y divide-stone-100">
                  {relatedPosts.map((rel) => (
                    <a
                      key={rel.id}
                      href={getPagePath('journal', rel.slug)}
                      onClick={(event) => {
                        handleArticleLink(event, rel.slug);
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
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
      </LocalizedContent>
    );
  }

  // Filter logic for Journal Front Page
  const filteredPosts = posts.filter((post) => {
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
      post.region.toLowerCase().includes(q) ||
      post.author.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const leadPost = filteredPosts.find((post) => post.featured) || filteredPosts[0];
  const remainingPosts = filteredPosts.filter((post) => post.id !== leadPost?.id);
  const secondaryPosts = remainingPosts.slice(0, 2);
  const archivePosts = remainingPosts.slice(2);

  return (
    <LocalizedContent>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      {/* Editorial masthead, search and category navigation */}
      <div className="space-y-6 pb-8 border-b border-stone-200">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[.22em] text-harvest-700">
              Stories from the Mission Field · Faith in Action
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-forest-950">
              Stories that <span className="text-harvest-700">carry hope.</span>
            </h1>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Read firsthand mission stories, field reports, youth outreach, discipleship reflections and devotionals from Harvest Field Gospel Mission across Africa.
            </p>
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles or fields..."
              aria-label="Search blog articles"
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
            />
          </div>
        </div>

        <div
          className="flex max-w-full flex-nowrap items-center gap-1.5 overflow-x-auto p-1 bg-stone-100 rounded-xl w-fit"
          role="tablist"
          aria-label="Filter blog articles"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
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
      {postsError && (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900" role="status">We could not refresh the latest blog articles just now. Please try again shortly.</p>
      )}
      {shareNotice && (
        <p className="text-sm text-forest-800" role="status" aria-live="polite">
          {shareNotice}
        </p>
      )}

      {/* Empty State */}
      {filteredPosts.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-forest-950">
            No stories found
          </h2>
          <p className="text-sm text-stone-600 max-w-md mx-auto">
            {activeCategory === 'Saved'
              ? 'You have not saved any dispatches yet. Open any article to bookmark it for later reading.'
              : 'Try clearing your search filter or switching to All Articles.'}
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
              <a
                href={getPagePath('journal', leadPost.slug)}
                onClick={(event) => handleArticleLink(event, leadPost.slug)}
                className="block lg:col-span-6 aspect-[16/10] lg:aspect-auto min-h-[280px] bg-stone-200 overflow-hidden cursor-pointer"
                aria-label={`Read ${leadPost.title}`}
              >
                <SafeImage
                  src={leadPost.coverImage}
                  alt={leadPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </a>
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                  {leadPost.featured && <span className="inline-flex rounded-full bg-harvest-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em] text-harvest-800">Featured story</span>}
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
                    <a
                      href={getPagePath('journal', leadPost.slug)}
                      onClick={(event) => handleArticleLink(event, leadPost.slug)}
                      className="text-left hover:text-forest-800 transition-colors cursor-pointer"
                    >
                      {leadPost.title}
                    </a>
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    {leadPost.excerpt}
                  </p>
                  <p className="text-xs font-medium text-stone-500">By {leadPost.author}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={getPagePath('journal', leadPost.slug)}
                      onClick={(event) => handleArticleLink(event, leadPost.slug)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-600 transition-colors cursor-pointer"
                    >
                      <span>Read the story</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => void shareArticle(leadPost)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-600 hover:text-forest-900 transition-colors cursor-pointer"
                    >
                      <Share2 className="w-4 h-4" aria-hidden="true" />
                      <span>Share</span>
                    </button>
                  </div>
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
                    <a
                      href={getPagePath('journal', post.slug)}
                      onClick={(event) => handleArticleLink(event, post.slug)}
                      className="block w-full aspect-[16/9] bg-stone-200 overflow-hidden cursor-pointer"
                      aria-label={`Read ${post.title}`}
                    >
                      <SafeImage
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </a>
                    <div className="p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                        <span className="font-semibold text-harvest-600">{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-forest-950 leading-snug">
                        <a
                          href={getPagePath('journal', post.slug)}
                          onClick={(event) => handleArticleLink(event, post.slug)}
                          className="text-left hover:text-forest-800 transition-colors cursor-pointer"
                        >
                          {post.title}
                        </a>
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={getPagePath('journal', post.slug)}
                        onClick={(event) => handleArticleLink(event, post.slug)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-900 hover:text-harvest-600 cursor-pointer"
                      >
                        <span>Open Dispatch</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => void shareArticle(post)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-600 hover:text-forest-900 cursor-pointer"
                      >
                        <Share2 className="w-4 h-4" aria-hidden="true" />
                        <span>Share</span>
                      </button>
                    </div>
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

          {/* Tier 3: More stories — consistent image-led article cards */}
          {archivePosts.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-end justify-between gap-4 border-b border-stone-200 pb-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.2em] text-harvest-600">Continue exploring</p>
                  <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-forest-950">More from the field</h2>
                </div>
                <span className="text-xs text-stone-500">{archivePosts.length} {archivePosts.length === 1 ? 'story' : 'stories'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {archivePosts.map((post) => (
                  <article key={post.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <a href={getPagePath('journal', post.slug)} onClick={(event) => handleArticleLink(event, post.slug)} className="block aspect-[16/10] overflow-hidden bg-stone-200" aria-label={`Read ${post.title}`}>
                      <SafeImage src={post.coverImage} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </a>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-500">
                        <span className="font-bold uppercase tracking-wide text-harvest-700">{post.category}</span>
                        <span aria-hidden="true">•</span><span>{post.date}</span>
                        <span aria-hidden="true">•</span><span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-forest-950">
                        <a href={getPagePath('journal', post.slug)} onClick={(event) => handleArticleLink(event, post.slug)} className="transition-colors hover:text-harvest-700">{post.title}</a>
                      </h3>
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600">{post.excerpt}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                        <a href={getPagePath('journal', post.slug)} onClick={(event) => handleArticleLink(event, post.slug)} className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-700">
                          Read story <ArrowRight className="h-4 w-4" />
                        </a>
                        <button type="button" onClick={() => void shareArticle(post)} className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-stone-600 transition-colors hover:bg-stone-100 hover:text-forest-950" aria-label={`Share ${post.title}`}>
                          <Share2 className="h-4 w-4" /> Share
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
    </LocalizedContent>
  );
};
