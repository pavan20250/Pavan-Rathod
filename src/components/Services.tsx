import React from "react";
import { Code, Globe, Smartphone, Palette } from "lucide-react";

const services = [
  {
    title: "UX & UI Design",
    description: "Crafting intuitive, beautiful interfaces grounded in user research and design systems.",
    icon: Palette,
    color: "#5b8af0",
  },
  {
    title: "Full Stack Development",
    description: "Building scalable web applications with modern frontend and backend technologies.",
    icon: Code,
    color: "#4caf7d",
  },
  {
    title: "Web & Mobile Apps",
    description: "Responsive web and native mobile apps with performance at the core.",
    icon: Smartphone,
    color: "#d4a853",
  },
  {
    title: "Creative Solutions",
    description: "Innovative digital products that solve real problems and stand out.",
    icon: Globe,
    color: "#a78bfa",
  },
];

const experiences = [
  {
    company: "Mongrov",
    role: "Developer",
    period: "May 2025 – Nov 2025",
    color: "#5b8af0",
    tag: "Recent",
  },
  {
    company: "Redwood Partners",
    role: "Full Stack Developer",
    period: "May 2024 – Apr 2025",
    color: "#4caf7d",
    tag: null,
  },
  {
    company: "Zummit Infolabs",
    role: "Junior Web Developer",
    period: "2024",
    color: "#d4a853",
    tag: null,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="section-label mb-4">What I Offer</div>
          <h2 className="heading-display text-4xl sm:text-5xl">
            Services &<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">

          {/* Experience timeline */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: 'var(--text-muted)' }}>
              Work History
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-[5px] top-2 bottom-2"
                style={{ width: '1px', background: 'var(--border)' }}
              />

              <div className="space-y-5 pl-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Dot */}
                    <div
                      className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full ring-4 transition-all duration-200"
                      style={{
                        background: exp.color,
                        boxShadow: `0 0 0 3px var(--bg-primary), 0 0 0 4px ${exp.color}40`,
                      }}
                    />

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-mono text-[10px] uppercase tracking-wider"
                          style={{ color: exp.color }}
                        >
                          {exp.period}
                        </span>
                        {exp.tag && (
                          <span
                            className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded"
                            style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                          >
                            {exp.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>
                        {exp.company}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {exp.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services grid */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: 'var(--text-muted)' }}>
              What I Build
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 card card-glow"
                  >
                    {/* Accent left border */}
                    <div
                      className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: service.color }}
                    />

                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-200 group-hover:scale-105"
                      style={{ background: `${service.color}15`, color: service.color }}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {service.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;