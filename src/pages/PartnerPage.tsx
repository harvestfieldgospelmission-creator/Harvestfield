import React, { useState } from 'react';
import { BookOpen, Copy, Heart, HandHeart, MapPin, Users } from 'lucide-react';
import { BANK_ACCOUNTS, PageId } from '../data/missionData';
import { BankAccountsGrid } from '../components/BankAccountsGrid';
import { LocalizedContent } from '../i18n';

interface PartnerPageProps {
  onNavigate: (page: PageId) => void;
}

const SUPPORT_PATHS = [
  {
    title: 'Pray with the mission',
    description: 'Stand with the work through prayer for gospel outreach, discipleship, local communities and mission workers.',
    action: 'Send a prayer request',
    icon: Heart,
    page: 'prayer' as PageId,
  },
  {
    title: 'Serve in the field',
    description: 'Tell us about your interest in evangelism, youth and school outreach, discipleship or cross-cultural mission.',
    action: 'Explore serving with us',
    icon: Users,
    page: 'join' as PageId,
  },
  {
    title: 'Give towards the work',
    description: 'Use the published bank details below if you choose to support the mission. You can contact the team to discuss a particular area.',
    action: 'View giving details',
    icon: HandHeart,
    page: 'partner' as PageId,
  },
];

const FUND_OPTIONS = [
  'Where the need is greatest',
  'Nigeria outreach',
  'Cameroon, Tchad or Côte d’Ivoire mission',
  'School and youth outreach',
  'Harvest Field Academy',
];

export const PartnerPage: React.FC<PartnerPageProps> = ({ onNavigate }) => {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [frequency, setFrequency] = useState<'One-time' | 'Regular support'>('One-time');
  const [amount, setAmount] = useState('');
  const [fund, setFund] = useState(FUND_OPTIONS[0]);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [wireDetailsCopied, setWireDetailsCopied] = useState(false);

  const account = currency === 'USD' ? BANK_ACCOUNTS[0] : BANK_ACCOUNTS[1];
  const numericAmount = Number(amount.replace(/[^0-9.]/g, '')) || 0;
  const displayAmount = currency === 'NGN'
    ? `₦${numericAmount.toLocaleString('en-NG')}`
    : `$${numericAmount.toLocaleString('en-US')}`;

  const usdTransferDetails = [
    'Beneficiary: Harvest Field Gospel Missions Omoku',
    'Account number: 5076357917',
    'Bank: Zenith Bank',
    'Bank address: Plot 84/87, Ajose Adeogun Street, Victoria Island, Lagos, Nigeria',
    'Branch: Omoku branch',
    'Branch sort code: 057210115',
    'SWIFT/BIC: ZEIBNGLA',
    'Beneficiary address: No. 17 Rev. Dr. Okoroma Street, by Frankried Hotel Road, Omoku, ONELGA, Rivers State, Nigeria',
  ].join('\\n');

  const copyUsdTransferDetails = async () => {
    try {
      await navigator.clipboard.writeText(usdTransferDetails);
      setWireDetailsCopied(true);
    } catch {
      setWireDetailsCopied(false);
    }
  };

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(account.accountNumber);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  };

  return (
    <LocalizedContent>
      <div className="mx-auto max-w-7xl space-y-14 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">Stand with the mission</p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-forest-950 sm:text-5xl">Be part of the work God is doing through the harvest.</h1>
          <p className="text-base leading-relaxed text-stone-700 sm:text-lg">There is more than one way to stand with Harvest Field Gospel Mission. You can pray, serve alongside the team, or give towards the work. We want you to understand the mission and choose the way you can participate.</p>
        </header>

        <section aria-labelledby="support-paths-heading" className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">Three ways to participate</p>
            <h2 id="support-paths-heading" className="font-serif text-2xl font-semibold text-forest-950 sm:text-3xl">Every part matters.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {SUPPORT_PATHS.map(({ title, description, action, icon: Icon, page }) => (
              <article key={title} className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-forest-50 text-forest-900"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                <h3 className="font-serif text-xl font-semibold text-forest-950">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{description}</p>
                <button type="button" onClick={() => page === 'partner' ? document.getElementById('giving-details')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) : onNavigate(page)} className="mt-6 inline-flex min-h-11 items-center justify-center self-start rounded-lg border border-forest-900 px-4 py-2.5 text-sm font-semibold text-forest-900 transition-colors hover:bg-forest-50">{action}</button>
              </article>
            ))}
          </div>
        </section>

        <section className="grid items-start gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">Where support can go</p>
            <h2 className="font-serif text-2xl font-semibold text-forest-950 sm:text-3xl">Support the work that matters to you.</h2>
            <p className="text-sm leading-relaxed text-stone-600">The mission includes evangelism, rural and cross-border outreach, school and youth engagement, discipleship and Harvest Field Academy. Choose an area below as a guide for a conversation with the team. Please confirm current priorities with the mission before making a restricted gift.</p>
            <ul className="space-y-3 text-sm text-stone-700">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-harvest-600" />Rural and foreign mission outreach</li>
              <li className="flex items-start gap-3"><Users className="mt-0.5 h-4 w-4 shrink-0 text-harvest-600" />School, youth and community engagement</li>
              <li className="flex items-start gap-3"><BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-harvest-600" />Discipleship and Harvest Field Academy</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-forest-950 p-6 text-white sm:p-8 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-400">Giving guide</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold">Prepare your transfer details</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-300">This is an information guide only. The website does not collect payments, verify transfers, issue receipts or schedule recurring payments.</p>
            <div className="mt-6 flex flex-wrap gap-2" aria-label="Currency">
              <button type="button" aria-pressed={currency === 'NGN'} onClick={() => { setCurrency('NGN'); setAmount(''); setCopied(false); setCopyFailed(false); }} className={`min-h-10 rounded-lg px-4 text-sm font-semibold ${currency === 'NGN' ? 'bg-white text-forest-950' : 'border border-forest-700 text-white'}`}>Naira (NGN)</button>
              <button type="button" aria-pressed={currency === 'USD'} onClick={() => { setCurrency('USD'); setAmount(''); setCopied(false); setCopyFailed(false); }} className={`min-h-10 rounded-lg px-4 text-sm font-semibold ${currency === 'USD' ? 'bg-white text-forest-950' : 'border border-forest-700 text-white'}`}>US Dollar (USD)</button>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="gift-amount" className="mb-1.5 block text-xs font-semibold text-stone-200">Your donation amount (optional)</label><input id="gift-amount" type="number" min="1" step="any" inputMode="decimal" placeholder={currency === 'NGN' ? 'Enter amount in naira' : 'Enter amount in US dollars'} value={amount} onChange={event => setAmount(event.target.value)} className="w-full rounded-lg border border-forest-700 bg-forest-900 px-3.5 py-3 text-sm text-white" /></div>
              <div><label htmlFor="gift-frequency" className="mb-1.5 block text-xs font-semibold text-stone-200">Giving intention</label><select id="gift-frequency" value={frequency} onChange={event => setFrequency(event.target.value as 'One-time' | 'Regular support')} className="w-full rounded-lg border border-forest-700 bg-forest-900 px-3.5 py-3 text-sm text-white"><option>One-time</option><option>Regular support</option></select></div>
            </div>
            <div className="mt-4"><label htmlFor="gift-focus" className="mb-1.5 block text-xs font-semibold text-stone-200">Area you would like to discuss</label><select id="gift-focus" value={fund} onChange={event => setFund(event.target.value)} className="w-full rounded-lg border border-forest-700 bg-forest-900 px-3.5 py-3 text-sm text-white">{FUND_OPTIONS.map(option => <option key={option}>{option}</option>)}</select></div>
            <div id="giving-details" className="mt-6 scroll-mt-24 rounded-xl border border-forest-700 bg-forest-900 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-harvest-400">Bank transfer details</p>
              <p className="mt-2 font-serif text-2xl font-semibold tabular-nums">{numericAmount > 0 ? displayAmount : 'Enter your preferred amount above'} <span className="font-sans text-sm font-normal text-stone-300">· {frequency}</span></p>
              <p className="mt-1 text-sm text-stone-300">Intended focus: {fund}</p>
              <div className="mt-5 border-t border-forest-700 pt-4">
                <p className="text-xs text-stone-300">{account.type}</p>
                <p className="mt-1 font-semibold">{account.bank}</p>
                <p className="mt-1 break-words text-sm text-stone-200">{account.accountName}</p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xl font-semibold tracking-wide">{account.accountNumber}</span>
                  <button type="button" onClick={copyAccount} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-forest-950 hover:bg-stone-100"><Copy className="h-4 w-4" aria-hidden="true" />Copy account number</button>
                </div>
                {copied && <p role="status" className="mt-2 text-xs text-harvest-400">Account number copied.</p>}
                {copyFailed && <p role="status" className="mt-2 text-xs text-amber-200">Copy is unavailable in this browser. You can select the account number above.</p>}
                {currency === 'USD' && (
                  <div className="mt-5 space-y-3 border-t border-forest-700 pt-4">
                    <h4 className="font-semibold text-white">International bank transfer information</h4>
                    <dl className="space-y-3 text-sm">
                      <div><dt className="text-xs text-stone-300">Bank address</dt><dd className="mt-0.5 text-white">Plot 84/87, Ajose Adeogun Street, Victoria Island, Lagos, Nigeria</dd></div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div><dt className="text-xs text-stone-300">Branch</dt><dd className="mt-0.5 text-white">Omoku branch</dd></div>
                        <div><dt className="text-xs text-stone-300">Branch sort code</dt><dd className="mt-0.5 font-mono text-white">057210115</dd></div>
                      </div>
                      <div><dt className="text-xs text-stone-300">SWIFT / BIC code</dt><dd className="mt-0.5 font-mono font-semibold text-white">ZEIBNGLA</dd></div>
                      <div><dt className="text-xs text-stone-300">Beneficiary’s physical address</dt><dd className="mt-0.5 text-white">No. 17 Rev. Dr. Okoroma Street, by Frankried Hotel Road, Omoku, ONELGA, Rivers State, Nigeria</dd></div>
                    </dl>
                    <button type="button" onClick={copyUsdTransferDetails} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-forest-950 hover:bg-stone-100">
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      Copy all international transfer details
                    </button>
                    {wireDetailsCopied && <p role="status" className="text-xs text-harvest-400">All international transfer details copied.</p>}
                  </div>
                )}
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-stone-300">Please verify the account name and details with the mission through its official contact channels before transferring. Regular support means you arrange repeat transfers yourself; no automatic debit is set up.</p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">Published bank details</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-forest-950 sm:text-3xl">Mission bank accounts</h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">These are the bank details currently listed by the ministry. Please confirm them directly with the mission before sending funds.</p>
          </div>
          <BankAccountsGrid highlightCurrency={currency} />
        </section>

        <section className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">Let's talk</p>
            <h2 className="font-serif text-2xl font-semibold text-forest-950 sm:text-3xl">Questions before you partner?</h2>
            <p className="text-sm leading-relaxed text-stone-600">Tell us whether you would like to serve, pray, support an area of work or ask a question. A form submission is not a financial transaction or a confirmed volunteer placement.</p>
          </div>
          <form name="mission-partnership" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field" className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 lg:col-span-7">
            <input type="hidden" name="form-name" value="mission-partnership" />
            <p className="hidden"><label>Do not fill this out: <input name="bot-field" /></label></p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="partner-name" className="mb-1.5 block text-sm font-medium">Your name *</label><input id="partner-name" name="name" required autoComplete="name" className="min-h-12 w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 sm:text-sm" /></div>
              <div><label htmlFor="partner-contact" className="mb-1.5 block text-sm font-medium">Email or phone *</label><input id="partner-contact" name="reply_contact" required className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm" /></div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="partner-interest" className="mb-1.5 block text-sm font-medium">I am interested in *</label><select id="partner-interest" name="interest" required className="min-h-12 w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 sm:text-sm"><option value="">Choose one</option><option>Prayer</option><option>Serving / mission outreach</option><option>Financial partnership</option><option>Discussing a project area</option><option>General enquiry</option></select></div>
              <div><label htmlFor="partner-location" className="mb-1.5 block text-sm font-medium">City / Country (optional)</label><input id="partner-location" name="location" autoComplete="country-name" className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm" /></div>
            </div>
            <div><label htmlFor="partner-message" className="mb-1.5 block text-sm font-medium">Message (optional)</label><textarea id="partner-message" name="message" rows={5} maxLength={4000} className="min-h-36 w-full resize-y rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 sm:text-sm" placeholder="Tell us what you would like to discuss..." /></div>
            <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-forest-900 px-5 py-3 text-sm font-semibold text-white hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-500 focus-visible:ring-offset-2 sm:w-auto">Send partnership enquiry</button>
            <p className="text-xs leading-relaxed text-stone-500">Please do not include bank passwords, card details or other highly sensitive information.</p>
          </form>
        </section>
      </div>
    </LocalizedContent>
  );
};
