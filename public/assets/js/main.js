import React, { useState, useEffect } from 'react';

const Main = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to Modern IT Solutions</h1>
      <p>Scroll position: {scrollPosition}</p>
    </div>
  );
};

export default Main;
