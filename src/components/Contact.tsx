"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Send, CheckCircle } from "lucide-react";
import handShake from '../../public/image (1).jpg';
import Image from 'next/image';

export default function ContactSection() {
  const email = "pavannaik0203@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/pavan-rathod-0203k/";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to send message'}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="flex flex-col bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-12 gap-8">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-center lg:justify-center w-full lg:w-1/2">
          <div className="mb-6 flex flex-col items-center">
            {/* Image Circle */}
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-gray-200 mb-4 overflow-hidden">
              <Image
                src={handShake} 
                alt="Handshake" 
                width={128}
                height={128}
                className="object-cover rounded-full"
              />
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">
              Open to <span className="text-gray-500">new opportunities!</span>
            </h2>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Let&apos;s connect.</h2>
            
            {/* Contact Buttons */}
            <div className="flex flex-row gap-3 w-full max-w-xs">
              {/* Email Button */}
              <button 
                onClick={() => window.location.href = `mailto:${email}`} 
                className="flex items-center justify-center gap-2 px-5 py-2.5 w-full bg-black text-white rounded-full shadow-md hover:bg-gray-800 text-sm"
              >
                <FaEnvelope /> Email Me
              </button>
              
              {/* LinkedIn Button */}
              <button 
                onClick={() => window.open(linkedInUrl, "_blank")} 
                className="flex items-center justify-center gap-2 px-5 py-2.5 w-full border border-gray-400 text-gray-700 rounded-full shadow-md hover:bg-gray-200 text-sm"
              >
                <FaLinkedin /> LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Send me a message</h3>
            
            {isSubmitted && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                <CheckCircle size={18} />
                <span className="text-sm">Message sent successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent text-black text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent text-black text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent resize-none text-black text-sm"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
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
