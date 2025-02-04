import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;