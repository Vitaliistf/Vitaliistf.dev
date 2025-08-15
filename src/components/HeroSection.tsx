'use client'

import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  personal: {
    name: string;
    title: string;
    description: string;
    github: string;
    linkedin: string;
    email: string;
  };
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ personal, scrollToSection }: HeroSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    { Icon: Github, url: personal.github },
    { Icon: Linkedin, url: personal.linkedin },
    { Icon: Mail, url: `mailto:${personal.email}` }
  ];

  return (
    <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative z-10">
      <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-[rgba(230,170,120,0.2)] to-[rgba(230,170,120,0.2)] mx-auto mb-6 backdrop-blur-sm border border-[rgb(230,170,120)]/30 flex items-center justify-center">
            <Image src="/logo.png" alt="logo" width={300} height={300} />
            {/* <Image src="/portrait-image.png" alt="logo" width={200} height={200} /> */}
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[rgb(230,170,120)] to-white bg-clip-text text-transparent animate-pulse">
          {personal.name}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          {personal.title} {personal.description}
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          {socialLinks.map(({ Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target={url.startsWith('http') ? '_blank' : undefined}
              rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-[rgb(230,170,120)]/30 flex items-center justify-center hover:bg-[rgb(230,170,120)]/20 transition-all duration-300 cursor-pointer hover:scale-110"
            >
              <Icon className="w-6 h-6 text-[rgb(230,170,120)]" />
            </a>
          ))}
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-[rgb(230,170,120)]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;