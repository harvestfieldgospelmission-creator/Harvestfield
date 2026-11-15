import React, { useEffect, useState } from 'react';
import { BookOpen, FilePlus2, LogOut, Pencil, Send, Trash2 } from 'lucide-react';
import { supabase, isCmsConfigured } from '../lib/supabase';

type Post = {
  id: string; title: string; slug: string; category: string; excerpt: string;
  content: string; cover_image: string; status: 'draft' | 'published';
  published_at: string | null; created_at: string;
};

const emptyDraft = { title: '', slug: '', category: 'Field Reports', excerpt: '', content: '', cover_image: '' };

export const AdminPage: React.FC = () => {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [draft, setDraft] = useState(emptyDraft);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next));
    return () => data.subscription.unsubscribe();
  }, []);

  const loadPosts = async () => {
    if (!supabase) return;
    const { data, error } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    if (error) setMessage(error.message); else setPosts((data || []) as Post[]);
  };

  useEffect(() => { if (session) void loadPosts(); }, [session]);

  const signIn = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    setBusy(true); setMessage('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) setMessage(error.message);
  };

  const signOut = async () => { await supabase?.auth.signOut(); setPosts([]); };

  const editPost = (post: Post) => {
    setEditingId(post.id);
    setDraft({ title: post.title, slug: post.slug, category: post.category, excerpt: post.excerpt, content: post.content, cover_image: post.cover_image || '' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const savePost = async (event: React.FormEvent, publish: boolean) => {
    event.preventDefault();
    if (!supabase) return;
    if (!draft.title.trim() || !draft.content.trim()) { setMessage('Add an article title and article content first.'); return; }
    setBusy(true); setMessage('');
    const slug = draft.slug.trim() || draft.title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const payload = { ...draft, slug, status: publish ? 'published' : 'draft', published_at: publish ? new Date().toISOString() : null };
    const request = editingId
      ? supabase.from('blog_posts').update(payload).eq('id', editingId)
      : supabase.from('blog_posts').insert(payload);
    const { error } = await request;
    setBusy(false);
    if (error) { setMessage(error.message); return; }
    setMessage(publish ? 'Article published.' : 'Draft saved.');
    setDraft(emptyDraft); setEditingId(null); await loadPosts();
  };

  const deletePost = async (id: string) => {
    if (!supabase || !window.confirm('Delete this article permanently?')) return;
    const { error } = await supabase.from('blog_posts').delete().eq('id', id);
    setMessage(error ? error.message : 'Article deleted.');
    if (!error) await loadPosts();
  };

  if (!isCmsConfigured) return (
    <main className="min-h-[65vh] max-w-3xl mx-auto px-5 py-16">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-harvest-600">Harvest Field CMS</p>
      <h1 className="mt-3 font-serif text-4xl text-forest-950">Admin setup required</h1>
      <p className="mt-4 text-stone-600 leading-relaxed">The secure blog editor is ready, but it needs the ministry’s Supabase project URL and public anon key in the Netlify environment before staff can sign in. Follow the setup instructions in <code>supabase/blog-schema.sql</code> and the project README.</p>
    </main>
  );

  return (
    <main className="min-h-[70vh] bg-[#f7f7f2]">
      {!session ? (
        <section className="max-w-md mx-auto px-5 py-16">
          <div className="bg-white border border-stone-200 rounded-2xl p-7 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-forest-950 text-harvest-400 flex items-center justify-center"><BookOpen /></div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-harvest-600">Harvest Field CMS</p>
            <h1 className="mt-2 font-serif text-3xl text-forest-950">Staff sign in</h1>
            <p className="mt-2 text-sm text-stone-600">Sign in with an account authorised by the mission administrator.</p>
            <form onSubmit={signIn} className="mt-6 space-y-4">
              <label className="block text-sm font-medium text-stone-700">Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-3" /></label>
              <label className="block text-sm font-medium text-stone-700">Password<input type="password" required value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-3" /></label>
              <button disabled={busy} className="w-full rounded-lg bg-forest-950 py-3 text-white font-semibold disabled:opacity-60">{busy ? 'Signing in…' : 'Sign in securely'}</button>
            </form>
            {message && <p role="status" className="mt-4 text-sm text-rose-700">{message}</p>}
          </div>
        </section>
      ) : (
        <section className="max-w-7xl mx-auto px-5 py-10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div><p className="text-xs font-bold uppercase tracking-[.2em] text-harvest-600">Publishing workspace</p><h1 className="mt-2 font-serif text-4xl text-forest-950">Blog dashboard</h1><p className="mt-2 text-sm text-stone-600">Create, edit, save drafts and publish ministry articles.</p></div>
            <button onClick={signOut} className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold"><LogOut size={16}/> Sign out</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,.8fr)] gap-6 items-start">
            <form onSubmit={e=>savePost(e,false)} className="bg-white border border-stone-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between"><h2 className="font-serif text-2xl text-forest-950">{editingId ? 'Edit article' : 'Write an article'}</h2><FilePlus2 className="text-harvest-600"/></div>
              <label className="block text-sm font-medium">Article title<input required value={draft.title} onChange={e=>setDraft({...draft,title:e.target.value})} className="mt-1 w-full rounded-lg border border-stone-300 p-3"/></label>
              <label className="block text-sm font-medium">URL slug<input value={draft.slug} onChange={e=>setDraft({...draft,slug:e.target.value})} placeholder="created-from-title-if-empty" className="mt-1 w-full rounded-lg border border-stone-300 p-3"/></label>
              <label className="block text-sm font-medium">Category<select value={draft.category} onChange={e=>setDraft({...draft,category:e.target.value})} className="mt-1 w-full rounded-lg border border-stone-300 p-3"><option>Field Reports</option><option>Youth &amp; Schools</option><option>Discipleship</option><option>Devotional</option><option>Mission News</option></select></label>
              <label className="block text-sm font-medium">Short introduction<textarea rows={2} value={draft.excerpt} onChange={e=>setDraft({...draft,excerpt:e.target.value})} className="mt-1 w-full rounded-lg border border-stone-300 p-3"/></label>
              <label className="block text-sm font-medium">Cover image URL<input type="url" value={draft.cover_image} onChange={e=>setDraft({...draft,cover_image:e.target.value})} placeholder="https://…" className="mt-1 w-full rounded-lg border border-stone-300 p-3"/></label>
              <label className="block text-sm font-medium">Article content<textarea required rows={14} value={draft.content} onChange={e=>setDraft({...draft,content:e.target.value})} placeholder="Write your article. Separate paragraphs with a blank line." className="mt-1 w-full rounded-lg border border-stone-300 p-3 leading-relaxed"/></label>
              <div className="flex flex-wrap gap-3"><button disabled={busy} type="submit" className="rounded-lg border border-forest-900 px-5 py-3 text-sm font-semibold text-forest-950 disabled:opacity-60">Save draft</button><button disabled={busy} type="button" onClick={e=>void savePost(e as any,true)} className="inline-flex items-center gap-2 rounded-lg bg-forest-950 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"><Send size={16}/> Publish article</button>{editingId && <button type="button" onClick={()=>{setDraft(emptyDraft);setEditingId(null)}} className="px-3 text-sm text-stone-600">Cancel edit</button>}</div>
              {message && <p role="status" className="text-sm text-forest-800">{message}</p>}
            </form>
            <aside className="bg-white border border-stone-200 rounded-2xl p-5">
              <h2 className="font-serif text-xl text-forest-950 mb-4">Articles ({posts.length})</h2>
              <div className="space-y-3">{posts.map(post=><div key={post.id} className="rounded-xl border border-stone-200 p-3"><div className="flex items-start justify-between gap-2"><div><span className={`text-[10px] uppercase font-bold tracking-wider ${post.status==='published'?'text-emerald-700':'text-amber-700'}`}>{post.status}</span><p className="mt-1 text-sm font-semibold text-forest-950">{post.title}</p></div><button onClick={()=>editPost(post)} aria-label="Edit article" className="p-2 text-stone-500 hover:text-forest-900"><Pencil size={15}/></button></div><button onClick={()=>void deletePost(post.id)} className="mt-2 inline-flex items-center gap-1 text-xs text-rose-700"><Trash2 size={13}/> Delete</button></div>)}</div>
            </aside>
          </div>
        </section>
      )}
    </main>
  );
};
