"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap, MapPin, Briefcase } from "lucide-react";
import { site } from "@/lib/site";

const atAGlance = [
  { value: "10+", label: "Projects" },
  { value: "1+", label: "Yrs Exp" },
  { value: "E2E", label: "Full Stack" },
  { value: "Open", label: "To Work" },
];

const skills = [
  {
    name: "Frontend",
    icon: Code,
    description: "React · Next.js · TypeScript · Tailwind · HTML · CSS",
    color: "#5b8af0",
  },
  {
    name: "Backend",
    icon: Database,
    description: "Node.js · PostgreSQL · MongoDB · REST APIs · Serverless",
    color: "#4caf7d",
  },
  {
    name: "Cloud",
    icon: Cloud,
    description: "AWS · Vercel · Docker · CI/CD · Cloudflare",
    color: "#d4a853",
  },
  {
    name: "Tools",
    icon: Zap,
    description: "Git · Figma · Jest · Cypress · ESLint · Testing",
    color: "#a78bfa",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 140, damping: 22 } },
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) { setSectionVisible(true); obs.disconnect(); }
      },
      { rootMargin: "-60px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Subtle ambient glow behind heading */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(212,168,83,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={sectionVisible ? "show" : "hidden"}
        >
          <motion.div variants={item} className="section-label mb-4">About</motion.div>

          {/* Top row — heading left, stats card right */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 mb-10">

            {/* Heading + bio + tags */}
            <div>
              <motion.h2
                variants={item}
                className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight"
              >
                Hi, I&apos;m{" "}
                <span style={{ color: 'var(--accent)' }}>{site.shortName}</span>
                <br />
                <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontSize: '0.65em' }}>
                  Full Stack Developer
                </span>
              </motion.h2>

              <div className="space-y-3 mb-6" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <motion.p variants={item} className="text-base sm:text-lg">
                  Crafting scalable, production-ready applications with clean architecture
                  and obsessive attention to developer and user experience.
                </motion.p>
                <motion.p variants={item} className="text-sm sm:text-base">
                  Passionate about solving real-world problems through thoughtful engineering
                  and continuously pushing the boundaries of what modern web can do.
                </motion.p>
              </div>

              <motion.div variants={item} className="flex flex-wrap gap-2">
                {[
                  { icon: <MapPin size={11} style={{ color: 'var(--accent)' }} />, label: 'India · Remote-friendly' },
                  { icon: <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />, label: 'Open to work' },
                  { icon: <Briefcase size={11} style={{ color: 'var(--accent)' }} />, label: '1+ yr experience' },
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tag.icon}
                    {tag.label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Stats card */}
            <motion.div variants={item} className="flex flex-col justify-center">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
              >
                {/* Terminal chrome */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                  </div>
                  <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                    ~/pavan — at-a-glance
                  </span>
                </div>

                {/* 2x2 stats */}
                <div className="grid grid-cols-2">
                  {atAGlance.map((stat, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-2 px-5 py-5"
                      style={{
                        borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                        borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                      }}
                    >
                      <span className="font-display text-2xl sm:text-3xl font-bold" style={{ color: 'var(--accent)' }}>
                        {stat.value}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status footer */}
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}
                >
                  <span className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    $ status --check
                  </span>
                  <span className="font-mono text-[11px] flex items-center gap-2" style={{ color: '#4caf7d' }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#4caf7d' }} />
                    available
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills — full width 4 col */}
          <motion.div variants={item}>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Technical Stack
            </p>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.li
                    key={skill.name}
                    variants={item}
                    whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                    className="group flex flex-col gap-3 p-4 rounded-xl cursor-default transition-all duration-200"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                        style={{ background: `${skill.color}18`, color: skill.color }}
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {skill.name}
                      </p>
                    </div>

                    <div style={{ height: '1px', background: 'var(--border)' }} />

                    <p className="text-[11px] font-mono leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {skill.description}
                    </p>

                    {/* Accent bar on hover */}
                    <div
                      className="h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, transparent)` }}
                    />
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="sr-only">
        <h2>{site.name} - Full Stack Developer</h2>
        <p>{site.shortName} specializes in React, TypeScript, Node.js, and AWS.</p>
      </div>
    </section>
  );
};

export default About;