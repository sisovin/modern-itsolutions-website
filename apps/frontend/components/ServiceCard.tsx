import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServiceCard;
