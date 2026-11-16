import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { JOURNAL_POSTS, SITE_ORIGIN } from '../src/data/missionData';
import { getPagePath } from '../src/routing';

const publicPages = [
  'home',
  'mission',
  'leadership',
  'gallery',
  'journal',
  'partner',
  'contact',
  'join',
] as const;

const urls = [
  ...publicPages.map((page) => getPagePath(page)),
  ...JOURNAL_POSTS.map((post) => getPagePath('journal', post.slug)),
];
const entries = urls
  .map((path) => `  <url><loc>${SITE_ORIGIN}${path}</loc></url>`)
  .join('\n');
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  entries,
  '</urlset>',
  '',
].join('\n');
const robots = `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;

const outputDirectory = resolve(process.cwd(), 'dist');
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(resolve(outputDirectory, 'sitemap.xml'), sitemap, 'utf8');
writeFileSync(resolve(outputDirectory, 'robots.txt'), robots, 'utf8');
