import React from "react";
import { Code, Globe, Smartphone, Palette } from "lucide-react";

const services = [
  {
    title: "UX & UI Design",
    description: "Creating intuitive and beautiful user interfaces that enhance user experience.",
    icon: Palette,
    accent: "blue",
  },
  {
    title: "Full Stack Development",
    description: "Building scalable web applications with modern frontend and backend technologies.",
    icon: Code,
    accent: "violet",
  },
  {
    title: "Web & Mobile Apps",
    description: "Developing responsive web applications and native mobile apps for all platforms.",
    icon: Smartphone,
    accent: "indigo",
  },
  {
    title: "Creative Solutions",
    description: "Crafting innovative digital solutions that stand out in the market.",
    icon: Globe,
    accent: "emerald",
  },
];

const experiences = [
  {
    company: "Mongrov",
    role: "Developer",
    period: "May 2025 - Nov 2025",
    accent: "blue",
  },
  {
    company: "Redwood Partners",
    role: "Full Stack Developer",
    period: "May 2024 - Apr 2025",
    accent: "emerald",
  },
  {
    company: "Zummit Infolabs",
    role: "Junior Web Developer",
    period: "2024",
    accent: "violet",
  },
];

const accentStyles: Record<string, { border: string; iconBg: string; line: string; badge: string; glow: string }> = {
  blue: {
    border: "hover:border-blue-400/40",
    iconBg: "bg-blue-500/10 text-blue-600",
    line: "bg-blue-500",
    badge: "bg-blue-500/10 text-blue-700 border border-blue-200/50",
    glow: "group-hover:shadow-blue-500/10",
  },
  violet: {
    border: "hover:border-violet-400/40",
    iconBg: "bg-violet-500/10 text-violet-600",
    line: "bg-violet-500",
    badge: "bg-violet-500/10 text-violet-700 border border-violet-200/50",
    glow: "group-hover:shadow-violet-500/10",
  },
  indigo: {
    border: "hover:border-indigo-400/40",
    iconBg: "bg-indigo-500/10 text-indigo-600",
    line: "bg-indigo-500",
    badge: "bg-indigo-500/10 text-indigo-700 border border-indigo-200/50",
    glow: "group-hover:shadow-indigo-500/10",
  },
  emerald: {
    border: "hover:border-emerald-400/40",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    line: "bg-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-700 border border-emerald-200/50",
    glow: "group-hover:shadow-emerald-500/10",
  },
};

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center bg-[#fafafa] overflow-hidden px-6 md:px-12 lg:px-24 py-16"
      role="region"
      aria-labelledby="services-heading"
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

      <div className="container mx-auto relative z-10 w-full max-w-6xl">
        <header className="text-center mb-12 lg:mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
            What I Offer & Where I&apos;ve Been
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold tracking-tight text-gray-900" id="services-heading">
            Services & Experience
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mt-2 text-sm leading-relaxed">
            Design, development, and roles that shape what I build.
          </p>
        </header>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-10 items-start">
          {/* Left: Experience — vertical timeline */}
          <div className="lg:sticky lg:top-24" role="list" aria-labelledby="experience-heading">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6" id="experience-heading">
              Background
            </h3>
            <div className="space-y-0">
              {experiences.map((exp, index) => {
                const style = accentStyles[exp.accent];
                const isLast = index === experiences.length - 1;
                return (
                  <article
                    key={index}
                    className={`group relative flex gap-4 py-5 ${!isLast ? "border-b border-gray-200/60" : ""}`}
                    role="listitem"
                    tabIndex={0}
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`h-2 w-2 rounded-full ${style.line} ring-4 ring-[#fafafa]`} aria-hidden />
                      {!isLast && (
                        <div className="w-px flex-1 min-h-[2rem] mt-1 bg-gradient-to-b from-gray-300/80 to-transparent" aria-hidden />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 pb-1">
                      <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-medium mb-2 ${style.badge}`}>
                        {exp.period}
                      </span>
                      <h4 className="text-base font-semibold text-gray-900 tracking-tight">{exp.company}</h4>
                      <p className="text-sm text-gray-500">{exp.role}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right: Services — 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list" aria-labelledby="services-heading">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const style = accentStyles[service.accent];
              return (
                <article
                  key={index}
                  className={`group relative flex flex-col rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 ${style.border} ${style.glow}`}
                  role="listitem"
                  tabIndex={0}
                >
                  <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${style.line}`} aria-hidden />
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${style.iconBg} transition-all duration-300 group-hover:scale-105 group-hover:rotate-3`}
                    aria-hidden
                  >
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight pl-0.5">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
