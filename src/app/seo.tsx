import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "Pavan Rathod - Full Stack Developer ",
  description = "Pavan Rathod is a passionate Full Stack Developer specializing in React, TypeScript, JavaScript, Node.js, and AWS. Explore my portfolio, projects, and technical blogs on modern web development.",
  keywords = [
    "Pavan Rathod",
    "Katravath Pavan",
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
  image = "https://pavanrathod.in/pavan.jpg",
  url = "https://pavanrathod.in",
  type = "website"
}: SEOProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Pavan Rathod" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Pavan Rathod - Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@pavanrathod" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
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
            description: description,
            url: url,
            image: image,
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
    </Head>
  );
}
