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

const accentStyles: Record<string, { border: string; iconBg: string; line: string; badge: string }> = {
  blue: {
    border: "hover:border-blue-400/50",
    iconBg: "bg-blue-500/10 text-blue-600",
    line: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
  violet: {
    border: "hover:border-violet-400/50",
    iconBg: "bg-violet-500/10 text-violet-600",
    line: "bg-violet-500",
    badge: "bg-violet-100 text-violet-700",
  },
  indigo: {
    border: "hover:border-indigo-400/50",
    iconBg: "bg-indigo-500/10 text-indigo-600",
    line: "bg-indigo-500",
    badge: "bg-indigo-100 text-indigo-700",
  },
  emerald: {
    border: "hover:border-emerald-400/50",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    line: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
};

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-[#fafafa] overflow-hidden"
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

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Experience */}
        <div className="mb-20">
          <div className="mb-14">
            <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-2">
              Background
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-3" id="experience-heading">
              Experience
            </h2>
            <p className="text-gray-500 max-w-xl text-base leading-relaxed">
              Roles and companies I&apos;ve worked with.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3" role="list" aria-labelledby="experience-heading">
            {experiences.map((exp, index) => {
              const style = accentStyles[exp.accent];
              return (
                <article
                  key={index}
                  className={`group relative flex flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 ${style.border} hover:shadow-xl`}
                  role="listitem"
                  tabIndex={0}
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${style.line}`} />
                  <span className={`inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-medium mb-4 ${style.badge}`}>
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight">{exp.company}</h3>
                  <p className="text-sm text-gray-500">{exp.role}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="mb-14">
            <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-2">
              What I Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-3" id="services-heading">
              Services
            </h2>
            <p className="text-gray-500 max-w-xl text-base leading-relaxed">
              Design and development services for modern products.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" role="list" aria-labelledby="services-heading">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const style = accentStyles[service.accent];
              return (
                <article
                  key={index}
                  className={`group relative flex flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 ${style.border} hover:shadow-xl`}
                  role="listitem"
                  tabIndex={0}
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${style.line}`} />
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${style.iconBg} transition-transform duration-300 group-hover:scale-105`}
                    aria-hidden
                  >
                    <IconComponent size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">
                    {service.title}
                  </h3>
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
