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
        url: '/portrait-image.png',
        width: 1200,
        height: 630,
        alt: 'Vitalii Stefaniv - Senior Full-Stack Developer',
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
  },
  alternates: {
    canonical: 'https://vitaliistf.dev',
  },
  category: 'technology',
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
