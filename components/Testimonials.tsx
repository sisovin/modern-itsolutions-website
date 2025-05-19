import React from 'react';
import Slider from 'react-slick';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Alice Johnson',
    feedback: 'This company provided excellent service and support!',
    image: '/assets/img/testimonial-1.jpg',
  },
  {
    name: 'Bob Smith',
    feedback: 'Highly recommend their services. Very professional and reliable.',
    image: '/assets/img/testimonial-2.jpg',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.testimonials}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <img src={testimonial.image} alt={testimonial.name} className={styles.image} />
            <h3 className={styles.name}>{testimonial.name}</h3>
            <p className={styles.feedback}>{testimonial.feedback}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
