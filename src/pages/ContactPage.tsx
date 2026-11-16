import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { MISSION_INFO } from '../data/missionData';
import { LocalizedContent } from '../i18n';

const CONTACT_TOPICS = ['General enquiry', 'Prayer and counselling', 'Mission or outreach invitation', 'Partnership and giving'];

export const ContactPage: React.FC = () => (
  <LocalizedContent>
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">Contact Us</p>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-forest-950 sm:text-5xl">We&apos;re here to connect.</h1>
        <p className="text-base leading-relaxed text-stone-700 sm:text-lg">Contact Harvest Field Gospel Mission for prayer, counselling, outreach invitations or questions about the mission.</p>
      </header>
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <aside className="space-y-5 lg:col-span-5">
          <section className="rounded-2xl bg-forest-950 p-6 text-white sm:p-8">
            <h2 className="font-serif text-2xl font-semibold">Reach the mission team</h2>
            <div className="mt-6 space-y-4">
              {MISSION_INFO.phones.map(phone => <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-sm text-stone-100 hover:text-harvest-400"><Phone className="h-4 w-4 text-harvest-400" />{phone}</a>)}
              {MISSION_INFO.emails.map(email => <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 break-all text-sm text-stone-100 hover:text-harvest-400"><Mail className="h-4 w-4 shrink-0 text-harvest-400" />{email}</a>)}
            </div>
          </section>
          <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-forest-950">Visit Us</h2>
            <div className="mt-5 space-y-5 text-sm">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest-800" /><div><p className="font-semibold">Head Office</p><p className="mt-1 text-stone-600">Omoku, Rivers State, Nigeria</p></div></div>
              <p className="text-xs leading-relaxed text-stone-500">Please contact the mission team before visiting so we can confirm the appropriate meeting location and arrangements.</p>
            </div>
          </section>
        </aside>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">Send a message</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-forest-950 sm:text-3xl">How can we help?</h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">Complete this form and your message will be submitted securely through our website.</p>
          <form name="contact-enquiry" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field" className="mt-7 space-y-5">
            <input type="hidden" name="form-name" value="contact-enquiry" />
            <p className="hidden"><label>Do not fill this out: <input name="bot-field" /></label></p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">Your name *</label><input id="contact-name" name="name" type="text" autoComplete="name" required className="min-h-12 w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 sm:text-sm" /></div>
              <div><label htmlFor="contact-reply" className="mb-1.5 block text-sm font-medium">Phone or email *</label><input id="contact-reply" name="reply_contact" type="text" required className="min-h-12 w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 sm:text-sm" /></div>
            </div>
            <div><label htmlFor="contact-topic" className="mb-1.5 block text-sm font-medium">What is your message about?</label><select id="contact-topic" name="topic" className="min-h-12 w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 sm:text-sm">{CONTACT_TOPICS.map(topic => <option key={topic}>{topic}</option>)}</select></div>
            <div><label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">Message *</label><textarea id="contact-message" name="message" rows={6} required className="min-h-36 w-full resize-y rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 sm:text-sm" placeholder="Tell us how we can help..." /></div>
            <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-forest-900 px-5 py-3 text-sm font-semibold text-white hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 focus-visible:ring-offset-2 sm:w-auto">Submit message</button>
            <p className="text-xs leading-relaxed text-stone-500">Please do not include passwords, financial account details or other highly sensitive information.</p>
          </form>
        </section>
      </div>
    </div>
  </LocalizedContent>
);
