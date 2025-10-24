import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import {
  Stint_Ultra_Expanded,
  Sofia_Sans_Condensed,
  Spline_Sans_Mono,
} from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const stintUltraExpanded = Stint_Ultra_Expanded({
  variable: '--font-stint-ultra-expanded',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  style: 'normal',
});

const sofiaSansCondensed = Sofia_Sans_Condensed({
  variable: '--font-sofia-sans-condensed',
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
});

const splineSansMono = Spline_Sans_Mono({
  variable: '--font-spline-sans-mono',
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
});

const maelstrom = localFont({
  src: [
    {
      path: '../../public/fonts/maelstrom.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-maelstrom',
  display: 'swap',
  fallback: ['serif'],
});

export const metadata: Metadata = {
  title: {
    default: 'Raquel Santos | Portfolio',
    template: '%s | Raquel Santos',
  },
  description: 'Raquel Santos - Creative Front-End Web Developer | Portfolio',
  keywords: [
    'Raquel Santos',
    'Portfolio',
    'Creative',
    'Professional',
    'Web Developer',
    'Front-End Developer',
  ],
  authors: [{ name: 'Raquel Santos' }],
  creator: 'Raquel Santos',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.raqueldossantos.com',
    title: 'Raquel Santos | Portfolio',
    description: 'Raquel Santos - Creative Front-End Web Developer | Portfolio',
    siteName: 'Raquel Santos Portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  /*   viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  }, */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head></head>
      <body
        className={`${stintUltraExpanded.variable} ${maelstrom.variable} ${sofiaSansCondensed.variable} ${splineSansMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
