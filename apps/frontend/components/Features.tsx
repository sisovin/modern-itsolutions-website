import React from 'react';
import styles from './Features.module.css';

const features = [
  {
    title: 'Feature One',
    description: 'Description for feature one.',
    icon: '/assets/img/feature-icon-1.png'
  },
  {
    title: 'Feature Two',
    description: 'Description for feature two.',
    icon: '/assets/img/feature-icon-2.png'
  },
  {
    title: 'Feature Three',
    description: 'Description for feature three.',
    icon: '/assets/img/feature-icon-3.png'
  }
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2>Key Features</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <img src={feature.icon} alt={feature.title} className={styles.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
