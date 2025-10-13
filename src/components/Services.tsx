import React from "react";
import { Code, Globe, Smartphone, Palette } from "lucide-react";
import bgImage from "../../public/bg.jpg"; 


const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-8 text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderBottomLeftRadius: "50px", 
        borderBottomRightRadius: "50px",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        borderLeft: "8px solid white",
        borderRight: "8px solid white",
      }}
      role="region"
      aria-labelledby="services-heading"
    >
      {/* Experience Section */}
      <div className="mb-10">
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-400 mx-10 sm:mx-40" aria-hidden="true"></div>
          </div>
          <div className="relative items-center rounded-3xl w-20 sm:w-28 h-6 sm:h-8 bg-white px-3 text-black font-semibold mx-auto transform -rotate-12">
            <p className="p-1 sm:p-1.5 text-xs sm:text-sm" id="experience-heading">Experience</p>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:flex justify-center items-start space-x-6 px-4 md:px-8" role="list" aria-labelledby="experience-heading">
          {/* Experience 1 - May 2024 to Present (Top) */}
          <div className="flex flex-col items-center group" role="listitem">
            <div className="relative mb-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full border-3 border-white shadow-lg z-10 relative" aria-hidden="true"></div>
              <div className="absolute inset-0 w-5 h-5 bg-blue-500 rounded-full animate-ping opacity-20" aria-hidden="true"></div>
            </div>
            <article className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500 w-56 text-center" tabIndex={0}>
              <time className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-1 inline-block" dateTime="2024-05">May 2024 - Present</time>
              <h3 className="text-base font-bold text-gray-900">Mongrov</h3>
              <p className="text-xs text-gray-600">Developer</p>
            </article>
          </div>

          {/* Experience 2 - May 2024 to Apr 2025 (Bottom) */}
          <div className="flex flex-col items-center group mt-12" role="listitem">
            <div className="relative mb-3">
              <div className="w-5 h-5 bg-emerald-500 rounded-full border-3 border-white shadow-lg z-10 relative" aria-hidden="true"></div>
              <div className="absolute inset-0 w-5 h-5 bg-emerald-500 rounded-full animate-ping opacity-20" aria-hidden="true"></div>
            </div>
            <article className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-emerald-500 w-56 text-center" tabIndex={0}>
              <time className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full mb-1 inline-block" dateTime="2024-05/2025-04">May 2024 - Apr 2025</time>
              <h3 className="text-base font-bold text-gray-900">Redwood Partners</h3>
              <p className="text-xs text-gray-600">Full Stack Developer</p>
            </article>
          </div>

          {/* Experience 3 - 2024 (Top) */}
          <div className="flex flex-col items-center group" role="listitem">
            <div className="relative mb-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full border-3 border-white shadow-lg z-10 relative" aria-hidden="true"></div>
              <div className="absolute inset-0 w-5 h-5 bg-purple-500 rounded-full animate-ping opacity-20" aria-hidden="true"></div>
            </div>
            <article className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500 w-56 text-center" tabIndex={0}>
              <time className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mb-1 inline-block" dateTime="2024">2024</time>
              <h3 className="text-base font-bold text-gray-900">Zummit Infolabs</h3>
              <p className="text-xs text-gray-600">Junior Web Developer</p>
            </article>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-4 px-4" role="list" aria-labelledby="experience-heading">
          {/* Experience 1 - May 2024 to Present */}
          <div className="flex items-center space-x-3 group" role="listitem">
            <div className="relative">
              <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg z-10 relative" aria-hidden="true"></div>
              <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-20" aria-hidden="true"></div>
            </div>
            <article className="bg-white rounded-lg p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500 flex-1" tabIndex={0}>
              <time className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full mb-1 inline-block" dateTime="2024-05">May 2024 - Present</time>
              <h3 className="text-sm font-bold text-gray-900">Mongrov</h3>
              <p className="text-xs text-gray-600">Developer</p>
            </article>
          </div>

          {/* Experience 2 - May 2024 to Apr 2025 */}
          <div className="flex items-center space-x-3 group" role="listitem">
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-lg z-10 relative" aria-hidden="true"></div>
              <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-20" aria-hidden="true"></div>
            </div>
            <article className="bg-white rounded-lg p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-emerald-500 flex-1" tabIndex={0}>
              <time className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-0.5 rounded-full mb-1 inline-block" dateTime="2024-05/2025-04">May 2024 - Apr 2025</time>
              <h3 className="text-sm font-bold text-gray-900">Redwood Partners</h3>
              <p className="text-xs text-gray-600">Full Stack Developer</p>
            </article>
          </div>

          {/* Experience 3 - 2024 */}
          <div className="flex items-center space-x-3 group" role="listitem">
            <div className="relative">
              <div className="w-3 h-3 bg-purple-500 rounded-full border-2 border-white shadow-lg z-10 relative" aria-hidden="true"></div>
              <div className="absolute inset-0 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-20" aria-hidden="true"></div>
            </div>
            <article className="bg-white rounded-lg p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-purple-500 flex-1" tabIndex={0}>
              <time className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded-full mb-1 inline-block" dateTime="2024">2024</time>
              <h3 className="text-sm font-bold text-gray-900">Zummit Infolabs</h3>
              <p className="text-xs text-gray-600">Junior Web Developer</p>
            </article>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3" id="services-heading">Services</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-4 md:px-8" role="list" aria-labelledby="services-heading">
        {/* Service 1: UX & UI Design */}
        <article className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50" role="listitem" tabIndex={0}>
          <div className="relative z-10">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              <Palette className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-gray-600 transition-colors duration-300">
              UX & UI Design
            </h3>
            
            <p className="text-xs text-gray-600 leading-relaxed">
              Creating intuitive and beautiful user interfaces that enhance user experience.
            </p>
          </div>
        </article>

        {/* Service 2: Full Stack Development */}
        <article className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50" role="listitem" tabIndex={0}>
          <div className="relative z-10">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-gray-600 transition-colors duration-300">
              Full Stack Development
            </h3>
            
            <p className="text-xs text-gray-600 leading-relaxed">
              Building scalable web applications with modern frontend and backend technologies.
            </p>
          </div>
        </article>

        {/* Service 3: Web & Mobile Apps */}
        <article className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50" role="listitem" tabIndex={0}>
          <div className="relative z-10">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-gray-600 transition-colors duration-300">
              Web & Mobile Apps
            </h3>
            
            <p className="text-xs text-gray-600 leading-relaxed">
              Developing responsive web applications and native mobile apps for all platforms.
            </p>
          </div>
        </article>

        {/* Service 4: Creative Solutions */}
        <article className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50" role="listitem" tabIndex={0}>
          <div className="relative z-10">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              <Globe className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-gray-600 transition-colors duration-300">
              Creative Solutions
            </h3>
            
            <p className="text-xs text-gray-600 leading-relaxed">
              Crafting innovative digital solutions that stand out in the market.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
