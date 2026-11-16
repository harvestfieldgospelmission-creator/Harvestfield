import React from 'react';

export const ThankYouPage: React.FC = () => (
  <section className="mx-auto flex min-h-[65vh] max-w-3xl items-center px-4 py-16 sm:px-6 lg:px-8">
    <div className="w-full rounded-2xl border border-stone-200 bg-white px-6 py-12 text-center shadow-sm sm:px-12">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-forest-50 text-forest-900" aria-hidden="true">
        <span className="text-2xl">✓</span>
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">Message received</p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-forest-950 sm:text-4xl">Thank you for reaching out.</h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600">
        Your form has been submitted. The Harvest Field Gospel Mission team can now review your message.
        If your matter is urgent, please contact the mission directly.
      </p>
      <a href="/" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-forest-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 focus-visible:ring-offset-2">
        Return to the website
      </a>
    </div>
  </section>
);
