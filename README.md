# Harvest Field Gospel Mission website

## Blog publishing with Sanity

The public Blog page reads published articles from the Sanity project `42e9u8zs` (dataset: `production`). The editorial workspace is a separate Sanity Studio in the `studio/` folder. Supabase is not required for blog publishing.

### Deploy the editor once

1. Open a terminal in the repository's `studio` folder.
2. Run `npm install`.
3. Run `npx sanity deploy` and choose a unique Studio hostname.
4. In the Sanity project access settings, invite the pastor and any other editors using their own email addresses.
5. In Sanity API settings, add `https://harvestfieldgospelmission.netlify.app` as a CORS origin with credentials disabled. Add the final custom domain too when it is ready.
6. In Netlify, set `VITE_SANITY_STUDIO_URL` to the deployed Studio URL and trigger a new website deploy.

### Publishing an article

1. Open the deployed Studio URL and sign in.
2. Select **Blog article** and create a new article.
3. Add the title, URL slug, category, short introduction, author, mission field, and cover photograph.
4. Write the article in the rich-text editor. Use the image button inside the article to upload additional photographs and add captions.
5. Set the publish date/time and click **Publish**. Leave the article as a draft until it is ready.
6. Published articles appear automatically on the public Blog page. No GitHub edits are needed for ordinary article publishing.

The public website uses read-only published content and does not contain a Sanity write token. Never add a Sanity write token to Netlify's public `VITE_*` variables or commit secrets to Git. See [studio/README.md](studio/README.md) for editor details.

## Social profiles

The footer displays Facebook, Instagram, and YouTube icons. They are intentionally not linked yet because the official ministry profile URLs have not been supplied. Add verified profile URLs before making them clickable.
