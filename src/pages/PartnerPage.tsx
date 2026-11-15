import React, { useEffect, useState } from 'react';
import { Check, CheckCircle2, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { BANK_ACCOUNTS, MISSION_INFO } from '../data/missionData';
import { BankAccountsGrid } from '../components/BankAccountsGrid';

interface SubmittedRecord {
  id: string;
  reference: string;
  type: string;
  name: string;
  amountSummary?: string;
  createdAt: string;
  message: string;
}

const NGN_PRESETS = [5000, 10000, 25000, 50000, 100000];
const USD_PRESETS = [25, 50, 100, 250, 500];

const MISSION_FUNDS = [
  {
    id: 'greatest-need',
    label: 'Where Needed Most',
    impact: 'Supports rural evangelism, missionary logistics, and urgent field outreach needs.',
  },
  {
    id: 'foreign-missions',
    label: 'Cameroon, Tchad & Côte d’Ivoire',
    impact: 'Fuels cross-border field trips, gospel literature, and local pastor mobilization.',
  },
  {
    id: 'schools-youth',
    label: 'School & Youth Outreaches',
    impact: 'Provides study materials, Bibles, and counseling support during intensive campus outreaches.',
  },
  {
    id: 'academy',
    label: 'Harvest Field Academy (HFA)',
    impact: 'Equips kingdom labourers through discipleship training and seasonal labourers retreats.',
  },
];

export const PartnerPage: React.FC = () => {
  // Interactive Giving Builder State
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [frequency, setFrequency] = useState<'One-Time Gift' | 'Monthly Support'>('One-Time Gift');
  const [selectedFund, setSelectedFund] = useState<string>(MISSION_FUNDS[0].id);
  const [amountInput, setAmountInput] = useState<string>('25000');
  const [donorName, setDonorName] = useState('');
  const [donorContact, setDonorContact] = useState('');
  const [copiedQuickAcct, setCopiedQuickAcct] = useState(false);
  const [pledgeRef, setPledgeRef] = useState<string | null>(null);

  // Prayer / Counseling / Mission Team Inquiry Form
  const [requestType, setRequestType] = useState<
    'Go on Mission' | 'Prayer & Counseling' | 'Regular Support Partner'
  >('Go on Mission');
  const [name, setName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const [history, setHistory] = useState<SubmittedRecord[]>(() => {
    try {
      const raw = localStorage.getItem('hf_partner_requests');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('hf_partner_requests', JSON.stringify(history));
    } catch {
      // ignore storage errors
    }
  }, [history]);

  const handleCurrencySwitch = (next: 'NGN' | 'USD') => {
    setCurrency(next);
    setAmountInput(next === 'NGN' ? '25000' : '100');
    setPledgeRef(null);
  };

  const presets = currency === 'NGN' ? NGN_PRESETS : USD_PRESETS;
  const recommendedAccount =
    currency === 'USD' ? BANK_ACCOUNTS[0] : BANK_ACCOUNTS[1];
  const activeFund =
    MISSION_FUNDS.find((f) => f.id === selectedFund) || MISSION_FUNDS[0];

  const numericAmount = Number(amountInput.replace(/[^0-9.]/g, '')) || 0;
  const formattedAmount =
    currency === 'NGN'
      ? `₦${numericAmount.toLocaleString('en-NG')}`
      : `$${numericAmount.toLocaleString('en-US')}`;

  const handleCopyQuick = async () => {
    try {
      await navigator.clipboard.writeText(recommendedAccount.accountNumber);
      setCopiedQuickAcct(true);
      setTimeout(() => setCopiedQuickAcct(false), 2000);
    } catch {
      setCopiedQuickAcct(true);
      setTimeout(() => setCopiedQuickAcct(false), 2000);
    }
  };

  const handleConfirmGivingIntent = (e: React.FormEvent) => {
    e.preventDefault();
    if (numericAmount <= 0) return;
    const refCode = `HFGM-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`;
    const entry: SubmittedRecord = {
      id: `${Date.now()}`,
      reference: refCode,
      type: `${frequency} (${activeFund.label})`,
      name: donorName.trim() || 'Mission Partner',
      amountSummary: formattedAmount,
      createdAt: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      message: `Transfer prepared via ${recommendedAccount.bank} (${recommendedAccount.accountNumber}).`,
    };
    setHistory((prev) => [entry, ...prev].slice(0, 6));
    setPledgeRef(refCode);
    setDonorName('');
    setDonorContact('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phoneOrEmail.trim()) return;
    const entry: SubmittedRecord = {
      id: `${Date.now()}`,
      reference: `HF-${String(Date.now()).slice(-4)}`,
      type: requestType,
      name: name.trim(),
      createdAt: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      message:
        message.trim() ||
        'Requested partnership follow-up from Harvest Field Gospel Mission Int’l.',
    };
    setHistory((prev) => [entry, ...prev].slice(0, 6));
    setSubmittedSuccess(true);
    setName('');
    setPhoneOrEmail('');
    setCity('');
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
          Donate, Partner &amp; Connect
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-950 leading-tight">
          Stand with the harvest through going, prayer, or regular support.
        </h1>
        <p className="text-base text-stone-700 leading-relaxed">
          Every gift and partnership commitment directly strengthens rural and foreign missions
          across Omoku, Northern Cameroon, Tchad Republic, Côte d&apos;Ivoire, and Harvest Field
          Academy.
        </p>
      </section>

      {/* Interactive Giving & Impact Builder */}
      <section className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
                Interactive Giving Desk
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-forest-950 mt-1">
                Prepare Your Mission Gift
              </h2>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg">
              <button
                type="button"
                onClick={() => handleCurrencySwitch('NGN')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  currency === 'NGN'
                    ? 'bg-white text-forest-950 shadow-sm'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                NGN (₦)
              </button>
              <button
                type="button"
                onClick={() => handleCurrencySwitch('USD')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-white text-forest-950 shadow-sm'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                USD ($) Domiciliary
              </button>
            </div>
          </div>

          {/* Frequency Selector */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-lg">
            {(['One-Time Gift', 'Monthly Support'] as const).map((freq) => (
              <button
                key={freq}
                type="button"
                onClick={() => setFrequency(freq)}
                className={`py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                  frequency === freq
                    ? 'bg-forest-900 text-white'
                    : 'text-stone-700 hover:text-forest-950'
                }`}
              >
                {freq}
              </button>
            ))}
          </div>

          {/* Preset Amounts */}
          <div className="space-y-2.5">
            <label htmlFor="custom-amount" className="block text-xs font-semibold text-stone-700">
              Select or Enter Amount ({currency})
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {presets.map((val) => {
                const active = numericAmount === val;
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmountInput(String(val));
                      setPledgeRef(null);
                    }}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-mono font-semibold rounded-lg border transition-colors tabular-nums cursor-pointer ${
                      active
                        ? 'bg-forest-900 text-white border-forest-900'
                        : 'bg-[#faf8f4] text-stone-800 border-stone-200 hover:border-forest-800'
                    }`}
                  >
                    {currency === 'NGN' ? `₦${val.toLocaleString()}` : `$${val}`}
                  </button>
                );
              })}
            </div>
            <input
              id="custom-amount"
              type="text"
              inputMode="decimal"
              value={amountInput}
              onChange={(e) => {
                setAmountInput(e.target.value);
                setPledgeRef(null);
              }}
              placeholder={currency === 'NGN' ? 'Enter custom Naira amount' : 'Enter custom USD amount'}
              className="w-full px-4 py-3 text-base font-mono font-semibold tabular-nums bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
            />
          </div>

          {/* Mission Allocation Selector */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-stone-700">Designate Mission Focus</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {MISSION_FUNDS.map((fund) => (
                <button
                  key={fund.id}
                  type="button"
                  onClick={() => setSelectedFund(fund.id)}
                  className={`text-left p-3.5 rounded-xl border transition-colors cursor-pointer ${
                    selectedFund === fund.id
                      ? 'bg-limestone border-forest-800'
                      : 'bg-[#faf8f4] border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <p className="text-sm font-semibold text-forest-950">{fund.label}</p>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">{fund.impact}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Live Transfer Instructions + Reference Generator */}
        <div className="lg:col-span-5 bg-forest-950 text-white rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1.5 border-b border-forest-800 pb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-harvest-400">
              Transfer Summary
            </p>
            <p className="font-serif text-3xl font-semibold text-white tabular-nums">
              {formattedAmount}{' '}
              <span className="text-sm font-sans font-normal text-stone-300">
                · {frequency}
              </span>
            </p>
            <p className="text-xs text-stone-300">Allocation: {activeFund.label}</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium text-stone-300">
              Recommended Account for {currency}:
            </p>
            <div className="bg-forest-900/90 border border-forest-800 rounded-xl p-4 space-y-2">
              <p className="text-xs text-harvest-400 font-medium">{recommendedAccount.type}</p>
              <p className="font-serif text-lg font-semibold text-white">
                {recommendedAccount.bank}
              </p>
              <p className="text-xs text-stone-200">{recommendedAccount.accountName}</p>
              <div className="flex items-center justify-between gap-3 pt-2">
                <span className="font-mono text-xl font-semibold text-white tabular-nums tracking-tight">
                  {recommendedAccount.accountNumber}
                </span>
                <button
                  type="button"
                  onClick={handleCopyQuick}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-white text-forest-950 hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  {copiedQuickAcct ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {pledgeRef ? (
            <div className="bg-forest-900 border border-harvest-500/60 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-harvest-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Partner Giving Reference Ready</span>
              </div>
              <p className="font-mono text-base font-semibold text-white tabular-nums">
                {pledgeRef}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed">
                Include this reference in your bank transfer narration if desired, or notify us at{' '}
                <span className="text-white font-medium">+234 813 288 6893</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleConfirmGivingIntent} className="space-y-3">
              <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                placeholder="Your Name (optional)"
                aria-label="Donor Name"
                className="w-full px-3.5 py-2.5 text-sm bg-forest-900/70 border border-forest-700 rounded-lg text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-harvest-400"
              />
              <input
                type="text"
                value={donorContact}
                onChange={(e) => setDonorContact(e.target.value)}
                placeholder="Phone or Email for receipt note (optional)"
                aria-label="Donor Phone or Email"
                className="w-full px-3.5 py-2.5 text-sm bg-forest-900/70 border border-forest-700 rounded-lg text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-harvest-400"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm font-semibold text-forest-950 bg-harvest-400 hover:bg-harvest-500 rounded-lg transition-colors cursor-pointer"
              >
                Generate Giving Reference &amp; Log Gift
              </button>
            </form>
          )}
        </div>
      </section>

      {/* All Verified Banking Accounts */}
      <section className="space-y-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-forest-950">
            All Official Mission Bank Accounts
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Tap &ldquo;Copy&rdquo; on any account number to copy directly to your clipboard.
          </p>
        </div>
        <BankAccountsGrid highlightCurrency={currency} />
      </section>

      {/* Partnership Form + Office Directory */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6 border-t border-stone-200">
        {/* Form */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1.5">
            <h2 className="font-serif text-2xl font-semibold text-forest-950">
              Mission Team, Counseling &amp; Prayer Desk
            </h2>
            <p className="text-sm text-stone-600">
              Let us know if you feel called to go on outreach, partner regularly, or request
              prayer and counseling.
            </p>
          </div>

          {submittedSuccess ? (
            <div className="bg-[#faf8f4] border border-stone-200 rounded-xl p-8 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-forest-900 mx-auto" />
              <h3 className="font-serif text-2xl font-semibold text-forest-950">
                Thank you for reaching out.
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Your note has been recorded. For immediate ministry follow-up during office hours
                (Mon–Fri, 9:00 AM – 3:00 PM), call +234 813 288 6893.
              </p>
              <button
                type="button"
                onClick={() => setSubmittedSuccess(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg cursor-pointer"
              >
                Submit Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {(
                  ['Go on Mission', 'Prayer & Counseling', 'Regular Support Partner'] as const
                ).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setRequestType(type)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      requestType === type
                        ? 'bg-forest-900 text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="p-name" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="p-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>
                <div>
                  <label htmlFor="p-contact" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Phone or Email
                  </label>
                  <input
                    id="p-contact"
                    type="text"
                    required
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder="+234 ... or email"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="p-city" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  City / Country (Optional)
                </label>
                <input
                  id="p-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g., Omoku, Port Harcourt, Yaoundé"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <div>
                <label htmlFor="p-msg" className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Message, Support Pledge, or Prayer Need
                </label>
                <textarea
                  id="p-msg"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share how you would like to support, join a field team, or receive counseling..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#faf8f4] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-forest-900 hover:bg-forest-800 rounded-lg transition-colors cursor-pointer"
              >
                Send Partnership &amp; Prayer Note
              </button>
            </form>
          )}

          {history.length > 0 && (
            <div className="pt-6 border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                  Your Recent Giving &amp; Partnership Log
                </p>
                <button
                  type="button"
                  onClick={() => setHistory([])}
                  className="text-xs text-stone-500 hover:text-stone-900 cursor-pointer"
                >
                  Clear Log
                </button>
              </div>
              <div className="space-y-2">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-lg bg-[#faf8f4] border border-stone-200 text-xs space-y-1"
                  >
                    <p className="font-semibold text-forest-950">
                      <span className="font-mono text-harvest-600">{item.reference}</span>{' '}
                      <span aria-hidden="true">·</span> {item.type}{' '}
                      {item.amountSummary && (
                        <>
                          <span aria-hidden="true">·</span>{' '}
                          <span className="font-mono tabular-nums">{item.amountSummary}</span>
                        </>
                      )}{' '}
                      <span className="font-normal text-stone-500">({item.createdAt})</span>
                    </p>
                    <p className="text-stone-600">{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Physical Office & Direct Contact Card */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-limestone/70 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-5">
            <h2 className="font-serif text-2xl font-semibold text-forest-950">
              Visit or Reach the Mission Office
            </h2>

            <div className="space-y-4 text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-forest-900 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-900">Head Office</p>
                  <p className="leading-relaxed">{MISSION_INFO.headOffice}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-forest-900 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-stone-900">Fellowship Venue</p>
                  <p className="leading-relaxed">{MISSION_INFO.fellowshipVenue}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-forest-900 mt-1 shrink-0" />
                <div className="space-y-1 tabular-nums">
                  <p className="font-semibold text-stone-900">Direct Lines</p>
                  {MISSION_INFO.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="block hover:text-forest-900 hover:underline"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-forest-900 mt-1 shrink-0" />
                <div className="space-y-1">
                  <p className="font-semibold text-stone-900">Emails</p>
                  {MISSION_INFO.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block hover:text-forest-900 hover:underline break-all"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-300/70">
              <p className="text-xs font-medium text-stone-500">Office &amp; Counseling Hours</p>
              <p className="text-sm font-semibold text-forest-950 mt-0.5 tabular-nums">
                {MISSION_INFO.officeHours}
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};
