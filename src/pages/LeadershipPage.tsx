import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FOUNDER_PROFILE, PageId } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { LocalizedContent } from '../i18n';

interface LeadershipPageProps {
  onNavigate: (page: PageId) => void;
}

const LEADERSHIP_TEAM = [
  {
    name: 'Pst Wobo Praise',
    role: 'Mission Director',
    image: '/assets/field/pastor-wobo-praise.jpeg',
    alt: 'Pastor Wobo Praise, Mission Director',
  },
  {
    name: 'Pst Jonathan Omonogun',
    role: 'Prayer Director',
    image: '/assets/field/jonathan-omonogun-prayer-director.jpeg',
    alt: 'Pastor Jonathan Omonogun, Prayer Director',
  },
  {
    name: 'Susan David',
    role: 'Vice President',
    image: '/assets/field/susan-david-vice-president.jpeg',
    alt: 'Susan David, Vice President',
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
];

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate }) => {
  return (
    <LocalizedContent>
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-8 sm:space-y-20 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-forest-950 px-5 py-8 text-white shadow-2xl shadow-forest-950/15 sm:px-9 sm:py-12 lg:px-12 lg:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-harvest-400/20" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-harvest-400/20" />
        <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-sm rounded-[1.7rem] border border-harvest-400/50 bg-gradient-to-br from-harvest-300/30 via-white/10 to-forest-900 p-2 shadow-xl shadow-black/20">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-forest-900">
                <SafeImage
                  src={FOUNDER_PROFILE.portrait}
                  alt="Evang. David Abrebor, President and Founder of Harvest Field Gospel Mission Int'l"
                  className="h-full w-full object-cover object-[center_20%]"
                  fallbackTitle="Evang. David Abrebor"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/95 via-forest-950/45 to-transparent px-5 pb-5 pt-16">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-harvest-300">Founder &amp; President</p>
                  <p className="mt-1 font-serif text-2xl font-semibold text-white">{FOUNDER_PROFILE.name}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-harvest-300">
                <span className="h-px w-8 bg-harvest-400" />
                Harvest Field Gospel Mission
              </p>
              <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Called to serve. <span className="text-harvest-300">Committed to the harvest.</span>
              </h1>
              <p className="text-lg font-semibold text-harvest-200">{FOUNDER_PROFILE.name} <span className="font-normal text-white/70">· {FOUNDER_PROFILE.role}</span></p>
              <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{FOUNDER_PROFILE.summary}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => onNavigate('partner')} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-harvest-400 px-5 py-3 text-sm font-bold text-forest-950 shadow-lg shadow-black/10 transition hover:bg-harvest-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Support Our Missions <ArrowRight className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => onNavigate('gallery')} className="inline-flex min-h-11 items-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-harvest-300 hover:bg-white/10">
                Explore Field Photographs
              </button>
              <button type="button" onClick={() => onNavigate('contact')} className="inline-flex min-h-11 items-center gap-2 px-2 py-3 text-sm font-semibold text-white/80 transition hover:text-harvest-300">
                Contact the Mission <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="team-heading" className="space-y-8">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-harvest-700">The people behind the mission</p>
          <h2 id="team-heading" className="font-serif text-3xl font-semibold text-forest-950 sm:text-4xl lg:text-5xl">Our Founders &amp; Leaders</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-harvest-400" />
          <p className="text-sm leading-7 text-stone-600 sm:text-base">A dedicated team serving communities and strengthening the work of the Gospel.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {LEADERSHIP_TEAM.map((leader, index) => (
            <article key={leader.name} className="group overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-harvest-300 hover:shadow-xl hover:shadow-forest-950/10">
              <div className="relative m-3 mb-0 overflow-hidden rounded-xl bg-limestone">
                <div className="aspect-[4/3] sm:aspect-[5/4]">
                  <SafeImage src={leader.image} alt={leader.alt} className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]" fallbackTitle={leader.name} />
                </div>
                <div className="absolute left-3 top-3 rounded-full border border-white/70 bg-forest-950/85 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-harvest-200 backdrop-blur-sm">
                  Mission Leadership
                </div>
              </div>
              <div className="flex min-h-28 flex-col justify-center px-5 pb-5 pt-4">
                <h3 className="font-serif text-xl font-semibold leading-snug text-forest-950">{leader.name}</h3>
                {leader.role && <p className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-harvest-700"><span className="h-1.5 w-1.5 rounded-full bg-harvest-400" />{leader.role}</p>}
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
