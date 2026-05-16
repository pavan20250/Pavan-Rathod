"use client";
import { ExternalLink, Code, Globe, Smartphone } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Smart Bookmark App",
    description: "Bookmark manager with Google OAuth, private per-user bookmarks, and real-time sync across tabs.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind", "Postgres", "Realtime"],
    githubUrl: "https://github.com/pavan20250/smart-bookmark-app",
    liveUrl: "https://smart-bookmark-app-kappa.vercel.app",
    icon: Code,
    color: "#0A84FF",
  },
  {
    title: "MindCare AI",
    description: "AI-powered behavioral health platform with intake, triage, clinical insights, and smart dashboards.",
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Vercel"],
    githubUrl: "https://github.com/pavan20250/mindcare-ai",
    liveUrl: "https://www.neuralforge.in/",
    icon: Smartphone,
    badge: "Startup",
    color: "#30D158",
  },
  {
    title: "Food Delivery App",
    description: "Next.js food delivery app with unit tests (Jest) and E2E tests (Cypress), deployed on Vercel.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Jest", "Cypress"],
    githubUrl: "https://github.com/pavan20250/food-delivery-app",
    liveUrl: "https://food-delivery-app-woad-eight.vercel.app",
    icon: Smartphone,
    color: "#FF9F0A",
  },
  {
    title: "Web Qest",
    description: "Modern web application built with Next.js and TypeScript, deployed on Vercel.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    githubUrl: "https://github.com/pavan20250/web-qest",
    liveUrl: "https://web-qest.vercel.app",
    icon: Globe,
    color: "#BF5AF2",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <div className="section-label mb-4">Selected Work</div>
            <h2 className="heading-display text-4xl sm:text-5xl">
              Featured<br />
              <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/pavan20250"
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow group shrink-0 self-start sm:self-end mb-2"
          >
            <FaGithub size={14} />
            View all on GitHub
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Project grid */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <article
                key={index}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${project.color}20`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Color accent top stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}40, transparent)` }}
                />

                <div className="p-6 sm:p-7 flex flex-col h-full">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* iOS app icon style */}
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}25, ${project.color}10)`,
                          border: `1px solid ${project.color}30`,
                          color: project.color,
                        }}
                      >
                        <IconComponent size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3
                            className="text-base font-semibold"
                            style={{ color: 'var(--text-primary)', letterSpacing: '-0.015em' }}
                          >
                            {project.title}
                          </h3>
                          {'badge' in project && project.badge && (
                            <span
                              className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                              style={{
                                background: `${project.color}18`,
                                color: project.color,
                                border: `1px solid ${project.color}35`,
                              }}
                            >
                              {project.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span
                      className="font-mono text-2xl font-bold opacity-8 group-hover:opacity-20 transition-opacity"
                      style={{ color: project.color, fontSize: '22px' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4 flex-1"
                    style={{ color: 'var(--text-secondary)', letterSpacing: '-0.005em' }}
                  >
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div
                    className="flex gap-3 pt-4"
                    style={{ borderTop: '0.5px solid var(--border)' }}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        background: 'var(--fill-quaternary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                        letterSpacing: '-0.005em',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                      }}
                    >
                      <FaGithub size={13} />
                      Source
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        background: 'var(--accent)',
                        color: '#fff',
                        fontWeight: 600,
                        letterSpacing: '-0.005em',
                        boxShadow: '0 2px 8px rgba(10,132,255,0.30)',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = 'var(--accent-light)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
                      }}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
