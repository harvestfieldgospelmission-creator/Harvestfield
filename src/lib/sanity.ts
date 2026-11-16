import type { JournalPost } from '../data/missionData';

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
};

const POST_QUERY = encodeURIComponent(
  '*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) { _id, title, "slug": slug.current, category, excerpt, author, authorRole, publishedAt, region, featured, "coverImage": coverImage { "url": asset->url, alt, caption }, "body": body[] { ..., "asset": asset->{url} } }'
);

function plainText(block: SanityTextBlock | SanityImageBlock): string {
  if (block._type !== 'block') return '';
  return (block.children || []).map((child) => child.text || '').join('');
}

export async function fetchPublishedPosts(): Promise<JournalPost[]> {
  const endpoint = 'https://' + PROJECT_ID + '.api.sanity.io/v' + API_VERSION +
    '/data/query/' + DATASET + '?query=' + POST_QUERY;
  const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error('The blog service could not be reached. Please try again later.');
  const payload = await response.json() as { result?: SanityPost[] };
  return (payload.result || []).map((post) => {
    const bodyBlocks = post.body || [];
    const text = bodyBlocks.map(plainText).filter(Boolean);
    const words = text.join(' ').trim().split(/\s+/).filter(Boolean).length;
    const category = ['Field Reports', 'Youth & Schools', 'Discipleship', 'Devotional'].includes(post.category || '')
      ? post.category as JournalPost['category']
      : 'Field Reports';
    return {
      id: post._id,
      slug: post.slug?.current || post._id,
      category,
      title: post.title,
      subtitle: post.excerpt || '',
      author: post.author || 'Harvest Field Editorial Team',
      authorRole: post.authorRole || "Harvest Field Gospel Mission Int'l",
      date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : '',
      readTime: Math.max(1, Math.ceil(words / 220)) + ' min read',
      region: post.region || 'Harvest Field Mission',
      featured: Boolean(post.featured),
      coverImage: post.coverImage?.url || '/assets/field/discipleship-training.jpg',
      coverCaption: post.coverImage?.caption || post.coverImage?.alt || post.title,
      excerpt: post.excerpt || '',
      body: text,
      bodyBlocks,
      marginNote: {
        heading: 'From the Mission',
        detail: "Stories and teaching from Harvest Field Gospel Mission Int'l.",
      },
    };
  });
}
