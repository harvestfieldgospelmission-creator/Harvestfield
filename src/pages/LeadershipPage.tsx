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
    <div className="mx-auto max-w-7xl space-y-20 px-4 py-8 sm:space-y-24 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <section aria-labelledby="founder-heading" className="relative isolate overflow-hidden rounded-[2rem] border border-[#d7c49a] bg-[#f5f1e8] shadow-[0_24px_70px_rgba(20,43,30,0.12)]">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[42%] bg-[linear-gradient(145deg,#e8dfca_0%,#f7f3e9_60%,#e7dcc3_100%)] lg:block" />
        <div aria-hidden="true" className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-harvest-500/15" />
        <div className="relative grid items-stretch lg:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:col-span-7 lg:px-14 lg:py-16">
            <p className="mb-5 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-harvest-700">
              <span className="h-px w-9 bg-harvest-500" />
              The vision and the calling
            </p>
            <h1 id="founder-heading" className="max-w-2xl font-serif text-[2.55rem] font-semibold leading-[1.08] tracking-tight text-forest-950 sm:text-5xl lg:text-[3.65rem]">
              A heart for the harvest.
              <span className="mt-2 block text-harvest-700">A life of faithful service.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-700 sm:text-lg">{FOUNDER_PROFILE.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => onNavigate('partner')} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-forest-950/15 transition hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 focus-visible:ring-offset-2">
                Support Our Missions <ArrowRight className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => onNavigate('gallery')} className="inline-flex min-h-12 items-center rounded-full border border-forest-950/20 px-6 py-3 text-sm font-semibold text-forest-950 transition hover:border-harvest-600 hover:bg-white/60">
                Explore Field Photographs
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-[#d8cdb7] pt-6">
              <span className="h-10 w-1 rounded-full bg-harvest-500" />
              <div>
                <p className="font-serif text-xl font-semibold text-forest-950">{FOUNDER_PROFILE.name}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-harvest-700">{FOUNDER_PROFILE.role}</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[28rem] px-6 pb-7 sm:px-10 lg:col-span-5 lg:min-h-[43rem] lg:px-8 lg:py-8">
            <div className="absolute inset-x-6 bottom-7 top-0 border border-harvest-500/50 sm:inset-x-10 lg:inset-x-8 lg:bottom-8 lg:top-8" />
            <div className="absolute inset-x-9 bottom-10 top-3 overflow-hidden bg-forest-900 shadow-2xl sm:inset-x-13 lg:inset-x-11 lg:bottom-11 lg:top-11">
              <SafeImage
                src={FOUNDER_PROFILE.portrait}
                alt="Evang. David Abrebor, Founder and President of Harvest Field Gospel Mission Int'l"
                className="h-full w-full object-cover object-[center_18%]"
                fallbackTitle="Evang. David Abrebor"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950 via-forest-950/65 to-transparent px-6 pb-6 pt-24">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-harvest-300">Founder &amp; President</p>
                <p className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">{FOUNDER_PROFILE.name}</p>
              </div>
            </div>
            <div className="absolute right-7 top-6 flex h-16 w-16 items-center justify-center rounded-full border border-harvest-300 bg-[#f7edda] text-center shadow-lg sm:right-12 lg:right-10 lg:top-10">
              <span className="font-serif text-[0.58rem] font-bold uppercase leading-tight tracking-wider text-forest-950">Faith<br />&amp; Service</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="team-heading" className="relative overflow-hidden rounded-[2rem] bg-forest-950 px-5 py-12 text-white shadow-[0_24px_70px_rgba(20,43,30,0.16)] sm:px-9 sm:py-16 lg:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-harvest-300/15" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-14 h-64 w-64 rounded-full border border-harvest-300/15" />
        <div className="relative mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-harvest-300">
              <span className="h-px w-9 bg-harvest-400" />
              The people behind the mission
            </p>
            <h2 id="team-heading" className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">Meet the leaders</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">A committed team, united in faith and service, strengthening the work of the Gospel across communities.</p>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-harvest-300">Harvest Field Gospel Mission</p>
        </div>
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {LEADERSHIP_TEAM.map((leader, index) => (
            <article key={leader.name} className="group relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#173d2a] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-harvest-300/70 hover:shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden bg-forest-900">
                <SafeImage src={leader.image} alt={leader.alt} className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.045]" fallbackTitle={leader.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/10 to-transparent opacity-95" />
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-harvest-300/80 bg-forest-950/75 font-serif text-sm font-semibold text-harvest-200 backdrop-blur-sm">0{index + 1}</span>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="mb-3 block h-[2px] w-10 bg-harvest-400 transition-all duration-300 group-hover:w-16" />
                  <h3 className="font-serif text-xl font-semibold leading-snug text-white sm:text-2xl">{leader.name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-harvest-300">{leader.role}</p>
                </div>
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
