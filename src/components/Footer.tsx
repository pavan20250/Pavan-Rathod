import React from 'react';

export default function Footer() {
  return (
    <div className="p-10">
      <div className="w-full border-t border-gray-300 flex flex-row md:flex-row justify-between items-center text-gray-500 text-sm text-center md:text-left">
        {/* Left-aligned text */}
        <p className="font-semibold md:mb-0 text-xs md:text-sm">&copy; 2025 All rights reserved.</p>

        {/* Right-aligned social links */}
        <div className="font-semibold">
          <a href="mailto:pavannaik0203@gmail.com" className="hover:underline text-xs md:text-sm">pavannaik0203@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
