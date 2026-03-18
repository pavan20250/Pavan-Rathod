"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Send, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import Image from 'next/image';
import handShake from '../../public/image (1).jpg';

export default function ContactSection() {
  const email = "pavannaik0203@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/pavan-rathod-0203k/";

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        setErrorMsg(errorData.error || 'Failed to send. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Check your connection and retry.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontFamily: '"DM Mono", monospace',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
    marginBottom: '8px',
  };

  return (
    <section
      id="contact"
      className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="section-label mb-4">Get In Touch</div>
          <h2 className="heading-display text-4xl sm:text-5xl">
            Let&apos;s build<br />
            <span style={{ color: 'var(--accent)' }}>something great.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">

          {/* Left — info */}
          <div>
            {/* Avatar + status */}
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
                style={{ border: '1px solid var(--border)' }}
              >
                <Image
                  src={handShake}
                  alt="Contact"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Open to opportunities
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              Whether you have a project in mind, want to collaborate,
              or just want to say hi — my inbox is always open.
            </p>

            {/* Quick links */}
            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl group transition-all duration-200 card"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(212,168,83,0.1)', color: 'var(--accent)' }}
                  >
                    <FaEnvelope size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Email</p>
                    <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                      pavannaik0203@gmail.com
                    </p>
                  </div>
                </div>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent)' }} />
              </a>

              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3.5 rounded-xl group transition-all duration-200 card"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(91,138,240,0.1)', color: '#5b8af0' }}
                  >
                    <FaLinkedin size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>LinkedIn</p>
                    <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                      pavan-rathod-0203k
                    </p>
                  </div>
                </div>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#5b8af0' }} />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div
            className="rounded-2xl p-5 sm:p-6"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <h3 className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Send a message
            </h3>

            {isSubmitted && (
              <div
                className="mb-5 p-3 rounded-lg flex items-center gap-3"
                style={{ background: 'rgba(76,175,125,0.1)', border: '1px solid rgba(76,175,125,0.2)', color: '#4caf7d' }}
              >
                <CheckCircle size={16} className="shrink-0" />
                <span className="text-sm">Message sent! I&apos;ll get back to you soon.</span>
              </div>
            )}

            {errorMsg && (
              <div
                className="mb-5 p-3 rounded-lg flex items-center gap-3"
                style={{ background: 'rgba(224,92,92,0.1)', border: '1px solid rgba(224,92,92,0.2)', color: '#e05c5c' }}
              >
                <AlertCircle size={16} className="shrink-0" />
                <span className="text-sm">{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" style={labelStyle}>
                  Name <span style={{ color: '#e05c5c' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email{' '}
                  <span style={{ color: 'var(--text-muted)', textTransform: 'none' as const, letterSpacing: 'normal', fontSize: '10px' }}>
                    (optional)
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>
                  Message <span style={{ color: '#e05c5c' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                  style={{ ...inputStyle, resize: 'none' as const, minHeight: '120px' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: isLoading ? 'rgba(212,168,83,0.5)' : 'var(--accent)',
                  color: '#0c0c0f',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={e => { if (!isLoading) (e.currentTarget as HTMLElement).style.background = 'var(--accent-light)'; }}
                onMouseLeave={e => { if (!isLoading) (e.currentTarget as HTMLElement).style.background = 'var(--accent)'; }}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin opacity-70" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}