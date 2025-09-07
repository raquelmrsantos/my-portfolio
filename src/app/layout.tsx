import type { Metadata } from 'next';
import { Roboto, Roboto_Mono, Stint_Ultra_Expanded } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const stintUltraExpanded = Stint_Ultra_Expanded({
  variable: '--font-stint-ultra-expanded',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  style: 'normal',
});

const grandSlang = localFont({
  src: [
    {
      path: '../../public/fonts/grandslangroman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/grandslangroman.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/grandslangroman.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-grand-slang',
  display: 'swap',
  fallback: ['serif'],
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
        className={` ${roboto.variable} ${robotoMono.variable} ${stintUltraExpanded.variable} ${grandSlang.variable} ${maelstrom.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
