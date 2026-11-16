import type { JournalPost } from '../data/missionData';
import type { Language } from '../i18n';

const PROJECT_ID = '42e9u8zs';
const DATASET = 'production';
const API_VERSION = '2025-02-19';

export interface SanityImageBlock {
  _type: 'image';
  _key?: string;
  alt?: string;
  caption?: string;
  asset?: { url?: string };
}

export interface SanityTextBlock {
  _type: 'block';
  _key?: string;
  style?: string;
  children?: Array<{ _type: string; text?: string; marks?: string[] }>;
  markDefs?: Array<{ _key: string; _type: string; href?: string }>;
}

type SanityPost = {
  _id: string;
  title: string;
  slug?: { current?: string };
  category?: string;
  excerpt?: string;
  author?: string;
  authorRole?: string;
  publishedAt?: string;
  region?: string;
  featured?: boolean;
  coverImage?: { url?: string; alt?: string; caption?: string };
  body?: Array<SanityTextBlock | SanityImageBlock>;
  translations?: Partial<Record<'fr' | 'es', { title?: string; excerpt?: string; authorRole?: string; region?: string; coverImageAlt?: string; coverImageCaption?: string; body?: SanityTextBlock[] }>>;
};

const POST_QUERY = encodeURIComponent(
  '*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) { _id, title, "slug": slug.current, category, excerpt, author, authorRole, publishedAt, region, featured, "coverImage": coverImage { "url": asset->url, alt, caption }, "body": body[] { ..., "asset": asset->{url} }, translations { fr { title, excerpt, authorRole, region, coverImageAlt, coverImageCaption, body[] }, es { title, excerpt, authorRole, region, coverImageAlt, coverImageCaption, body[] } } }'
);

function plainText(block: SanityTextBlock | SanityImageBlock): string {
  if (block._type !== 'block') return '';
  return (block.children || []).map((child) => child.text || '').join('');
}

export async function fetchPublishedPosts(language: Language = 'en'): Promise<JournalPost[]> {
  const endpoint = 'https://' + PROJECT_ID + '.api.sanity.io/v' + API_VERSION +
    '/data/query/' + DATASET + '?query=' + POST_QUERY;
  const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error('The blog service could not be reached. Please try again later.');
  const payload = await response.json() as { result?: SanityPost[] };
  return (payload.result || []).map((post) => {
    const translation = language === 'en' ? undefined : post.translations?.[language];
    const bodyBlocks = translation?.body?.length ? translation.body : (post.body || []);
    const text = bodyBlocks.map(plainText).filter(Boolean);
    const words = text.join(' ').trim().split(/\s+/).filter(Boolean).length;
    const category = ['Field Reports', 'Youth & Schools', 'Discipleship', 'Devotional'].includes(post.category || '')
      ? post.category as JournalPost['category']
      : 'Field Reports';
    return {
      id: post._id,
      slug: post.slug?.current || post._id,
      category,
      title: translation?.title || post.title,
      subtitle: translation?.excerpt || post.excerpt || '',
      author: post.author || 'Harvest Field Editorial Team',
      authorRole: translation?.authorRole || post.authorRole || "Harvest Field Gospel Mission Int'l",
      date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : '',
      readTime: Math.max(1, Math.ceil(words / 220)) + ' min read',
      region: translation?.region || post.region || 'Harvest Field Mission',
      featured: Boolean(post.featured),
      coverImage: post.coverImage?.url || '/assets/field/discipleship-training.jpg',
      coverCaption: translation?.coverImageCaption || translation?.coverImageAlt || post.coverImage?.caption || post.coverImage?.alt || post.title,
      excerpt: translation?.excerpt || post.excerpt || '',
      body: text,
      bodyBlocks,
      marginNote: {
        heading: language === 'fr' ? 'De la mission' : language === 'es' ? 'Desde la misión' : 'From the Mission',
        detail: language === 'fr' ? "Récits et enseignements de Harvest Field Gospel Mission Int'l." : language === 'es' ? "Historias y enseñanzas de Harvest Field Gospel Mission Int'l." : "Stories and teaching from Harvest Field Gospel Mission Int'l.",
      },
    };
  });
}
