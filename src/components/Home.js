import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import CoreValues from './CoreValues';
import Services from './Services';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import Features from './Features';
import DownloadSection from './DownloadSection';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <CoreValues />
      <Services />
      <Testimonials />
      <Features />
      <DownloadSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
