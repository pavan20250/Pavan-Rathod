import React from "react";
import Image from "next/image";
import design from "../../public/image.png";
import web from "../../public/web.png";
import creative from "../../public/creative.png";
import development from "../../public/development.png";

// React component to display services
const Services: React.FC = () => {
  return (
    <section className="py-12 text-center min-h-screen">
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 mx-10 sm:mx-40"></div>
        </div>
        <div className="relative items-center rounded-3xl w-24 sm:w-32 h-8 sm:h-10 bg-gray-300 px-4 text-black font-semibold mx-auto transform -rotate-12">
          <p className="p-1 sm:p-2 text-sm sm:text-base">Services</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12">
        {/* Card 1: UX & UI */}
        <div className="max-w-sm p-6 rounded-lg text-left bg-white shadow-md">
          <Image src={design} alt="UX & UI" width={40} height={40} />
          <h3 className="text-lg font-sans mb-2 text-black mt-6">UX & UI</h3>
          <p className="text-sm text-gray-700 font-sans">
            Designing interfaces that are intuitive, efficient, and enjoyable to use.
          </p>
        </div>

        {/* Card 2: Web & Mobile App */}
        <div className="max-w-sm p-6 rounded-lg text-left bg-white shadow-md">
          <Image src={web} alt="Web & Mobile App" width={40} height={40} />
          <h3 className="text-lg font-sans mb-2 text-black mt-6">Web & Mobile App</h3>
          <p className="text-sm text-gray-700 font-sans">
            Transforming ideas into exceptional web and mobile app experiences.
          </p>
        </div>

        {/* Card 3: Design & Creative */}
        <div className="max-w-sm p-6 rounded-lg text-left bg-white shadow-md">
          <Image src={creative} alt="Design & Creative" width={40} height={40} />
          <h3 className="text-lg font-sans mb-2 text-black mt-6">Design & Creative</h3>
          <p className="text-sm text-gray-700 font-sans">
            Crafting visually stunning designs that connect with your audience.
          </p>
        </div>

        {/* Card 4: Development */}
        <div className="max-w-sm p-6 rounded-lg text-left bg-white shadow-md">
          <Image src={development} alt="Development" width={40} height={40} />
          <h3 className="text-lg font-sans mb-2 text-black mt-6">Development</h3>
          <p className="text-sm text-gray-700 font-sans">
            Bringing your vision to life with the latest technology and design trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
