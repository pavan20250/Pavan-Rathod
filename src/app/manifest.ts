import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pavan Rathod - Full Stack Developer ',
    short_name: 'Pavan Rathod',
    description: 'Pavan Rathod is a passionate Full Stack Developer specializing in React, TypeScript, JavaScript, Node.js, and AWS. Explore my portfolio, projects, and technical blogs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    categories: ['developer', 'portfolio', 'technology'],
    lang: 'en',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
