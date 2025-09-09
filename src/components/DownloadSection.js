import React from 'react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
            Download Our App
          </h2>
          <p className="text-lg text-gray-600">
            Get the Raadso app to find rental properties and hotels on the go
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* iOS Download */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS</h3>
            <p className="text-gray-600 mb-6">
              Download the Raadso app for iOS to find rental properties and hotels
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
              Download on App Store
            </button>
          </div>

          {/* Android Download */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5966.416.416 0 00-.5966.1521l-2.0223 3.503C15.5902 8.4119 13.8533 7.8508 12 7.8508s-3.5902.5611-5.1367 1.5289L4.841 5.8767a.416.416 0 00-.5966-.1521.416.416 0 00-.1521.5966l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Android</h3>
            <p className="text-gray-600 mb-6">
              Download the Raadso app for Android to find rental properties and hotels
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
              Download on Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
