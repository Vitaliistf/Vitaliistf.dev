'use client'

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.filter(project => project.featured).map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-md bg-white/5 rounded-xl border border-[rgb(230,170,120)]/20 overflow-hidden hover:border-[rgb(230,170,120)]/40 transition-all duration-500 hover:scale-105 group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full backdrop-blur-md bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full backdrop-blur-md bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
                <div className={`absolute inset-0 bg-[rgb(230,170,120)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[rgb(230,170,120)]">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-[rgb(230,170,120)]/10 border border-[rgb(230,170,120)]/30 rounded-full text-[rgb(230,170,120)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;