import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-14 md:py-20 relative z-10 ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
};

export default Section;
