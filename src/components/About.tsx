"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: Code,
    description: "React, Next.js, TypeScript",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-200/80",
    iconBg: "bg-blue-100 text-blue-600",
    iconHover: "group-hover:bg-blue-200 group-hover:text-blue-700",
  },
  {
    name: "Backend",
    icon: Database,
    description: "Node.js, PostgreSQL, APIs",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200/80",
    iconBg: "bg-emerald-100 text-emerald-600",
    iconHover: "group-hover:bg-emerald-200 group-hover:text-emerald-700",
  },
  {
    name: "Cloud",
    icon: Cloud,
    description: "AWS, Vercel, Docker",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-200/80",
    iconBg: "bg-violet-100 text-violet-600",
    iconHover: "group-hover:bg-violet-200 group-hover:text-violet-700",
  },
  {
    name: "Tools",
    icon: Zap,
    description: "Git, Figma, Testing",
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
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#fafafa]"
    >
      {/* Subtle grid background - same as Projects/Services */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px),
            linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="container relative mx-auto max-w-5xl z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-20">
          {/* Media block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 mx-auto lg:mx-0 order-2 lg:order-1"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="about-photo-float w-48 h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 overflow-hidden rounded-2xl ring-2 ring-violet-200/50 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] shadow-violet-200/20">
                <video
                  src="/Anime_Boy_Intro.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                  aria-label="Intro video"
                />
              </div>
              <div className="absolute -inset-3 about-glow-pulse rounded-3xl bg-gradient-to-br from-violet-400/20 to-blue-400/20 -z-10 blur-xl" aria-hidden />
            </motion.div>
          </motion.div>

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
              className="text-xs font-semibold text-violet-600 uppercase tracking-[0.2em] mb-3"
            >
              About
            </motion.p>
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight mb-6 leading-[1.15]"
            >
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Pavan</span>
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

            <div className="space-y-5 text-slate-600 leading-relaxed text-base md:text-lg max-w-xl">
              <motion.p variants={item}>
                I&apos;m a{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 font-semibold">
                  Full Stack Developer
                </strong>{" "}
                focused on JavaScript, React, and TypeScript—building scalable applications with
                MongoDB and cloud technologies.
              </motion.p>
              <motion.p variants={item}>
                I build intuitive web applications that solve real problems, with an emphasis on
                clean code and experiences that are both{" "}
                <strong className="text-slate-900 font-semibold">clear and functional</strong>.
              </motion.p>
            </div>

            {/* Stack */}
            <motion.div variants={item} className="mt-12">
              <p className="text-xs font-semibold text-violet-600 uppercase tracking-[0.15em] mb-4">
                Stack
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.li
                      key={index}
                      variants={item}
                      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                      className={`group flex flex-col gap-2 rounded-xl py-4 px-4 ${skill.bg} border ${skill.border} shadow-sm hover:shadow-lg transition-all duration-300 cursor-default`}
                    >
                      <motion.span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${skill.iconBg} ${skill.iconHover} transition-colors duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon size={20} strokeWidth={1.75} />
                      </motion.span>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 text-sm">{skill.name}</p>
                        <p
                          className="text-xs text-slate-600 mt-0.5 line-clamp-2"
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
        <h2>Pavan Rathod - Full Stack Developer</h2>
        <p>
          Pavan Rathod is a skilled Full Stack Developer specializing in React, TypeScript,
          JavaScript, Node.js, and AWS. Pavan creates modern web applications and provides expert
          development services. Contact Pavan Rathod for your next project.
        </p>
        <p>
          Keywords: Pavan, Pavan Rathod, Full Stack Developer, React Developer, TypeScript
          Developer, JavaScript Developer, Node.js Developer, AWS Developer, Web Developer,
          Software Engineer, Portfolio, LinkedIn, GitHub
        </p>
      </div>
    </section>
  );
};

export default About;
