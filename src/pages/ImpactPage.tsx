import React from 'react';
import { ArrowRight, BookOpen, Camera, HeartHandshake } from 'lucide-react';
import { GALLERY_PHOTOS, JOURNAL_POSTS, PageId } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { LocalizedContent, useLanguage } from '../i18n';
import { localizeJournalPost } from '../data/journalTranslations';
import { localizeGalleryPhoto } from '../data/galleryTranslations';
import { getPagePath } from '../routing';

interface ImpactPageProps {
  onNavigate: (page: PageId) => void;
  onSelectArticle: (slug: string) => void;
  onOpenPhoto: (photoId: string) => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({
  onNavigate,
  onSelectArticle,
  onOpenPhoto,
}) => {
  const { language } = useLanguage();
  const featuredPost = localizeJournalPost(JOURNAL_POSTS[0], language);
  const otherPosts = JOURNAL_POSTS.slice(1, 4).map((post) => localizeJournalPost(post, language));
  const featuredPhotos = GALLERY_PHOTOS
    .filter((photo) => photo.region !== 'Official Flyers')
    .slice(0, 6)
    .map((photo) => localizeGalleryPhoto(photo, language));

  return (
    <LocalizedContent>
      <div className="bg-[#faf8f4]">
        <section className="relative isolate overflow-hidden bg-forest-950 text-white">
          <div className="absolute inset-0" aria-hidden="true">
            <SafeImage src="/assets/field/linde-massa-village.jpg" alt="" className="h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/85 to-forest-950/45" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-harvest-400">The work, through our eyes</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Impact &amp; Stories</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">
              Explore photographs and field dispatches from Harvest Field Gospel Mission’s outreach, discipleship and cross-border mission work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={getPagePath('gallery')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-harvest-500 px-6 py-3 text-sm font-semibold text-forest-950 transition-colors hover:bg-harvest-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Explore the gallery <Camera className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={getPagePath('journal')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Read field stories <BookOpen className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-16 px-5 py-14 sm:px-8 sm:py-16 lg:space-y-20 lg:px-10 lg:py-20">
          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">A field dispatch</p>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">{featuredPost.title}</h2>
              <p className="text-base leading-relaxed text-stone-600">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500">
                <span>{featuredPost.category}</span><span aria-hidden="true">·</span><span>{featuredPost.region}</span><span aria-hidden="true">·</span><span>{featuredPost.date}</span>
              </div>
              <button type="button" onClick={() => onSelectArticle(featuredPost.slug)} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800">
                Read this field story <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <SafeImage src={featuredPost.coverImage} alt={featuredPost.title} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-3 text-xs leading-relaxed text-stone-600">{featuredPost.coverCaption}</figcaption>
            </figure>
          </section>

          <section className="space-y-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">Stories from the mission</p>
                <h2 className="font-serif text-3xl font-semibold text-forest-950 sm:text-4xl">Read, reflect and follow the work</h2>
                <p className="text-sm leading-relaxed text-stone-600 sm:text-base">Field reports, youth and school outreach, discipleship and devotional writing from the mission journal.</p>
              </div>
              <a href={getPagePath('journal')} className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-700">
                All journal articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {otherPosts.map((post) => (
                <article key={post.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                  <button type="button" onClick={() => onSelectArticle(post.slug)} className="block w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest-800">
                    <SafeImage src={post.coverImage} alt={post.title} className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
                  </button>
                  <div className="space-y-3 p-5">
                    <p className="text-xs font-semibold text-harvest-600">{post.category} <span className="px-1 text-stone-400" aria-hidden="true">·</span> {post.region} <span className="px-1 text-stone-400" aria-hidden="true">·</span> {post.date}</p>
                    <h3 className="font-serif text-xl font-semibold leading-snug text-forest-950">{post.title}</h3>
                    <p className="text-sm leading-relaxed text-stone-600">{post.excerpt}</p>
                    <button type="button" onClick={() => onSelectArticle(post.slug)} className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-700">
                      Read story <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">Photographs from the field</p>
                <h2 className="font-serif text-3xl font-semibold text-forest-950 sm:text-4xl">See where the work is happening</h2>
                <p className="text-sm leading-relaxed text-stone-600 sm:text-base">A selection of existing ministry photographs from Nigeria, Cameroon, Tchad and Côte d’Ivoire.</p>
              </div>
              <a href={getPagePath('gallery')} className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-700">
                View all photographs <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {featuredPhotos.map((photo) => (
                <button key={photo.id} type="button" onClick={() => onOpenPhoto(photo.id)} className="group overflow-hidden rounded-xl border border-stone-200 bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800">
                  <div className="overflow-hidden bg-stone-200">
                    <SafeImage src={photo.src} alt={photo.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="space-y-1 p-3 sm:p-4">
                    <p className="text-[11px] font-medium text-harvest-700">{photo.location} <span className="px-1 text-stone-400" aria-hidden="true">·</span> {photo.program}</p>
                    <h3 className="font-serif text-base font-semibold leading-snug text-forest-950 sm:text-lg">{photo.title}</h3>
                    <p className="text-xs leading-relaxed text-stone-600">{photo.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-forest-950 px-6 py-9 text-white sm:px-10 sm:py-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-400">Be part of the work</p>
                <h2 className="font-serif text-3xl font-semibold sm:text-4xl">The story continues through people who pray, serve and partner.</h2>
                <p className="text-sm leading-relaxed text-stone-200 sm:text-base">Discover practical ways to stand with Harvest Field Gospel Mission and support its ongoing ministry.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <button type="button" onClick={() => onNavigate('join')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-harvest-500 px-5 py-3 text-sm font-semibold text-forest-950 hover:bg-harvest-400">
                  Join the mission <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => onNavigate('partner')} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Pray and partner
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </LocalizedContent>
  );
};
