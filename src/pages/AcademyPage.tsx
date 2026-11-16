import React from 'react';
import {
  ArrowRight,
  BookOpen,
  BookMarked,
  Check,
  Copy,
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  MapPin,
  Phone,
  Shirt,
  Users,
  Utensils,
} from 'lucide-react';
import { PageId } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { LocalizedContent } from '../i18n';

interface AcademyPageProps {
  onNavigate: (page: PageId) => void;
}

const SUPPORT_AREAS = [
  {
    icon: GraduationCap,
    title: 'A place in the classroom',
    description: 'Free or subsidised nursery, primary and basic education for children whose families cannot afford school fees.',
  },
  {
    icon: BookOpen,
    title: 'Books and learning materials',
    description: 'Help provide exercise books, textbooks, stationery and the resources children need to learn with confidence.',
  },
  {
    icon: Shirt,
    title: 'Uniforms and essentials',
    description: 'Help children come to school prepared, comfortable and ready to learn alongside their classmates.',
  },
  {
    icon: Utensils,
    title: 'Care for the whole child',
    description: 'Support school feeding where possible, basic care, encouragement and a safe environment for growth.',
  },
  {
    icon: BookMarked,
    title: 'A foundation in Christ',
    description: 'Bible stories, the life of Jesus, prayer, worship, daily devotion and Christian character formation.',
  },
  {
    icon: HeartHandshake,
    title: 'Mentorship and belonging',
    description: 'Give children access to caring teachers, godly role models, counselling and opportunities to discover their gifts.',
  },
];

export const AcademyPage: React.FC<AcademyPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = React.useState(false);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText('1228477155');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <LocalizedContent>
      <main className="bg-[#fbfaf6] text-stone-800">
        <section className="relative isolate overflow-hidden bg-forest-950 text-white">
          <div className="absolute inset-0" aria-hidden="true">
            <SafeImage
              src="/assets/field/school-outreach-students.jpeg"
              alt=""
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-950/45" />
          </div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-harvest-400/50 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-harvest-300">
                <Heart className="h-4 w-4" aria-hidden="true" /> Education. Faith. Hope.
              </p>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Every child deserves a chance to learn.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">
                Poverty should never decide a child’s future. Harvest Field Academy exists to help children from disadvantaged families in Omoku and surrounding communities receive quality education, grow in the knowledge of Jesus Christ and discover the hope of a brighter tomorrow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#give"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-harvest-400 px-6 py-3 text-sm font-bold text-forest-950 transition-colors hover:bg-harvest-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Help a child go to school <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#our-purpose"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Discover our purpose
                </a>
              </div>
              <p className="mt-6 text-sm font-medium text-harvest-200">
                Raising a Christ-like generation, exceeding excellence.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
                <SafeImage
                  src="/assets/field/school-outreach-assembly.jpeg"
                  alt="Children gathered during a Harvest Field school outreach."
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-harvest-300">A future worth investing in</p>
                  <p className="mt-2 font-serif text-2xl font-semibold leading-snug text-white">
                    One opportunity can change the direction of a child’s life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="our-purpose" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-harvest-700">Why Harvest Field Academy matters</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">
              A child should not have to miss school because their family is struggling.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-stone-700">
            <p>
              In Omoku and surrounding communities, some children are kept away from school because their parents or caregivers cannot afford fees, books, uniforms and other basic needs. These children have dreams, abilities and a future—but they need an opportunity.
            </p>
            <p>
              Harvest Field Academy is being established to help remove that barrier. Our desire is to welcome children from poor homes, orphans and vulnerable families, offering free or subsidised education according to each family’s situation.
            </p>
            <p className="font-semibold text-forest-900">
              We believe a child’s circumstances today should not place a limit on what God can do through that child tomorrow.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-harvest-700">Our heart and calling</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-950 sm:text-4xl">Education that shapes the whole life.</h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                We want children to grow in knowledge, faith, character and compassion—prepared to serve God and make a positive difference in their communities.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-stone-200 bg-[#fbfaf6] p-7 sm:p-9">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-950 text-harvest-300">
                  <EyeIcon />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-forest-950">Our Vision</h3>
                <p className="mt-3 leading-relaxed text-stone-700">
                  To raise a generation of less privileged children who know God, love Jesus Christ, excel in learning, and become godly leaders who will transform their families, communities, and nations.
                </p>
              </article>
              <article className="rounded-2xl border border-stone-200 bg-[#fbfaf6] p-7 sm:p-9">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-950 text-harvest-300">
                  <Heart className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-forest-950">Our Mission</h3>
                <p className="mt-3 leading-relaxed text-stone-700">
                  Harvest Field Academy exists to give less privileged children free and quality access to education, godly character, and the knowledge of Jesus Christ—so that no child is left behind because of poverty.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-harvest-700">A caring place to grow</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-950 sm:text-4xl">What a child will receive</h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              Your support helps us build a school experience where children are taught, encouraged, cared for and given room to flourish.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORT_AREAS.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-harvest-100 text-forest-900">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-5 font-mono text-xs font-bold text-harvest-700">0{index + 1}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-forest-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-forest-950 py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-harvest-300">Rooted in the Word of God</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">Learning to love God and love our neighbours.</h2>
              <p className="mt-5 leading-relaxed text-stone-200">
                Jesus Christ will be at the centre of school life. Through Bible classes, morning devotion, weekly chapel, prayer, worship and daily example, children will be encouraged to know Christ and practise His teachings.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-stone-100 sm:grid-cols-2">
                {['Bible stories and the life of Jesus', 'Christian character, morals and values', 'Memory verses and daily devotions', 'Prayer, worship and godly conduct', 'Love for God and our neighbours', 'Discipline, honesty and integrity'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-harvest-300" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
              <blockquote className="mt-8 border-l-2 border-harvest-400 pl-5 font-serif text-lg italic leading-relaxed text-harvest-100">
                “Train up a child in the way he should go: and when he is old, he will not depart from it.”
                <cite className="mt-2 block font-sans text-xs not-italic text-stone-300">Proverbs 22:6</cite>
              </blockquote>
            </div>
            <figure className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2">
              <SafeImage
                src="/assets/field/school-outreach-students.jpeg"
                alt="Children taking part in a Harvest Field school outreach."
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <figcaption className="px-4 py-4 text-sm leading-relaxed text-stone-300">
                We want every child to be seen, valued, supported and given the opportunity to learn.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-harvest-700">Be part of a child’s story</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">You can help open the classroom door.</h2>
              <p className="mt-5 leading-relaxed text-stone-600">
                You do not have to build a school alone to make a difference. Your prayer, time, skills or financial gift can help a child take a step towards learning and a hopeful future.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-2xl border border-stone-200 bg-white p-5">
                <Heart className="h-6 w-6 text-harvest-700" aria-hidden="true" />
                <h3 className="mt-3 font-serif text-lg font-semibold text-forest-950">Give</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">Support education, books, uniforms and care for children in need.</p>
              </article>
              <article className="rounded-2xl border border-stone-200 bg-white p-5">
                <Users className="h-6 w-6 text-harvest-700" aria-hidden="true" />
                <h3 className="mt-3 font-serif text-lg font-semibold text-forest-950">Volunteer</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">Offer your time to teach, mentor, encourage or serve.</p>
              </article>
              <article className="rounded-2xl border border-stone-200 bg-white p-5">
                <HandHeart className="h-6 w-6 text-harvest-700" aria-hidden="true" />
                <h3 className="mt-3 font-serif text-lg font-semibold text-forest-950">Pray</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">Pray for the children, families, teachers and provision.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="give" className="bg-[#f1eadb] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-harvest-800">Your gift can make room for hope</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-forest-950 sm:text-4xl">Help us make quality education possible for a child.</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-stone-700">
                Every contribution helps us work towards a school where children from families facing hardship can learn, grow in faith and build a better future. Thank you for standing with these children.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="https://wa.me/2348132886893?text=Hello%2C%20I%20would%20like%20to%20support%20Harvest%20Field%20Academy." target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-forest-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-forest-800">
                  Ask how to sponsor a child <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <button type="button" onClick={() => onNavigate('contact')} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-forest-900/30 px-5 py-3 text-sm font-semibold text-forest-950 hover:bg-white/60">
                  Contact the Academy
                </button>
              </div>
            </div>
            <div className="rounded-3xl border border-harvest-900/15 bg-white p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-950 text-harvest-300">
                  <HeartHandshake className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-harvest-700">Make a donation</p>
                  <h3 className="font-serif text-2xl font-semibold text-forest-950">Support Harvest Field Academy</h3>
                </div>
              </div>
              <div className="mt-7 rounded-2xl bg-[#fbfaf6] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Bank</p>
                <p className="mt-1 text-lg font-semibold text-forest-950">Zenith Bank PLC</p>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Account name</p>
                  <p className="mt-1 text-base font-semibold text-forest-950">Harvest Field Academy</p>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Account number</p>
                  <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-2xl font-bold tracking-[0.08em] text-forest-950 sm:text-3xl">1228477155</p>
                    <button type="button" onClick={copyAccountNumber} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-forest-900/20 px-3 py-2 text-sm font-semibold text-forest-950 transition-colors hover:bg-harvest-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800" aria-label="Copy account number">
                      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-stone-500">
                For sponsorship enquiries or to confirm how your gift can help, please contact Harvest Field Gospel Mission.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-forest-950">Let’s give every child a chance.</h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">Harvest Field Academy · Omoku, ONELGA, Rivers State, Nigeria</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-stone-600"><MapPin className="h-4 w-4 text-harvest-700" aria-hidden="true" /> No. 17 Rev. Dr. Okoroma Street, by Frankried Hotel, Omoku</p>
              <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-stone-600">
                <a className="inline-flex items-center gap-1 hover:text-forest-900" href="tel:+2348132886893"><Phone className="h-4 w-4" aria-hidden="true" /> +234 813 288 6893</a>
                <a className="inline-flex items-center gap-1 hover:text-forest-900" href="tel:+2349061481462"><Phone className="h-4 w-4" aria-hidden="true" /> +234 906 148 1462</a>
              </p>
            </div>
            <button type="button" onClick={() => onNavigate('contact')} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-forest-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800">
              Get in touch <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-8 text-center font-serif text-lg italic text-forest-900">
            “Let the little children come to me, and do not forbid them.” — Matthew 19:14
          </p>
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
            Harvest Field Gospel Mission Int’l
          </p>
        </section>
      </main>
    </LocalizedContent>
  );
};

const EyeIcon: React.FC = () => (
  <GraduationCap className="h-6 w-6" aria-hidden="true" />
);
