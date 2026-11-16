import React from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { MISSION_INFO, PageId } from '../data/missionData';
import { MissionMark } from './MissionMark';
import { LocalizedContent } from '../i18n';
import { getPagePath } from '../routing';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const whatsappNumber = MISSION_INFO.phones[0].replace(/\D/g, '');

  return (
    <LocalizedContent>
    <footer aria-label="Site footer" className="bg-forest-950 text-stone-200 border-t border-forest-800 mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-7">
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 pb-6 border-b border-forest-800/80 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-12">
          <div className="col-span-2 space-y-3 lg:col-span-1">
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
            <p className="flex items-start gap-2 text-xs leading-relaxed text-stone-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-harvest-400" aria-hidden="true" />
              {MISSION_INFO.headOffice}
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-harvest-400 mb-4">
              Quick Links
            </h3>
            <ul aria-label="Explore the ministry" className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
              {[
                { id: 'mission' as PageId, label: 'About Us' },
                { id: 'academy' as PageId, label: 'Academy' },
                { id: 'impact' as PageId, label: 'Impact & Stories' },
                { id: 'prayer' as PageId, label: 'Prayer Request' },
                { id: 'leadership' as PageId, label: 'Leadership' },
                { id: 'gallery' as PageId, label: 'Gallery' },
                { id: 'journal' as PageId, label: 'Blog' },
                { id: 'join' as PageId, label: 'Join Us' },
                { id: 'partner' as PageId, label: 'Partner' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={getPagePath(link.id)}
                    onClick={(event) => {
                      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                      event.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="inline-flex min-h-8 items-center text-stone-300 hover:text-white transition-colors cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-sm">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-harvest-400 mb-4">
              Contact &amp; Follow
            </h3>
            <a
              href={`tel:${MISSION_INFO.phones[0].replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-stone-200 transition-colors hover:text-harvest-400"
            >
              <Phone className="h-4 w-4 shrink-0 text-harvest-400" aria-hidden="true" />
              {MISSION_INFO.phones[0]}
            </a>
            <a
              href={`mailto:${MISSION_INFO.emails[0]}`}
              className="flex items-center gap-2 break-all text-stone-200 transition-colors hover:text-harvest-400"
            >
              <Mail className="h-4 w-4 shrink-0 text-harvest-400" aria-hidden="true" />
              {MISSION_INFO.emails[0]}
            </a>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={getPagePath('contact')}
                onClick={(event) => {
                  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                  event.preventDefault();
                  onNavigate('contact');
                }}
                className="inline-flex min-h-10 items-center rounded-lg bg-harvest-500 px-4 text-sm font-semibold text-forest-950 transition-colors hover:bg-harvest-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-400"
              >
                Contact Us
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Harvest Field on WhatsApp"
                title="Message us on WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-forest-700 text-stone-100 transition-colors hover:border-harvest-400 hover:text-harvest-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-400"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => onNavigate('admin')}
                className="text-xs text-stone-400 transition-colors hover:text-harvest-400"
              >
                Staff sign in
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {MISSION_INFO.name} · Omoku, Rivers State, Nigeria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </LocalizedContent>
  );
};
