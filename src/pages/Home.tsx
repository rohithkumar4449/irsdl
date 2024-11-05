import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import AboutUs from '../components/AboutUs';

const Home: React.FC = () => {
  return (
    <div>
      <ImageCarousel />
      <AboutUs />
    </div>
  );
};

export default Home;