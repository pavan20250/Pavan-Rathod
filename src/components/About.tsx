"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap } from "lucide-react";
import { site } from "@/lib/site";

const atAGlance = [
  { value: "10+", label: "Projects (1 startup)" },
  { value: "1+", label: "Years of Experience" },
  { value: "E2E", label: "Full stack" },
  { value: "—", label: "Open to work" },
];

const skills = [
  {
    name: "Frontend",
    icon: Code,
    description: "JavaScript, React, Next.js, TypeScript, HTML, CSS",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-200/80",
    iconBg: "bg-blue-100 text-blue-600",
    iconHover: "group-hover:bg-blue-200 group-hover:text-blue-700",
  },
  {
    name: "Backend",
    icon: Database,
    description: "Node.js, PostgreSQL, APIs, SQL, MongoDB, Serverless",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200/80",
    iconBg: "bg-emerald-100 text-emerald-600",
    iconHover: "group-hover:bg-emerald-200 group-hover:text-emerald-700",
  },
  {
    name: "Cloud",
    icon: Cloud,
    description: "AWS, Vercel, Docker, CI/CD, Appwright, Cloudflare",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-200/80",
    iconBg: "bg-violet-100 text-violet-600",
    iconHover: "group-hover:bg-violet-200 group-hover:text-violet-700",
  },
  {
    name: "Tools",
    icon: Zap,
    description: "Git, Figma, Testing, Jest, Cypress, ESLint",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200/80",
    iconBg: "bg-amber-100 text-amber-600",
    iconHover: "group-hover:bg-amber-200 group-hover:text-amber-700",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

const About = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [videoInView, setVideoInView] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Start loading earlier: trigger when section is 400px away so it can buffer before user sees it
  useEffect(() => {
    const el = videoContainerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVideoInView(true);
      },
      { rootMargin: "400px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden bg-white"
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      <div className="container relative mx-auto max-w-5xl z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-12 lg:gap-24">
          {/* Media block - video loads only when in viewport */}
          <div ref={videoContainerRef} className="shrink-0 mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="relative max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem] lg:max-w-[16rem] w-full mx-auto aspect-square">
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
                {/* Placeholder until video can play — avoids blank flash */}
                {!videoReady && (
                  <div
                    className="absolute inset-0 z-10 flex items-center justify-center rounded-[2rem] bg-slate-100"
                    aria-hidden
                  >
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-slate-600" />
                  </div>
                )}
                <video
                  src={videoInView ? "/Anime_Boy_Intro.mp4" : undefined}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={videoInView ? "auto" : "none"}
                  onCanPlay={() => setVideoReady(true)}
                  className="w-full h-full object-contain relative z-0"
                  aria-label="Intro video"
                />
                <div
                  className="absolute inset-0 pointer-events-none z-10 rounded-[2rem]"
                  style={{
                    background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 45%, #fff 88%)",
                  }}
                  aria-hidden
                />
              </div>
            </div>
          </div>

          {/* Copy + skills */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex-1 min-w-0 order-1 lg:order-2"
          >
            <motion.p
              variants={item}
              className="text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-violet-600/90 mb-1.5 sm:mb-2"
            >
              About
            </motion.p>
            <motion.h2
              variants={item}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-slate-900 tracking-tight mb-6 sm:mb-8 leading-[1.2]"
            >
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{site.shortName}</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-2.5 bg-gradient-to-r rounded-sm -z-0"
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h2>

            <div className="space-y-4 sm:space-y-6 text-slate-600 text-sm sm:text-[0.9375rem] font-semibold md:text-base leading-[1.7] max-w-5xl">
              <motion.p variants={item} className="text-slate-600/95">
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 font-semibold text-slate-700">
                  Full Stack Developer
                </strong>{" "}
                with hands-on experience in modern JavaScript frameworks and end-to-end application
                development, including seamless backend integrations.
              </motion.p>
              <motion.p variants={item} className="text-slate-600/95">
                Skilled in building scalable, production-ready applications with clean UI and
                optimized performance.
              </motion.p>
              <motion.p variants={item} className="text-slate-600/95">
                Passionate about solving real-world problems and continuously enhancing technical
                and problem-solving skills.
              </motion.p>
            </div>

            {/* At a glance — open source / README-style metrics */}
            <motion.div
              variants={item}
              className="mt-6 sm:mt-8 rounded-lg border border-slate-200 border-l-4 border-l-slate-400 bg-white font-mono text-sm overflow-hidden shadow-sm"
              aria-label="Key metrics"
            >
              <div className="flex items-center gap-1 px-3 py-1.5 border-b border-slate-200 bg-slate-50">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500">at a glance</span>
              </div>
              <div className="flex flex-wrap divide-x divide-slate-200">
                {atAGlance.map((stat, i) => (
                  <div
                    key={i}
                    className="flex min-w-0 flex-1 basis-1/2 sm:basis-0 items-baseline gap-2 px-3 sm:px-4 py-3 sm:py-3.5"
                  >
                    <span className="tabular-nums font-semibold text-slate-800">{stat.value}</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stack */}
            <motion.div variants={item} className="mt-8 sm:mt-10">
              <p className="text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-slate-400 mb-3 sm:mb-5">
                Stack
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.li
                      key={index}
                      variants={item}
                      whileHover={{ y: -2, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                      className={`group flex flex-col gap-2 sm:gap-3 rounded-lg py-4 sm:py-5 px-3 sm:px-4 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/60 transition-all duration-200 cursor-default`}
                    >
                      <span
                        className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl ${skill.iconBg} ${skill.iconHover} transition-colors duration-300`}
                      >
                        <Icon size={20} strokeWidth={1.6} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-800 text-xs sm:text-sm tracking-tight">{skill.name}</p>
                        <p
                          className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 line-clamp-2 leading-relaxed"
                          title={skill.description}
                        >
                          {skill.description}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hidden SEO content */}
      <div className="sr-only">
        <h2>{site.name} - Full Stack Developer</h2>
        <p>
          {site.shortName} is a skilled Full Stack Developer specializing in React, TypeScript,
          JavaScript, Node.js, and AWS. {site.shortName} creates modern web applications and provides expert
          development services. Contact {site.shortName} for your next project.
        </p>
        <p>
          Keywords: {site.shortName}, {site.name}, Full Stack Developer, React Developer, TypeScript
          Developer, JavaScript Developer, Node.js Developer, AWS Developer, Web Developer,
          Software Engineer, Portfolio, LinkedIn, GitHub
        </p>
      </div>
    </section>
  );
};

export default About;
