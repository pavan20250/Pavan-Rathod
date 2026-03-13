"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import handShake from '../../public/image (1).jpg';
import Image from 'next/image';

export default function ContactSection() {
  const email = "pavannaik0203@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/pavan-rathod-0203k/";

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing again
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="relative flex flex-col overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 py-8 sm:py-12 gap-6 sm:gap-8">

        {/* Left Side — Contact Info */}
        <div className="flex flex-col items-center justify-center text-center w-full lg:w-1/2">
          <div className="mb-4 sm:mb-6 flex flex-col items-center">
            {/* Photo circle */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-slate-100 mb-3 sm:mb-4 overflow-hidden ring-2 ring-slate-200">
              <Image
                src={handShake}
                alt="Handshake"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900 mb-1.5 sm:mb-2 px-2">
              Open to <span className="text-slate-500">new opportunities!</span>
            </h2>
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
              Let&apos;s connect.
            </h2>

            {/* Contact buttons */}
            <div className="flex flex-row gap-2 sm:gap-3 w-full max-w-xs">
              <button
                onClick={() => window.location.href = `mailto:${email}`}
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 w-full bg-slate-800 text-white rounded-full hover:bg-slate-700 text-xs sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 min-h-[44px] touch-manipulation"
              >
                <FaEnvelope className="shrink-0" />
                Email Me
              </button>
              <button
                onClick={() => window.open(linkedInUrl, "_blank")}
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 w-full border-2 border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 hover:border-slate-300 text-xs sm:text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 min-h-[44px] touch-manipulation"
              >
                <FaLinkedin className="shrink-0" />
                LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* Right Side — Contact Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:shadow-slate-200/60 transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 text-center">
              Send me a message
            </h3>

            {/* Success state */}
            {isSubmitted && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg flex items-center gap-2">
                <CheckCircle size={18} className="shrink-0" />
                <span className="text-sm">Message sent successfully! I&apos;ll get back to you soon.</span>
              </div>
            )}

            {/* Error state — replaces alert() */}
            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center gap-2">
                <AlertCircle size={18} className="shrink-0" />
                <span className="text-sm">{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                  className="w-full px-3 py-2.5 sm:py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 text-sm min-h-[44px] sm:min-h-0 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                  Email <span className="text-slate-400 text-[11px] font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  className="w-full px-3 py-2.5 sm:py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 text-sm min-h-[44px] sm:min-h-0 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 sm:py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent resize-none text-slate-900 text-sm min-h-[100px] transition-colors"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm min-h-[44px] touch-manipulation font-medium"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}