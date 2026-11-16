import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FOUNDER_PROFILE, MISSION_INFO, PageId } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { LocalizedContent } from '../i18n';

const DEMO_LEADERS = [
  { name: 'Sample Leader 1', role: 'Sample Leadership Role 1', image: '/assets/field/sample-leader-1.svg' },
  { name: 'Sample Leader 2', role: 'Sample Leadership Role 2', image: '/assets/field/sample-leader-2.svg' },
  { name: 'Sample Leader 3', role: 'Sample Leadership Role 3', image: '/assets/field/sample-leader-3.svg' },
  { name: 'Sample Leader 4', role: 'Sample Leadership Role 4', image: '/assets/field/sample-leader-4.svg' },
];

interface LeadershipPageProps {
  onNavigate: (page: PageId) => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate }) => {
  const [inviteOrg, setInviteOrg] = useState('');
  const [inviteContact, setInviteContact] = useState('');
  const [inviteType, setInviteType] = useState('Missions / Evangelistic Conference');
  const [inviteLocation, setInviteLocation] = useState('');
  const [inviteNotes, setInviteNotes] = useState('');
  const [inviteSubmitted, setInviteSubmitted] = useState(false);

  const handleInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteOrg.trim() || !inviteContact.trim()) return;
    const subject = encodeURIComponent(`Ministry invitation — ${inviteOrg.trim()}`);
    const body = encodeURIComponent(
      `Organization: ${inviteOrg.trim()}\nCoordinator contact: ${inviteContact.trim()}\nProgram type: ${inviteType}\nLocation: ${inviteLocation.trim() || 'Not provided'}\n\nAdditional details:\n${inviteNotes.trim() || 'No additional details.'}`
    );
    window.location.href = `mailto:${MISSION_INFO.emails[0]}?subject=${subject}&body=${body}`;
    setInviteSubmitted(true);
    setInviteOrg('');
    setInviteContact('');
    setInviteLocation('');
    setInviteNotes('');
  };

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
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg transition-colors cursor-pointer"
              >
                <span>Support Our Foreign Missions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('gallery')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-forest-950 bg-limestone hover:bg-stone-200/80 border border-stone-300/70 rounded-lg transition-colors cursor-pointer"
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

      <section className="space-y-6 border-t border-stone-200 pt-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
            Leadership Team · Sample Profiles
          </p>
          <h2 className="font-serif text-3xl font-semibold text-forest-950 sm:text-4xl">
            Meet the Mission Leaders
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
            These are clearly marked placeholders. Replace them with verified names, roles, and
            photographs before presenting them as ministry leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {DEMO_LEADERS.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-xl border border-stone-200 bg-white"
            >
              <div className="relative aspect-[4/3] bg-stone-100">
                <img
                  src={leader.image}
                  alt="Illustrated sample portrait placeholder"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest-900">
                  Sample profile
                </span>
              </div>
              <div className="space-y-1 p-4">
                <h3 className="font-serif text-lg font-semibold text-forest-950">
                  {leader.name}
                </h3>
                <p className="text-sm text-stone-600">{leader.role}</p>
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
          {inviteSubmitted ? (
            <div className="bg-[#faf8f4] border border-stone-200 rounded-xl p-8 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-forest-900 mx-auto" />
              <h3 className="font-serif text-2xl font-semibold text-forest-950">
                Invitation Email Prepared
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Your invitation email draft is ready. Please send it from your email app to complete the request. For urgent scheduling, use the contact details on our Contact page.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 text-xs font-semibold text-forest-900 hover:text-harvest-600 cursor-pointer"
              >
                Contact the Mission Office
              </button>
              <button
                type="button"
                onClick={() => setInviteSubmitted(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg cursor-pointer"
              >
                Submit Another Invitation
              </button>
            </div>
          ) : (
            <form onSubmit={handleInviteSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inv-org" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Church, School, or Organization
                </label>
                <input
                  id="inv-org"
                  type="text"
                  required
                  value={inviteOrg}
                  onChange={(e) => setInviteOrg(e.target.value)}
                  placeholder="e.g., Scripture Union / Local Assembly"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <div>
                <label htmlFor="inv-contact" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Coordinator Phone or Email
                </label>
                <input
                  id="inv-contact"
                  type="text"
                  required
                  value={inviteContact}
                  onChange={(e) => setInviteContact(e.target.value)}
                  placeholder="+234 ... or email"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <div>
                <label htmlFor="inv-type" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Program Type
                </label>
                <select
                  id="inv-type"
                  value={inviteType}
                  onChange={(e) => setInviteType(e.target.value)}
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
                  type="text"
                  value={inviteLocation}
                  onChange={(e) => setInviteLocation(e.target.value)}
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
                  rows={3}
                  value={inviteNotes}
                  onChange={(e) => setInviteNotes(e.target.value)}
                  placeholder="Share theme, expected audience, or special ministry focus..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg transition-colors cursor-pointer"
                >
                  Send Ministry Invitation
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
    </LocalizedContent>
  );
};
