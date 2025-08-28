'use client';

import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import Section from './Section';

interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credential: string;
  url?: string;
}

interface ExperienceSectionProps {
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}

const ExperienceSection = ({
  experience,
  education,
  certifications,
}: ExperienceSectionProps) => {
  return (
    <Section id="experience">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center leading-[1.2] bg-gradient-to-r from-[rgb(230,170,120)] to-white bg-clip-text text-transparent">
        Experience & Background
      </h2>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Work Experience */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-8 text-[rgb(230,170,120)] flex items-center">
            <Briefcase className="w-6 h-6 mr-2" />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-[rgb(230,170,120)]/20 hover:border-[rgb(230,170,120)]/40 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {exp.position}
                    </h4>
                    <p className="text-[rgb(230,170,120)] font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="text-white/70 mb-4">{exp.description}</p>
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-white/80 mb-2">
                    Key Achievements:
                  </h5>
                  <ul className="text-sm text-white/70 space-y-1">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 rounded-full bg-[rgb(230,170,120)] mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-[rgb(230,170,120)]/10 border border-[rgb(230,170,120)]/30 rounded text-[rgb(230,170,120)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="space-y-8">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(230,170,120)] flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="backdrop-blur-md bg-white/5 rounded-lg p-4 border border-[rgb(230,170,120)]/20 hover:border-[rgb(230,170,120)]/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  <h4 className="font-semibold text-white text-sm">
                    {edu.degree}
                  </h4>
                  <p className="text-[rgb(230,170,120)] text-sm">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-white/60 mb-2">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  <p className="text-xs text-white/70">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(230,170,120)] flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => {
                const CardContent = (
                  <div className="backdrop-blur-md bg-white/5 rounded-lg p-4 border border-[rgb(230,170,120)]/20 hover:border-[rgb(230,170,120)]/40 transition-all duration-300 hover:scale-[1.02] flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-[rgb(230,170,120)] text-sm">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-white/60">{cert.date}</p>
                        {cert.credential && (
                          <p className="text-xs text-white/50">
                            {cert.credential}
                          </p>
                        )}
                      </div>
                    </div>
                    {cert.url && (
                      <ExternalLink className="w-4 h-4 text-white/50" />
                    )}
                  </div>
                );

                return cert.url ? (
                  <a
                    key={cert.id}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div key={cert.id}>{CardContent}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
