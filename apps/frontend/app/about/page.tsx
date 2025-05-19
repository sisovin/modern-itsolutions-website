import React from 'react';
import About from '@/components/About';

const AboutPage = () => {
  return (
    <div>
      <About />
      <section>
        <div>
          <h2>Our Mission</h2>
          <p>
            At Modern IT Solutions, our mission is to provide innovative and reliable IT services that help businesses achieve their goals. We are committed to delivering exceptional results and building long-term relationships with our clients.
          </p>
        </div>
        <div>
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a global leader in the IT industry, known for our expertise, innovation, and customer-centric approach. We strive to create a positive impact on businesses and communities through our technology solutions.
          </p>
        </div>
        <div>
          <h2>Our Values</h2>
          <ul>
            <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
            <li>Excellence: We strive for excellence in everything we do.</li>
            <li>Innovation: We embrace innovation to deliver cutting-edge solutions.</li>
            <li>Customer Focus: We prioritize our customers' needs and work to exceed their expectations.</li>
            <li>Collaboration: We believe in the power of collaboration and teamwork.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
