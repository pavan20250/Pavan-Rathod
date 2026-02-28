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
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
    >

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
                className="group/card relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="card-apple-mirror relative flex flex-col h-full min-h-0 rounded-2xl pl-5 sm:pl-6 pr-5 sm:pr-6 py-5 sm:py-6 transition-all duration-300">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" aria-hidden />

                  <div className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full bg-gradient-to-b from-slate-300/70 to-slate-400/50 opacity-70 group-hover/card:opacity-100 group-hover/card:from-slate-400 group-hover/card:to-slate-500 transition-all duration-300" />

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-[11px] font-semibold tabular-nums text-slate-400/90">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="card-apple-mirror-sm inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 transition-all duration-300 group-hover/card:scale-105">
                      <IconComponent size={18} strokeWidth={1.75} />
                    </div>
                  </div>

                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                    {"badge" in project && project.badge && (
                      <span className="card-apple-mirror-sm rounded-lg px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-600">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1 min-h-0">
                    {project.description}
                  </p>

                  <div className="flex flex-nowrap gap-2 pt-4 border-t border-slate-200/50">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-apple-mirror-sm inline-flex flex-1 min-w-0 items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 transition-all"
                    >
                      <Github size={14} className="shrink-0" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 min-w-0 items-center justify-center gap-1.5 rounded-xl border border-slate-700/80 bg-slate-800/90 backdrop-blur-sm px-3 py-2 text-xs font-medium text-white shadow-md transition-all hover:bg-slate-700 hover:border-slate-600 hover:shadow-lg"
                    >
                      <ExternalLink size={14} className="shrink-0" />
                      <span>Live</span>
                    </a>
                  </div>
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
            className="card-apple-mirror inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-8 py-3.5 text-sm font-medium text-slate-800 transition-all hover:scale-[1.02] min-h-[48px] touch-manipulation"
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
