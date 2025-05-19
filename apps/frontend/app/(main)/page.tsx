import React from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import Services from '@/components/Services';
import Blog from '@/components/Blog';

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <Services />
      <Blog />
    </div>
  );
};

export default HomePage;
