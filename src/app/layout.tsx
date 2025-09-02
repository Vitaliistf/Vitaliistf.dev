import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AnimatedBackground from '@/components/AnimatedBackground';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vitalii Stefaniv - Senior Full-Stack Developer',
  description:
    'Senior Full-Stack Developer with 5+ years of experience crafting scalable web applications using React, Next.js, Node.js, Java Spring Boot, and modern cloud technologies. Specializing in AI integrations, microservices architecture, and building robust user experiences.',
  keywords: [
    'Vitalii Stefaniv',
    'Full-Stack Developer',
    'React Developer',
    'Next.js',
    'Node.js',
    'Java Spring Boot',
    'TypeScript',
    'Microservices',
    'AI Integration',
    'Cloud Technologies',
    'AWS',
    'Portfolio',
    'Software Engineer',
  ],
  authors: [{ name: 'Vitalii Stefaniv' }],
  creator: 'Vitalii Stefaniv',
  publisher: 'Vitalii Stefaniv',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vitaliistf.dev',
    siteName: 'Vitalii Stefaniv - Portfolio',
    title: 'Vitalii Stefaniv - Senior Full-Stack Developer',
    description:
      'Senior Full-Stack Developer with 5+ years of experience crafting scalable web applications using modern technologies. View my portfolio, experience, and technical expertise.',
    images: [
      {
        url: '/logo-notext.png',
        width: 1200,
        height: 630,
        alt: 'Vitalii Stefaniv - Senior Full-Stack Developer',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Vitalii Stefaniv Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitalii Stefaniv - Senior Full-Stack Developer',
    description:
      'Senior Full-Stack Developer with 5+ years of experience crafting scalable web applications using modern technologies.',
    images: ['/logo-notext.png'],
    creator: '@vitaliistf',
    site: '@vitaliistf',
  },
  other: {
    // Telegram specific metadata
    'telegram:channel': '@vitaliistf_dev',
    'telegram:site': 'https://t.me/vitaliistf_dev',

    // LinkedIn specific
    'linkedin:owner': 'vitaliistf',

    // GitHub specific
    'github:owner': 'vitaliistf',

    // Additional social media
    'instagram:site': '@vitaliistf',

    // WhatsApp sharing
    'whatsapp:description':
      "Check out Vitalii Stefaniv's portfolio - Senior Full-Stack Developer with 5+ years of experience",

    // Discord/Reddit sharing
    'discord:title': 'Vitalii Stefaniv - Senior Full-Stack Developer Portfolio',
    'reddit:title': 'Vitalii Stefaniv - Senior Full-Stack Developer Portfolio',

    // Professional networks
    'xing:profile': 'vitaliistf',
    'angel:profile': 'vitaliistf',

    // Contact information
    'contact:email': 'deosplayt@gmail.com',
    'contact:telegram': 'https://t.me/vitaliistf',

    // Technical metadata
    'tech:stack': 'React, Next.js, Node.js, Java Spring Boot, TypeScript, AWS',
    'tech:experience': '5+ years',
    'tech:specialization':
      'Full-Stack Development, AI Integration, Microservices',
  },
  alternates: {
    canonical: 'https://vitaliistf.dev',
  },
  category: 'technology',
  applicationName: 'Vitalii Stefaniv Portfolio',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: '/logo-notext.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-notext.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/logo-notext.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo-notext.png',
        color: '#E6AA78',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const AnimatedBackground = dynamic(
  //   () => import('@/components/AnimatedBackground'),
  //   { ssr: false }
  // );
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
