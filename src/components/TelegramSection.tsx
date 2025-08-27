'use client';

import { useState } from 'react';
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

  return (
    <section id="telegram" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-[rgb(230,170,120)]/20 p-8 md:p-12 hover:border-[rgb(230,170,120)]/40 transition-all duration-500">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
              {telegram.title}
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              {telegram.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Channel info */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="backdrop-blur-md bg-[rgb(230,170,120)]/10 rounded-xl p-4 border border-[rgb(230,170,120)]/20 w-fit">
                  <Send className="w-8 h-8 text-[rgb(230,170,120)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {telegram.channelName}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 space-y-1 sm:space-y-0">
                    <div className="flex items-center space-x-2 text-sm text-white/60">
                      <Calendar className="w-4 h-4" />
                      <span>{telegram.stats.frequency}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/60">
                      <Users className="w-4 h-4" />
                      <span>{telegram.stats.content}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a
                  href={telegram.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto space-x-3 px-6 sm:px-8 py-4 bg-gradient-to-r from-[rgb(230,170,120)] to-[rgb(230,170,120)]/80 rounded-xl font-semibold text-white hover:from-[rgb(230,170,120)]/90 hover:to-[rgb(230,170,120)]/70 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
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
                <p className="text-sm text-white/50 mt-3 text-center sm:text-left">
                  Free to join • No spam • Quality content only
                </p>
              </div>
            </div>

            {/* Right side - Highlights */}
            <div className="space-y-4 mt-8 lg:mt-0">
              <h4 className="text-xl font-semibold text-[rgb(230,170,120)] mb-6 text-center lg:text-left">
                What You'll Find
              </h4>
              {telegram.highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="backdrop-blur-md bg-white/5 rounded-xl p-4 sm:p-6 border border-[rgb(230,170,120)]/10 hover:border-[rgb(230,170,120)]/30 transition-all duration-500 hover:scale-[1.02] group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="text-[rgb(230,170,120)] mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {getHighlightIcon(highlight.icon)}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-white mb-2">
                        {highlight.title}
                      </h5>
                      <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2 text-white/30">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[rgb(230,170,120)]/30"></div>
              <Sparkles className="w-4 h-4" />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[rgb(230,170,120)]/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramSection;
