import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <p className="font-medium">&copy; 2026 Pavan. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 shadow-sm">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-xs font-medium">
                Built with <span className="text-blue-600 font-semibold">React</span>, <span className="text-blue-600 font-semibold">TypeScript</span>, and <span className="text-blue-600 font-semibold">Next.js</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
