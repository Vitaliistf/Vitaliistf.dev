'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLoaded ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="backdrop-blur-md bg-[rgb(36,36,36)]/80 border-b border-[rgb(230,170,120)]/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div
              className="text-2xl font-bold bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              role="button"
              aria-label="Scroll to top"
            >
              <Image src="/logo-notext.png" alt="logo" width={60} height={60} />
            </div>
            <div className="flex space-x-8 items-center">
              {['About', 'Skills', 'Experience', 'Telegram', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-all duration-300 hover:text-[rgb(230,170,120)] cursor-pointer ${
                      activeSection === item.toLowerCase()
                        ? 'text-[rgb(230,170,120)]'
                        : 'text-white/70'
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
              <Link
                href={`/links`}
                className={`px-3 py-1 rounded-full border transition-all duration-300 ${
                  activeSection === 'links'
                    ? 'border-[rgb(230,170,120)] text-[rgb(230,170,120)] bg-white/5 shadow-[0_0_12px_rgba(230,170,120,0.25)]'
                    : 'border-white/15 text-white/80 hover:border-[rgb(230,170,120)]/40 hover:text-[rgb(230,170,120)] hover:bg-white/5'
                }`}
              >
                Links
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
