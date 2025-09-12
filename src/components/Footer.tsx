import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Pavan Rathod</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Full Stack Developer specializing in React, TypeScript, JavaScript, Node.js, and AWS. 
              Creating modern web applications with clean code and exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-gray-800 transition-colors">Projects</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-gray-800 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a></li>
              <li><a href="/blogs" className="text-gray-600 hover:text-gray-800 transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:pavannaik0203@gmail.com" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                title="Email Pavan Rathod"
              >
                <FaEnvelope size={16} />
                <span>pavannaik0203@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/pavan-rathod-0203k/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                title="Pavan Rathod LinkedIn Profile"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href="https://github.com/pavan20250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                title="Pavan Rathod GitHub Profile"
              >
                <FaGithub size={16} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p className="mb-2 md:mb-0">&copy; 2025 Pavan Rathod. All rights reserved.</p>
            <p className="text-xs">
              Built with React, TypeScript, and Next.js
            </p>
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Pavan Rathod - Full Stack Developer Contact Information</h2>
          <p>Contact Pavan Rathod for web development services. Pavan specializes in React, TypeScript, JavaScript, Node.js, and AWS development.</p>
          <p>Email: pavannaik0203@gmail.com | LinkedIn: linkedin.com/in/pavan-rathod-0203k | GitHub: github.com/pavan20250</p>
        </div>
      </div>
    </footer>
  );
}
