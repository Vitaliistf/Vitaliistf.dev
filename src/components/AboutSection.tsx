'use client';

import { Zap, Terminal } from 'lucide-react';
import Section from './Section';
import GlassCard from './GlassCard';

interface AboutSectionProps {
  about: {
    description: string[];
    specialties: Array<{
      title: string;
      technologies: string;
    }>;
  };
  personal: {
    experience: string;
    projects: string;
  };
}

const AboutSection = ({ about, personal }: AboutSectionProps) => {
  return (
    <Section id="about">
      <GlassCard className="p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center leading-[1.2] bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {about.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-white/80 mb-5 md:mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="backdrop-blur-md bg-[rgb(230,170,120)]/10 rounded-lg p-3 sm:p-4 border border-[rgb(230,170,120)]/20 h-24 sm:h-28 text-center flex flex-col items-center justify-center w-full">
                <Zap className="w-8 h-8 text-[rgb(230,170,120)] mb-2" />
                <div className="text-sm font-semibold">
                  {personal.experience}
                </div>
                <div className="text-xs text-white/60">Experience</div>
              </div>
              <div className="backdrop-blur-md bg-[rgb(230,170,120)]/10 rounded-lg p-3 sm:p-4 border border-[rgb(230,170,120)]/20 h-24 sm:h-28 text-center flex flex-col items-center justify-center w-full">
                <Terminal className="w-8 h-8 text-[rgb(230,170,120)] mb-2" />
                <div className="text-sm font-semibold">{personal.projects}</div>
                <div className="text-xs text-white/60">Completed</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {about.specialties.map((specialty, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 rounded-lg p-6 border border-[rgb(230,170,120)]/20 hover:border-[rgb(230,170,120)]/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[rgb(230,170,120)] mb-2">
                  {specialty.title}
                </h3>
                <p className="text-white/70">{specialty.technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </Section>
  );
};

export default AboutSection;
