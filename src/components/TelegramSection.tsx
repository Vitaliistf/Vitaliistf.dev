'use client';

import { useState } from 'react';
import Section from './Section';
import GlassCard from './GlassCard';
import {
  Send,
  TrendingUp,
  Lightbulb,
  MessageCircle,
  Users,
  Calendar,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface TelegramHighlight {
  title: string;
  description: string;
  icon: string;
}

interface TelegramStats {
  frequency: string;
  content: string;
}

interface TelegramData {
  title: string;
  description: string;
  channelName: string;
  channelUrl: string;
  highlights: TelegramHighlight[];
  stats: TelegramStats;
}

interface TelegramSectionProps {
  telegram: TelegramData;
}

const getHighlightIcon = (iconName: string) => {
  const iconProps = { className: 'w-6 h-6' };

  switch (iconName) {
    case 'trending-up':
      return <TrendingUp {...iconProps} />;
    case 'lightbulb':
      return <Lightbulb {...iconProps} />;
    case 'message-circle':
      return <MessageCircle {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
};

const TelegramSection = ({ telegram }: TelegramSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Ensure the grid fills evenly by adding a tasteful extra block if needed
  const displayHighlights: TelegramHighlight[] =
    telegram.highlights.length % 2 === 1
      ? [
          ...telegram.highlights,
          {
            title: 'Community Q&A',
            description: 'Ask questions, share knowledge, and get feedback.',
            icon: 'sparkles',
          },
        ]
      : telegram.highlights;

  return (
    <Section id="telegram">
      <GlassCard className="p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-[1.25] bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
            {telegram.title}
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {telegram.description}
          </p>
        </div>

        {/* Channel row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="backdrop-blur-md bg-[rgb(230,170,120)]/10 rounded-xl p-3 border border-[rgb(230,170,120)]/20 w-fit">
              <Send className="w-6 h-6 text-[rgb(230,170,120)]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {telegram.channelName}
              </h3>
              <div className="flex items-center flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-white/60">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {telegram.stats.frequency}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {telegram.stats.content}
                </span>
              </div>
            </div>
          </div>
          <div className="md:ml-6">
            <a
              href={telegram.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-5 py-3 bg-gradient-to-r from-[rgb(230,170,120)] to-[rgb(230,170,120)]/80 rounded-lg font-semibold text-white hover:from-[rgb(230,170,120)]/90 hover:to-[rgb(230,170,120)]/70 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Send
                className={`w-5 h-5 transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`}
              />
              <span>Join Channel</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {displayHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="backdrop-blur-md bg-white/5 rounded-lg p-4 border border-[rgb(230,170,120)]/10 hover:border-[rgb(230,170,120)]/30 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="text-[rgb(230,170,120)] mt-0.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {getHighlightIcon(highlight.icon)}
                </div>
                <div className="flex-1">
                  <h5 className="text-base font-semibold text-white mb-1">
                    {highlight.title}
                  </h5>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2 text-white/30">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[rgb(230,170,120)]/30"></div>
            <Sparkles className="w-4 h-4" />
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[rgb(230,170,120)]/30"></div>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
};

export default TelegramSection;
