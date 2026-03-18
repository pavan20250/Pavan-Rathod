import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: [
    site.name, "Software Developer", "Full Stack Developer",
    "React Developer", "TypeScript Developer", "JavaScript Developer",
    "Node.js Developer", "AWS Developer", "Web Developer",
    "Frontend Developer", "Backend Developer", "Portfolio", "Software Engineer"
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: site.title, description: site.description, url: site.url,
    siteName: `${site.name} - Portfolio`, type: "website", locale: "en_US",
    images: [{ url: "https://pavanrathod.in/pavan.jpg", width: 1200, height: 630, alt: `${site.name} - Software Developer Portfolio` }],
  },
  twitter: {
    card: "summary_large_image", title: site.title, description: site.description,
    images: ["https://pavanrathod.in/pavan.jpg"], creator: "@pavanrathod",
  },
  alternates: { canonical: site.url },
  verification: { google: "your-google-verification-code" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              jobTitle: "Full Stack Developer",
              url: site.url,
              image: `${site.url}/pavan.jpg`,
              sameAs: ["https://www.linkedin.com/in/pavan-rathod-0203k/", "https://github.com/pavan20250", site.url],
            }),
          }}
        />
      </head>
      <body style={{ background: 'var(--bg-primary)' }}>
        {children}
      </body>
    </html>
  );
}