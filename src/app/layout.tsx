import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VisitorTracker from "@/components/VisitorTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pavan Rathod - Full Stack Developer | React, TypeScript, AWS Expert",
  description:
    "Pavan Rathod is a passionate Full Stack Developer specializing in React, TypeScript, JavaScript, Node.js, and AWS. Explore my portfolio, projects, and technical blogs on modern web development.",
  keywords: [
    "Pavan Rathod",
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
  authors: [{ name: "Pavan Rathod" }],
  creator: "Pavan Rathod",
  publisher: "Pavan Rathod",
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
    title: "Pavan Rathod - Full Stack Developer | React, TypeScript, AWS Expert",
    description:
      "Pavan Rathod is a passionate Full Stack Developer specializing in React, TypeScript, JavaScript, Node.js, and AWS. Explore my portfolio, projects, and technical insights.",
    url: "https://pavanrathod.in",
    siteName: "Pavan Rathod - Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://pavanrathod.in/pavan.jpg",
        width: 1200,
        height: 630,
        alt: "Pavan Rathod - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Rathod - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in React, TypeScript, JavaScript, Node.js, and AWS",
    images: ["https://pavanrathod.in/pavan.jpg"],
    creator: "@pavanrathod",
  },
  alternates: {
    canonical: "https://pavanrathod.in",
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
              name: "Pavan Rathod",
              givenName: "Pavan",
              familyName: "Rathod",
              jobTitle: "Full Stack Developer",
              description: "Passionate Full Stack Developer specializing in React, TypeScript, JavaScript, Node.js, and AWS",
              url: "https://pavanrathod.in",
              image: "https://pavanrathod.in/pavan.jpg",
              sameAs: [
                "https://www.linkedin.com/in/pavan-rathod-0203k/",
                "https://github.com/pavan20250",
                "https://pavanrathod.in",
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
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
