import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LocalizedContent } from '../i18n';

export const JoinUsPage: React.FC = () => (
  <LocalizedContent>
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">Join Us</p>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-forest-950 sm:text-5xl">Serve with Harvest Field</h1>
        <p className="max-w-2xl text-base leading-relaxed text-stone-700">Tell us a little about yourself, where you are based, and what inspires you to serve with the mission.</p>
      </header>
      <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-8">
        <form name="join-interest" method="POST" action="/thank-you.html" data-netlify="true" netlify-honeypot="bot-field" className="space-y-5">
          <input type="hidden" name="form-name" value="join-interest" />
          <p className="hidden"><label>Do not fill this out: <input name="bot-field" /></label></p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div><label htmlFor="join-full-name" className="mb-1.5 block text-sm font-medium">Full name *</label><input id="join-full-name" name="full_name" type="text" autoComplete="name" required className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm" /></div>
            <div><label htmlFor="join-phone" className="mb-1.5 block text-sm font-medium">Phone / WhatsApp *</label><input id="join-phone" name="phone" type="tel" autoComplete="tel" required className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm" /></div>
            <div><label htmlFor="join-email" className="mb-1.5 block text-sm font-medium">Email (optional)</label><input id="join-email" name="email" type="email" autoComplete="email" className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm" /></div>
            <div><label htmlFor="join-state" className="mb-1.5 block text-sm font-medium">State *</label><input id="join-state" name="state" type="text" autoComplete="address-level1" required className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm" /></div>
            <div><label htmlFor="join-lga" className="mb-1.5 block text-sm font-medium">Local Government Area *</label><input id="join-lga" name="local_government_area" type="text" required className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm" /></div>
            <div><label htmlFor="join-interest" className="mb-1.5 block text-sm font-medium">Area of interest *</label><select id="join-interest" name="area_of_interest" required className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm"><option value="">Choose an area</option><option>Evangelism &amp; Outreach</option><option>Youth &amp; Student Ministry</option><option>Prayer &amp; Discipleship</option><option>Foreign Missions</option><option>Other</option></select></div>
          </div>
          <div><label htmlFor="join-motivation" className="mb-1.5 block text-sm font-medium">What inspires you to join the mission? *</label><textarea id="join-motivation" name="motivation" rows={5} required className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm" placeholder="Share what inspires you and how you hope to serve..." /></div>
          <button type="submit" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-forest-900 px-5 py-3 text-sm font-semibold text-white hover:bg-forest-800">Submit interest <ArrowRight className="h-4 w-4" /></button>
        </form>
      </section>
    </div>
  </LocalizedContent>
);
