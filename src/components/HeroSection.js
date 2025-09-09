import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-white pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins text-gray-900">
              Find Your Perfect Stay in Somaliland
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-700">
              Hotels, apartments, and rentals — verified and fairly priced
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Book with confidence on Raadso. Fast search, trusted listings, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
                Browse Properties
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-gray-400 transition-colors">
                List Your Property
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <img
                src="/herosection.png"
                alt="Raadso hero"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
