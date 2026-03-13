"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mails, Menu, X, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import pavan from "../../public/gimini_pavan.png";
import bgImage from "../../public/bg.jpg";

const SECTION_IDS = ['home', 'about', 'projects', 'now', 'services', 'contact'] as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const hasNudged = useRef(false);

  // One-time nudge hint
  useEffect(() => {
    if (hasNudged.current) return;
    const t = setTimeout(() => {
      if (hasNudged.current) return;
      const y = window.scrollY;
      if (y < 50) {
        hasNudged.current = true;
        window.scrollBy({ top: 120, behavior: "smooth" });
      }
    }, 2500);
    const onScroll = () => {
      if (window.scrollY > 50) hasNudged.current = true;
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Now', id: 'now' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Navigation Bar — visible only after scrolling past About */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button onClick={() => scrollToSection('home')} className="outline-none flex items-center">
                <Image
                  src="/pavan_logo.png"
                  alt={site.name}
                  width={120}
                  height={36}
                  className="h-10 w-auto object-contain"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
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
                className="p-2 rounded-md text-gray-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
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
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-3 rounded-md text-base font-medium w-full text-left min-h-[44px] ${
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
        {/* Hero Section — clean flex column, no conflicting absolutes */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto relative z-10 pt-16 pb-12 gap-6 sm:gap-8">

          {/* Ambient background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-lg md:blur-2xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white/5 rounded-full blur-lg md:blur-xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-white/5 rounded-full blur-xl md:blur-3xl animate-pulse delay-500" />
          </div>

          {/* Profile image */}
          <div className="relative inline-block group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-lg md:blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 sm:border-4 border-white/80 shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={pavan}
                  alt={`${site.name} - Full Stack Developer`}
                  width={208}
                  height={208}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating badge elements */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-xs">✨</span>
              </div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <span className="text-white text-xs">💻</span>
              </div>
            </div>

            {/* Name tag — positioned relative to image, stays contained */}
            <div className="absolute flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full shadow-lg -top-3 right-0 translate-x-1/3 -rotate-12 group-hover:scale-110 transition-transform duration-300 whitespace-nowrap">
              <p className="text-xs sm:text-sm text-black font-mono font-bold">{site.shortName}</p>
              <span className="text-sm sm:text-base animate-bounce">👋🏼</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center px-2">
            <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold leading-tight text-gray-800">
              Building <span className="text-black">scalable applications,</span>{" "}
              <br className="hidden sm:block" />
              refining <span className="text-gray-700">user experiences,</span> and{" "}
              <br className="hidden sm:block" />
              crafting <span className="text-gray-600">seamless digital solutions.</span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 justify-center items-center">
            <a
              href="/blogs"
              className="group relative px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold text-sm rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block min-h-[44px] flex items-center"
            >
              Latest Blogs
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 font-bold text-sm rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-h-[44px]"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links — inline row, no absolute positioning conflicts */}
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            {/* Email */}
            <a
              href="mailto:pavannaik0203@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title={`Contact ${site.name}`}
              aria-label={`Email ${site.name}`}
              className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/40 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/0 to-emerald-500/0 group-hover:from-emerald-400/20 group-hover:to-emerald-500/30 transition-all duration-300" />
              <Mails size={20} className="text-gray-800 group-hover:text-emerald-700 transition-colors duration-300 relative z-10 drop-shadow-sm" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-gray-900/95 text-white text-xs px-2 py-1 rounded-md pointer-events-none hidden sm:block shadow-lg">
                Email
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pavan-rathod-0203k/"
              target="_blank"
              rel="noopener noreferrer"
              title={`${site.name} LinkedIn`}
              aria-label={`Visit ${site.name}'s LinkedIn`}
              className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/40 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/30 transition-all duration-300" />
              <FaLinkedin size={20} className="text-gray-800 group-hover:text-blue-600 transition-colors duration-300 relative z-10 drop-shadow-sm" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-gray-900/95 text-white text-xs px-2 py-1 rounded-md pointer-events-none hidden sm:block shadow-lg">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/pavan20250"
              target="_blank"
              rel="noopener noreferrer"
              title={`${site.name} GitHub`}
              aria-label={`Visit ${site.name}'s GitHub`}
              className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/40 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700/0 to-gray-900/0 group-hover:from-gray-700/20 group-hover:to-gray-900/30 transition-all duration-300" />
              <FaGithub size={20} className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300 relative z-10 drop-shadow-sm" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-gray-900/95 text-white text-xs px-2 py-1 rounded-md pointer-events-none hidden sm:block shadow-lg">
                GitHub
              </span>
            </a>
          </div>

          {/* Scroll Down — sits at bottom of flow, safe from overlaps */}
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll down to about section"
            className="group cursor-pointer mt-2"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 animate-bounce group-hover:scale-105">
              <div className="absolute inset-0 bg-white/25 backdrop-blur-md border border-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_4px_12px_rgba(0,0,0,0.08)]" />
              <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/40 to-transparent" />
              <ChevronDown className="relative w-5 h-5 text-gray-800 drop-shadow-sm" />
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;