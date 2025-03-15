import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import Footer from './Footer';
import handShake from '../../public/handShake.jpeg';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-6 flex flex-col items-center">
          {/* Image Circle */}
          <div className="w-35 h-35 flex items-center justify-center rounded-full bg-gray-200 mb-4 overflow-hidden">
            <Image
              src={handShake} 
              alt="Handshake" 
              width={200}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-800">
            Open to <span className="text-gray-500">new opportunities!</span>
          </h2>
          <h2 className="text-4xl font-bold text-gray-800">Let’s connect.</h2>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800">
            <FaEnvelope /> Email Me
          </button>
          <button className="px-6 py-3 border border-gray-400 text-gray-700 rounded-full shadow-md hover:bg-gray-200">
            WhatsApp
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
