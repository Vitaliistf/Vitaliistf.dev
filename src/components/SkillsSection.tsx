'use client'

import { Code, Database, Globe, Terminal, Layers, Server } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const getSkillIcon = (category: string) => {
  switch (category) {
    case 'frontend':
      return <Code className="w-6 h-6" />;
    case 'backend':
      return <Server className="w-6 h-6" />;
    case 'database':
      return <Database className="w-6 h-6" />;
    case 'language':
      return <Terminal className="w-6 h-6" />;
    case 'devops':
      return <Layers className="w-6 h-6" />;
    case 'api':
      return <Globe className="w-6 h-6" />;
    default:
      return <Code className="w-6 h-6" />;
  }
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-[rgb(230,170,120)]/20 hover:border-[rgb(230,170,120)]/40 transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-[rgb(230,170,120)] mr-3 group-hover:scale-110 transition-transform duration-300">
                  {getSkillIcon(skill.category)}
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-[rgb(230,170,120)] to-[rgb(230,170,120)]/60 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-sm text-white/60">{skill.level}% Proficiency</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;