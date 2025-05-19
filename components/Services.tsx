import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and high-performance websites.',
    icon: '/assets/img/service-web-development.png',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications for iOS and Android.',
    icon: '/assets/img/service-mobile-app.png',
  },
  {
    title: 'Cloud Solutions',
    description: 'Providing scalable and secure cloud services.',
    icon: '/assets/img/service-cloud.png',
  },
  {
    title: 'IT Consulting',
    description: 'Offering expert IT consulting services to optimize your business.',
    icon: '/assets/img/service-it-consulting.png',
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <img src={service.icon} alt={service.title} className={styles.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
