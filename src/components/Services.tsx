import React from "react";
import { Code, Globe, Smartphone, Palette } from "lucide-react";
import bgImage from "../../public/bg.jpg"; 


const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-12 text-center bg-cover bg-center"
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
    >
      {/* Experience Section */}
      <div className="mb-16">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-400 mx-10 sm:mx-40"></div>
          </div>
          <div className="relative items-center rounded-3xl w-24 sm:w-32 h-8 sm:h-10 bg-white px-4 text-black font-semibold mx-auto transform -rotate-12">
            <p className="p-1 sm:p-2 text-sm sm:text-base">Experience</p>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:flex justify-center items-start space-x-8 px-6 md:px-12">
          {/* Experience 1 - May 2025 to Present (Top) */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
              <div className="absolute inset-0 w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500 w-64 text-center">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block">May 2025 - Present</span>
              <h3 className="text-lg font-bold text-gray-900">Mongrov</h3>
              <p className="text-sm text-gray-600">Developer</p>
            </div>
          </div>

          {/* Experience 2 - May 2024 to Apr 2025 (Bottom) */}
          <div className="flex flex-col items-center group mt-16">
            <div className="relative mb-4">
              <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
              <div className="absolute inset-0 w-6 h-6 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-emerald-500 w-64 text-center">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block">May 2024 - Apr 2025</span>
              <h3 className="text-lg font-bold text-gray-900">Redwood Partners</h3>
              <p className="text-sm text-gray-600">Full Stack Developer</p>
            </div>
          </div>

          {/* Experience 3 - 2024 (Top) */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
              <div className="absolute inset-0 w-6 h-6 bg-purple-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500 w-64 text-center">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block">2024</span>
              <h3 className="text-lg font-bold text-gray-900">Zummit Infolabs</h3>
              <p className="text-sm text-gray-600">Junior Web Developer</p>
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6 px-6">
          {/* Experience 1 - May 2025 to Present */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg z-10 relative"></div>
              <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500 flex-1">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-1 inline-block">May 2025 - Present</span>
              <h3 className="text-base font-bold text-gray-900">Mongrov</h3>
              <p className="text-xs text-gray-600">Developer</p>
            </div>
          </div>

          {/* Experience 2 - May 2024 to Apr 2025 */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-lg z-10 relative"></div>
              <div className="absolute inset-0 w-4 h-4 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-emerald-500 flex-1">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full mb-1 inline-block">May 2024 - Apr 2025</span>
              <h3 className="text-base font-bold text-gray-900">Redwood Partners</h3>
              <p className="text-xs text-gray-600">Full Stack Developer</p>
            </div>
          </div>

          {/* Experience 3 - 2024 */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg z-10 relative"></div>
              <div className="absolute inset-0 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-purple-500 flex-1">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mb-1 inline-block">2024</span>
              <h3 className="text-base font-bold text-gray-900">Zummit Infolabs</h3>
              <p className="text-xs text-gray-600">Junior Web Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Services</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-12">
        {/* Service 1: UX & UI Design */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
          <div className="relative z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-gray-600 transition-colors duration-300">
              UX & UI Design
            </h3>
            
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Creating intuitive and beautiful user interfaces that enhance user experience.
            </p>
          </div>
        </div>

        {/* Service 2: Full Stack Development */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
          <div className="relative z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-gray-600 transition-colors duration-300">
              Full Stack Development
            </h3>
            
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Building scalable web applications with modern frontend and backend technologies.
            </p>
          </div>
        </div>

        {/* Service 3: Web & Mobile Apps */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
          <div className="relative z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-gray-600 transition-colors duration-300">
              Web & Mobile Apps
            </h3>
            
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Developing responsive web applications and native mobile apps for all platforms.
            </p>
          </div>
        </div>

        {/* Service 4: Creative Solutions */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
          <div className="relative z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-gray-600 transition-colors duration-300">
              Creative Solutions
            </h3>
            
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Crafting innovative digital solutions that stand out in the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
