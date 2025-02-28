import React from "react";
import Image from "next/image";
import user from "../../public/user.png";

const About = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-60">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Profile Image */}
        <div className="relative w-48 sm:w-44 md:w-44 lg:w-full mx-auto">
          <Image
            src={user}
            alt="User"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* About Content */}
        <div className="text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 leading-relaxed">
            I am a <span className="font-semibold text-gray-900">Full Stack Developer</span> passionate about creating 
            intuitive and dynamic web applications. My expertise lies in 
            <span className="font-semibold text-gray-900"> Next.js, React, and TypeScript</span>, 
            coupled with experience in building scalable platforms using 
            <span className="font-semibold text-gray-900"> PostgreSQL</span> and cloud technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
