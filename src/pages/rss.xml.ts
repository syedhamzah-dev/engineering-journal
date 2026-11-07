import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Learning in Progress | Personal Technology Blog',
    description:
      'An engineering student documenting the journey from curiosity to code, data and intelligence. Articles by Syed Mohammad Hamzah.',
    site: context.site ? context.site.toString() : 'https://engineering-journal.pages.dev',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      categories: [post.data.category, ...(post.data.tags || [])],
      link: `/blog/${post.id.replace(/\.[^/.]+$/, '')}`,
      author: post.data.author,
    })),
    customData: `<language>en-us</language>`,
  });
}

