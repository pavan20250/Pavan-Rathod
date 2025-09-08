import React from "react";
import Image from "next/image";
import user from "../../public/user.png";
import { Code, Database, Cloud, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend", icon: Code, description: "React, Next.js, TypeScript" },
    { name: "Backend", icon: Database, description: "Node.js, PostgreSQL, APIs" },
    { name: "Cloud", icon: Cloud, description: "AWS, Vercel, Docker" },
    { name: "Tools", icon: Zap, description: "Git, Figma, Testing" }
  ];

  return (
    <section id="about" className="py-12 px-6 md:px-12 lg:px-60 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Profile Image - Smaller on mobile */}
          <div className="relative w-32 h-32 lg:w-72 lg:h-72 mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full transform rotate-3"></div>
            <div className="relative w-full h-full">
              <Image
                src={user}
                alt="Pavan Rathod - Full Stack Developer"
                fill
                className="object-cover rounded-full border-4 border-white shadow-2xl"
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 288px, 288px"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Hi, I&apos;m <span className="text-gray-600">Pavan</span>
            </h3>
            
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                I&apos;m a passionate <span className="font-semibold text-gray-900">Full Stack Developer</span> specializing in 
                <span className="font-semibold text-gray-900"> Javascript, React, and TypeScript</span>, 
                building scalable applications with <span className="font-semibold text-gray-900">MongoDB</span> and cloud technologies.
              </p>
              
              <p className="text-base md:text-lg">
                I create intuitive web applications that solve real-world problems, focusing on clean code and 
                user experiences that are both beautiful and functional.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <skill.icon className="w-5 h-5 text-gray-800" />
                    <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
