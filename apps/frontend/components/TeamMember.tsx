import React from 'react';
import styles from './TeamMember.module.css';

const TeamMember = ({ name, position, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.position}>{position}</p>
    </div>
  );
};

export default TeamMember;
