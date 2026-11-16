import React from 'react';
import { LocalizedContent } from '../i18n';

export const ThankYouPage: React.FC = () => (
  <LocalizedContent>

  <main className="relative isolate flex min-h-[72vh] items-center justify-center overflow-hidden bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-forest-100/60 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-harvest-100/60 blur-3xl" />
    </div>

    <section className="w-full max-w-3xl rounded-3xl border border-stone-200/80 bg-white/95 px-6 py-12 text-center shadow-[0_24px_80px_-40px_rgba(20,50,35,0.28)] sm:px-12 sm:py-16">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-50 text-forest-800 ring-8 ring-forest-50/60" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12.5 4.2 4.2L19 7" />
        </svg>
      </div>

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-harvest-700">
        Harvest Field Gospel Mission International
      </p>
      <h1 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-forest-950 sm:text-5xl">
        Thank you for reaching out.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
        Your message has been received, and we are grateful you took the time to connect with us.
        Our team will review your message and reach out to you as soon as possible.
      </p>

      <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-forest-100 bg-forest-50/70 px-5 py-5">
        <p className="font-serif text-lg italic leading-relaxed text-forest-900 sm:text-xl">
          “May the peace of our Lord Jesus Christ be with you.”
        </p>
        <p className="mt-2 text-sm text-forest-700">With grace and peace,</p>
        <p className="text-sm font-semibold text-forest-900">Harvest Field Gospel Mission International</p>
      </div>

      <a
        href="/"
        className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-forest-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 focus-visible:ring-offset-2"
      >
        Return to our website
      </a>
      <p className="mt-5 text-sm text-stone-500">
        We look forward to connecting with you.
      </p>
    </section>
  </main>
  </LocalizedContent>
);
