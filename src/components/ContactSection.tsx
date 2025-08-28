'use client';

import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';
import Section from './Section';
import GlassCard from './GlassCard';

interface ContactSectionProps {
  personal: {
    email: string;
    github: string;
    linkedin: string;
    instagram: string;
    telegram: string;
  };
}

const ContactSection = ({ personal }: ContactSectionProps) => {
  const contacts = [
    {
      Icon: Mail,
      label: personal.email,
      url: `mailto:${personal.email}`,
    },
    {
      Icon: Send,
      label: personal.telegram.replace('https://', ''),
      url: personal.telegram,
    },
    {
      Icon: Github,
      label: personal.github.replace('https://', ''),
      url: personal.github,
    },
    {
      Icon: Linkedin,
      label: personal.linkedin.replace('https://', ''),
      url: personal.linkedin,
    },
    {
      Icon: Instagram,
      label: personal.instagram.replace('https://', ''),
      url: personal.instagram,
    },
  ];

  return (
    <Section id="contact">
      <GlassCard className="p-8 md:p-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Ready to bring your next project to life? I&apos;m always excited to
          work on challenging problems with innovative teams.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 justify-items-center mb-12">
          {contacts.map(({ Icon, label, url }, index) => (
            <a
              key={index}
              href={url}
              target={url.startsWith('http') ? '_blank' : undefined}
              rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-full max-w-[160px] text-center group"
            >
              <div className="w-16 h-16 rounded-full backdrop-blur-md bg-[rgb(230,170,120)]/10 border border-[rgb(230,170,120)]/30 flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300 cursor-pointer group-hover:bg-[rgb(230,170,120)]/20">
                <Icon className="w-8 h-8 text-[rgb(230,170,120)] mx-auto" />
              </div>
              <div className="truncate text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {label}
              </div>
            </a>
          ))}
        </div>
        <a
          href={`mailto:${personal.email}`}
          className="inline-block px-8 py-4 bg-gradient-to-r from-[rgb(230,170,120)] to-[rgb(230,170,120)]/80 text-[rgb(36,36,36)] font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[rgb(230,170,120)]/25"
        >
          Get In Touch
        </a>
      </GlassCard>
    </Section>
  );
};

export default ContactSection;
