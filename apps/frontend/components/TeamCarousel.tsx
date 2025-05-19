import React from 'react';
import Slider from 'react-slick';
import styles from './TeamCarousel.module.css';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/assets/img/team-1.jpg',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: '/assets/img/team-2.jpg',
  },
  // Add more team members as needed
];

const TeamCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className={styles.teamCarousel}>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img src={member.image} alt={member.name} className={styles.image} />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.position}>{member.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarousel;
