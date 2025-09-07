import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Features from './Features';
import DownloadSection from './DownloadSection';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Home;