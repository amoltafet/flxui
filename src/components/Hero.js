import React from 'react';
import Header from './Header';
const Hero = () => {
  return (
    <section className="relative h-[90vh] border border-gray-300 rounded-4xl overflow-hidden md:mx-[12%] sm:mx-0 mt-10">
      <Header />
      <div className="flex h-full border-t border-gray-300">
        {/* Left side - Text */}
        <div className="w-1/2 flex flex-col justify-center p-12">
          <h2 className="text-8xl font-light mb-4 text-black">
            Experiments <br /> On scale.
          </h2>
          <button className="bg-black text-white px-8 py-5 rounded-full w-fit hover:bg-indigo-600 transition-all duration-300 cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Right side - Video */}
        <div className="w-full h-full">
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              src="/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;