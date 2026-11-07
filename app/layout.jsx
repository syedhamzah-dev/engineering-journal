import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './globals.css';

export const metadata = {
  title: {
    default: 'Learning in Progress | Personal Technology Blog',
    template: '%s — Learning in Progress',
  },
  description:
    'An engineering student documenting the journey from curiosity to code, data and intelligence. Articles on Data Science, AI, Machine Learning, and programming by Syed Mohammad Hamzah.',
  metadataBase: new URL('https://engineering-journal.pages.dev'),
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Learning in Progress | Personal Technology Blog',
    description:
      'An engineering student documenting the journey from curiosity to code, data and intelligence.',
    url: 'https://engineering-journal.pages.dev',
    siteName: 'Learning in Progress',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'Learning in Progress by Syed Mohammad Hamzah',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learning in Progress | Personal Technology Blog',
    description:
      'An engineering student documenting the journey from curiosity to code, data and intelligence.',
    images: ['/images/og-default.svg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="top">
        <Header />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

