import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './globals.css';

export const metadata = {
  title: {
    default: 'Beyond the Algorithm | Technology Publication',
    template: '%s — Beyond the Algorithm',
  },
  description:
    'An independent technology blog documenting concepts, projects, experiments and learning in Data Science, Artificial Intelligence, Machine Learning and programming by Syed Mohammad Hamzah.',
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
    title: 'Beyond the Algorithm | Technology Publication',
    description:
      'Exploring Data, Artificial Intelligence, Machine Learning and the ideas behind them.',
    url: 'https://engineering-journal.pages.dev',
    siteName: 'Beyond the Algorithm',
    images: [
      {
        url: '/images/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'Beyond the Algorithm by Syed Mohammad Hamzah',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond the Algorithm | Technology Publication',
    description:
      'Exploring Data, Artificial Intelligence, Machine Learning and the ideas behind them.',
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

