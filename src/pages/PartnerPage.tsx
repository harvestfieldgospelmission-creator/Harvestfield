import React from 'react';
import { Heart, Users, HandHeart, ShieldCheck } from 'lucide-react';
import { PageId } from '../data/missionData';
import { BankAccountsGrid } from '../components/BankAccountsGrid';
import { SupportMissionFeature } from '../components/SupportMissionFeature';
import { LocalizedContent } from '../i18n';

interface PartnerPageProps {
  onNavigate: (page: PageId) => void;
}

export const PartnerPage: React.FC<PartnerPageProps> = ({ onNavigate }) => {
  const scrollToGivingDetails = () => {
    document.getElementById('giving-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LocalizedContent>
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <SupportMissionFeature
          headingLevel="h1"
          onGiveClick={scrollToGivingDetails}
          onContactClick={() => onNavigate('contact')}
        />

        <section aria-label="Other ways to support the mission" className="grid gap-4 sm:grid-cols-2">
          <article className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-900">
              <Heart className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-semibold text-forest-950">Pray with us</h2>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">Stand with our mission workers, churches and outreach communities in prayer.</p>
              <button type="button" onClick={() => onNavigate('prayer')} className="mt-3 text-sm font-semibold text-forest-900 underline underline-offset-4">Send a prayer request</button>
            </div>
          </article>
          <article className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-900">
              <Users className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-semibold text-forest-950">Serve with us</h2>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">Take part in evangelism, discipleship or community outreach.</p>
              <button type="button" onClick={() => onNavigate('join')} className="mt-3 text-sm font-semibold text-forest-900 underline underline-offset-4">Explore serving</button>
            </div>
          </article>
        </section>

        <section id="giving-details" aria-labelledby="giving-details-heading" className="scroll-mt-24 space-y-5">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-harvest-600">Financial support</p>
            <h2 id="giving-details-heading" className="font-serif text-2xl font-semibold text-forest-950 sm:text-3xl">Giving by bank transfer</h2>
            <p className="text-sm leading-relaxed text-stone-600">Choose the account that matches your transfer currency. Use the copy button to copy an account number.</p>
          </div>
          <BankAccountsGrid />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-[#f1f5f9] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-forest-900" aria-hidden="true" />
            <div className="space-y-2">
              <h2 className="font-semibold text-forest-950">Before you make a transfer</h2>
              <ol className="list-decimal space-y-1 pl-5 text-sm leading-relaxed text-stone-700">
                <li>Select the Naira account for local transfers or the USD domiciliary account for international transfers.</li>
                <li>Confirm the account name and number directly with the mission before sending money.</li>
                <li>After transferring, contact the mission through the Contact page to notify the team.</li>
              </ol>
              <p className="text-xs leading-relaxed text-stone-500">The website does not collect or process payments. Support is arranged directly by the giver through their bank; no automatic debit is set up here.</p>
              <button type="button" onClick={() => onNavigate('contact')} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-forest-900 px-4 py-2 text-sm font-semibold text-white hover:bg-forest-800"><HandHeart className="h-4 w-4" aria-hidden="true" />Contact the mission</button>
            </div>
          </div>
        </section>
      </div>
    </LocalizedContent>
  );
};
