import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      image: "/development.png",
      githubUrl: "https://github.com/pavan20250",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "CSS3"],
      image: "/creative.png",
      githubUrl: "https://github.com/pavan20250",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      image: "/image.png",
      githubUrl: "https://github.com/pavan20250",
      liveUrl: "https://pavanrathod.in",
      featured: false
    },
    {
      title: "E-Commerce Platform v2",
      description: "An advanced e-commerce solution with AI-powered recommendations, multi-vendor support, and real-time analytics dashboard.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS", "Redis"],
      image: "/web.png",
      githubUrl: "https://github.com/pavan20250",
      liveUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-10 px-6 md:px-12 lg:px-60 bg-white">
      <div className="container mx-auto">
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
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                project.featured ? 'col-span-2 lg:col-span-4' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:flex' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${project.featured ? 'lg:w-1/2' : 'h-24'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 opacity-60 hover:opacity-40 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-semibold drop-shadow-lg">{project.title}</h3>
                    </div>
                  </div>
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
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
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
                      className="flex items-center gap-1 px-2 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-xs"
                    >
                      <Github size={12} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-xs"
                    >
                      <ExternalLink size={12} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
