import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2>About Us</h2>
        <p>
          Modern IT Solutions is a leading provider of innovative IT services and solutions. Our mission is to help businesses achieve their goals through cutting-edge technology and expert guidance.
        </p>
        <p>
          With a team of highly skilled professionals, we offer a wide range of services including web development, mobile app development, cloud solutions, and IT consulting. Our commitment to excellence and customer satisfaction sets us apart in the industry.
        </p>
        <p>
          We believe in building long-term relationships with our clients by delivering exceptional results and providing ongoing support. Whether you are a small startup or a large enterprise, we have the expertise and resources to help you succeed.
        </p>
      </div>
    </section>
  );
};

export default About;
