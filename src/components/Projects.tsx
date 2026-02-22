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
  },
  {
    title: "MindCare AI",
    description: "AI-powered behavioral health platform with intake, triage, clinical insights, and smart dashboards.",
    technologies: ["JavaScript", "Next.js", "React", "TypeScript", "MongoDB", "Tailwind", "Vercel"],
    githubUrl: "https://github.com/pavan20250/mindcare-ai",
    liveUrl: "https://www.neuralforge.in/",
    icon: Smartphone,
    badge: "Startup idea",
  },
  {
    title: "Food Delivery App",
    description: "Next.js food delivery app with unit tests (Jest) and E2E tests (Cypress), deployed on Vercel.",
    technologies: ["JavaScript", "Next.js", "React", "TypeScript", "Tailwind", "Jest", "Cypress", "Vercel"],
    githubUrl: "https://github.com/pavan20250/food-delivery-app",
    liveUrl: "https://food-delivery-app-woad-eight.vercel.app",
    icon: Smartphone,
  },
  {
    title: "Web Qest",
    description: "Modern web application built with Next.js and TypeScript, deployed on Vercel.",
    technologies: ["JavaScript", "Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    githubUrl: "https://github.com/pavan20250/web-qest",
    liveUrl: "https://web-qest.vercel.app",
    icon: Globe,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-24 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`, backgroundSize: "20px 20px" }} />

      <div className="container mx-auto relative z-10 max-w-5xl">
        <header className="mb-12 sm:mb-14 md:mb-16">
          <p className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-slate-500 mb-2">
            Selected Work
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
            Full-stack and modern web development.
          </p>
        </header>

        <div className="grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <article
                key={index}
                className="group/card relative flex flex-col rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm pl-5 sm:pl-6 pr-5 sm:pr-6 py-5 sm:py-6 transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-slate-300 opacity-60 group-hover/card:opacity-100 group-hover/card:bg-slate-500 transition-all duration-300" />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[11px] font-medium tabular-nums text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 group-hover/card:border-slate-300 group-hover/card:bg-slate-100 transition-colors">
                    <IconComponent size={18} strokeWidth={1.75} />
                  </div>
                </div>

                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                  {"badge" in project && project.badge && (
                    <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-600">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1 min-h-0">
                  {project.description}
                </p>

                <div className="flex flex-nowrap gap-2 pt-4 border-t border-slate-100">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 min-w-0 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100"
                  >
                    <Github size={14} className="shrink-0" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 min-w-0 items-center justify-center gap-1.5 rounded-lg border border-slate-800 bg-slate-800 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-700 hover:border-slate-700"
                  >
                    <ExternalLink size={14} className="shrink-0" />
                    <span>Live</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="mt-12 sm:mt-14 text-center">
          <a
            href="https://github.com/pavan20250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-800 bg-slate-800 px-6 sm:px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-slate-800 min-h-[48px] touch-manipulation"
          >
            <Github size={18} className="shrink-0" />
            View more on GitHub
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
