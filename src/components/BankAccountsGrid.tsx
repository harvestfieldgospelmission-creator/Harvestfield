import React, { useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import { BANK_ACCOUNTS } from '../data/missionData';
import { LocalizedContent } from '../i18n';

interface BankAccountsGridProps {
  highlightCurrency?: 'NGN' | 'USD' | null;
}

export const BankAccountsGrid: React.FC<BankAccountsGridProps> = ({
  highlightCurrency = null,
}) => {
  const [copyStatus, setCopyStatus] = useState<{
    id: string;
    status: 'copied' | 'failed';
  } | null>(null);

  const handleCopy = async (id: string, value: string) => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard access is unavailable');
      }
      await navigator.clipboard.writeText(value);
      setCopyStatus({ id, status: 'copied' });
    } catch {
      setCopyStatus({ id, status: 'failed' });
    }
    window.setTimeout(
      () => setCopyStatus((current) => (current?.id === id ? null : current)),
      2500,
    );
  };

  const renderCopyButton = (id: string, label: string, value: string) => {
    const status = copyStatus?.id === id ? copyStatus.status : null;

    return (
      <button
        type="button"
        onClick={() => handleCopy(id, value)}
        className={`inline-flex min-h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 ${
          status === 'copied'
            ? 'bg-forest-900 text-white'
            : status === 'failed'
              ? 'bg-rose-100 text-rose-800'
              : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
        }`}
        aria-label={`${
          status === 'copied' ? 'Copied' : status === 'failed' ? 'Copy failed' : 'Copy'
        } ${label}`}
      >
        {status === 'copied' ? (
          <>
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Copied</span>
          </>
        ) : status === 'failed' ? (
          <>
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Copy failed</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Copy</span>
          </>
        )}
      </button>
    );
  };

  return (
    <LocalizedContent>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {BANK_ACCOUNTS.map((acct) => {
        const isUsd = acct.id === 'domiciliary';
        const internationalDetails = acct.internationalDetails;
        const isHighlighted =
          (highlightCurrency === 'USD' && isUsd) ||
          (highlightCurrency === 'NGN' && !isUsd);

        return (
          <div
            key={acct.id}
            className={`flex flex-col justify-between gap-6 rounded-xl p-6 transition-colors duration-200 ${
              isHighlighted
                ? 'bg-white border-2 border-forest-800 shadow-sm'
                : 'bg-white border border-stone-200'
            } ${internationalDetails ? 'md:col-span-2 xl:col-span-1' : ''}`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-medium text-stone-500 tracking-wide">
                  {acct.type}
                </p>
                {isHighlighted && (
                  <span className="text-[11px] font-semibold text-forest-900">
                    Recommended
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-xl font-semibold text-forest-950">
                  {acct.bank}
                </h3>
                {isUsd && renderCopyButton(`${acct.id}-bank`, 'bank name', acct.bank)}
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{acct.note}</p>
            </div>

            <div className="pt-4 border-t border-stone-200/80 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-stone-500 mb-0.5">Account Name</p>
                  <p className="break-words text-sm font-semibold text-stone-900">
                    {acct.accountName}
                  </p>
                </div>
                {isUsd &&
                  renderCopyButton(
                    `${acct.id}-account-name`,
                    'beneficiary account name',
                    acct.accountName,
                  )}
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-stone-500 mb-0.5">Account Number</p>
                  <p className="font-mono text-lg font-semibold text-forest-900 tabular-nums tracking-tight">
                    {acct.accountNumber}
                  </p>
                </div>
                {renderCopyButton(
                  `${acct.id}-account-number`,
                  `${acct.bank} account number`,
                  acct.accountNumber,
                )}
              </div>
            </div>
            {internationalDetails && (
              <dl className="grid grid-cols-1 gap-x-5 gap-y-3 border-t border-stone-200/80 pt-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="mb-0.5 text-xs text-stone-500">Bank address</dt>
                  <dd className="flex items-start justify-between gap-2">
                    <span className="min-w-0 break-words leading-relaxed text-stone-800">
                      {internationalDetails.bankAddress}
                    </span>
                    {renderCopyButton(
                      `${acct.id}-bank-address`,
                      'bank address',
                      internationalDetails.bankAddress,
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="mb-0.5 text-xs text-stone-500">Branch</dt>
                  <dd className="flex items-center justify-between gap-2">
                    <span className="text-stone-800">{internationalDetails.branch}</span>
                    {renderCopyButton(
                      `${acct.id}-branch`,
                      'branch',
                      internationalDetails.branch,
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="mb-0.5 text-xs text-stone-500">Branch sort code</dt>
                  <dd className="flex items-center justify-between gap-2">
                    <span className="font-mono tabular-nums text-stone-800">
                      {internationalDetails.sortCode}
                    </span>
                    {renderCopyButton(
                      `${acct.id}-sort-code`,
                      'branch sort code',
                      internationalDetails.sortCode,
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="mb-0.5 text-xs text-stone-500">SWIFT/BIC code</dt>
                  <dd className="flex items-center justify-between gap-2">
                    <span className="font-mono text-stone-800">
                      {internationalDetails.swiftBic}
                    </span>
                    {renderCopyButton(
                      `${acct.id}-swift-bic`,
                      'SWIFT/BIC code',
                      internationalDetails.swiftBic,
                    )}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="mb-0.5 text-xs text-stone-500">Beneficiary address</dt>
                  <dd className="flex items-start justify-between gap-2">
                    <span className="min-w-0 break-words leading-relaxed text-stone-800">
                      {internationalDetails.beneficiaryAddress}
                    </span>
                    {renderCopyButton(
                      `${acct.id}-beneficiary-address`,
                      'beneficiary address',
                      internationalDetails.beneficiaryAddress,
                    )}
                  </dd>
                </div>
              </dl>
            )}
          </div>
        );
      })}
    </div>
    </LocalizedContent>
  );
};
