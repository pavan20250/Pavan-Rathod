import React from "react";
import Image from "next/image";
import user from "../../public/user.png";
import { Code, Database, Cloud, Zap, Sparkles, Heart } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend", icon: Code, description: "React, Next.js, TypeScript", color: "from-blue-500 to-cyan-500" },
    { name: "Backend", icon: Database, description: "Node.js, PostgreSQL, APIs", color: "from-emerald-500 to-teal-500" },
    { name: "Cloud", icon: Cloud, description: "AWS, Vercel, Docker", color: "from-purple-500 to-pink-500" },
    { name: "Tools", icon: Zap, description: "Git, Figma, Testing", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-60 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Unified Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large central elements that span both sections - Reduced blur on mobile */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/25 to-purple-200/25 rounded-full blur-3xl md:blur-3xl blur-xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-200/25 to-cyan-200/25 rounded-full blur-3xl md:blur-3xl blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-3xl md:blur-3xl blur-xl"></div>
        {/* Flowing elements that connect sections - Reduced blur on mobile */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl md:blur-3xl blur-xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl md:blur-3xl blur-xl"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-200/15 to-purple-200/15 rounded-full blur-2xl md:blur-2xl blur-lg"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">About Me</span>
            <Sparkles className="w-6 h-6 text-purple-500" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Profile Image with Enhanced Design - Mobile Optimized */}
          <div className="relative group">
            {/* Animated Background Rings - Reduced animations on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl md:blur-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse md:animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full blur-2xl md:blur-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 animate-pulse delay-1000 md:animate-pulse md:delay-1000"></div>
            
            {/* Main Image Container */}
            <div className="relative w-40 h-40 lg:w-64 lg:h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-2 bg-white rounded-full shadow-2xl"></div>
              <div className="relative w-full h-full">
                <Image
                  src={user}
                  alt="Pavan Rathod - Full Stack Developer"
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 256px, 256px"
                />
              </div>
              
              {/* Floating Elements - Reduced animations on mobile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce md:animate-bounce" style={{willChange: 'transform'}}>
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500 md:animate-bounce md:delay-500" style={{willChange: 'transform'}}>
                <Code className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* About Content with Enhanced Styling */}
          <div className="flex-1 text-center lg:text-left w-full">
            <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6 lg:p-8 shadow-2xl">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Hi, I&apos;m <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Pavan</span>
              </h1>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  I&apos;m <span className="font-bold text-gray-900">Pavan</span>, a passionate <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Full Stack Developer</span> specializing in 
                  <span className="font-bold text-gray-900"> JavaScript, React, and TypeScript</span>, 
                  building scalable applications with <span className="font-bold text-gray-900">MongoDB</span> and cloud technologies.
                </p>
                
                <p className="text-base md:text-lg">
                  As a developer, I create intuitive web applications that solve real-world problems, focusing on clean code and 
                  user experiences that are both <span className="font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">beautiful and functional</span>.
                </p>
              </div>

              {/* Enhanced Skills Grid - Mobile Optimized */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {skills.map((skill, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 rounded-xl blur-xl md:blur-xl blur-lg group-hover:opacity-20 transition-opacity duration-500`}></div>
                    <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl" style={{willChange: 'transform'}}>
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`} style={{willChange: 'transform'}}>
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-800 text-sm">{skill.name}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{skill.description}</p>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-60"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-gray-400 rounded-full opacity-40"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Hidden SEO Content for Search Engines */}
        <div className="sr-only">
          <h2>Pavan Rathod - Full Stack Developer</h2>
          <p>Pavan Rathod is a skilled Full Stack Developer specializing in React, TypeScript, JavaScript, Node.js, and AWS. 
             Pavan creates modern web applications and provides expert development services. 
             Contact Pavan Rathod for your next project.</p>
          <p>Keywords: Pavan, Pavan Rathod, Full Stack Developer, React Developer, TypeScript Developer, JavaScript Developer, 
             Node.js Developer, AWS Developer, Web Developer, Software Engineer, Portfolio, LinkedIn, GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default About;
