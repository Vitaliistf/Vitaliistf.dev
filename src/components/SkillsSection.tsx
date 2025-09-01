'use client';

import { useState, useEffect } from 'react';
import Section from './Section';
import {
  Code,
  Database,
  Globe,
  Terminal,
  Layers,
  Server,
  Zap,
  Network,
  Shield,
  Radio,
  Search,
  RefreshCw,
  Type,
  Box,
  Star,
  Package,
  Settings,
  Workflow,
  Layout,
  Clock,
  FileText,
  CheckCircle,
  Palette,
  Route,
} from 'lucide-react';

interface Subskill {
  name: string;
  icon: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
  subskills?: Subskill[];
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

const getSubskillIcon = (iconName: string) => {
  const iconProps = { className: 'w-4 h-4' };

  switch (iconName) {
    case 'hook':
      return <Code {...iconProps} />;
    case 'database':
      return <Database {...iconProps} />;
    case 'route':
      return <Route {...iconProps} />;
    case 'server':
      return <Server {...iconProps} />;
    case 'palette':
      return <Palette {...iconProps} />;
    case 'zap':
      return <Zap {...iconProps} />;
    case 'layers':
      return <Layers {...iconProps} />;
    case 'network':
      return <Network {...iconProps} />;
    case 'shield':
      return <Shield {...iconProps} />;
    case 'radio':
      return <Radio {...iconProps} />;
    case 'search':
      return <Search {...iconProps} />;
    case 'refresh':
      return <RefreshCw {...iconProps} />;
    case 'type':
      return <Type {...iconProps} />;
    case 'box':
      return <Box {...iconProps} />;
    case 'star':
      return <Star {...iconProps} />;
    case 'package':
      return <Package {...iconProps} />;
    case 'container':
      return <Box {...iconProps} />;
    case 'workflow':
      return <Workflow {...iconProps} />;
    case 'settings':
      return <Settings {...iconProps} />;
    case 'code':
      return <Code {...iconProps} />;
    case 'globe':
      return <Globe {...iconProps} />;
    case 'layout':
      return <Layout {...iconProps} />;
    case 'clock':
      return <Clock {...iconProps} />;
    case 'file-text':
      return <FileText {...iconProps} />;
    case 'check-circle':
      return <CheckCircle {...iconProps} />;
    default:
      return <Code {...iconProps} />;
  }
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipElement, setTooltipElement] = useState<HTMLElement | null>(
    null
  );

  const updateTooltipPosition = (element: HTMLElement) => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    let x = rect.left + rect.width / 2;
    let y = rect.top - 10;

    // Ensure tooltip doesn't go off screen horizontally
    const tooltipWidth = 220; // approximate tooltip width
    if (x + tooltipWidth / 2 > viewportWidth) {
      x = viewportWidth - tooltipWidth / 2 - 10;
    } else if (x - tooltipWidth / 2 < 0) {
      x = tooltipWidth / 2 + 10;
    }

    // If tooltip would go above viewport, show it below the element
    if (y < 100) {
      y = rect.bottom + 10;
    }

    setTooltipPosition({ x, y });
  };

  const handleMouseEnter = (skillName: string, event: React.MouseEvent) => {
    const element = event.currentTarget as HTMLElement;
    setTooltipElement(element);
    updateTooltipPosition(element);
    setHoveredSkill(skillName);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
    setTooltipElement(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (tooltipElement && hoveredSkill) {
        updateTooltipPosition(tooltipElement);
      }
    };

    const handleResize = () => {
      if (tooltipElement && hoveredSkill) {
        updateTooltipPosition(tooltipElement);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [tooltipElement, hoveredSkill]);

  return (
    <Section id="skills">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center leading-[1.2] bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-[rgb(230,170,120)]/20 hover:border-[rgb(230,170,120)]/40 transition-all duration-500 hover:scale-105 group relative cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={(e) =>
              skill.subskills && handleMouseEnter(skill.name, e)
            }
            onMouseLeave={handleMouseLeave}
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
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/60">
                {skill.level}% Proficiency
              </div>
              {skill.subskills && (
                <div className="hidden md:block text-xs text-[rgb(230,170,120)]/60 group-hover:text-[rgb(230,170,120)] transition-colors duration-300">
                  Hover for details
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {hoveredSkill && (
        <div
          className="fixed z-50 pointer-events-none hidden md:block"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="backdrop-blur-md bg-[rgb(36,36,36)]/90 border border-[rgb(230,170,120)]/30 rounded-xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="text-sm font-semibold text-[rgb(230,170,120)] mb-3 text-center">
              Related Skills
            </div>
            <div className="grid grid-cols-1 gap-2 min-w-[200px]">
              {skills
                .find((skill) => skill.name === hoveredSkill)
                ?.subskills?.map((subskill, index) => (
                  <div
                    key={subskill.name}
                    className="flex items-center space-x-3 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="text-[rgb(230,170,120)] flex-shrink-0">
                      {getSubskillIcon(subskill.icon)}
                    </div>
                    <span className="text-sm text-white/90 font-medium">
                      {subskill.name}
                    </span>
                  </div>
                ))}
            </div>
            {/* Arrow */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 ${
                tooltipPosition.y > 150
                  ? 'bottom-0 translate-y-full'
                  : 'top-0 -translate-y-full rotate-180'
              }`}
            >
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[rgb(230,170,120)]/30"></div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default SkillsSection;
