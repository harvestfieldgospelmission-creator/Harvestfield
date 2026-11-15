import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Expand } from 'lucide-react';
import {
  FOUNDER_PROFILE,
  GALLERY_PHOTOS,
  JOURNAL_POSTS,
  MANDATES,
  MISSION_INFO,
  PageId,
} from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { BankAccountsGrid } from '../components/BankAccountsGrid';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectArticle: (slug: string) => void;
  onOpenPhoto: (photoId: string) => void;
}

const HERO_SPOTS = [
  {
    id: 'cameroon',
    photoId: 'g1',
    label: 'Cameroon',
    image: '/assets/field/founder-linde-massa.jpg',
    location: 'Linde-Massa, Northern Cameroon',
    caption: 'Evang. David Abrebor during rural foreign mission outreach.',
  },
  {
    id: 'tchad',
    photoId: 'g3',
    label: 'Tchad Republic',
    image: '/assets/field/tchad-republic-mission.jpg',
    location: 'Tchad Republic Missions',
    caption: 'Cross-border congregational praise and gospel impartation.',
  },
  {
    id: 'cote-divoire',
    photoId: 'g2',
    label: "Côte d'Ivoire",
    image: '/assets/field/cote-divoire-conference.jpg',
    location: "Les Porteurs de Gloire · Côte d'Ivoire",
    caption: 'Prayer, teaching, and mission impartation conferences.',
  },
  {
    id: 'schools',
    photoId: 'g4',
    label: 'School Outreaches',
    image: '/assets/field/school-prayer-outreach.jpg',
    location: 'Omoku & Rivers State, Nigeria',
    caption: 'Intensive school outreaches and personal prayer with students.',
  },
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectArticle,
  onOpenPhoto,
}) => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedMandate, setExpandedMandate] = useState<string>(MANDATES[0].id);

  // Salvation / Prayer quick response state
  const [prayerName, setPrayerName] = useState('');
  const [prayerContact, setPrayerContact] = useState('');
  const [prayerMessage, setPrayerMessage] = useState('');
  const [prayerType, setPrayerType] = useState<
    'Salvation Decision' | 'Prayer Request' | 'Mission Inquiry'
  >('Salvation Decision');
  const [prayerSent, setPrayerSent] = useState(false);

  const activeSpot = HERO_SPOTS[heroIndex];

  const categories = ['All', 'Evangelism', 'Youth & Schools', 'Training', 'Global Missions'];
  const filteredMandates =
    activeCategory === 'All'
      ? MANDATES
      : MANDATES.filter((m) => m.category === activeCategory);

  const featuredPost = JOURNAL_POSTS[0];
  const secondaryPosts = JOURNAL_POSTS.slice(1, 3);
  const previewGallery = GALLERY_PHOTOS.slice(0, 6);

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerName.trim() || !prayerMessage.trim()) return;
    const subject = encodeURIComponent(`Harvestfield ${prayerType}`);
    const body = encodeURIComponent(
      `Name: ${prayerName.trim()}\nContact: ${prayerContact.trim() || 'Not provided'}\nRequest type: ${prayerType}\n\nMessage:\n${prayerMessage.trim()}`
    );
    window.location.href = `mailto:${MISSION_INFO.emails[0]}?subject=${subject}&body=${body}`;
    setPrayerSent(true);
    setPrayerName('');
    setPrayerContact('');
    setPrayerMessage('');
  };

  return (
    <div>
      {/* Cinematic mission welcome — uses the ministry's own field photographs */}
      <section
        className="relative isolate min-h-[520px] sm:min-h-[590px] lg:min-h-[650px] overflow-hidden bg-forest-950"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 24, 15, 0.94) 0%, rgba(5, 24, 15, 0.78) 48%, rgba(5, 24, 15, 0.24) 100%), linear-gradient(0deg, rgba(5, 24, 15, 0.42), transparent 55%), url("${activeSpot.image}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        aria-label={`Harvestfield mission field: ${activeSpot.location}`}
      >
        <div className="mx-auto flex min-h-[520px] sm:min-h-[590px] lg:min-h-[650px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl space-y-7 text-white">
            <p className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-harvest-400">
              <span className="h-px w-9 bg-harvest-400" />
              A Gospel Mission to the Nations
            </p>
            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Taking the Gospel to the nations. Bringing hope to every generation.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg lg:text-xl">
              From rural communities to cross-border mission fields, Harvest Field Gospel Mission Int’l equips believers to share Christ, serve people and strengthen local communities.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => onNavigate('mission')}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-harvest-500 px-6 py-3 text-sm font-semibold text-forest-950 shadow-lg shadow-black/15 transition-colors hover:bg-harvest-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Discover Our Mission <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('partner')}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/55 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Pray, Give &amp; Partner
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/20 pt-5 text-xs font-medium text-stone-200 sm:text-sm">
              <span>{activeSpot.location}</span>
              <span className="text-harvest-400" aria-hidden="true">•</span>
              <span>Rural &amp; Foreign Missions</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Split Editorial Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Typography Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <p className="text-xs sm:text-sm font-medium text-stone-600 tracking-wide">
                Omoku, Rivers State, Nigeria <span aria-hidden="true">·</span> Rural &amp; Foreign Missions
              </p>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.1rem] font-semibold tracking-tight text-forest-950 leading-[1.08]">
                A people prepared to carry the Gospel beyond borders.
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
                Harvest Field Gospel Mission Int&apos;l is a fellowship equipped for rural and foreign
                evangelism, intensive school outreaches, Christian counseling, and Harvest Field
                Academy—led by {FOUNDER_PROFILE.name}.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('partner')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-800"
                >
                  <span>Donate &amp; Partner</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('mission')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-forest-950 bg-limestone hover:bg-stone-200/80 border border-stone-300/70 rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
                >
                  <span>Explore Our Mission</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('leadership')}
                  className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-forest-900 hover:text-harvest-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Meet the Founder</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Field Location Selector */}
            <div className="pt-6 border-t border-stone-200">
              <p className="text-xs font-medium text-stone-500 mb-3">
                Active Mission Field Dispatches
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {HERO_SPOTS.map((spot, idx) => (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setHeroIndex(idx)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 ${
                      heroIndex === idx
                        ? 'bg-forest-900 text-white'
                        : 'bg-stone-200/60 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {spot.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Framed Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col">
            <button
              type="button"
              onClick={() => onOpenPhoto(activeSpot.photoId)}
              className="group relative flex-1 min-h-[340px] lg:min-h-full rounded-2xl overflow-hidden border border-stone-200 bg-stone-200 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
              aria-label={`Open ${activeSpot.location} photograph in gallery`}
            >
              <SafeImage
                src={activeSpot.image}
                alt={activeSpot.caption}
                className="w-full h-full lg:h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                fallbackTitle={activeSpot.location}
              />
              <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Expand className="w-4 h-4" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white">
                <p className="text-xs font-medium text-harvest-400 mb-1">
                  {activeSpot.location}
                </p>
                <p className="text-sm sm:text-base font-medium leading-snug text-stone-100">
                  {activeSpot.caption}
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* 2. Operational Utility Ribbon (Full-width 4-column strip below hero split) */}
        <div className="mt-10 bg-white border border-stone-200 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          <div className="p-5">
            <p className="text-xs font-medium text-stone-500 mb-1">Head Office</p>
            <p className="text-sm font-semibold text-stone-900 leading-snug">
              No. 17 Rev. Dr. Okoroma St, Omoku, Rivers State
            </p>
          </div>
          <div className="p-5">
            <p className="text-xs font-medium text-stone-500 mb-1">Office Hours</p>
            <p className="text-sm font-semibold text-stone-900 tabular-nums">
              Mon – Fri · 9:00 AM – 3:00 PM
            </p>
          </div>
          <div className="p-5">
            <p className="text-xs font-medium text-stone-500 mb-1">Nations Reached</p>
            <p className="text-sm font-semibold text-stone-900">
              Nigeria · Cameroon · Tchad · Côte d&apos;Ivoire
            </p>
          </div>
          <div className="p-5">
            <p className="text-xs font-medium text-stone-500 mb-1">Counseling &amp; Enquiries</p>
            <a
              href="tel:+2348132886893"
              className="text-sm font-semibold text-forest-900 hover:underline tabular-nums"
            >
              +234 813 288 6893
            </a>
          </div>
        </div>
      </section>

      {/* 3. What We Do — Core Mandates Showcase */}
      <section className="py-12 lg:py-14 border-t border-stone-200/80 bg-limestone/45">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
                What We Do
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-forest-950">
                Expressions of one Great Commission mandate.
              </h2>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div
              className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg self-start lg:self-auto"
              role="tablist"
              aria-label="Filter mission programs"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 ${
                    activeCategory === cat
                      ? 'bg-white text-forest-950 shadow-sm'
                      : 'text-stone-700 hover:text-stone-950'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMandates.map((item) => {
              const isExpanded = expandedMandate === item.id;
              return (
                <article
                  key={item.id}
                  className="group bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between transition-shadow duration-200 hover:shadow-md"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => setExpandedMandate(isExpanded ? '' : item.id)}
                      className="block w-full aspect-[16/9] bg-stone-200 overflow-hidden cursor-pointer focus-visible:outline-none"
                      aria-label={`Toggle details for ${item.title}`}
                    >
                      <SafeImage
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        fallbackTitle={item.title}
                      />
                    </button>
                    <div className="p-4 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <span className="font-mono font-semibold text-harvest-600 tabular-nums">
                          {item.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{item.category}</span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-forest-950 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {isExpanded ? item.description : item.summary}
                      </p>
                      {isExpanded && (
                        <div className="pt-3 space-y-3 border-t border-stone-100">
                          <ul className="space-y-1.5 text-xs text-stone-700">
                            {item.highlights.map((hl) => (
                              <li key={hl} className="leading-relaxed">
                                • {hl}
                              </li>
                            ))}
                          </ul>
                          <button
                            type="button"
                            onClick={() => onNavigate('partner')}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-harvest-600 hover:text-forest-900 transition-colors cursor-pointer"
                          >
                            <span>Support This Ministry Track</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <button
                      type="button"
                      onClick={() => setExpandedMandate(isExpanded ? '' : item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900 hover:text-harvest-600 transition-colors cursor-pointer py-1"
                    >
                      <span>{isExpanded ? 'Show Less' : 'Read Program Details'}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Field Galleries Preview */}
      <section className="py-12 lg:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
              Visual Witness
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-forest-950">
              Pictures from the field.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-600 transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
          >
            <span>Open Full Gallery ({GALLERY_PHOTOS.length} items)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewGallery.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => onOpenPhoto(photo.id)}
              className="group text-left bg-white border border-stone-200 rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
            >
              <div className="relative aspect-[4/3] w-full bg-stone-200 overflow-hidden">
                <SafeImage
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                  <span className="text-xs font-medium text-white bg-black/60 px-2.5 py-1 rounded-md">
                    View Photo
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <p className="text-xs text-stone-500">
                  {photo.region} <span aria-hidden="true">·</span> {photo.program}
                </p>
                <p className="font-serif text-base font-semibold text-forest-950 group-hover:text-forest-800 transition-colors leading-snug">
                  {photo.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 5. Mission Journal / Editorial Dispatches Preview */}
      <section className="py-12 lg:py-14 border-t border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
                Mission Journal
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-forest-950">
                Dispatches, testimonies &amp; teaching.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('journal')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-600 transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
            >
              <span>Read All Dispatches</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Lead Story */}
            <article className="group lg:col-span-7 bg-[#faf8f4] border border-stone-200 rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-md">
              <button
                type="button"
                onClick={() => onSelectArticle(featuredPost.slug)}
                className="block w-full aspect-[16/9] bg-stone-200 overflow-hidden cursor-pointer"
                aria-label={`Read ${featuredPost.title}`}
              >
                <SafeImage
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </button>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                  <span>{featuredPost.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredPost.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-forest-950 leading-tight">
                  <button
                    type="button"
                    onClick={() => onSelectArticle(featuredPost.slug)}
                    className="text-left hover:text-forest-800 transition-colors cursor-pointer"
                  >
                    {featuredPost.title}
                  </button>
                </h3>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectArticle(featuredPost.slug)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-600 transition-colors cursor-pointer"
                >
                  <span>Read Full Dispatch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>

            {/* Secondary Stories */}
            <div className="lg:col-span-5 space-y-6">
              {secondaryPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-[#faf8f4] border border-stone-200 rounded-xl p-6 space-y-3 transition-shadow duration-200 hover:shadow-sm"
                >
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-forest-950 leading-snug">
                    <button
                      type="button"
                      onClick={() => onSelectArticle(post.slug)}
                      className="text-left hover:text-forest-800 transition-colors cursor-pointer"
                    >
                      {post.title}
                    </button>
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectArticle(post.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900 hover:text-harvest-600 transition-colors cursor-pointer"
                  >
                    <span>Open Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gospel Invitation & Interactive Prayer Card */}
      <section className="py-12 lg:py-14 bg-forest-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-400">
              An Open Invitation
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
              {MISSION_INFO.salvationCall.headline}
            </h2>
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed">
              {MISSION_INFO.salvationCall.body}
            </p>
            <p className="font-serif italic text-xl text-harvest-400">
              {MISSION_INFO.salvationCall.closing}
            </p>
            <div className="pt-4 border-t border-forest-800 space-y-2 text-sm text-stone-300">
              <p className="font-medium text-white">Need someone to pray with you right now?</p>
              <p>
                Call our counseling desk Monday–Friday (9:00 AM – 3:00 PM) or send your prayer
                request directly using this form.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#faf8f4] text-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200">
            {prayerSent ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-forest-900 mx-auto" />
                <h3 className="font-serif text-2xl font-semibold text-forest-950">
                  Your email request is ready.
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Your email application should open with your request addressed to Harvest Field Gospel Mission Int&apos;l. Please send that email to complete your request. If it does not open, contact our office directly.
                </p>
                <button
                  type="button"
                  onClick={() => setPrayerSent(false)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handlePrayerSubmit} className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {(['Salvation Decision', 'Prayer Request', 'Mission Inquiry'] as const).map(
                    (type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPrayerType(type)}
                        className={`px-3 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                          prayerType === type
                            ? 'bg-forest-900 text-white'
                            : 'bg-stone-200/70 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {type}
                      </button>
                    )
                  )}
                </div>

                <div>
                  <label
                    htmlFor="home-prayer-name"
                    className="block text-xs font-semibold text-stone-700 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="home-prayer-name"
                    type="text"
                    required
                    value={prayerName}
                    onChange={(e) => setPrayerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <div>
                  <label
                    htmlFor="home-prayer-contact"
                    className="block text-xs font-semibold text-stone-700 mb-1.5"
                  >
                    Phone or Email (Optional)
                  </label>
                  <input
                    id="home-prayer-contact"
                    type="text"
                    value={prayerContact}
                    onChange={(e) => setPrayerContact(e.target.value)}
                    placeholder="+234 ... or email@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <div>
                  <label
                    htmlFor="home-prayer-msg"
                    className="block text-xs font-semibold text-stone-700 mb-1.5"
                  >
                    Prayer Request or Decision Note
                  </label>
                  <textarea
                    id="home-prayer-msg"
                    rows={3}
                    required
                    value={prayerMessage}
                    onChange={(e) => setPrayerMessage(e.target.value)}
                    placeholder="Share how we can pray with you or how you would like to connect..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-800"
                >
                  Submit Prayer &amp; Response
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. Stewardship & Giving Channels */}
      <section className="py-12 lg:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
              Support the Harvest
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-forest-950">
              Official Mission Banking Channels
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Fulfill your mission mandate for the nations through going, prayer, or sending regular
              financial support to rural and foreign outreach fields.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('partner')}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
          >
            <span>Open Giving &amp; Pledge Desk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <BankAccountsGrid />
      </section>
    </div>
  );
};
