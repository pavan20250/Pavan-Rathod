import React from "react";
import { ExternalLink, Github, Code, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Smart Bookmark App",
    description: "Bookmark manager with Google OAuth, private per-user bookmarks, and real-time sync across tabs.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind", "Postgres", "Realtime"],
    githubUrl: "https://github.com/pavan20250/smart-bookmark-app",
    liveUrl: "https://smart-bookmark-app-kappa.vercel.app",
    icon: Code,
    accent: "blue",
  },
  {
    title: "MindCare AI",
    description: "AI-powered behavioral health platform with intake, triage, clinical insights, and smart dashboards.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    githubUrl: "https://github.com/pavan20250/mindcare-ai",
    liveUrl: "https://mindcare-ai-blush.vercel.app",
    icon: Smartphone,
    accent: "violet",
  },
  {
    title: "Web Qest",
    description: "Modern web application built with Next.js and TypeScript, deployed on Vercel.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    githubUrl: "https://github.com/pavan20250/web-qest",
    liveUrl: "https://web-qest.vercel.app",
    icon: Globe,
    accent: "indigo",
  },
];

const accentStyles: Record<string, { border: string; iconBg: string; line: string }> = {
  blue: {
    border: "hover:border-blue-400/50",
    iconBg: "bg-blue-500/10 text-blue-600",
    line: "bg-blue-500",
  },
  violet: {
    border: "hover:border-violet-400/50",
    iconBg: "bg-violet-500/10 text-violet-600",
    line: "bg-violet-500",
  },
  indigo: {
    border: "hover:border-indigo-400/50",
    iconBg: "bg-indigo-500/10 text-indigo-600",
    line: "bg-indigo-500",
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-[#fafafa] overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px),
            linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-500 max-w-xl text-base leading-relaxed">
            Recent work in full-stack and modern web development.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const style = accentStyles[project.accent];
            return (
              <article
                key={index}
                className={`group relative flex flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 ${style.border} hover:shadow-xl`}
              >
                {/* Accent line on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${style.line}`}
                />

                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${style.iconBg} transition-transform duration-300 group-hover:scale-105`}
                >
                  <IconComponent size={22} strokeWidth={1.75} />
                </div>

                {/* Title & description */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-gray-100">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/pavan20250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-400 hover:bg-gray-50"
          >
            <Github size={18} />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
