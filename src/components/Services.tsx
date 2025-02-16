import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Crafting captivating digital experiences...",
    },
    {
      title: "Data Analytics",
      description: "Transforming raw data into actionable insights...",
    },
    {
      title: "StockScape Insight",
      description: "Forecasting stock prices with precision...",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-800 to-gray-800 text-white relative">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          My <span className="text-red-500">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-red-500 transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
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
            d="M0,96L48,122.7C96,149,192,203,288,213.3C384,224,480,192,576,181.3C672,171,768,181,864,186.7C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
