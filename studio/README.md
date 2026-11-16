# Harvest Field Blog Studio

This is the private editorial workspace for the Harvest Field Gospel Mission website. The public website reads published articles from the public `production` dataset; editors sign in to Sanity Studio to create and manage content.

## Local development

1. Install Node.js (current LTS).
2. From this folder run `npm install`.
3. Run `npm run dev` and sign in with an account invited to the Sanity project.
4. Use the Blog article content type to write, add a cover photograph, insert additional photographs in the article, save drafts, and publish.

## Deploy the editor

From this folder run `npm install`, then `npx sanity deploy`. Choose a unique Studio hostname when prompted. In Sanity project settings, invite the pastor/editor using their own email and grant an appropriate editor role. Do not share a personal login.

Set the resulting Studio URL as `VITE_SANITY_STUDIO_URL` in the Netlify site environment variables and redeploy the website. In Sanity project API settings, add `https://harvestfieldgospelmission.netlify.app` (and the ministry's final custom domain when ready) to CORS origins with credentials disabled so the browser can read published content. The public site does not need a Sanity write token or any secret API key.

## Content publishing

Only documents with a publish date/time at or before the current time are shown on the public website. Save a draft by leaving Publish date and time empty; publish by setting the date/time and clicking Publish. Changes to published posts appear on the website on the next page load.

The project ID and dataset are public read configuration. Never add a Sanity write token to the public website or commit secrets to Git.
