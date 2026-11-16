import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { BANK_ACCOUNTS } from '../data/missionData';
import { LocalizedContent } from '../i18n';

interface BankAccountsGridProps {
  highlightCurrency?: 'NGN' | 'USD' | null;
}

export const BankAccountsGrid: React.FC<BankAccountsGridProps> = ({
  highlightCurrency = null,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, accountNumber: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedId(id);
      setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 2000);
    } catch {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <LocalizedContent>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {BANK_ACCOUNTS.map((acct) => {
        const isCopied = copiedId === acct.id;
        const isUsd = acct.id === 'domiciliary';
        const isHighlighted =
          (highlightCurrency === 'USD' && isUsd) ||
          (highlightCurrency === 'NGN' && !isUsd);

        return (
          <div
            key={acct.id}
            className={`rounded-xl p-6 flex flex-col justify-between gap-6 transition-colors duration-200 ${
              isHighlighted
                ? 'bg-white border-2 border-forest-800 shadow-sm'
                : 'bg-white border border-stone-200'
            }`}
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
              <h3 className="font-serif text-xl font-semibold text-forest-950">
                {acct.bank}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">{acct.note}</p>
            </div>

            <div className="pt-4 border-t border-stone-200/80 space-y-3">
              <div>
                <p className="text-xs text-stone-500 mb-0.5">Account Name</p>
                <p className="text-sm font-semibold text-stone-900">{acct.accountName}</p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-stone-500 mb-0.5">Account Number</p>
                  <p className="font-mono text-lg font-semibold text-forest-900 tabular-nums tracking-tight">
                    {acct.accountNumber}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(acct.id, acct.accountNumber)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 ${
                    isCopied
                      ? 'bg-forest-900 text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                  }`}
                  aria-label={`Copy ${acct.bank} account number ${acct.accountNumber}`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </LocalizedContent>
  );
};
