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
      {/* iOS Frosted Glass Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={isScrolled ? {
          background: 'rgba(0, 0, 0, 0.78)',
          backdropFilter: 'saturate(180%) blur(28px)',
          WebkitBackdropFilter: 'saturate(180%) blur(28px)',
          borderBottom: '0.5px solid rgba(84, 84, 88, 0.65)',
        } : {}}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="outline-none">
              <span
                className="text-sm font-bold"
                style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
              >
                {site.shortName}
              </span>
            </button>

            {/* Desktop Nav — iOS segmented pill */}
            <div
              className="hidden md:flex items-center p-1 rounded-full"
              style={{ background: 'rgba(120, 120, 128, 0.2)' }}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    fontSize: '13px',
                    fontWeight: activeSection === item.id ? 600 : 400,
                    color: activeSection === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                    background: activeSection === item.id ? 'rgba(255, 255, 255, 0.18)' : 'transparent',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(120, 120, 128, 0.2)',
                  color: 'var(--text-primary)',
                }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown — iOS sheet style */}
        {isMenuOpen && (
          <div
            className="md:hidden mx-4 mb-4 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(28, 28, 30, 0.97)',
              border: '0.5px solid rgba(84, 84, 88, 0.65)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {navItems.map((item, i) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-5 py-4 transition-all duration-150"
                style={{
                  fontSize: '15px',
                  fontWeight: activeSection === item.id ? 600 : 400,
                  color: activeSection === item.id ? 'var(--accent)' : 'var(--text-primary)',
                  borderBottom: i < navItems.length - 1 ? '0.5px solid rgba(84,84,88,0.4)' : 'none',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <header
        id="home"
        className="relative flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderBottomLeftRadius: "44px",
          borderBottomRightRadius: "44px",
          borderLeft: "8px solid #000",
          borderRight: "8px solid #000",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(160deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.90) 100%)',
            borderBottomLeftRadius: "37px",
            borderBottomRightRadius: "37px",
          }}
        />

        {/* iOS Blue ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(10,132,255,0.18) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(191,90,242,0.10) 0%, transparent 70%)' }}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto relative z-10 pt-16 pb-12 gap-6 sm:gap-8">

          {/* Dynamic Island availability pill */}
          <div
            className="flex items-center gap-2.5 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(0, 0, 0, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--green)', boxShadow: '0 0 6px rgba(48, 209, 88, 0.8)', animation: 'subtle-pulse 2s ease-in-out infinite' }}
            />
            <span className="text-xs font-medium" style={{ color: 'rgba(235, 235, 245, 0.85)', letterSpacing: '0.01em' }}>
              Available for opportunities
            </span>
          </div>

          {/* Profile image — iOS conic gradient ring */}
          <div className="relative inline-block group">
            <div className="relative">
              <div
                className="absolute -inset-[3px] rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"
                style={{ background: 'conic-gradient(from 0deg, #0A84FF, #BF5AF2, #FF375F, #FF9F0A, #0A84FF)' }}
              />
              <div
                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden"
                style={{ border: '3px solid rgba(0, 0, 0, 0.5)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
              >
                <Image
                  src={pavan}
                  alt={`${site.name} - Full Stack Developer`}
                  width={176}
                  height={176}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Name + Title */}
          <div className="text-center px-4">
            <p
              className="text-xs font-semibold mb-3 uppercase tracking-widest"
              style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}
            >
              {site.shortName} · Full Stack Developer
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.06] mb-4"
              style={{ letterSpacing: '-0.03em', color: '#FFFFFF' }}
            >
              Building{' '}
              <span style={{ color: 'var(--accent)' }}>scalable</span>
              <br className="hidden sm:block" />
              {' '}digital products.
            </h1>
            <p
              className="text-base sm:text-lg font-light"
              style={{ color: 'rgba(235, 235, 245, 0.55)', letterSpacing: '-0.01em' }}
            >
              React · Next.js · TypeScript · Node.js · AWS
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 justify-center items-center">
            <a
              href="/blogs"
              className="px-6 py-2.5 text-sm font-semibold rounded-[14px] inline-flex items-center gap-2 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                letterSpacing: '-0.01em',
                boxShadow: '0 4px 18px rgba(10, 132, 255, 0.40)',
              }}
            >
              Latest Blogs
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 text-sm font-semibold rounded-[14px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                letterSpacing: '-0.01em',
              }}
            >
              Get In Touch
            </button>
          </div>

          {/* Social icons — iOS rounded square app icon style */}
          <div className="flex flex-row items-center gap-3">
            {[
              { href: "mailto:pavannaik0203@gmail.com", label: `Email ${site.name}`, icon: <Mails size={18} />, tooltip: "Email" },
              { href: "https://www.linkedin.com/in/pavan-rathod-0203k/", label: `LinkedIn`, icon: <FaLinkedin size={18} />, tooltip: "LinkedIn" },
              { href: "https://github.com/pavan20250", label: `GitHub`, icon: <FaGithub size={18} />, tooltip: "GitHub" },
            ].map((social) => (
              <a
                key={social.tooltip}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="group relative flex items-center justify-center w-11 h-11 rounded-[14px] transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  background: 'rgba(255, 255, 255, 0.10)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                {social.icon}
                <span
                  className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap text-xs px-2.5 py-1.5 rounded-lg hidden sm:block"
                  style={{
                    background: 'rgba(44, 44, 46, 0.97)',
                    color: 'var(--text-primary)',
                    border: '0.5px solid var(--border)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {social.tooltip}
                </span>
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about"
            className="group cursor-pointer mt-2"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255, 255, 255, 0.10)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                backdropFilter: 'blur(8px)',
                animation: 'ios-bounce 2.4s ease-in-out infinite',
              }}
            >
              <ChevronDown className="w-4 h-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }} />
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
