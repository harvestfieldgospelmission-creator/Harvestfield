-- Run this file in the Supabase SQL Editor for the Harvest Field project.
create extension if not exists pgcrypto;

create table if not exists public.blog_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null default 'Field Reports',
  excerpt text not null default '',
  content text not null,
  cover_image text not null default '',
  status text not null default 'draft' check (status in ('draft','published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.is_blog_admin()
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.blog_admins where user_id = auth.uid()); $$;

alter table public.blog_admins enable row level security;
alter table public.blog_posts enable row level security;

create policy "admins can read admin roster" on public.blog_admins
for select to authenticated using (public.is_blog_admin());

create policy "public can read published blog posts" on public.blog_posts
for select to anon, authenticated using (status = 'published' or public.is_blog_admin());

create policy "admins can insert blog posts" on public.blog_posts
for insert to authenticated with check (public.is_blog_admin());

create policy "admins can update blog posts" on public.blog_posts
for update to authenticated using (public.is_blog_admin()) with check (public.is_blog_admin());

create policy "admins can delete blog posts" on public.blog_posts
for delete to authenticated using (public.is_blog_admin());

-- After creating the first staff user in Supabase Authentication, authorise that
-- user by inserting their UUID here:
-- insert into public.blog_admins (user_id) values ('PASTE-AUTH-USER-UUID-HERE');
