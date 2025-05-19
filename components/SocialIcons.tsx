import React from 'react';
import styles from './SocialIcons.module.css';

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/img/facebook-icon.png" alt="Facebook" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/img/twitter-icon.png" alt="Twitter" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/img/linkedin-icon.png" alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/img/instagram-icon.png" alt="Instagram" />
      </a>
    </div>
  );
};

export default SocialIcons;
