import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "Describes my personal info and work-related information.",
      image: "/images/work-1.jpeg",
      link: "#",
    },
    {
      title: "Branding Card Website",
      description:
        "Created an eye-catching personal name card using HTML and CSS, incorporating a dynamic animated layout, resulting in enhanced brand visibility and increased networking opportunities at professional conferences and events.",
      image: "/images/work-2.png",
      link: "https://pavan20250.github.io/Pavan_info/",
    },
    {
      title: "Book Shelf Analytics",
      description:
        "Applied data science techniques, including EDA and linear regression, to predict book checkouts based on demand, optimizing inventory management and enhancing user experience through personalized recommendations.",
      image: "/images/work-3.png",
      link: "https://github.com/pavan20250/Bookshelf-Analytics/tree/main",
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-b from-gray-800 to-black text-white relative">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          My <span className="text-red-500">Work</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-900"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
              />

              {/* Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2 text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-cyan-500 hover:text-red-500"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <a
          href="#"
          className="block mt-10 mx-auto w-fit px-6 py-3 text-center text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300"
        >
          See More
        </a>
      </div>

      {/* Decorative SVG */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
        >
          <path
            fill="#1e293b"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,149.3C672,160,768,192,864,213.3C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;
