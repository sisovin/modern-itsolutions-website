import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h4>About Us</h4>
            <p>Modern IT Solutions is a leading provider of innovative IT services and solutions.</p>
          </div>
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Contact Us</h4>
            <p>Email: info@modernitsolutions.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className={styles.row}>
          <p>&copy; 2023 Modern IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
