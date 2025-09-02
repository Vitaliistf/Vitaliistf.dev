'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Coffee, Heart } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/GlassCard';

export default function ResumePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 px-6">
      <div
        className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[rgb(230,170,120)] hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        <GlassCard className="p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[rgb(230,170,120)]/20 to-[rgb(230,170,120)]/10 flex items-center justify-center">
              <Clock className="w-10 h-10 text-[rgb(230,170,120)]" />
            </div>

            <h1 className="text-3xl leading-[1.2] md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
              Resume Coming Soon
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Thanks for your interest! I&apos;m currently not actively seeking
              new opportunities, but I appreciate you taking the time to check
              out my work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-[rgb(230,170,120)]/20">
              <Coffee className="w-8 h-8 text-[rgb(230,170,120)] mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Currently Focused
              </h3>
              <p className="text-white/70 text-sm">
                Working on exciting projects and personal growth
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-[rgb(230,170,120)]/20">
              <Heart className="w-8 h-8 text-[rgb(230,170,120)] mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Passionate About
              </h3>
              <p className="text-white/70 text-sm">
                Creating amazing digital experiences
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-[rgb(230,170,120)]/20">
              <Clock className="w-8 h-8 text-[rgb(230,170,120)] mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Check Back Later
              </h3>
              <p className="text-white/70 text-sm">
                Something exciting might be coming soon!
              </p>
            </div>
          </div>

          <div className="border-t border-[rgb(230,170,120)]/20 pt-8">
            <p className="text-white/60 text-sm mb-4">
              In the meantime, feel free to explore my portfolio and connect
              with me on social media.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[rgb(230,170,120)]/20 to-[rgb(230,170,120)]/10 border border-[rgb(230,170,120)]/30 text-[rgb(230,170,120)] hover:bg-[rgb(230,170,120)]/20 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
