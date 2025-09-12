import React from "react";
import { ExternalLink, Github, Code, Globe, Smartphone, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      githubUrl: "https://github.com/pavan20250",
      liveUrl: "#",
      featured: false,
      icon: Code,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgPattern: "bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/pavan20250",
      liveUrl: "#",
      featured: false,
      icon: Globe,
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      bgPattern: "bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.3),transparent_50%)]"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com/pavan20250",
      liveUrl: "https://pavanrathod.in",
      featured: false,
      icon: Smartphone,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      bgPattern: "bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3),transparent_50%)]"
    },
    {
      title: "E-Commerce Platform v2",
      description: "An advanced e-commerce solution with AI-powered recommendations, multi-vendor support, and real-time analytics dashboard.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS", "Redis"],
      githubUrl: "https://github.com/pavan20250",
      liveUrl: "#",
      featured: false,
      icon: ShoppingCart,
      gradient: "from-orange-400 via-red-500 to-pink-600",
      bgPattern: "bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.3),transparent_50%)]"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 md:px-12 lg:px-60 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Unified Background Elements - Same as About */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large central elements that span both sections */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/25 to-purple-200/25 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-200/25 to-cyan-200/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-3xl"></div>
        {/* Flowing elements that connect sections */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-200/15 to-purple-200/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto rounded-full mb-3"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                  project.featured ? 'col-span-2 lg:col-span-4' : ''
                }`}
              >
                <div className={`${project.featured ? 'lg:flex' : ''}`}>
                  {/* Aesthetic CSS Header */}
                  <div className={`relative ${project.featured ? 'lg:w-1/2' : 'h-24'} bg-gradient-to-br ${project.gradient} ${project.bgPattern} flex items-center justify-center`}>
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-1000"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
                    </div>
                    
                    {/* Icon and Title */}
                    <div className="relative z-10 text-center text-black">
                      <div className="mb-2 flex justify-center">
                        <div className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent size={24} className="drop-shadow-lg text-black" />
                        </div>
                      </div>
                      <h3 className="text-sm font-semibold drop-shadow-lg px-2 text-black">{project.title}</h3>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-3 ${project.featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                    <h3 className="text-base font-bold text-gray-800 mb-1">{project.title}</h3>
                    <p className="text-gray-600 mb-2 leading-tight text-xs line-clamp-2">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs rounded-full border border-gray-200 hover:shadow-sm transition-shadow"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-1">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-md hover:from-gray-700 hover:to-gray-600 transition-all duration-200 text-xs shadow-sm hover:shadow-md"
                      >
                        <Github size={12} />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 border border-gray-300 text-gray-700 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200 text-xs shadow-sm hover:shadow-md"
                      >
                        <ExternalLink size={12} />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/pavan20250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
