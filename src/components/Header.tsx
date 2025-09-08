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
        className="relative flex flex-col justify-center items-center min-h-screen"
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
      <div className="text-center px-4">
        <div className="relative inline-block">
          {/* Profile Image with Border */}
        <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
           src={pavan}
           alt="User"
           width={208}
           height={208}
           className="w-full h-full object-cover"
        />
        </div>

          {/* Name Tag */}
          <div className="absolute flex items-center gap-2 bg-white px-3 sm:px-5 py-1 rounded-full shadow-md transform translate-x-24 -translate-y-10 sm:-translate-x-20 sm:-translate-y-12 md:translate-x-40 md:-translate-y-20 -rotate-12">
            <p className="text-xs sm:text-sm md:text-lg text-black font-mono">Pavan</p>
            <span className="text-base sm:text-lg md:text-xl">👋🏼</span>
          </div>
        </div>

        {/* Title */}
        <div className="-mt-6 sm:-mt-8">
          <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 mt-6 sm:mt-10 md:mt-20 text-gray-800">
          Building <span className="text-black">scalable applications,</span>  
            <br /> refining <span className="text-gray-700">user experiences,</span> and  
            <br />crafting <span className="text-gray-600">seamless digital solutions.</span>
          </h1>
        </div>

        {/* Latest Shots Button */}
        <button className="px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all">
          <a href="/blogs">Latest Blogs</a>
        </button>
      </div>

      {/* Social Links with Icons */}
      <div className="absolute top-6 right-4 md:top-8 sm:top-8 md:right-6 flex lg:mx-32 gap-4">
      <div>
        <a
          href="mailto:pavannaik0203@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-[1.1]"
        >
          <Mails size={30} className="sm:size-[20px] md:size-[30px]" />
        </a>
        </div>
        <div>
        <a
          href="https://www.linkedin.com/in/pavan-rathod-0203k/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-[1.1]"
        >
          <FaLinkedin size={30} className="sm:size-[20px] md:size-[30px]" />
        </a>
        </div>
        <div>
        <a
          href="https://github.com/pavan20250"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-[1.1]"
        >
          <FaGithub size={30} className="sm:size-[20px] md:size-[30px]" />
          
        </a>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
