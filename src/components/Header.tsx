"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mails, Menu, X } from "lucide-react";
import pavan from "../../public/pavan.jpg";
import bgImage from "../../public/bg.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                Pavan
              </span>
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
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                        : 'text-white hover:text-gray-200 hover:bg-white hover:bg-opacity-10'
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
                className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
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
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 w-full text-left"
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
          <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative inline-block group">
          {/* Enhanced Profile Image with Glow - Mobile Responsive */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
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
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-xs">✨</span>
            </div>
            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
              <span className="text-white text-xs">💻</span>
            </div>
          </div>

          {/* Enhanced Name Tag - Mobile Responsive */}
          <div className="absolute flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 md:px-5 py-1 rounded-full shadow-lg transform translate-x-16 -translate-y-8 xs:translate-x-20 xs:-translate-y-10 sm:-translate-x-16 sm:-translate-y-12 md:-translate-x-20 md:-translate-y-12 lg:translate-x-40 lg:-translate-y-20 -rotate-12 group-hover:scale-110 transition-transform duration-300">
            <p className="text-xs sm:text-sm md:text-lg text-black font-mono font-bold">Pavan</p>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl animate-bounce">👋🏼</span>
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
            <span className="relative z-10">Latest Blogs</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 font-medium text-sm rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Social Links with Icons - Mobile Responsive */}
      <div className="absolute top-4 right-2 sm:top-6 sm:right-4 md:top-8 md:right-6 flex gap-2 sm:gap-3 md:gap-4">
        <div>
          <a
            href="mailto:pavannaik0203@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Contact Pavan Rathod - Full Stack Developer"
            aria-label="Email Pavan Rathod"
            className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-[1.1] p-1 sm:p-2"
          >
            <Mails size={20} className="sm:size-[24px] md:size-[30px]" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/pavan-rathod-0203k/"
            target="_blank"
            rel="noopener noreferrer"
            title="Pavan Rathod LinkedIn Profile - Full Stack Developer"
            aria-label="Visit Pavan Rathod's LinkedIn profile"
            className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-[1.1] p-1 sm:p-2"
          >
            <FaLinkedin size={20} className="sm:size-[24px] md:size-[30px]" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/pavan20250"
            target="_blank"
            rel="noopener noreferrer"
            title="Pavan Rathod GitHub Profile - Full Stack Developer"
            aria-label="Visit Pavan Rathod's GitHub profile"
            className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-[1.1] p-1 sm:p-2"
          >
            <FaGithub size={20} className="sm:size-[24px] md:size-[30px]" />
          </a>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
