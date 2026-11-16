import React from 'react';
import { ArrowRight, BookOpen, Compass, HeartHandshake } from 'lucide-react';
import { PageId } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { LocalizedContent } from '../i18n';

interface AcademyPageProps {
  onNavigate: (page: PageId) => void;
}

const FORMATION_AREAS = [
  {
    icon: BookOpen,
    title: 'Grounded in Scripture',
    description: 'Growing in the knowledge of God’s Word as the foundation for Christian witness and service.',
  },
  {
    icon: HeartHandshake,
    title: 'Character and discipleship',
    description: 'Developing the conviction, spiritual maturity and servant-hearted character needed for ministry.',
  },
  {
    icon: Compass,
    title: 'Practical evangelism',
    description: 'Learning to engage people with the Gospel in workplaces, neighbourhoods, schools and communities.',
  },
];

const FIELD_CONTEXTS = [
  {
    name: 'Nigeria',
    detail: 'Local discipleship, school outreach and mission mobilisation rooted in Omoku, Rivers State.',
    image: '/assets/field/discipleship-training.jpg',
    alt: 'Believers gathered for a training and discipleship session.',
  },
  {
    name: 'Northern Cameroon',
    detail: 'Cross-cultural mission experience connected with the Linde-Massa and Maroua fields.',
    image: '/assets/field/founder-linde-massa.jpg',
    alt: 'Mission outreach in Linde-Massa, Northern Cameroon.',
  },
  {
    name: 'Tchad and Côte d’Ivoire',
    detail: 'A wider vision for cross-border and francophone Gospel outreach.',
    image: '/assets/field/tchad-republic-mission.jpg',
    alt: 'Congregation gathered during a mission outreach in Tchad Republic.',
  },
];

export const AcademyPage: React.FC<AcademyPageProps> = ({ onNavigate }) => (
  <LocalizedContent>
    <div className="bg-[#faf8f4]">
      <section className="relative isolate overflow-hidden bg-forest-950 text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <SafeImage
            src="/assets/field/discipleship-training.jpg"
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-950/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-harvest-400">Equipping for the harvest</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Harvest Field Academy
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">
            Preparing believers to serve Christ with biblical understanding, godly character and practical skills for effective soul-winning.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('join')}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-harvest-500 px-6 py-3 text-sm font-semibold text-forest-950 transition-colors hover:bg-harvest-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Express interest in serving <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact the Mission
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-5 py-14 sm:px-8 sm:py-16 lg:space-y-20 lg:px-10 lg:py-20">
        <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">The purpose of HFA</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">
              Training believers to take the Gospel beyond familiar places.
            </h2>
            <p className="text-base leading-relaxed text-stone-700">
              Harvest Field Gospel Mission equips believers with knowledge and practical skills for effective soul-winning. Harvest Field Academy is part of this equipping vision: helping believers recognise their role in the Great Commission and engage people with the Gospel.
            </p>
            <p className="text-base leading-relaxed text-stone-700">
              The aim is not simply to prepare people for an event, but to encourage a life of faithful witness—in workplaces, neighbourhoods, schools and communities.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <SafeImage
              src="/assets/field/discipleship-training.jpg"
              alt="Believers gathered for a Harvest Field training and discipleship session."
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="px-5 py-3 text-xs leading-relaxed text-stone-600">
              Training and discipleship are part of the mission’s commitment to equipping believers.
            </figcaption>
          </figure>
        </section>

        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">A life of readiness</p>
            <h2 className="font-serif text-3xl font-semibold text-forest-950 sm:text-4xl">What the Academy seeks to strengthen</h2>
            <p className="text-base leading-relaxed text-stone-600">
              These are the foundations reflected in the mission’s stated approach to Christian equipping.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {FORMATION_AREAS.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest-950 text-harvest-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-6 font-mono text-xs font-semibold text-harvest-600">0{index + 1}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-forest-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">From local witness to cross-border mission</p>
            <h2 className="font-serif text-3xl font-semibold text-forest-950 sm:text-4xl">A vision that reaches across nations</h2>
            <p className="text-base leading-relaxed text-stone-600">
              The mission’s work connects local believer development with outreach in the regions where Harvest Field serves.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {FIELD_CONTEXTS.map((field) => (
              <article key={field.name} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <SafeImage src={field.image} alt={field.alt} className="aspect-[16/10] w-full object-cover" />
                <div className="space-y-2 p-5 sm:p-6">
                  <h3 className="font-serif text-xl font-semibold text-forest-950">{field.name}</h3>
                  <p className="text-sm leading-relaxed text-stone-600">{field.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-forest-950 px-6 py-9 text-white sm:px-10 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-400">Take your next step</p>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Interested in mission training or serving with Harvest Field?</h2>
              <p className="text-sm leading-relaxed text-stone-200 sm:text-base">
                Get in touch with the mission team to ask about the Academy and current opportunities to participate. We will share confirmed details directly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button type="button" onClick={() => onNavigate('contact')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-harvest-500 px-5 py-3 text-sm font-semibold text-forest-950 hover:bg-harvest-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Ask about HFA <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => onNavigate('mission')} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Explore our mission
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </LocalizedContent>
);
