'use client';

import { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { ChevronDown } from 'lucide-react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react';
import {
  // React/Next.js
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiZod,
  SiStyledcomponents,
  SiChakraui,
  SiFramer,
  SiReacthookform,
  SiStorybook,
  SiVite,
  // Java/Spring
  SiSpring,
  SiHibernate,
  SiSpringboot,
  SiSpringsecurity,
  SiThymeleaf,
  SiGradle,
  SiFlyway,
  SiLiquibase,
  SiKotlin,
  // Node.js
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPassport,
  SiFastify,
  SiSocketdotio,
  SiPrisma,
  SiSequelize,
  SiTypeorm,
  SiMongoose,
  SiPm2,
  SiNpm,
  SiYarn,
  SiStripe,
  // Low-level languages
  SiC,
  SiCplusplus,
  SiRust,
  SiGo,
  SiAssemblyscript,
  SiArduino,
  // Microservices
  SiApachekafka,
  SiRabbitmq,
  SiApachepulsar,
  SiRedis,
  SiIstio,
  SiKong,
  SiJaeger,
  SiEventstore,
  // AI/LLMs
  SiOpenai,
  SiAnthropic,
  SiLangchain,
  // Cloud/AWS
  SiAmazon,
  SiAwslambda,
  SiGooglecloud,
  SiCloudflare,
  SiTerraform,
  SiVercel,
  SiRender,
  // Databases
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiElasticsearch,
  SiApachecassandra,
  SiAmazondynamodb,
  // DevOps
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiJenkins,
  SiGithubactions,
  SiGitlab,
  SiCircleci,
  SiPrometheus,
  SiGrafana,
  SiAnsible,
  // APIs
  SiGraphql,
  SiApollographql,
  SiSwagger,
  SiPostman,

  // Testing
  SiJest,
  SiVitest,
  SiTestinglibrary,
  SiCypress,
  SiJunit5,
  SiApachejmeter,
  SiK6,
  // Security
  SiOwasp,
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

// Animated progress bar component
const AnimatedProgressBar = ({
  target,
  duration = 1500,
  startDelay = 0,
}: {
  target: number;
  duration?: number;
  startDelay?: number;
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation (ease-out-cubic)
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentProgress = Math.floor(easeOutCubic * target);

        setProgress(currentProgress);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, startDelay);

    return () => clearTimeout(timer);
  }, [target, duration, startDelay, isVisible]);

  return (
    <div ref={elementRef} className="w-full">
      <div className="w-full bg-white/10 rounded-full h-2 mb-2">
        <div
          className="bg-gradient-to-r from-[rgb(230,170,120)] to-[rgb(230,170,120)]/60 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

// Animated percentage counter component
const AnimatedPercentage = ({
  target,
  duration = 1500,
  startDelay = 0,
}: {
  target: number;
  duration?: number;
  startDelay?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation (ease-out-cubic)
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOutCubic * target);

        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, startDelay);

    return () => clearTimeout(timer);
  }, [target, duration, startDelay, isVisible]);

  return (
    <div ref={elementRef} className="text-sm text-white/60">
      {count}% Proficiency
    </div>
  );
};

const getSkillIcon = (category: string, skillName?: string) => {
  // Handle backend skills specifically by name
  if (category === 'backend' && skillName) {
    if (skillName.toLowerCase().includes('java')) {
      return <SiSpring className="w-6 h-6" />;
    }
    if (skillName.toLowerCase().includes('node')) {
      return <SiNodedotjs className="w-6 h-6" />;
    }
  }

  switch (category) {
    case 'frontend':
      return <SiReact className="w-6 h-6" />;
    case 'backend':
      return <SiNodedotjs className="w-6 h-6" />;
    case 'database':
      return <SiPostgresql className="w-6 h-6" />;
    case 'low-level':
      return <SiC className="w-6 h-6" />;
    case 'microservices':
      return <SiApachekafka className="w-6 h-6" />;
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
    case 'security':
      return <SiOwasp className="w-6 h-6" />;
    default:
      return <SiReact className="w-6 h-6" />;
  }
};

const getSubskillIcon = (iconName: string) => {
  const iconProps = { className: 'w-4 h-4' };

  switch (iconName) {
    // React/Next.js subskills
    case 'typescript':
      return <SiTypescript {...iconProps} />;
    case 'react':
      return <SiReact {...iconProps} />;
    case 'nextjs':
      return <SiNextdotjs {...iconProps} />;
    case 'redux':
      return <SiRedux {...iconProps} />;
    case 'zustand':
      return <SiReact {...iconProps} />; // Fallback
    case 'zod':
      return <SiZod {...iconProps} />;
    case 'tanstack-query':
      return <SiReact {...iconProps} />; // Fallback
    case 'tailwind':
      return <SiTailwindcss {...iconProps} />;
    case 'styled-components':
      return <SiStyledcomponents {...iconProps} />;
    case 'mui':
      return <SiReact {...iconProps} />; // Fallback
    case 'chakra':
      return <SiChakraui {...iconProps} />;
    case 'framer-motion':
      return <SiFramer {...iconProps} />;
    case 'react-hook-form':
      return <SiReacthookform {...iconProps} />;
    case 'storybook':
      return <SiStorybook {...iconProps} />;
    case 'vite':
      return <SiVite {...iconProps} />;

    // Java/Spring subskills
    case 'spring':
      return <SiSpring {...iconProps} />;
    case 'spring-boot':
      return <SiSpringboot {...iconProps} />;
    case 'hibernate':
      return <SiHibernate {...iconProps} />;
    case 'spring-security':
      return <SiSpringsecurity {...iconProps} />;
    case 'spring-mvc':
      return <SiSpring {...iconProps} />;
    case 'spring-webflux':
      return <SiSpring {...iconProps} />; // Fallback
    case 'java':
      return <SiSpring {...iconProps} />;
    case 'thymeleaf':
      return <SiThymeleaf {...iconProps} />;
    case 'maven':
      return <SiSpring {...iconProps} />; // Fallback
    case 'gradle':
      return <SiGradle {...iconProps} />;
    case 'flyway':
      return <SiFlyway {...iconProps} />;
    case 'liquibase':
      return <SiLiquibase {...iconProps} />;
    case 'jakarta-ee':
      return <SiSpring {...iconProps} />; // Fallback
    case 'jdbc':
      return <SiSpring {...iconProps} />; // Fallback
    case 'kotlin':
      return <SiKotlin {...iconProps} />;

    // Node.js subskills
    case 'nestjs':
      return <SiNestjs {...iconProps} />;
    case 'express':
      return <SiExpress {...iconProps} />;
    case 'passport':
      return <SiPassport {...iconProps} />;
    case 'fastify':
      return <SiFastify {...iconProps} />;
    case 'socketio':
      return <SiSocketdotio {...iconProps} />;
    case 'prisma':
      return <SiPrisma {...iconProps} />;
    case 'sequelize':
      return <SiSequelize {...iconProps} />;
    case 'typeorm':
      return <SiTypeorm {...iconProps} />;
    case 'mongoose':
      return <SiMongoose {...iconProps} />;
    case 'nodemailer':
      return <SiNodedotjs {...iconProps} />; // Fallback
    case 'pm2':
      return <SiPm2 {...iconProps} />;
    case 'npm':
      return <SiNpm {...iconProps} />;
    case 'yarn':
      return <SiYarn {...iconProps} />;
    case 'stripe':
      return <SiStripe {...iconProps} />;
    case 'jwt':
      return <SiNodedotjs {...iconProps} />; // Fallback

    // Low-level languages
    case 'c':
      return <SiC {...iconProps} />;
    case 'cpp':
      return <SiCplusplus {...iconProps} />;
    case 'rust':
      return <SiRust {...iconProps} />;
    case 'go':
      return <SiGo {...iconProps} />;
    case 'assembly':
      return <SiAssemblyscript {...iconProps} />;
    case 'arduino':
      return <SiArduino {...iconProps} />;
    case 'psoc':
      return <SiC {...iconProps} />; // Fallback for PSoC
    case 'memory':
      return <SiC {...iconProps} />;
    case 'system':
      return <SiC {...iconProps} />;

    // Microservices
    case 'kafka':
      return <SiApachekafka {...iconProps} />;
    case 'rabbitmq':
      return <SiRabbitmq {...iconProps} />;
    case 'pulsar':
      return <SiApachepulsar {...iconProps} />;
    case 'grpc':
      return <SiApachekafka {...iconProps} />; // Fallback
    case 'istio':
      return <SiIstio {...iconProps} />;
    case 'kong':
      return <SiKong {...iconProps} />;
    case 'hystrix':
      return <SiApachekafka {...iconProps} />; // Fallback
    case 'jaeger':
      return <SiJaeger {...iconProps} />;
    case 'eventstore':
      return <SiEventstore {...iconProps} />;

    // AI/LLMs
    case 'prompt-engineering':
      return <SiOpenai {...iconProps} />;
    case 'openai':
      return <SiOpenai {...iconProps} />;
    case 'anthropic':
      return <SiAnthropic {...iconProps} />;
    case 'mcp':
      return <SiOpenai {...iconProps} />; // Fallback for MCP
    case 'langchain':
      return <SiLangchain {...iconProps} />;
    case 'pinecone':
      return <SiOpenai {...iconProps} />; // Fallback
    case 'rag':
      return <SiVectary {...iconProps} />;
    case 'fine-tuning':
      return <SiOpenai {...iconProps} />;
    case 'model-deployment':
      return <SiOpenai {...iconProps} />;

    // Cloud/AWS
    case 'aws':
      return <SiAmazon {...iconProps} />;
    case 'azure':
      return <SiAmazon {...iconProps} />; // Fallback
    case 'gcp':
      return <SiGooglecloud {...iconProps} />;
    case 'cloudflare':
      return <SiCloudflare {...iconProps} />;
    case 'lambda':
      return <SiAwslambda {...iconProps} />;
    case 'azure-functions':
      return <SiAmazon {...iconProps} />; // Fallback
    case 'gcp-functions':
      return <SiGooglecloud {...iconProps} />;
    case 's3':
      return <SiAmazon {...iconProps} />;
    case 'azure-storage':
      return <SiAmazon {...iconProps} />; // Fallback
    case 'cicd':
      return <SiGithubactions {...iconProps} />;
    case 'vercel':
      return <SiVercel {...iconProps} />;
    case 'render':
      return <SiRender {...iconProps} />;
    case 'terraform':
      return <SiTerraform {...iconProps} />;
    case 'cloudformation':
      return <SiAmazon {...iconProps} />; // Fallback

    // Database
    case 'postgresql':
      return <SiPostgresql {...iconProps} />;
    case 'mysql':
      return <SiMysql {...iconProps} />;
    case 'mongodb':
      return <SiMongodb {...iconProps} />;
    case 'redis':
      return <SiRedis {...iconProps} />;
    case 'elasticsearch':
      return <SiElasticsearch {...iconProps} />;
    case 'cassandra':
      return <SiApachecassandra {...iconProps} />;
    case 'dynamodb':
      return <SiAmazondynamodb {...iconProps} />;
    case 'database-design':
      return <SiPostgresql {...iconProps} />;
    case 'query-optimization':
      return <SiPostgresql {...iconProps} />;
    case 'data-migration':
      return <SiPostgresql {...iconProps} />;

    // DevOps
    case 'docker':
      return <SiDocker {...iconProps} />;
    case 'kubernetes':
      return <SiKubernetes {...iconProps} />;
    case 'helm':
      return <SiHelm {...iconProps} />;
    case 'jenkins':
      return <SiJenkins {...iconProps} />;
    case 'github-actions':
      return <SiGithubactions {...iconProps} />;
    case 'gitlab':
      return <SiGitlab {...iconProps} />;
    case 'circleci':
      return <SiCircleci {...iconProps} />;
    case 'prometheus':
      return <SiPrometheus {...iconProps} />;
    case 'grafana':
      return <SiGrafana {...iconProps} />;
    case 'ansible':
      return <SiAnsible {...iconProps} />;

    // API
    case 'graphql':
      return <SiGraphql {...iconProps} />;
    case 'apollo':
      return <SiApollographql {...iconProps} />;
    case 'rest':
      return <SiGraphql {...iconProps} />;
    case 'swagger':
      return <SiSwagger {...iconProps} />;
    case 'postman':
      return <SiPostman {...iconProps} />;
    case 'api-versioning':
      return <SiGraphql {...iconProps} />;
    case 'rate-limiting':
      return <SiGraphql {...iconProps} />;
    case 'oauth':
      return <SiGraphql {...iconProps} />; // Fallback
    case 'webhooks':
      return <SiGraphql {...iconProps} />;
    case 'api-gateway':
      return <SiKong {...iconProps} />;

    // Testing
    case 'tdd':
      return <SiJest {...iconProps} />;
    case 'jest':
      return <SiJest {...iconProps} />;
    case 'vitest':
      return <SiVitest {...iconProps} />;
    case 'rtl':
      return <SiTestinglibrary {...iconProps} />;
    case 'cypress':
      return <SiCypress {...iconProps} />;
    case 'playwright':
      return <SiJest {...iconProps} />; // Fallback
    case 'junit':
      return <SiJunit5 {...iconProps} />;
    case 'testcontainers':
      return <SiDocker {...iconProps} />; // Fallback
    case 'jmeter':
      return <SiApachejmeter {...iconProps} />;
    case 'mockito':
      return <SiJest {...iconProps} />; // Fallback
    case 'pact':
      return <SiJest {...iconProps} />; // Fallback
    case 'k6':
      return <SiK6 {...iconProps} />;

    // Security
    case 'owasp':
      return <SiOwasp {...iconProps} />;
    case 'tls':
      return <SiOwasp {...iconProps} />; // Fallback
    case 'csp':
      return <SiOwasp {...iconProps} />;
    case 'performance':
      return <SiVectary {...iconProps} />;
    case 'caching':
      return <SiRedis {...iconProps} />;
    case 'cdn':
      return <SiCloudflare {...iconProps} />;
    case 'code-splitting':
      return <SiVite {...iconProps} />;
    case 'bundle-analyzer':
      return <SiVite {...iconProps} />;

    default:
      return <SiReact {...iconProps} />;
  }
};

// Tooltip component using Floating UI
const SkillTooltip = ({
  skill,
  children,
}: {
  skill: Skill;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  if (!skill.subskills) {
    return <>{children}</>;
  }

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()} className="w-full">
        {children}
      </div>
      {isOpen && !isMobile && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="z-50"
          >
            <div className="backdrop-blur-md bg-[rgb(36,36,36)]/90 border border-[rgb(230,170,120)]/30 rounded-xl p-3 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-xs">
              <div className="text-sm font-semibold text-[rgb(230,170,120)] mb-2 text-center">
                Related Skills
              </div>
              <div className="grid grid-cols-1 gap-1">
                {skill.subskills.map((subskill, index) => (
                  <div
                    key={subskill.name}
                    className="flex items-center space-x-2 py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="text-[rgb(230,170,120)] flex-shrink-0">
                      {getSubskillIcon(subskill.icon)}
                    </div>
                    <span className="text-xs text-white/90 font-medium truncate">
                      {subskill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleExpanded = (skillName: string) => {
    setExpandedSkill((current) => (current === skillName ? null : skillName));
  };

  return (
    <Section id="skills">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center leading-[1.2] bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillTooltip key={skill.name} skill={skill}>
            <div
              className="backdrop-blur-md bg-white/5 rounded-lg p-4 border border-[rgb(230,170,120)]/20 hover:border-[rgb(230,170,120)]/40 transition-all duration-500 hover:scale-105 group relative cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => skill.subskills && toggleExpanded(skill.name)}
            >
              <div className="flex items-center mb-3">
                <div className="text-[rgb(230,170,120)] mr-2 group-hover:scale-110 transition-transform duration-300">
                  {getSkillIcon(skill.category, skill.name)}
                </div>
                <h3 className="text-base font-semibold">{skill.name}</h3>
              </div>
              <AnimatedProgressBar
                target={skill.level}
                duration={1200}
                startDelay={index * 100}
              />
              <div className="flex items-center justify-between mt-2">
                <AnimatedPercentage
                  target={skill.level}
                  duration={1200}
                  startDelay={index * 100}
                />
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
                      ? 'mt-3 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 gap-1.5">
                    {skill.subskills?.map((subskill) => (
                      <div
                        key={subskill.name}
                        className="flex items-center space-x-2 py-1.5 px-2 rounded-lg bg-white/5"
                      >
                        <div className="text-[rgb(230,170,120)] flex-shrink-0">
                          {getSubskillIcon(subskill.icon)}
                        </div>
                        <span className="text-xs text-white/90 font-medium">
                          {subskill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </SkillTooltip>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
