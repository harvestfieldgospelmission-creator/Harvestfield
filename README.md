# Harvest Field Gospel Mission website

## Blog CMS setup

The public Blog page reads published articles from Supabase. The staff editor is available at `/#/admin`.

1. Create a Supabase project for Harvest Field Gospel Mission.
2. In the Supabase SQL Editor, run `supabase/blog-schema.sql`.
3. In Supabase Authentication, create the first staff user with email/password sign-in. Keep public sign-up disabled.
4. Copy that user's UUID from Authentication > Users, then run the final `insert into public.blog_admins` statement in the SQL file with the UUID.
5. In Netlify, add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` under Site configuration > Environment variables. Use the project's URL and anon/public key. Never put a service-role key in the website.
6. Trigger a new deploy. Open `/#/admin` and sign in with the authorised staff account.

Only user IDs explicitly inserted into `public.blog_admins` can create, edit, publish, or delete articles. Row-level security keeps drafts private and makes published articles readable by visitors.

## Social profiles

The footer displays Facebook, Instagram, and YouTube icons. They are intentionally not linked yet because the official ministry profile URLs were not included. Add the verified profile URLs before making them clickable.
