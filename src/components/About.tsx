import React from "react";
import { Code, Database, Cloud, Zap } from "lucide-react";

const skills = [
  { name: "Frontend", icon: Code, description: "React, Next.js, TypeScript" },
  { name: "Backend", icon: Database, description: "Node.js, PostgreSQL, APIs" },
  { name: "Cloud", icon: Cloud, description: "AWS, Vercel, Docker" },
  { name: "Tools", icon: Zap, description: "Git, Figma, Testing" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-white"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
          <div className="shrink-0 mx-auto lg:mx-0 w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 overflow-hidden rounded-2xl">
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

          {/* Copy + skills */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-400 tracking-wide mb-1">About</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
              Hi, I&apos;m{" "}
              <span className="text-gray-900 border-b-4 border-gray-900 border-opacity-20 pb-0.5">
                Pavan
              </span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                I&apos;m a <strong className="text-gray-900">Full Stack Developer</strong> focused on
                JavaScript, React, and TypeScript—building scalable applications with MongoDB and
                cloud technologies.
              </p>
              <p>
                I build intuitive web applications that solve real problems, with an emphasis on
                clean code and experiences that are both <strong className="text-gray-900">clear and
                functional</strong>.
              </p>
            </div>

            {/* Skills – list style, not cards */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
                Stack
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <li
                      key={index}
                      className="group flex items-start gap-3 rounded-lg py-3 px-3 bg-gray-50/80 hover:bg-gray-50 transition-all duration-300 hover:shadow-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-200/80 text-gray-600 transition-transform duration-300 group-hover:scale-105">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 text-sm">{skill.name}</p>
                        <p className="text-xs text-gray-500 truncate" title={skill.description}>
                          {skill.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
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
