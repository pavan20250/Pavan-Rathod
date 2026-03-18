import React from 'react';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer
      className="relative px-4 sm:px-8 md:px-16 lg:px-24 py-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="h-px mb-5" style={{ background: 'var(--border)' }} />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            © 2026 {site.shortName}. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--green)' }} />
            <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
              Built with{' '}
              <span style={{ color: 'var(--text-secondary)' }}>React</span>
              {', '}
              <span style={{ color: 'var(--text-secondary)' }}>TypeScript</span>
              {' & '}
              <span style={{ color: 'var(--text-secondary)' }}>Next.js</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}