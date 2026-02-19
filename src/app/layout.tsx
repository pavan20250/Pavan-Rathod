import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: [
    site.name,
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "AWS Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: `${site.name} - Portfolio`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://pavanrathod.in/pavan.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} - Software Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["https://pavanrathod.in/pavan.jpg"],
    creator: "@pavanrathod",
  },
  alternates: {
    canonical: site.url,
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD for Personal Branding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              givenName: site.shortName,
              familyName: site.name.split(" ").slice(1).join(" ") || site.name,
              jobTitle: "Full Stack Developer",
              description: "Passionate Full Stack Developer specializing in React, TypeScript, JavaScript, Node.js, and AWS",
              url: site.url,
              image: `${site.url}/pavan.jpg`,
              sameAs: [
                "https://www.linkedin.com/in/pavan-rathod-0203k/",
                "https://github.com/pavan20250",
                site.url,
              ],
              knowsAbout: [
                "React",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "AWS",
                "Full Stack Development",
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "MongoDB",
                "PostgreSQL"
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Full Stack Developer",
                description: "Developing web applications using modern technologies like React, TypeScript, and AWS"
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
