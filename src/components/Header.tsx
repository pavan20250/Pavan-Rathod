"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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
        if (el && el.offsetTop <= scrollY) { setActiveSection(SECTION_IDS[i]); break; }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={isScrolled ? {
          background: 'rgba(12, 12, 15, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="outline-none flex items-center">
              <span className="sr-only">{site.name} Home</span>
              <span className="ml-2 font-mono font-bold text-lg" style={{ color: 'var(--accent)' }}>
                {site.shortName}
              </span>
            </button>
             

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-150"
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '12px',
                    color: activeSection === item.id ? 'var(--accent)' : 'rgba(255,255,255,0.5)',
                    background: activeSection === item.id ? 'rgba(212,168,83,0.08)' : 'transparent',
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden"
            style={{
              background: 'rgba(12,12,15,0.98)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="px-3 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium w-full text-left min-h-[44px] transition-all duration-150"
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '13px',
                    color: activeSection === item.id ? 'var(--accent)' : 'rgba(255,255,255,0.5)',
                    background: activeSection === item.id ? 'rgba(212,168,83,0.08)' : 'transparent',
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero header — LAYOUT PRESERVED */}
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
          borderLeft: "8px solid #0c0c0f",
          borderRight: "8px solid #0c0c0f",
        }}
      >
        {/* Dark overlay so all text is visible over the light bg image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(160deg, rgba(12,12,15,0.82) 0%, rgba(12,12,15,0.70) 50%, rgba(12,12,15,0.86) 100%)',
            borderBottomLeftRadius: "44px",
            borderBottomRightRadius: "44px",
          }}
        />

        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto relative z-10 pt-16 pb-12 gap-6 sm:gap-8">

          {/* Ambient blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl animate-pulse" style={{ background: 'rgba(212,168,83,0.12)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full blur-xl animate-pulse" style={{ background: 'rgba(91,138,240,0.08)', animationDelay: '1s' }} />
          </div>

          {/* Profile image */}
          <div className="relative inline-block group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.2) 0%, transparent 70%)' }} />
              <div
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 sm:border-4 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                style={{ borderColor: 'rgba(212,168,83,0.4)' }}
              >
                <Image
                  src={pavan}
                  alt={`${site.name} - Full Stack Developer`}
                  width={208}
                  height={208}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ background: 'var(--accent)' }}>
                <span className="text-black text-xs">✨</span>
              </div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ background: '#4caf7d', animationDelay: '0.5s' }}>
                <span className="text-white text-xs">💻</span>
              </div>
            </div>

            {/* Name tag */}
            <div
              className="absolute flex items-center gap-2 px-3 py-1 rounded-full shadow-lg -top-3 right-0 translate-x-1/3 -rotate-12 group-hover:scale-110 transition-transform duration-300 whitespace-nowrap"
              style={{ background: 'rgba(12,12,15,0.9)', border: '1px solid rgba(212,168,83,0.3)', backdropFilter: 'blur(8px)' }}
            >
              <p className="text-xs sm:text-sm font-mono font-bold" style={{ color: 'var(--accent)' }}>{site.shortName}</p>
              <span className="text-sm sm:text-base animate-bounce">👋🏼</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center px-2">
            <h1
              className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold leading-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', color: 'rgba(240,237,232,0.95)' }}
            >
              Building <span style={{ color: 'var(--accent)' }}>scalable applications,</span>{" "}
              <br className="hidden sm:block" />
              refining <span style={{ color: 'rgba(240,237,232,0.7)' }}>user experiences,</span> and{" "}
              <br className="hidden sm:block" />
              crafting <span style={{ color: 'rgba(240,237,232,0.5)' }}>seamless digital solutions.</span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 justify-center items-center">
            <a
              href="/blogs"
              className="px-5 py-2.5 text-sm font-semibold rounded-full inline-flex items-center min-h-[44px] transition-all duration-200 hover:scale-105"
              style={{ background: 'var(--accent)', color: '#0c0c0f' }}
            >
              Latest Blogs
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 text-sm font-semibold rounded-full min-h-[44px] transition-all duration-200 hover:scale-105"
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.8)',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            {[
              { href: "mailto:pavannaik0203@gmail.com", label: `Email ${site.name}`, icon: <Mails size={20} />, tooltip: "Email" },
              { href: "https://www.linkedin.com/in/pavan-rathod-0203k/", label: `LinkedIn`, icon: <FaLinkedin size={20} />, tooltip: "LinkedIn" },
              { href: "https://github.com/pavan20250", label: `GitHub`, icon: <FaGithub size={20} />, tooltip: "GitHub" },
            ].map((social) => (
              <a
                key={social.tooltip}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {social.icon}
                <span
                  className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-xs px-2 py-1 rounded hidden sm:block"
                  style={{ background: 'rgba(12,12,15,0.95)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                >
                  {social.tooltip}
                </span>
              </a>
            ))}
          </div>

          {/* Scroll Down */}
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about"
            className="group cursor-pointer mt-2"
          >
            <div
              className="relative w-9 h-9 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 animate-bounce group-hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <ChevronDown className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.7)' }} />
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;