import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SupportMissionFeatureProps {
  onGiveClick: () => void;
  onContactClick: () => void;
  headingLevel?: 'h1' | 'h2';
}

export const SupportMissionFeature: React.FC<SupportMissionFeatureProps> = ({
  onGiveClick,
  onContactClick,
  headingLevel = 'h2',
}) => {
  const Heading = headingLevel;

  return (
    <section aria-labelledby="support-mission-heading" className="space-y-8">
      <header className="space-y-4">
        <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-[#008064]">
          <span className="h-0.5 w-10 bg-[#008064]" aria-hidden="true" />
          Giving
        </p>
        <Heading
          id="support-mission-heading"
          className="font-sans text-4xl font-bold leading-tight tracking-tight text-[#07386b] sm:text-6xl lg:text-7xl"
        >
          Partner with the mission
        </Heading>
      </header>

      <div className="grid items-stretch gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <article className="flex min-h-[22rem] flex-col items-start rounded-[2rem] bg-[#008064] p-7 text-white sm:min-h-[25rem] sm:p-10 lg:p-12">
          <h3 className="font-sans text-3xl font-bold tracking-tight sm:text-5xl">
            Give to the mission
          </h3>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Your generosity helps Harvest Field Gospel Mission take the Gospel to rural communities,
            equip believers, reach students, and serve families across our mission fields.
          </p>
          <button
            type="button"
            onClick={onGiveClick}
            className="mt-auto inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#07386b] transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#008064] sm:text-base"
          >
            Give by bank transfer
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </article>

        <article className="flex flex-col justify-center rounded-[2rem] border border-[#d6e0ea] bg-[#f1f5f9] p-7 sm:p-10">
          <h3 className="max-w-md font-sans text-2xl font-bold leading-tight tracking-tight text-[#07386b] sm:text-3xl">
            Stand with the people and places we serve
          </h3>
          <blockquote className="mt-5 border-l-4 border-harvest-500 bg-white/70 px-5 py-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            “Every man according as he purposeth in his heart, so let him give; not grudgingly, or
            of necessity: for God loveth a cheerful giver.”
            <cite className="mt-3 block text-sm font-bold not-italic uppercase tracking-wide text-rose-700">
              2 Corinthians 9:7
            </cite>
          </blockquote>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onGiveClick}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 focus-visible:ring-offset-2"
            >
              View giving details
            </button>
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#07386b] px-6 py-3 text-sm font-semibold text-[#07386b] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 focus-visible:ring-offset-2"
            >
              Contact us
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
