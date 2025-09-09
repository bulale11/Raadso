import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-white pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-poppins text-gray-900 leading-tight">
              Discover Our Best Accommodations
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-700">
              Premium hotels, cozy apartments, and authentic rentals across the region
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Experience the warmth of local hospitality. Verified properties, local expertise, and seamless booking across our beautiful region.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#features" className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors text-sm sm:text-base">
                Explore Now
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-gray-400 transition-colors text-sm sm:text-base">
                Partner With Us
              </a>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <img
                src="/herosection.png"
                alt="Raadso hero"
                className="w-full h-auto object-cover max-h-96 sm:max-h-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
