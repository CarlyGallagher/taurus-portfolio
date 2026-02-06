import type { Metadata } from 'next';
import { Poppins, Abril_Fatface } from 'next/font/google';
import './globals.css';
import { siteMetadata } from '@/constants/data';

// FontAwesome library setup
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faPhone,
  faEnvelope,
  faComputer,
  faDatabase,
  faUsers,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false;

// Add icons to library
library.add(
  faPhone,
  faEnvelope,
  faComputer,
  faDatabase,
  faUsers,
  faBars,
  faLinkedin,
  faGithub,
  faSquareGithub
);

// Font configurations
const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const abrilFatface = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abril',
  display: 'swap',
});

// SEO Metadata
export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/Subject-3.png" />
      </head>
      <body className={`${poppins.variable} ${abrilFatface.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
