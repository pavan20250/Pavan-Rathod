import React from "react";
import { ExternalLink, Github, Code, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Smart Bookmark App",
    description: "Bookmark manager with Google OAuth, private per-user bookmarks, and real-time sync across tabs.",
    technologies: ["JavaScript", "Next.js", "React", "Supabase", "Tailwind", "Postgres", "Realtime"],
    githubUrl: "https://github.com/pavan20250/smart-bookmark-app",
    liveUrl: "https://smart-bookmark-app-kappa.vercel.app",
    icon: Code,
    accent: "blue",
  },
  {
    title: "MindCare AI",
    description: "AI-powered behavioral health platform with intake, triage, clinical insights, and smart dashboards.",
    technologies: ["JavaScript", "Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Vercel"],
    githubUrl: "https://github.com/pavan20250/mindcare-ai",
    liveUrl: "https://mindcare-ai-blush.vercel.app",
    icon: Smartphone,
    accent: "violet",
    badge: "Startup idea",
  },
  {
    title: "Food Delivery App",
    description: "Next.js food delivery app with unit tests (Jest) and E2E tests (Cypress), deployed on Vercel.",
    technologies: ["JavaScript", "Next.js", "React", "TypeScript", "Tailwind", "Jest", "Cypress", "Vercel"],
    githubUrl: "https://github.com/pavan20250/food-delivery-app",
    liveUrl: "https://food-delivery-app-woad-eight.vercel.app",
    icon: Smartphone,
    accent: "emerald",
  },
  {
    title: "Web Qest",
    description: "Modern web application built with Next.js and TypeScript, deployed on Vercel.",
    technologies: ["JavaScript", "Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    githubUrl: "https://github.com/pavan20250/web-qest",
    liveUrl: "https://web-qest.vercel.app",
    icon: Globe,
    accent: "indigo",
  },
];

const accentStyles: Record<string, { border: string; iconBg: string; line: string; linkHover: string; tagHover: string }> = {
  blue: {
    border: "hover:border-blue-300/60",
    iconBg: "bg-blue-500/10 text-blue-600",
    line: "bg-blue-500",
    linkHover: "hover:text-blue-600",
    tagHover: "group-hover/card:border-blue-200 group-hover/card:bg-blue-50/50",
  },
  violet: {
    border: "hover:border-violet-300/60",
    iconBg: "bg-violet-500/10 text-violet-600",
    line: "bg-violet-500",
    linkHover: "hover:text-violet-600",
    tagHover: "group-hover/card:border-violet-200 group-hover/card:bg-violet-50/50",
  },
  indigo: {
    border: "hover:border-indigo-300/60",
    iconBg: "bg-indigo-500/10 text-indigo-600",
    line: "bg-indigo-500",
    linkHover: "hover:text-indigo-600",
    tagHover: "group-hover/card:border-indigo-200 group-hover/card:bg-indigo-50/50",
  },
  emerald: {
    border: "hover:border-emerald-300/60",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    line: "bg-emerald-500",
    linkHover: "hover:text-emerald-600",
    tagHover: "group-hover/card:border-emerald-200 group-hover/card:bg-emerald-50/50",
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#fafafa] overflow-hidden"
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
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-px w-6 sm:w-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-400">
              Selected Work
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-1.5 sm:mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-xl text-sm sm:text-base leading-relaxed">
            Recent work in full-stack and modern web development.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-3 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const style = accentStyles[project.accent];
            return (
              <article
                key={index}
                className={`group/card relative flex flex-col rounded-xl sm:rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-lg shadow-slate-300/20 p-4 sm:p-5 md:p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-400/25 hover:bg-white/60 ${style.border}`}
              >
                {/* Glass edge highlight */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/70 pointer-events-none" />
                {/* Accent line on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-xl sm:rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 ${style.line}`}
                />
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl sm:rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

                {/* Icon */}
                <div
                  className={`mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl ${style.iconBg} transition-transform duration-300 group-hover/card:scale-105`}
                >
                  <IconComponent size={20} strokeWidth={1.75} />
                </div>

                {/* Title & description */}
                <div className="mb-1.5 sm:mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight">
                    {project.title}
                  </h3>
                  {"badge" in project && project.badge && (
                    <span className="rounded-md border border-violet-200/80 bg-violet-50/80 px-2 py-0.5 text-[10px] font-medium text-violet-700">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-5 flex-1 min-h-0">
                  {project.description}
                </p>

                {/* Tech stack - hidden on mobile for compact 2-column layout */}
                {/* <div className="hidden sm:flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-md sm:rounded-lg border border-transparent bg-gray-100/80 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-gray-600 transition-colors duration-300 ${style.tagHover}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}

                {/* Links */}
                <div className="flex flex-wrap gap-2 pt-3 sm:pt-4 border-t border-white/50">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/80 bg-white/50 backdrop-blur-sm px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:bg-white/80 transition-colors"
                  >
                    <Github size={14} className="shrink-0" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800/90 backdrop-blur-sm px-3 py-2 text-xs sm:text-sm font-medium text-white shadow-md hover:bg-slate-700/90 transition-colors"
                  >
                    <ExternalLink size={14} className="shrink-0" />
                    Live demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 text-center px-2">
          <a
            href="https://github.com/pavan20250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-800/90 backdrop-blur-sm px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-slate-400/20 transition-all hover:bg-slate-700/90 hover:shadow-xl hover:shadow-slate-500/25 hover:-translate-y-0.5 min-h-[44px] touch-manipulation"
          >
            <Github size={16} className="shrink-0" />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
