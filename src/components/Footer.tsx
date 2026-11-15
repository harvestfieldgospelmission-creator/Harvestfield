import React from 'react';
import { MISSION_INFO, PageId } from '../data/missionData';
import { MissionMark } from './MissionMark';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-forest-950 text-stone-200 border-t border-forest-800 mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-6 border-b border-forest-800/80">
          {/* Column 1: Mission Identity */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <MissionMark className="w-9 h-9 text-harvest-400 shrink-0" />
              <div>
                <p className="font-serif text-lg font-semibold text-white leading-tight">
                  Harvest Field
                </p>
                <p className="text-xs text-stone-400">Gospel Mission Int&apos;l</p>
              </div>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
              A fellowship of kingdom-minded believers equipped for rural and foreign missions across
              Nigeria, Northern Cameroon, Tchad Republic, and Côte d&apos;Ivoire.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-harvest-400 mb-4">
              Explore Mission
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home' as PageId, label: 'Home & What We Do' },
                { id: 'mission' as PageId, label: 'About the Mission' },
                { id: 'leadership' as PageId, label: 'President & Founder' },
                { id: 'gallery' as PageId, label: 'Field Galleries' },
                { id: 'journal' as PageId, label: 'Blog & Articles' },
                { id: 'partner' as PageId, label: 'Partner, Give & Pray' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Head Office & Hours */}
          <div className="space-y-3 text-sm">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-harvest-400 mb-4">
              Headquarters &amp; Venue
            </h3>
            <div>
              <p className="text-white font-medium">Head Office</p>
              <p className="text-stone-300 leading-relaxed">{MISSION_INFO.headOffice}</p>
            </div>
            <div>
              <p className="text-white font-medium">Fellowship Hall</p>
              <p className="text-stone-300 leading-relaxed">{MISSION_INFO.fellowshipVenue}</p>
            </div>
            <div>
              <p className="text-white font-medium">Office Hours</p>
              <p className="text-stone-300 tabular-nums">{MISSION_INFO.officeHours}</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-harvest-400 mb-4">Follow the Mission</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Official social links are not connected yet. Please use the contact details on this page to reach us.
            </p>
            <button type="button" onClick={() => onNavigate('admin')} className="pt-2 text-xs text-stone-500 hover:text-harvest-400">Staff sign in</button>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="space-y-3 text-sm">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-harvest-400 mb-4">
              Direct Contact
            </h3>
            <div className="space-y-1 tabular-nums">
              {MISSION_INFO.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
            <div className="space-y-1 pt-2">
              {MISSION_INFO.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-stone-300 hover:text-white transition-colors break-all"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {MISSION_INFO.name} · Omoku, Rivers State, Nigeria. All rights reserved.
          </p>
          <p className="text-stone-400">
            President / Founder: Evang. David Abrebor
          </p>
        </div>
      </div>
    </footer>
  );
};
