import React from 'react';

export default function Footer() {
  return (
    <div className="p-2 w-full flex flex-col items-center text-gray-500 text-sm">
      <p>&copy; 2025 All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">LinkedIn</a>
        <span>/</span>
        <a href="#" className="hover:underline">GitHub</a>
        <span>/</span>
        <a href="#" className="hover:underline">Instagram</a>
      </div>
    </div>
  );
}
