import React, { useState, useEffect } from 'react';
import styles from './HeroCarousel.module.css';

const images = [
  '/assets/img/banner-1.jpg',
  '/assets/img/banner-2.jpg'
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <img src={images[currentIndex]} alt="Banner" className={styles.image} />
    </div>
  );
};

export default HeroCarousel;
