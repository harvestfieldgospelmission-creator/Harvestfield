import React from 'react';
import { ArrowUpRight, BookOpen, ImagePlus, ShieldCheck } from 'lucide-react';
import { LocalizedContent } from '../i18n';

const studioUrl = import.meta.env.VITE_SANITY_STUDIO_URL as string | undefined;

export const AdminPage: React.FC = () => (
  <LocalizedContent>
  <main className="min-h-[70vh] bg-[#f7f7f2] px-5 py-16">
    <section className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white p-7 shadow-sm sm:p-10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-950 text-harvest-400"><BookOpen /></div>
      <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-harvest-600">Harvest Field Publishing</p>
      <h1 className="mt-2 font-serif text-3xl text-forest-950 sm:text-4xl">Blog editor</h1>
      <p className="mt-3 leading-relaxed text-stone-600">The secure publishing workspace is hosted separately by Sanity. Sign in with your own invited editor account to write articles, upload photographs, save drafts and publish stories to the ministry website.</p>
      {studioUrl ? (
        <a href={studioUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-forest-950 px-5 py-3 font-semibold text-white hover:bg-forest-800">
          Open blog dashboard <ArrowUpRight size={17} />
        </a>
      ) : (
        <div className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="font-semibold text-forest-950">One-time setup still needed</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-stone-700">
            <li>Open the <a className="font-semibold underline" href="https://www.sanity.io/manage/project/42e9u8zs" target="_blank" rel="noreferrer">Harvest Field Sanity project</a>.</li>
            <li>From the repository, open the <code>studio</code> folder, install its packages and run <code>npx sanity deploy</code> to publish the editor.</li>
            <li>Set the Studio URL as <code>VITE_SANITY_STUDIO_URL</code> in Netlify and redeploy.</li>
            <li>Invite the pastor/editor in Sanity project access settings. Each editor should use their own sign-in.</li>
          </ol>
        </div>
      )}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-stone-50 p-4"><ImagePlus className="mb-2 text-harvest-600" /><p className="font-semibold text-forest-950">Photo uploads</p><p className="mt-1 text-sm text-stone-600">Cover photos and additional images inside each article.</p></div>
        <div className="rounded-xl bg-stone-50 p-4"><ShieldCheck className="mb-2 text-harvest-600" /><p className="font-semibold text-forest-950">Protected editor</p><p className="mt-1 text-sm text-stone-600">Only people invited to the Sanity project can publish content.</p></div>
      </div>
    </section>
  </main>
  </LocalizedContent>
);
