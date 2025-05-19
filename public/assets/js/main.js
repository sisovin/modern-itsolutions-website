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

  const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  };

  const validateForm = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });

    return isValid;
  };

  const initGoogleMaps = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  };

  const initCarousel = () => {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    setInterval(() => {
      const items = carousel.querySelectorAll('.carousel-item');
      items[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].classList.add('active');
    }, 3000);
  };

  const initCountdown = (targetDate) => {
    const countdown = document.getElementById('countdown');
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return timeLeft;
    };

    const updateCountdown = () => {
      const timeLeft = calculateTimeLeft();
      countdown.innerHTML = `
        ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s
      `;
    };

    setInterval(updateCountdown, 1000);
  };

  const initBackToTopButton = () => {
    const button = document.getElementById('back-to-top');
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };

  const initSocialMediaIntegration = () => {
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        window.open(icon.dataset.url, '_blank');
      });
    });
  };

  useEffect(() => {
    initGoogleMaps();
    initCarousel();
    initCountdown('2023-12-31T23:59:59');
    initBackToTopButton();
    initSocialMediaIntegration();
  }, []);

  return (
    <div>
      <h1>Welcome to Modern IT Solutions</h1>
      <p>Scroll position: {scrollPosition}</p>
      <button onClick={() => smoothScroll('#target')}>Smooth Scroll</button>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (validateForm(e.target)) {
          // Submit form
        }
      }}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <div id="map"></div>
      <div className="carousel">
        <div className="carousel-item active">Item 1</div>
        <div className="carousel-item">Item 2</div>
        <div className="carousel-item">Item 3</div>
      </div>
      <div id="countdown"></div>
      <button id="back-to-top">Back to Top</button>
      <div className="social-icons">
        <div className="social-icon" data-url="https://www.facebook.com">Facebook</div>
        <div className="social-icon" data-url="https://www.twitter.com">Twitter</div>
        <div className="social-icon" data-url="https://www.linkedin.com">LinkedIn</div>
        <div className="social-icon" data-url="https://www.instagram.com">Instagram</div>
      </div>
    </div>
  );
};

export default Main;
