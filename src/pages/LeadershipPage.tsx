import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FOUNDER_PROFILE, PageId } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { LocalizedContent } from '../i18n';

interface LeadershipPageProps {
  onNavigate: (page: PageId) => void;
}

const DIRECTOR_PROFILE = {
  name: 'Pst Wobo Praise',
  role: 'Mission Director',
  image: '/assets/field/pastor-wobo-praise.jpeg',
  alt: 'Pastor Wobo Praise, Mission Director',
  summary: 'Pst Wobo Praise serves as the Mission Director of Harvest Field Gospel Mission.',
};

const FEATURED_PROFILES = [
  {
    name: 'Susan David',
    role: 'Vice President',
    image: '/assets/field/susan-david-vice-president.jpeg',
    alt: 'Susan David, Vice President',
    summary: 'Susan David serves as Vice President of Harvest Field Gospel Mission.',
  },
];

const LEADERSHIP_TEAM = [
  {
    name: DIRECTOR_PROFILE.name,
    role: DIRECTOR_PROFILE.role,
    image: DIRECTOR_PROFILE.image,
    alt: DIRECTOR_PROFILE.alt,
  },
  {
    name: 'Pst Jonathan Omonogun',
    role: 'Prayer Director',
    image: '/assets/field/jonathan-omonogun-prayer-director.jpeg',
    alt: 'Pastor Jonathan Omonogun, Prayer Director',
  },
  {
    name: 'Pst Innocent Ebeku Akpotu',
    role: 'Mission Pastor',
    image: '/assets/field/innocent-ebeku-akpotu.jpeg',
    alt: 'Pastor Innocent Ebeku Akpotu, Mission Pastor',
  },
  {
    name: 'Teacher Ernest Elems-Peter Olowu',
    role: 'P.R.O.',
    image: '/assets/field/ernest-elems-peter-olowu.jpeg',
    alt: 'Teacher Ernest Elems-Peter Olowu, Public Relations Officer',
  },
  {
    name: 'EVANG. GOODLUCK PAUL AFFANGODEH',
    role: 'Mission Team Member',
    image: '/assets/field/evang-goodluck-paul-affangodeh.webp',
    alt: 'Evang. Goodluck Paul Affangodeh',
  },
  {
    name: 'Enotoabasi Goodluck Paul',
    role: 'Mission Team Member',
    image: '/assets/field/enotoabasi-goodluck-paul.webp',
    alt: 'Enotoabasi Goodluck Paul',
  },
  {
    name: 'Barr. Grace Emuaye',
    role: 'Mission Team Member',
    image: '/assets/field/barr-grace-emuaye.jpeg',
    alt: 'Barr. Grace Emuaye, Mission Team Member',
  },
];

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate }) => {
  return (
    <LocalizedContent>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-12 lg:space-y-16">
      <section
        aria-labelledby="featured-leadership-heading"
        className="rounded-3xl border border-[#d6e0ea] bg-[#f1f5f9] px-4 py-8 shadow-sm sm:px-8 sm:py-10"
      >
        <div className="mx-auto hidden max-w-3xl space-y-2 text-center sm:block">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#008064]">
            Meet Our Team
          </p>
          <h1
            id="featured-leadership-heading"
            className="font-sans text-3xl font-bold text-[#07386b] sm:text-4xl"
          >
            Founder &amp; Leadership
          </h1>
        </div>

        <article className="mt-8 grid grid-cols-1 items-center gap-6 rounded-3xl border border-[#d6e0ea] bg-white p-4 shadow-sm sm:p-6 md:grid-cols-2 md:gap-8 lg:p-8">
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-[25rem] overflow-hidden rounded-[1.5rem] bg-[#07386b] p-3"
            style={{
              backgroundImage:
                'repeating-radial-gradient(circle at 70% 22%, transparent 0, transparent 24px, rgba(255,255,255,.16) 25px, transparent 26px)',
            }}
          >
            <div className="absolute inset-3 overflow-hidden rounded-[1.1rem]">
              <SafeImage
                src={FOUNDER_PROFILE.portrait}
                alt="Evang. David Abrebor, President and Founder of Harvest Field Gospel Mission Int'l"
                className="h-full w-full object-cover object-[center_16%]"
                fallbackTitle={FOUNDER_PROFILE.name}
              />
            </div>
            <div className="absolute inset-x-3 bottom-3 z-10 rounded-2xl bg-gradient-to-t from-[#041f42]/45 to-transparent p-2">
              <div className="rounded-xl bg-white/95 px-4 py-3 shadow-lg">
                <h2 className="font-sans text-base font-bold leading-tight text-[#07386b] sm:text-lg">
                  {FOUNDER_PROFILE.name}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Founder &amp; President, Harvest Field Gospel Mission Int&apos;l
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start py-2 sm:py-4">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#008064]">
              <span className="h-0.5 w-8 bg-[#008064]" aria-hidden="true" />
              From our founder
            </p>
            <h2 className="mt-5 font-sans text-3xl font-bold leading-tight tracking-tight text-[#07386b] sm:text-4xl">
              Taking the Gospel to the nations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {FOUNDER_PROFILE.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('mission')}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#008064] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 focus-visible:ring-offset-2"
              >
                Explore our mission <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('partner')}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-[#07386b] px-5 py-2.5 text-sm font-semibold text-[#07386b] transition-colors hover:bg-[#f1f5f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 focus-visible:ring-offset-2"
              >
                Support the mission
              </button>
            </div>
          </div>
        </article>

        <h2 className="mt-8 font-sans text-xl font-bold text-[#07386b]">Mission leadership</h2>
        <div className="mt-4 grid max-w-3xl grid-cols-1 items-stretch gap-5">
          {FEATURED_PROFILES.map((profile) => (
            <article
              key={profile.name}
              className="flex h-full flex-col rounded-2xl border border-[#d6e0ea] bg-white p-4 shadow-sm sm:p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-40 w-40 overflow-hidden rounded-xl border border-harvest-400 bg-white p-1 shadow-sm sm:h-44 sm:w-44">
                  <SafeImage
                    src={profile.image}
                    alt={profile.alt}
                    className="h-full w-full rounded-lg object-cover object-center"
                    fallbackTitle={profile.name}
                  />
                </div>
                <h2 className="mt-1 w-full max-w-md rounded-full bg-forest-900 px-4 py-2 font-serif text-base font-semibold text-white shadow-sm sm:text-lg">
                  {profile.name}
                </h2>
                <div className="my-4 flex w-full max-w-sm items-center gap-3">
                  <span className="h-px flex-1 bg-harvest-400" aria-hidden="true" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-forest-900 sm:text-xs">
                    {profile.role}
                  </p>
                  <span className="h-px flex-1 bg-harvest-400" aria-hidden="true" />
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-stone-700">
                  {profile.summary}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('partner')}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-forest-900 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-forest-800 sm:text-sm"
          >
            <span>Support Our Foreign Missions</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('gallery')}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-stone-300/70 bg-limestone px-5 py-2.5 text-xs font-semibold text-forest-950 transition-colors hover:bg-stone-200/80 sm:text-sm"
          >
            See Field Photographs
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex min-h-11 items-center gap-2 px-4 py-2.5 text-xs font-semibold text-forest-900 transition-colors hover:text-harvest-600 sm:text-sm"
          >
            Contact the Mission
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section aria-labelledby="team-heading" className="space-y-7 border-t border-stone-200 pt-10">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
            Meet Our Team
          </p>
          <h2
            id="team-heading"
            className="font-serif text-3xl font-semibold text-forest-950 sm:text-4xl"
          >
            Additional Mission Leaders
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP_TEAM.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-2xl border border-[#d6e0ea] bg-white shadow-sm"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                <SafeImage
                  src={leader.image}
                  alt={leader.alt}
                  className="h-full w-full object-cover object-center"
                  fallbackTitle={leader.name}
                />
              </div>
              <div className="relative -mt-3 px-3 pb-4">
                <h3 className="rounded-full bg-forest-900 px-4 py-2 text-center font-serif text-lg font-semibold text-white">
                  {leader.name}
                </h3>
                {leader.role && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-harvest-400" aria-hidden="true" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-forest-900">
                      {leader.role}
                    </p>
                    <span className="h-px flex-1 bg-harvest-400" aria-hidden="true" />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Biography & Margin Feature */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6 border-t border-stone-200">
        <article className="lg:col-span-7 space-y-5 text-base text-stone-700 leading-relaxed max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-forest-950">
            A Life Poured Out for Rural &amp; Foreign Harvests
          </h2>
          {FOUNDER_PROFILE.biography.map((para, index) => (
            <p key={index} className={index === 0 ? 'editorial-dropcap' : ''}>
              {para}
            </p>
          ))}
        </article>

        <aside className="lg:col-span-5 space-y-6">
          <div className="group bg-white border border-stone-200 rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-md">
            <div className="aspect-[4/3] bg-stone-200 overflow-hidden">
              <SafeImage
                src={FOUNDER_PROFILE.ministryPhoto}
                alt="Evang. David Abrebor preaching at a ministry event"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-5 space-y-1.5">
              <p className="text-xs font-medium text-harvest-600">
                Teaching &amp; Evangelism
              </p>
              <p className="font-serif text-lg font-semibold text-forest-950">
                Sharing the Gospel through preaching
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Through conferences and field gatherings, Evang. Abrebor teaches Scripture and
                mobilizes believers for mission.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {FOUNDER_PROFILE.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-limestone/70 border border-stone-200 rounded-xl p-5 space-y-1.5"
              >
                <p className="font-mono text-xs font-semibold text-harvest-600 tabular-nums">
                  0{idx + 1}
                </p>
                <h3 className="font-serif text-lg font-semibold text-forest-950">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* Invite Evang. David Abrebor Form */}
      <section className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
            Ministry Invitations
          </p>
          <h2 className="font-serif text-3xl font-semibold text-forest-950">
            Invite {FOUNDER_PROFILE.name}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Churches, secondary schools, campus fellowships, and mission agencies can submit
            invitations for crusades, youth conferences, labourers retreats, or revival meetings.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('mission')}
            className="text-sm font-semibold text-forest-900 hover:underline cursor-pointer"
          >
            View Our Ministry Tracks →
          </button>
        </div>

        <div className="lg:col-span-7">
          <form
              name="ministry-invitation"
              method="POST"
              action="/thank-you.html"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <input type="hidden" name="form-name" value="ministry-invitation" />
              <p className="hidden">
                <label>Do not fill this out: <input name="bot-field" /></label>
              </p>
              <div>
                <label htmlFor="inv-org" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Church, School, or Organization
                </label>
                <input
                  id="inv-org"
                  name="organization"
                  type="text"
                  required
                  placeholder="e.g., Scripture Union / Local Assembly"
                  className="w-full min-h-11 px-3.5 py-3 text-base sm:text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <div>
                <label htmlFor="inv-contact" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Coordinator Phone or Email
                </label>
                <input
                  id="inv-contact"
                  name="coordinator-contact"
                  type="text"
                  required
                  placeholder="+234 ... or email"
                  className="w-full min-h-11 px-3.5 py-3 text-base sm:text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <div>
                <label htmlFor="inv-type" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Program Type
                </label>
                <select
                  id="inv-type"
                  name="program-type"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                >
                  <option>Missions / Evangelistic Conference</option>
                  <option>Intensive School Outreach</option>
                  <option>Youths / Students Conference</option>
                  <option>Community Crusade / Revival</option>
                  <option>Labourers Retreat / Discipleship</option>
                </select>
              </div>

              <div>
                <label htmlFor="inv-loc" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Proposed City / Country &amp; Dates
                </label>
                <input
                  id="inv-loc"
                  name="proposed-location-and-dates"
                  type="text"
                  placeholder="City, State / Nation &amp; Month"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="inv-notes" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Program Details
                </label>
                <textarea
                  id="inv-notes"
                  name="program-details"
                  rows={3}
                  placeholder="Share theme, expected audience, or special ministry focus..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-11 px-6 py-3 text-sm font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 focus-visible:ring-offset-2"
                >
                  Send Ministry Invitation
                </button>
              </div>
            </form>
        </div>
      </section>
    </div>
    </LocalizedContent>
  );
};
