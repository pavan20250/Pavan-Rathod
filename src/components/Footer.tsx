import React from 'react';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative py-6 sm:py-8 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="border-t border-slate-200 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-slate-500 text-xs sm:text-sm space-y-3 sm:space-y-0 gap-2">
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-center sm:text-left">
              <div className="w-2 h-2 bg-slate-400 rounded-full shrink-0"></div>
              <p className="font-medium">&copy; 2026 {site.shortName}. All rights reserved.</p>
            </div>
            <div className="flex items-center justify-center space-x-2 rounded-full px-3 sm:px-4 py-2 border border-slate-200 bg-white">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shrink-0"></div>
              <p className="text-[10px] sm:text-xs font-medium">
                Built with <span className="text-slate-700 font-semibold">React</span>, <span className="text-slate-700 font-semibold">TypeScript</span>, and <span className="text-slate-700 font-semibold">Next.js</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
