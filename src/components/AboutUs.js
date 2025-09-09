import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Raadso is your trusted partner in finding the perfect rental properties and hotels across Somaliland. 
            We connect you with verified, high-quality accommodations that meet your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading platform for property rentals and hotel bookings in Somaliland, 
              making quality accommodation accessible to everyone while supporting local property owners 
              and contributing to the growth of our tourism industry.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide a seamless, secure, and user-friendly platform that connects travelers and locals 
              with verified rental properties and hotels. We are committed to transparency, quality service, 
              and building trust in the Somaliland accommodation market.
            </p>
          </div>
        </div>

        {/* Additional sections moved to Home.js */}
      </div>
    </section>
  );
};

export default AboutUs;
