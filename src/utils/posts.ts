import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostNumber(post: Post): Promise<string> {
  const posts = await getPublishedPosts();
  const index = posts.findIndex((p) => p.id === post.id);
  return String(posts.length - index).padStart(2, '0');
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getTagCounts(posts: Post[]): { tag: string; slug: string; count: number }[] {
  const map = new Map<string, { tag: string; count: number }>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = slugifyTag(tag);
      const entry = map.get(slug) ?? { tag, count: 0 };
      entry.count++;
      map.set(slug, entry);
    }
  }
  return [...map.entries()]
    .map(([slug, { tag, count }]) => ({ tag, slug, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, 'vi'));
}

export function formatDate(date: Date): string {
  return `ngày ${date.getUTCDate()} tháng ${date.getUTCMonth() + 1} năm ${date.getUTCFullYear()}`;
}

export function formatShortDate(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(date.getUTCDate())}.${pad(date.getUTCMonth() + 1)}.${date.getUTCFullYear()}`;
}

export function formatCardDate(date: Date): string {
  return new Intl.DateTimeFormat('vi-VN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
