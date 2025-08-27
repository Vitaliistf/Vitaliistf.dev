'use client';

import React, { useState, useEffect } from 'react';

import AnimatedBackground from './AnimatedBackground';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import TelegramSection from './TelegramSection';
import ContactSection from './ContactSection';

interface PortfolioClientProps {
  portfolioData: {
    personal: {
      name: string;
      title: string;
      description: string;
      email: string;
      github: string;
      linkedin: string;
      experience: string;
      projects: string;
    };
    about: {
      description: string[];
      specialties: Array<{
        title: string;
        technologies: string;
      }>;
    };
    telegram: {
      title: string;
      description: string;
      channelName: string;
      channelUrl: string;
      highlights: Array<{
        title: string;
        description: string;
        icon: string;
      }>;
      stats: {
        frequency: string;
        content: string;
      };
    };
    skills: Array<{
      name: string;
      level: number;
      category: string;
    }>;
    projects: Array<{
      id: number;
      title: string;
      description: string;
      tech: string[];
      gradient: string;
      github?: string;
      demo?: string;
      featured: boolean;
    }>;
  };
  experienceData: {
    experience: Array<{
      id: number;
      company: string;
      position: string;
      startDate: string;
      endDate: string;
      description: string;
      technologies: string[];
      achievements: string[];
    }>;
    education: Array<{
      id: number;
      institution: string;
      degree: string;
      startDate: string;
      endDate: string;
      description: string;
    }>;
    certifications: Array<{
      id: number;
      name: string;
      issuer: string;
      date: string;
      credential: string;
    }>;
  };
}

const PortfolioClient = ({
  portfolioData,
  experienceData,
}: PortfolioClientProps) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'skills',
        'experience',
        'telegram',
        'contact',
      ];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollY >= offsetTop - 200 &&
            scrollY < offsetTop + offsetHeight - 200
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 40;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(36,36,36)] text-white relative overflow-x-hidden">
      <AnimatedBackground />

      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <HeroSection
        personal={portfolioData.personal}
        scrollToSection={scrollToSection}
      />

      <AboutSection
        about={portfolioData.about}
        personal={portfolioData.personal}
      />

      <SkillsSection skills={portfolioData.skills} />

      <ExperienceSection
        experience={experienceData.experience}
        education={experienceData.education}
        certifications={experienceData.certifications}
      />

      <TelegramSection telegram={portfolioData.telegram} />

      <ContactSection personal={portfolioData.personal} />

      {/* Footer */}
      <footer className="py-8 relative z-10 border-t border-[rgb(230,170,120)]/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} {portfolioData.personal.name}. Crafted
            with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioClient;
