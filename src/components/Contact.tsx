"use client";
import React from 'react';
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import Footer from './Footer';
import handShake from '../../public/image (1).jpg';
import Image from 'next/image';

export default function ContactSection() {
  const email = "pavannaik0203@gmail.com"; // Replace with your actual email
  const linkedInUrl = "https://www.linkedin.com/in/pavan-rathod-0203k/"; 

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-8">
        <div className="mb-6 flex flex-col items-center">
          {/* Image Circle */}
          <div className="w-32 h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-gray-200 mb-4 overflow-hidden">
            <Image
              src={handShake} 
              alt="Handshake" 
              width={144}
              height={144}
              className="object-cover rounded-full"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            Open to <span className="text-gray-500">new opportunities!</span>
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Let’s connect.</h2>
        </div>
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
      <Footer />
    </div>
  );
}
