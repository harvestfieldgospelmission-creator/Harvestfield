import React, { useEffect, useState } from 'react';
import { ArrowRight, Expand, X } from 'lucide-react';
import { MANDATES, MISSION_ABOUT, PageId } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { LocalizedContent } from '../i18n';

interface MissionPageProps {
  onNavigate: (page: PageId) => void;
}

const PARTICIPATION_TRACKS = [
  {
    id: 'going',
    tab: '01. Going',
    title: 'Step Into Rural & Foreign Fields',
    description:
      'Join short-term outreach expeditions or long-term missionary deployments to unreached communities across Rivers State, Northern Cameroon (Linde-Massa & Maroua), Tchad Republic, and Côte d’Ivoire.',
    points: [
      'Pre-deployment equipping through Harvest Field Academy (HFA)',
      'Cross-cultural evangelism, school ministry, and rural crusades',
      'Mentorship under seasoned field evangelists and leaders',
    ],
  },
  {
    id: 'praying',
    tab: '02. Praying',
    title: 'Uphold the Nations in Intercession',
    description:
      'Every open door in Linde-Massa, Maroua, Tchad, and our secondary schools is preceded by faithful prayer. Stand on the watch with our intercessory network.',
    points: [
      'Weekly intercession focus for rural and foreign field teams',
      'Prayer backing for revival meetings and evangelistic conferences',
      'Spiritual covering for new converts and Harvest Field Academy trainees',
    ],
  },
  {
    id: 'supporting',
    tab: '03. Regular Support',
    title: 'Send Regular Kingdom Support',
    description:
      'Consistent monthly or seasonal giving fuels transport, Bibles, crusade logistics, student outreach materials, and missionary welfare across West and Central Africa.',
    points: [
      'Transparent stewardship through official mission bank accounts',
      'Direct support for rural and foreign mission expeditions',
      'Regular field dispatches and testimonies sent to partners',
    ],
  },
];

const OFFICIAL_FLYERS = [
  {
    id: 'flyer-1',
    title: 'Core Mandate & Contact Bulletin',
    src: '/assets/aistudio/IMG-20261115-WA0003_39450dde.jpg',
    caption: 'What We Do, Office Hours, Omoku Head Office, Salvation Call, and Zenith Domiciliary Account.',
  },
  {
    id: 'flyer-2',
    title: 'Foreign Missions & Partnership Broadsheet',
    src: '/assets/aistudio/IMG-20261115-WA0005_9836fb01.jpg',
    caption: 'Vision call, Cameroon, Tchad Republic, Côte d’Ivoire missions, and Naira/Domiciliary accounts.',
  },
  {
    id: 'flyer-3',
    title: 'President & Founder Official Ministry Card',
    src: '/assets/aistudio/IMG-20261115-WA0004_fbda2947.jpg',
    caption: 'Evang. David Abrebor directory, 8 ministry avenues, Harvest Field Academy, and contact lines.',
  },
];

export const MissionPage: React.FC<MissionPageProps> = ({ onNavigate }) => {
  const [activeTrack, setActiveTrack] = useState(PARTICIPATION_TRACKS[0].id);
  const [selectedFlyer, setSelectedFlyer] = useState<(typeof OFFICIAL_FLYERS)[0] | null>(null);

  useEffect(() => {
    if (!selectedFlyer) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedFlyer(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedFlyer]);

  const track = PARTICIPATION_TRACKS.find((t) => t.id === activeTrack) || PARTICIPATION_TRACKS[0];

  return (
    <LocalizedContent>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 space-y-16 lg:space-y-20">
      <section className="space-y-8">
        <div className="max-w-4xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">
            About Us
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest-950 leading-[1.08] tracking-tight">
            Reaching the lost. Equipping believers. Serving communities.
          </h1>
          <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>{MISSION_ABOUT.introduction}</p>
            <p>{MISSION_ABOUT.equipping}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <article className="lg:col-span-7 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
              Our Gospel Outreach
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-forest-950">
              Practical ways we serve
            </h2>
            <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MISSION_ABOUT.outreachMethods.map((method, index) => (
                <li
                  key={method}
                  className="flex items-start gap-3 rounded-xl bg-[#faf8f4] p-4 text-sm font-medium leading-relaxed text-stone-800"
                >
                  <span className="font-mono text-xs font-semibold text-harvest-600 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{method}</span>
                </li>
              ))}
            </ol>
          </article>

          <div className="lg:col-span-5 space-y-6">
            <article className="rounded-2xl border border-stone-200 bg-limestone/60 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
                Beyond Evangelism
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-forest-950">
                Community objectives
              </h2>
              <ul className="mt-5 space-y-4">
                {MISSION_ABOUT.communityObjectives.map((objective, index) => (
                  <li key={objective} className="flex items-start gap-3 text-sm leading-relaxed text-stone-700">
                    <span className="font-mono text-xs font-semibold text-harvest-600 tabular-nums">
                      0{index + 1}
                    </span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </article>

            <aside className="rounded-2xl bg-forest-950 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-harvest-400">
                Our Home &amp; Registration
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold">
                Rooted in Omoku, Rivers State
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-200">
                {MISSION_ABOUT.registration}
              </p>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-harvest-400 px-4 py-2.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-harvest-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact the Mission <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* Fulfill Your Mandate: Going / Praying / Supporting */}
      <section className="bg-limestone/60 border border-stone-200 rounded-2xl p-6 sm:p-10 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
              Three Ways to Participate
            </p>
            <h2 className="font-serif text-3xl font-semibold text-forest-950">
              Fulfill your mission mandate for the nations.
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-stone-200/80 rounded-lg self-start">
            {PARTICIPATION_TRACKS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTrack(t.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeTrack === t.id
                    ? 'bg-white text-forest-950 shadow-sm'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                {t.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-stone-300/60 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-forest-950">{track.title}</h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">{track.description}</p>
            <button
              type="button"
              onClick={() => onNavigate('partner')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-harvest-600 transition-colors cursor-pointer"
            >
              <span>Connect With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <ul className="lg:col-span-6 space-y-3 bg-white border border-stone-200 rounded-xl p-6">
            {track.points.map((pt, i) => (
              <li key={pt} className="flex items-start gap-3 text-sm text-stone-800">
                <span className="font-mono text-xs font-semibold text-harvest-600 pt-0.5 tabular-nums">
                  0{i + 1}
                </span>
                <span className="leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Complete Ministry Tracks & Harvest Field Academy */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
            Taking the Nations for Christ Via
          </p>
          <h2 className="font-serif text-3xl font-semibold text-forest-950">
            Ministry tracks &amp; Harvest Field Academy (HFA)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANDATES.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between transition-shadow duration-200 hover:shadow-md"
            >
              <div>
                <div className="aspect-[16/10] bg-stone-200 overflow-hidden">
                  <SafeImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="font-mono text-xs font-semibold text-harvest-600 tabular-nums">
                    {item.index} / {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-forest-950">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="px-6 pb-5">
                <button
                  type="button"
                  onClick={() => onNavigate('partner')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900 hover:text-harvest-600 transition-colors cursor-pointer"
                >
                  <span>Sponsor This Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Flyers Archive */}
      <section className="space-y-8 pt-6 border-t border-stone-200">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
            Archival Publications
          </p>
          <h2 className="font-serif text-3xl font-semibold text-forest-950">
            Original Mission Flyers
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Inspect or reference our official printed flyers in full detail. Click any flyer to
            enlarge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFICIAL_FLYERS.map((flyer) => (
            <button
              key={flyer.id}
              type="button"
              onClick={() => setSelectedFlyer(flyer)}
              className="text-left bg-white border border-stone-200 rounded-xl overflow-hidden group transition-shadow duration-200 hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
            >
              <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
                <SafeImage
                  src={flyer.src}
                  alt={flyer.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-xs font-medium text-white">Inspect Full Flyer</span>
                  <span className="w-8 h-8 rounded-lg bg-black/60 text-white inline-flex items-center justify-center">
                    <Expand className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-1.5">
                <h3 className="font-serif text-lg font-semibold text-forest-950">{flyer.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{flyer.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Flyer Lightbox */}
      {selectedFlyer && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedFlyer.title}
          onClick={() => setSelectedFlyer(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#faf8f4] rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
              <div>
                <h3 className="font-serif text-lg font-semibold text-forest-950">
                  {selectedFlyer.title}
                </h3>
                <p className="text-xs text-stone-600">{selectedFlyer.caption}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFlyer(null)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-900 cursor-pointer"
                aria-label="Close flyer preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-4 bg-stone-100 flex justify-center">
              <img
                src={selectedFlyer.src}
                alt={selectedFlyer.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
    </LocalizedContent>
  );
};
