export default function robots() {
  const siteUrl = 'https://engineering-journal.pages.dev';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

