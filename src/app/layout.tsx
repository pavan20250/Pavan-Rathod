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
  title: "Pavan Rathod",
  description:
    "Pavan Rathod - A Full Stack Developer specializing in React, TypeScript, and AWS. Explore my projects and blogs.",
  openGraph: {
    title: "Pavan Rathod",
    description:
      "Explore my work, projects, and technical insights on React, Typescript, and AWS.",
    url: "https://pavanrathod.in",
    siteName: "Pavan Rathod",
    type: "website",
    images: [
      {
        url: "https://pavanrathod.in/pavan.jpg",
        width: 1200,
        height: 630,
        alt: "Pavan Rathod - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Rathod",
    description: "Full Stack Developer specializing in React, TypeScript, and AWS",
    images: ["https://pavanrathod.in/pavan.jpg"],
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
              url: "https://pavanrathod.in",
              sameAs: [
                "https://www.linkedin.com/in/pavan-rathod-0203k/",
                "https://github.com/pavan20250",
                "https://pavanrathod.in",
              ],
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
