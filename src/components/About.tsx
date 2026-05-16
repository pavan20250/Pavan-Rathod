"use client";

import { useRef, useState, useEffect } from "react";
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
    color: "#0A84FF",
  },
  {
    name: "Backend",
    icon: Database,
    description: "Node.js · PostgreSQL · MongoDB · REST APIs · Serverless",
    color: "#30D158",
  },
  {
    name: "Cloud",
    icon: Cloud,
    description: "AWS · Vercel · Docker · CI/CD · Cloudflare",
    color: "#FF9F0A",
  },
  {
    name: "Tools",
    icon: Zap,
    description: "Git · Figma · Jest · Cypress · ESLint · Testing",
    color: "#BF5AF2",
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
      {/* iOS blue ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(10,132,255,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={sectionVisible ? "show" : "hidden"}
        >
          <motion.div variants={item} className="section-label mb-5">About</motion.div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 mb-10">

            {/* Left — heading + bio + tags */}
            <div>
              <motion.h2
                variants={item}
                className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight"
              >
                Hi, I&apos;m{" "}
                <span style={{ color: 'var(--accent)' }}>{site.shortName}</span>
                <br />
                <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontSize: '0.65em', letterSpacing: '-0.01em' }}>
                  Full Stack Developer
                </span>
              </motion.h2>

              {/* Bio — iOS grouped card */}
              <motion.div
                variants={item}
                className="ios-card p-5 mb-5 space-y-3"
              >
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)', letterSpacing: '-0.01em' }}
                >
                  Crafting scalable, production-ready applications with clean architecture
                  and obsessive attention to developer and user experience.
                </p>
                <div style={{ height: '0.5px', background: 'var(--border)' }} />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-tertiary)', letterSpacing: '-0.01em' }}
                >
                  Passionate about solving real-world problems through thoughtful engineering
                  and continuously pushing the boundaries of what modern web can do.
                </p>
              </motion.div>

              {/* Tags */}
              <motion.div variants={item} className="flex flex-wrap gap-2">
                {[
                  { icon: <MapPin size={11} />, label: 'India · Remote-friendly', color: 'var(--accent)' },
                  { icon: <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--green)' }} />, label: 'Open to work', color: 'var(--green)' },
                  { icon: <Briefcase size={11} />, label: '1+ yr experience', color: 'var(--ios-purple)' },
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                      letterSpacing: '-0.005em',
                    }}
                  >
                    <span style={{ color: tag.color }}>{tag.icon}</span>
                    {tag.label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — stats card */}
            <motion.div variants={item} className="flex flex-col justify-center">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}
              >
                {/* iOS Terminal chrome */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ borderBottom: '0.5px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full" style={{ background: '#FF453A', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)' }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: '#FFD60A', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)' }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: '#30D158', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)' }} />
                  </div>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    ~/pavan — at-a-glance
                  </span>
                </div>

                {/* 2×2 stats grid */}
                <div className="grid grid-cols-2">
                  {atAGlance.map((stat, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-2 px-5 py-5"
                      style={{
                        borderRight: i % 2 === 0 ? '0.5px solid var(--border)' : 'none',
                        borderBottom: i < 2 ? '0.5px solid var(--border)' : 'none',
                      }}
                    >
                      <span
                        className="text-2xl sm:text-3xl font-bold"
                        style={{ color: 'var(--accent)', letterSpacing: '-0.04em' }}
                      >
                        {stat.value}
                      </span>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-widest"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status footer */}
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ borderTop: '0.5px solid var(--border)', background: 'rgba(255,255,255,0.015)' }}
                >
                  <span className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    $ status --check
                  </span>
                  <span className="font-mono text-[11px] flex items-center gap-2" style={{ color: 'var(--green)' }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--green)', animation: 'subtle-pulse 2s ease-in-out infinite' }}
                    />
                    available
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills — iOS app icon grid */}
          <motion.div variants={item}>
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Technical Stack
            </p>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.li
                    key={skill.name}
                    variants={item}
                    whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                    className="group flex flex-col gap-3 p-4 rounded-2xl cursor-default ios-card"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                        style={{ background: `${skill.color}20`, color: skill.color }}
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: 'var(--text-primary)', letterSpacing: '-0.01em' }}
                      >
                        {skill.name}
                      </p>
                    </div>

                    <div style={{ height: '0.5px', background: 'var(--border)' }} />

                    <p
                      className="text-[11px] font-mono leading-relaxed"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      {skill.description}
                    </p>

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
