import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-white relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-5">
        {/* Profile Image */}
        <img 
          src="/images/user.jpg" 
          alt="User" 
          className="w-48 md:w-60 rounded-lg shadow-lg transform hover:scale-105 transition duration-300" 
        />
        
        {/* About Content */} 
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-center md:text-left">
            About <span className="text-red-500">Me</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 text-center md:text-left">
            Smart Manufacturing Engineering student with extensive training in manufacturing processes, systems
            engineering, IT, and networks. Adopts an experiential learning approach, gaining hands-on experience in
            smart manufacturing technologies. Proficient in Web development, Python, C, C++, and data analysis,
            showcasing commitment to continuous learning and contributing to innovative projects.
          </p>
          
          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            {["Skills", "Experience", "Education"].map((tab) => (
              <button 
                key={tab} 
                className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-red-500 text-white font-medium shadow-md transition duration-300"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative SVG */}
      <div className="absolute bottom-0 left-0 w-full h-full -z-10 opacity-20">
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

export default About;
