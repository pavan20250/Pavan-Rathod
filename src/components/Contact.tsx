"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Send, CheckCircle } from "lucide-react";
import Footer from './Footer';
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
    <div id="contact" className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-4 py-8 gap-12">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-center lg:justify-center w-full lg:w-1/2">
          <div className="mb-8 flex flex-col items-center">
            {/* Image Circle */}
            <div className="w-32 h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-gray-200 mb-6 overflow-hidden">
              <Image
                src={handShake} 
                alt="Handshake" 
                width={144}
                height={144}
                className="object-cover rounded-full"
              />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
              Open to <span className="text-gray-500">new opportunities!</span>
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">Let&apos;s connect.</h2>
            
            {/* Contact Buttons */}
            <div className="flex flex-row gap-4 w-full max-w-xs">
              {/* Email Button */}
              <button 
                onClick={() => window.location.href = `mailto:${email}`} 
                className="flex items-center justify-center gap-2 px-6 py-3 w-full bg-black text-white rounded-full shadow-md hover:bg-gray-800"
              >
                <FaEnvelope /> Email Me
              </button>
              
              {/* LinkedIn Button */}
              <button 
                onClick={() => window.open(linkedInUrl, "_blank")} 
                className="flex items-center justify-center gap-2 px-6 py-3 w-full border border-gray-400 text-gray-700 rounded-full shadow-md hover:bg-gray-200"
              >
                <FaLinkedin /> LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send me a message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Message sent successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
      <Footer />
    </div>
  );
}
