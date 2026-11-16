import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { MISSION_INFO } from '../data/missionData';
import { LocalizedContent } from '../i18n';

export const PrayerPage: React.FC = () => (
  <LocalizedContent>
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">Prayer &amp; Pastoral Care</p>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-forest-950 sm:text-5xl">How can we pray with you?</h1>
        <p className="max-w-2xl text-base leading-relaxed text-stone-700">Share a prayer request with the Harvest Field team. You may keep your request brief and share only what you are comfortable sharing.</p>
      </header>
      <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center gap-3 rounded-xl bg-forest-50 p-4 text-forest-950"><HeartHandshake className="h-6 w-6 shrink-0 text-harvest-600" /><p className="text-sm leading-relaxed">For urgent pastoral support, you can also call the mission office: {MISSION_INFO.phones[0]}.</p></div>
        <form name="prayer-request" method="POST" action="/thank-you.html" data-netlify="true" netlify-honeypot="bot-field" className="space-y-5">
          <input type="hidden" name="form-name" value="prayer-request" />
          <p className="hidden"><label>Do not fill this out: <input name="bot-field" /></label></p>
          <div className="grid gap-5 sm:grid-cols-2">
            <div><label htmlFor="prayer-name" className="mb-1.5 block text-sm font-medium">Name (optional)</label><input id="prayer-name" name="name" type="text" autoComplete="name" className="min-h-12 w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 sm:text-sm" /></div>
            <div><label htmlFor="prayer-contact" className="mb-1.5 block text-sm font-medium">Email or phone (optional)</label><input id="prayer-contact" name="reply_contact" type="text" className="min-h-12 w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 sm:text-sm" /></div>
          </div>
          <div><label htmlFor="prayer-request" className="mb-1.5 block text-sm font-medium">Prayer request *</label><textarea id="prayer-request" name="prayer_request" rows={7} required maxLength={4000} className="min-h-40 w-full resize-y rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 sm:text-sm" placeholder="Share your request..." /></div>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-stone-600"><input type="checkbox" name="permission_to_follow_up" value="Yes" className="mt-1 h-4 w-4 shrink-0 accent-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500" />I am happy for the mission team to contact me about this request.</label>
          <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-forest-900 px-5 py-3 text-sm font-semibold text-white hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 focus-visible:ring-offset-2 sm:w-auto">Send prayer request</button>
          <p className="text-xs leading-relaxed text-stone-500">Please avoid including sensitive medical, financial or identifying information. Share only what is necessary for the team to pray with you.</p>
        </form>
      </section>
    </div>
  </LocalizedContent>
);
