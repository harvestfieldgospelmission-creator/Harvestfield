import React, { useState } from 'react';
import {
  Clock3,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Youtube,
} from 'lucide-react';
import { MISSION_INFO } from '../data/missionData';
import { LocalizedContent } from '../i18n';

const DEMO_SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: Youtube },
  { label: 'WhatsApp', href: 'https://www.whatsapp.com/', icon: MessageCircle },
];

const CONTACT_TOPICS = [
  'General enquiry',
  'Prayer and counselling',
  'Mission or outreach invitation',
  'Partnership and giving',
];

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState(CONTACT_TOPICS[0]);
  const [message, setMessage] = useState('');
  const [emailReady, setEmailReady] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Website enquiry — ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nContact: ${contact.trim()}\nTopic: ${topic}\n\nMessage:\n${message.trim()}`
    );
    window.location.href = `mailto:${MISSION_INFO.emails[0]}?subject=${subject}&body=${body}`;
    setEmailReady(true);
  };

  return (
    <LocalizedContent>
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16 space-y-10 lg:space-y-12">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">
          Contact Us
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-forest-950 sm:text-5xl">
          We&apos;re here to connect.
        </h1>
        <p className="text-base leading-relaxed text-stone-700 sm:text-lg">
          Contact Harvest Field Gospel Mission for prayer, counselling, outreach invitations, or
          questions about the mission. We look forward to hearing from you.
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <aside className="space-y-5 lg:col-span-5">
          <section className="rounded-2xl bg-forest-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-400">
              Counseling &amp; Enquiries
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold">Reach the mission team</h2>
            <div className="mt-6 space-y-4">
              {MISSION_INFO.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-sm text-stone-100 transition-colors hover:text-harvest-400"
                >
                  <Phone className="h-4 w-4 shrink-0 text-harvest-400" aria-hidden="true" />
                  <span>{phone}</span>
                </a>
              ))}
              {MISSION_INFO.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 break-all text-sm text-stone-100 transition-colors hover:text-harvest-400"
                >
                  <Mail className="h-4 w-4 shrink-0 text-harvest-400" aria-hidden="true" />
                  <span>{email}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
              Visit Us
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-forest-950">
              Rooted in Omoku
            </h2>
            <div className="mt-5 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest-800" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-stone-900">Head Office</p>
                  <p className="mt-1 leading-relaxed text-stone-600">{MISSION_INFO.headOffice}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest-800" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-stone-900">Fellowship Venue</p>
                  <p className="mt-1 leading-relaxed text-stone-600">
                    {MISSION_INFO.fellowshipVenue}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-forest-800" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-stone-900">Office Hours</p>
                  <p className="mt-1 text-stone-600">{MISSION_INFO.officeHours}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-forest-800" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-stone-900">Nations Reached</p>
                  <p className="mt-1 leading-relaxed text-stone-600">
                    {MISSION_INFO.nationsReached.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-limestone/60 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-forest-950">
              <Globe className="h-5 w-5 text-harvest-600" aria-hidden="true" />
              <h2 className="font-serif text-xl font-semibold">Follow the Mission</h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-stone-500">
              Demo links only. Replace these with the ministry’s official social accounts.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {DEMO_SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} demo link`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 text-sm font-medium text-forest-950 transition-colors hover:border-forest-800 hover:bg-forest-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
                >
                  <Icon className="h-4 w-4 text-harvest-600" aria-hidden="true" />
                  <span>{label}</span>
                  <span className="ml-auto text-[10px] uppercase tracking-wide text-stone-400">Demo</span>
                </a>
              ))}
            </div>
          </section>
        </aside>

        <section className="lg:col-span-7">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {emailReady ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-100 text-forest-900">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-serif text-2xl font-semibold text-forest-950">
                  Your email draft is ready
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-stone-600">
                  Please send the draft from your email app to complete your message. If it did not
                  open, contact our office directly using the details on this page.
                </p>
                <button
                  type="button"
                  onClick={() => setEmailReady(false)}
                  className="mt-6 rounded-lg bg-forest-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 focus-visible:ring-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
                    Send a Message
                  </p>
                  <h2 className="font-serif text-2xl font-semibold text-forest-950 sm:text-3xl">
                    How can we help?
                  </h2>
                  <p className="text-sm leading-relaxed text-stone-600">
                    Complete the form and we&apos;ll prepare a message to the mission office.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-stone-800">
                        Your name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-detail" className="mb-1.5 block text-sm font-medium text-stone-800">
                        Phone or email
                      </label>
                      <input
                        id="contact-detail"
                        type="text"
                        autoComplete="email"
                        required
                        value={contact}
                        onChange={(event) => setContact(event.target.value)}
                        className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                        placeholder="How can we reply?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-topic" className="mb-1.5 block text-sm font-medium text-stone-800">
                      What is your message about?
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(event) => setTopic(event.target.value)}
                      className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                    >
                      {CONTACT_TOPICS.map((contactTopic) => (
                        <option key={contactTopic}>{contactTopic}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-stone-800">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={6}
                      required
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className="w-full resize-y rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-forest-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 focus-visible:ring-offset-2 sm:w-auto"
                  >
                    Prepare Email <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <p className="text-xs leading-relaxed text-stone-500">
                    Your email app must be set up to send the message. You can also call the office
                    directly.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
    </LocalizedContent>
  );
};
