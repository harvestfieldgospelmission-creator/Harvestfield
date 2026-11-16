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
    name: 'Pst Jonathan Omonogun & Anita Jonathan',
    role: null,
    image: '/assets/field/jonathan-omonogun-anita-jonathan.jpeg',
    alt: 'Pastor Jonathan Omonogun and Anita Jonathan',
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 space-y-16 lg:space-y-20">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <div className="lg:col-span-5">
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 shadow-xl shadow-forest-950/10 lg:max-w-none">
            <SafeImage
              src={FOUNDER_PROFILE.portrait}
              alt="Evang. David Abrebor, President and Founder of Harvest Field Gospel Mission Int'l"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              fallbackTitle="Evang. David Abrebor"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/90 via-forest-950/35 to-transparent px-6 pb-6 pt-20 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-harvest-400">
                Founder &amp; President
              </p>
              <p className="mt-1 font-serif text-2xl font-semibold">
                {FOUNDER_PROFILE.name}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center gap-8">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
              Leadership · Harvest Field Gospel Mission
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-950 leading-tight">
              {FOUNDER_PROFILE.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-forest-900">
              {FOUNDER_PROFILE.role}
            </p>
            <p className="text-base text-stone-700 leading-relaxed max-w-2xl">
              {FOUNDER_PROFILE.summary}
            </p>
            <div className="pt-1 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('partner')}
                className="inline-flex min-h-11 items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg transition-colors cursor-pointer"
              >
                <span>Support Our Foreign Missions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('gallery')}
                className="inline-flex min-h-11 items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-forest-950 bg-limestone hover:bg-stone-200/80 border border-stone-300/70 rounded-lg transition-colors cursor-pointer"
              >
                <span>See Field Photographs</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-forest-900 hover:text-harvest-600 transition-colors cursor-pointer"
              >
                Contact the Mission
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
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
            Mission Leadership Team
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP_TEAM.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                <SafeImage
                  src={leader.image}
                  alt={leader.alt}
                  className="h-full w-full object-cover object-center"
                  fallbackTitle={leader.name}
                />
              </div>
              <div className="space-y-1 p-5">
                <h3 className="font-serif text-xl font-semibold text-forest-950">
                  {leader.name}
                </h3>
                {leader.role && (
                  <p className="text-sm font-medium text-harvest-700">{leader.role}</p>
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
