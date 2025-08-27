'use client';

import Image from 'next/image';
import {
  Globe,
  Github,
  Linkedin,
  Mail,
  FileText,
  Book,
  Twitter,
  ExternalLink,
  ArrowLeft,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Section from './Section';
import GlassCard from './GlassCard';

interface LinkItem {
  id: number;
  title: string;
  url: string;
  icon: string;
  featured: boolean;
}

interface LinksData {
  profile: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  links: LinkItem[];
}

interface LinksClientProps {
  linksData: LinksData;
}

const getIcon = (iconName: string) => {
  const iconMap = {
    globe: Globe,
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    'file-text': FileText,
    book: Book,
    twitter: Twitter,
  };

  const IconComponent =
    iconMap[iconName as keyof typeof iconMap] || ExternalLink;
  return <IconComponent className="w-5 h-5" />;
};

const LinksClient = ({ linksData }: LinksClientProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const featuredLinks = linksData.links.filter((link) => link.featured);
  const otherLinks = linksData.links.filter((link) => !link.featured);

  return (
    <div className="min-h-screen bg-[rgb(36,36,36)] text-white relative overflow-x-hidden">
      {/* Subtle background to match site */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(36,36,36)] via-[rgb(46,46,46)] to-[rgb(36,36,36)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(230,170,120)]/5 to-transparent"></div>
      </div>

      {/* Back to Portfolio */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <button className="flex items-center space-x-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-[rgb(230,170,120)]/20 rounded-lg hover:bg-[rgb(230,170,120)]/10 transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Portfolio</span>
          </button>
        </Link>
      </div>

      <Section id="links">
        <div
          className={`max-w-md mx-auto transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <GlassCard className="p-6 md:p-8 text-center">
            {/* Profile Header */}
            <div className="text-center mb-6">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={linksData.profile.avatar}
                  alt={linksData.profile.name}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-[rgb(230,170,120)]/20 backdrop-blur-sm"
                />
              </div>
              <h1 className="text-2xl font-bold mb-1 bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
                {linksData.profile.name}
              </h1>
              <p className="text-white/80 mb-1 text-sm">
                {linksData.profile.title}
              </p>
              <p className="text-white/60 text-sm">{linksData.profile.bio}</p>
            </div>

            {/* Featured Links */}
            <div className="space-y-3 mb-6">
              {featuredLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.url.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="block w-full p-4 backdrop-blur-md bg-white/10 border border-[rgb(230,170,120)]/20 rounded-lg hover:bg-[rgb(230,170,120)]/10 hover:border-[rgb(230,170,120)]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 text-[rgb(230,170,120)] group-hover:scale-110 transition-transform duration-300">
                      {getIcon(link.icon)}
                    </div>
                    <div className="flex-1 text-left">
                      <span className="font-medium text-white group-hover:text-[rgb(230,170,120)] transition-colors duration-300">
                        {link.title}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[rgb(230,170,120)] transition-colors duration-300" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Other Links */}
            {otherLinks.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {otherLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.url.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="p-4 backdrop-blur-md bg-white/5 border border-[rgb(230,170,120)]/15 rounded-lg hover:bg-[rgb(230,170,120)]/5 hover:border-[rgb(230,170,120)]/30 transition-all duration-300 group text-center"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-[rgb(230,170,120)] group-hover:scale-110 transition-transform duration-300">
                        {getIcon(link.icon)}
                      </div>
                      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                        {link.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </GlassCard>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} {linksData.profile.name}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LinksClient;
