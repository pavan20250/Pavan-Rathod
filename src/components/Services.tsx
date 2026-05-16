"use client";
import { Code, Globe, Smartphone, Palette } from "lucide-react";

const services = [
  {
    title: "UX & UI Design",
    description: "Crafting intuitive, beautiful interfaces grounded in user research and design systems.",
    icon: Palette,
    color: "#0A84FF",
  },
  {
    title: "Full Stack Development",
    description: "Building scalable web applications with modern frontend and backend technologies.",
    icon: Code,
    color: "#30D158",
  },
  {
    title: "Web & Mobile Apps",
    description: "Responsive web and native mobile apps with performance at the core.",
    icon: Smartphone,
    color: "#FF9F0A",
  },
  {
    title: "Creative Solutions",
    description: "Innovative digital products that solve real problems and stand out.",
    icon: Globe,
    color: "#BF5AF2",
  },
];

const experiences = [
  {
    company: "Mongrov",
    role: "Developer",
    period: "May 2025 – Nov 2025",
    color: "#0A84FF",
    tag: "Recent",
  },
  {
    company: "Redwood Partners",
    role: "Full Stack Developer",
    period: "May 2024 – Apr 2025",
    color: "#30D158",
    tag: null,
  },
  {
    company: "Zummit Infolabs",
    role: "Junior Web Developer",
    period: "2024",
    color: "#FF9F0A",
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
            Services &amp;<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">

          {/* Experience — iOS Settings grouped list */}
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Work History
            </p>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-4 py-4 transition-colors duration-150"
                  style={{
                    background: index % 2 === 0 ? 'var(--bg-secondary)' : 'rgba(44,44,46,0.5)',
                    borderBottom: index < experiences.length - 1 ? '0.5px solid var(--border)' : 'none',
                  }}
                >
                  {/* Color dot */}
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${exp.color}18`,
                      border: `1px solid ${exp.color}30`,
                    }}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: exp.color, boxShadow: `0 0 8px ${exp.color}60` }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3
                        className="text-sm font-semibold truncate"
                        style={{ color: 'var(--text-primary)', letterSpacing: '-0.01em' }}
                      >
                        {exp.company}
                      </h3>
                      {exp.tag && (
                        <span
                          className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full flex-shrink-0"
                          style={{
                            background: `${exp.color}18`,
                            color: exp.color,
                            border: `1px solid ${exp.color}30`,
                          }}
                        >
                          {exp.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)', letterSpacing: '-0.005em' }}>
                      {exp.role}
                    </p>
                    <p
                      className="text-[10px] font-mono mt-0.5"
                      style={{ color: exp.color, opacity: 0.85 }}
                    >
                      {exp.period}
                    </p>
                  </div>

                  {/* iOS disclosure chevron */}
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" className="flex-shrink-0">
                    <path d="M1 1L6 6L1 11" stroke="rgba(235,235,245,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Services — iOS card grid */}
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              What I Build
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--bg-tertiary)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)';
                    }}
                  >
                    {/* Top accent line on hover */}
                    <div
                      className="absolute top-0 left-4 right-4 h-[1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                    />

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-200 group-hover:scale-110"
                      style={{
                        background: `${service.color}18`,
                        color: service.color,
                        border: `1px solid ${service.color}28`,
                      }}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <h4
                      className="text-sm font-semibold mb-1.5"
                      style={{ color: 'var(--text-primary)', letterSpacing: '-0.01em' }}
                    >
                      {service.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: 'var(--text-secondary)', letterSpacing: '-0.005em' }}
                    >
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
