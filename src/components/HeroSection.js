import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-16">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
            Raadso
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Find amazing rental properties and hotels in Somaliland
          </p>
          <p className="text-lg text-gray-200">
            We've made finding and booking properties easy and secure
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
