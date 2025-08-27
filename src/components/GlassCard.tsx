import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={`backdrop-blur-md bg-white/5 rounded-2xl border border-[rgb(230,170,120)]/20 hover:border-[rgb(230,170,120)]/40 transition-all duration-500 ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
