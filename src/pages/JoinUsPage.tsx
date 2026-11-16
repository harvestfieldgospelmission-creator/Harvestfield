import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MISSION_INFO } from '../data/missionData';
import { LocalizedContent } from '../i18n';

export const JoinUsPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [localGovernment, setLocalGovernment] = useState('');
  const [interest, setInterest] = useState('');
  const [motivation, setMotivation] = useState('');
  const [formError, setFormError] = useState('');
  const [emailReady, setEmailReady] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !fullName.trim() ||
      !phone.trim() ||
      !state.trim() ||
      !localGovernment.trim() ||
      !interest ||
      !motivation.trim()
    ) {
      setFormError('Please complete all required fields before continuing.');
      return;
    }

    const subject = encodeURIComponent(`Join Us interest — ${fullName.trim()}`);
    const body = encodeURIComponent(
      [
        `Full name: ${fullName.trim()}`,
        `Phone / WhatsApp: ${phone.trim()}`,
        `Email: ${email.trim() || 'Not provided'}`,
        `State: ${state.trim()}`,
        `Local Government Area: ${localGovernment.trim()}`,
        `Area of interest: ${interest}`,
        '',
        'What inspires you to join the mission?',
        motivation.trim(),
      ].join('\n')
    );

    window.location.href = `mailto:${MISSION_INFO.emails[0]}?subject=${subject}&body=${body}`;
    setFormError('');
    setEmailReady(true);
  };

  return (
    <LocalizedContent>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest-600">
            Join Us
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-forest-950 sm:text-5xl">
            Serve with Harvest Field
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-700">
            Tell us a little about yourself, where you are based, and what inspires you to serve
            with the mission.
          </p>
        </header>

        <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-8">
          {emailReady ? (
            <div className="space-y-4 py-6 text-center">
              <CheckCircle2 className="mx-auto h-11 w-11 text-forest-800" aria-hidden="true" />
              <h2 className="font-serif text-2xl font-semibold text-forest-950">
                Your email draft is ready
              </h2>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-stone-600">
                Review and send it from your email app to complete your request. The mission will
                receive your details only after you send the email.
              </p>
              <button
                type="button"
                onClick={() => setEmailReady(false)}
                className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-semibold text-forest-900 transition-colors hover:bg-stone-50"
              >
                Edit my details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="join-full-name" className="mb-1.5 block text-sm font-medium text-stone-800">
                    Full name *
                  </label>
                  <input
                    id="join-full-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                  />
                </div>
                <div>
                  <label htmlFor="join-phone" className="mb-1.5 block text-sm font-medium text-stone-800">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="join-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+234 ..."
                    className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                  />
                </div>
                <div>
                  <label htmlFor="join-email" className="mb-1.5 block text-sm font-medium text-stone-800">
                    Email (optional)
                  </label>
                  <input
                    id="join-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                  />
                </div>
                <div>
                  <label htmlFor="join-state" className="mb-1.5 block text-sm font-medium text-stone-800">
                    State *
                  </label>
                  <input
                    id="join-state"
                    type="text"
                    autoComplete="address-level1"
                    required
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                    placeholder="e.g., Rivers State"
                    className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                  />
                </div>
                <div>
                  <label htmlFor="join-local-government" className="mb-1.5 block text-sm font-medium text-stone-800">
                    Local Government Area *
                  </label>
                  <input
                    id="join-local-government"
                    type="text"
                    required
                    value={localGovernment}
                    onChange={(event) => setLocalGovernment(event.target.value)}
                    placeholder="e.g., ONELGA"
                    className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                  />
                </div>
                <div>
                  <label htmlFor="join-interest" className="mb-1.5 block text-sm font-medium text-stone-800">
                    Area of interest *
                  </label>
                  <select
                    id="join-interest"
                    required
                    value={interest}
                    onChange={(event) => setInterest(event.target.value)}
                    className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                  >
                    <option value="">Choose an area</option>
                    <option>Evangelism &amp; Outreach</option>
                    <option>Youth &amp; Student Ministry</option>
                    <option>Prayer &amp; Discipleship</option>
                    <option>Foreign Missions</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="join-motivation" className="mb-1.5 block text-sm font-medium text-stone-800">
                  What inspires you to join the mission? *
                </label>
                <textarea
                  id="join-motivation"
                  rows={5}
                  required
                  value={motivation}
                  onChange={(event) => setMotivation(event.target.value)}
                  placeholder="Share what inspires you and how you hope to serve..."
                  className="w-full rounded-lg border border-stone-300 bg-[#faf8f4] px-3.5 py-3 text-sm text-stone-900 outline-none transition focus:border-forest-800 focus:ring-2 focus:ring-forest-800/20"
                />
              </div>

              {formError && (
                <p className="text-sm font-medium text-red-700" role="alert">
                  {formError}
                </p>
              )}

              <p className="text-xs leading-relaxed text-stone-500">
                This form opens an email draft to the mission office. Your request is sent only
                when you send that email.
              </p>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-forest-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 focus-visible:ring-offset-2"
              >
                Open Email Draft
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </section>
      </div>
    </LocalizedContent>
  );
};
