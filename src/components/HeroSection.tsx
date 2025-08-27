'use client';

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
    { Icon: Mail, url: `mailto:${personal.email}` },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center relative z-10"
    >
      <div
        className={`w-full max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-left">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[rgb(230,170,120)] to-white bg-clip-text text-transparent animate-pulse">
              {personal.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl">
              {personal.title} {personal.description}
            </p>
            <div className="flex items-center gap-4 mb-12">
              {socialLinks.map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target={url.startsWith('http') ? '_blank' : undefined}
                  rel={
                    url.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                  className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-[rgb(230,170,120)]/30 flex items-center justify-center hover:bg-[rgb(230,170,120)]/20 transition-all duration-300 cursor-pointer hover:scale-110"
                >
                  <Icon className="w-6 h-6 text-[rgb(230,170,120)]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Photo container */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-[rgb(230,170,120)]/10 blur-2xl" />
            <div className="relative rounded-3xl border border-[rgb(230,170,120)]/30 bg-white/5 backdrop-blur-sm">
              <div className="relative rounded-2xl overflow-hidden h-[380px] sm:h-[460px] md:h-[520px] flex items-end justify-center">
                <Image
                  src="/ms-nobg.png"
                  alt="Portrait"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8 text-[rgb(230,170,120)]" />
      </button>
    </section>
  );
};

export default HeroSection;
