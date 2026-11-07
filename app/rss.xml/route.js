import { getAllPosts } from '../../lib/posts.js';

export async function GET() {
  const posts = getAllPosts(false);
  const siteUrl = 'https://engineering-journal.pages.dev';

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
      <category>${post.category}</category>
      <author>mohdhamzah1308@gmail.com (${post.author})</author>
    </item>`
    )
    .join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Learning in Progress | Personal Technology Blog</title>
    <link>${siteUrl}</link>
    <description>An engineering student documenting the journey from curiosity to code, data and intelligence. Articles by Syed Mohammad Hamzah.</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

