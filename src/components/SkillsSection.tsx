'use client';

import { useState, useEffect } from 'react';
import Section from './Section';
import { ChevronDown } from 'lucide-react';
import {
  // React/Next.js
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  // Java/Spring
  SiSpring,
  SiHibernate,
  // Node.js
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  // AI/LLMs
  SiOpenai,
  // Cloud/AWS
  SiAmazon,
  SiAwslambda,
  SiAmazonrds,
  // Databases
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  // DevOps
  SiDocker,
  SiKubernetes,
  // APIs
  SiGraphql,
  SiApollographql,
  // Testing
  SiJest,
  SiCypress,
  // General
  SiVectary,
} from 'react-icons/si';

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
      return <SiReact className="w-6 h-6" />;
    case 'backend':
      return <SiNodedotjs className="w-6 h-6" />;
    case 'database':
      return <SiPostgresql className="w-6 h-6" />;
    case 'language':
      return <SiSpring className="w-6 h-6" />;
    case 'devops':
      return <SiDocker className="w-6 h-6" />;
    case 'api':
      return <SiGraphql className="w-6 h-6" />;
    case 'ai':
      return <SiOpenai className="w-6 h-6" />;
    case 'cloud':
      return <SiAmazon className="w-6 h-6" />;
    case 'testing':
      return <SiJest className="w-6 h-6" />;
    default:
      return <SiReact className="w-6 h-6" />;
  }
};

const getSubskillIcon = (iconName: string) => {
  const iconProps = { className: 'w-4 h-4' };

  switch (iconName) {
    // React/Next.js subskills
    case 'react-hooks':
      return <SiReact {...iconProps} />;
    case 'redux':
      return <SiRedux {...iconProps} />;
    case 'nextjs':
      return <SiNextdotjs {...iconProps} />;
    case 'server-components':
      return <SiNextdotjs {...iconProps} />;
    case 'tailwind':
      return <SiTailwindcss {...iconProps} />;

    // Java/Spring subskills
    case 'spring-boot':
      return <SiSpring {...iconProps} />;
    case 'jpa-hibernate':
      return <SiHibernate {...iconProps} />;
    case 'rest-apis':
      return <SiGraphql {...iconProps} />;
    case 'microservices':
      return <SiDocker {...iconProps} />;

    // Node.js subskills
    case 'express':
      return <SiExpress {...iconProps} />;
    case 'nestjs':
      return <SiNestjs {...iconProps} />;
    case 'authentication':
      return <SiReact {...iconProps} />;
    case 'websockets':
      return <SiReact {...iconProps} />;

    // AI/LLMs subskills
    case 'mcp':
      return <SiOpenai {...iconProps} />;
    case 'rag':
      return <SiVectary {...iconProps} />;
    case 'vector-db':
      return <SiVectary {...iconProps} />;
    case 'prompt-engineering':
      return <SiOpenai {...iconProps} />;
    case 'azure-openai':
      return <SiOpenai {...iconProps} />;

    // Cloud/AWS subskills
    case 'aws-s3':
      return <SiAmazon {...iconProps} />;
    case 'aws-lambda':
      return <SiAwslambda {...iconProps} />;
    case 'aws-rds':
      return <SiAmazonrds {...iconProps} />;
    case 'azure-functions':
      return <SiOpenai {...iconProps} />;
    case 'azure-aks':
      return <SiKubernetes {...iconProps} />;
    case 'cdn':
      return <SiAmazon {...iconProps} />;

    // Database subskills
    case 'query-optimization':
      return <SiPostgresql {...iconProps} />;
    case 'database-design':
      return <SiMongodb {...iconProps} />;
    case 'redis':
      return <SiRedis {...iconProps} />;
    case 'prisma':
      return <SiPrisma {...iconProps} />;
    case 'data-migration':
      return <SiPostgresql {...iconProps} />;

    // DevOps subskills
    case 'container-orchestration':
      return <SiKubernetes {...iconProps} />;
    case 'cicd':
      return <SiDocker {...iconProps} />;
    case 'kubernetes':
      return <SiKubernetes {...iconProps} />;
    case 'infrastructure-as-code':
      return <SiDocker {...iconProps} />;

    // API subskills
    case 'apollo-graphql':
      return <SiApollographql {...iconProps} />;
    case 'api-design':
      return <SiGraphql {...iconProps} />;
    case 'rate-limiting':
      return <SiGraphql {...iconProps} />;
    case 'documentation':
      return <SiGraphql {...iconProps} />;
    case 'testing':
      return <SiJest {...iconProps} />;

    // Testing subskills
    case 'jest':
      return <SiJest {...iconProps} />;
    case 'playwright':
      return <SiJest {...iconProps} />;
    case 'cypress':
      return <SiCypress {...iconProps} />;
    case 'testing-library':
      return <SiJest {...iconProps} />;
    case 'contract-testing':
      return <SiJest {...iconProps} />;

    default:
      return <SiReact {...iconProps} />;
  }
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
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

  const toggleExpanded = (skillName: string) => {
    setExpandedSkill((current) => (current === skillName ? null : skillName));
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
            onClick={() => skill.subskills && toggleExpanded(skill.name)}
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
                <>
                  <div className="hidden md:block text-xs text-[rgb(230,170,120)]/60 group-hover:text-[rgb(230,170,120)] transition-colors duration-300">
                    Hover for details
                  </div>
                  <button
                    type="button"
                    className="md:hidden inline-flex items-center gap-1 text-xs text-[rgb(230,170,120)]/80"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpanded(skill.name);
                    }}
                    aria-expanded={expandedSkill === skill.name}
                    aria-controls={`skill-${index}-details`}
                  >
                    Details
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${
                        expandedSkill === skill.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </>
              )}
            </div>

            {skill.subskills && (
              <div
                id={`skill-${index}-details`}
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                  expandedSkill === skill.name
                    ? 'mt-4 max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 gap-2">
                  {skill.subskills?.map((subskill) => (
                    <div
                      key={subskill.name}
                      className="flex items-center space-x-3 py-2 px-3 rounded-lg bg-white/5"
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
              </div>
            )}
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
