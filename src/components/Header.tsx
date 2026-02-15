"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mails, Menu, X } from "lucide-react";
import pavan from "../../public/gimini_pavan.png";
import bgImage from "../../public/bg.jpg";

const SECTION_IDS = ['home', 'about', 'projects', 'services', 'contact'] as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const aboutEl = document.getElementById('about');
      const pastAbout = aboutEl
        ? window.scrollY > aboutEl.offsetTop + aboutEl.offsetHeight - 80
        : false;
      setIsScrolled(pastAbout);
      const scrollY = window.scrollY + 100;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar - visible only after scrolling past About */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button onClick={() => scrollToSection('home')} className="outline-none">
                <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
                  Pavan
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'About', id: 'about' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Services', id: 'services' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-bold transition-colors ${
                      activeSection === item.id
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Services', id: 'services' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === item.id ? 'text-gray-900 bg-gray-100' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <header
        id="home"
        className="relative flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderBottomLeftRadius: "50px", 
          borderBottomRightRadius: "50px",
          borderLeft: "8px solid white",
          borderRight: "8px solid white",
        }}
      >

      {/* Hero Section */}
      <div className="text-center w-full max-w-4xl mx-auto relative z-10">
        {/* Animated Background Elements - Mobile Optimized */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-lg md:blur-2xl animate-pulse md:animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white/5 rounded-full blur-lg md:blur-xl animate-pulse delay-1000 md:animate-pulse md:delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-white/5 rounded-full blur-xl md:blur-3xl animate-pulse delay-500 md:animate-pulse md:delay-500"></div>
        </div>

        <div className="relative inline-block group">
          {/* Enhanced Profile Image with Glow - Mobile Responsive */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-lg md:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 sm:border-4 border-white/80 shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
              <Image
               src={pavan}
               alt="Pavan Rathod - Full Stack Developer"
               width={208}
               height={208}
               className="w-full h-full object-cover"
            />
            </div>
            
            {/* Floating Elements - Mobile Responsive */}
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce md:animate-bounce" style={{willChange: 'transform'}}>
              <span className="text-white text-xs">✨</span>
            </div>
            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500 md:animate-bounce md:delay-500" style={{willChange: 'transform'}}>
              <span className="text-white text-xs">💻</span>
            </div>
          </div>

          {/* Enhanced Name Tag - Mobile Responsive */}
          <div className="absolute flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 md:px-5 py-1 rounded-full shadow-lg transform translate-x-16 -translate-y-8 xs:translate-x-20 xs:-translate-y-10 sm:-translate-x-16 sm:-translate-y-12 md:-translate-x-20 md:-translate-y-12 lg:translate-x-40 lg:-translate-y-20 -rotate-12 group-hover:scale-110 transition-transform duration-300">
            <p className="text-xs sm:text-sm md:text-lg text-black font-mono font-bold">Pavan</p>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl animate-bounce md:animate-bounce">👋🏼</span>
          </div>
        </div>

        {/* Title - Mobile Responsive */}
        <div className="-mt-4 sm:-mt-6 md:-mt-8">
          <h1 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6 mt-4 sm:mt-6 md:mt-10 lg:mt-20 text-gray-800 px-2">
          Building <span className="text-black">scalable applications,</span>  
            <br className="hidden xs:block" /> <span className="xs:hidden"> </span>refining <span className="text-gray-700">user experiences,</span> and  
            <br className="hidden xs:block" /> <span className="xs:hidden"> </span>crafting <span className="text-gray-600">seamless digital solutions.</span>
          </h1>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
          <a href="/blogs" className="group relative px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium text-sm rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block">
            <span className="relative z-10 text-sm font-bold">Latest Blogs</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 font-medium text-sm rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="relative z-10 text-sm font-bold">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Social Links with Icons - Mobile Responsive */}
      <div className="absolute top-4 xs:top-6 bottom-auto sm:top-auto sm:bottom-10 md:bottom-12 left-0 right-0 z-20 flex justify-center items-center px-6 xs:px-8 sm:px-4 md:px-6">
        <div className="flex flex-row items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 flex-shrink-0">
          {/* Email Link */}
          <a
            href="mailto:pavannaik0203@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Contact Pavan Rathod - Full Stack Developer"
            aria-label="Email Pavan Rathod"
            className="group relative flex items-center justify-center w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/40 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/0 to-emerald-500/0 group-hover:from-emerald-400/20 group-hover:to-emerald-500/30 transition-all duration-300"></div>
            <Mails 
              size={20}
              className="xs:size-4 sm:size-5 md:size-5 lg:size-6 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300 relative z-10 drop-shadow-sm" 
            />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-gray-900/95 text-white text-[10px] xs:text-xs px-2 py-1 rounded-md pointer-events-none hidden sm:block shadow-lg backdrop-blur-sm">
              Email
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45"></span>
            </span>
          </a>
          
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/pavan-rathod-0203k/"
            target="_blank"
            rel="noopener noreferrer"
            title="Pavan Rathod LinkedIn Profile - Full Stack Developer"
            aria-label="Visit Pavan Rathod's LinkedIn profile"
            className="group relative flex items-center justify-center w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/40 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/30 transition-all duration-300"></div>
            <FaLinkedin 
              size={20}
              className="xs:size-4 sm:size-5 md:size-5 lg:size-6 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 relative z-10 drop-shadow-sm" 
            />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-gray-900/95 text-white text-[10px] xs:text-xs px-2 py-1 rounded-md pointer-events-none hidden sm:block shadow-lg backdrop-blur-sm">
              LinkedIn
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45"></span>
            </span>
          </a>
          
          {/* GitHub Link */}
          <a
            href="https://github.com/pavan20250"
            target="_blank"
            rel="noopener noreferrer"
            title="Pavan Rathod GitHub Profile - Full Stack Developer"
            aria-label="Visit Pavan Rathod's GitHub profile"
            className="group relative flex items-center justify-center w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/40 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700/0 to-gray-900/0 group-hover:from-gray-700/20 group-hover:to-gray-900/30 transition-all duration-300"></div>
            <FaGithub 
              size={20}
              className="xs:size-4 sm:size-5 md:size-5 lg:size-6 text-gray-800 group-hover:text-gray-900 transition-colors duration-300 relative z-10 drop-shadow-sm" 
            />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-gray-900/95 text-white text-[10px] xs:text-xs px-2 py-1 rounded-md pointer-events-none hidden sm:block shadow-lg backdrop-blur-sm">
              GitHub
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45"></span>
            </span>
          </a>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
