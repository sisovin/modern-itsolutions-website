import React from 'react';
import Link from 'next/link';
import styles from './NotFound.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className={styles.homeLink}>Go to Home</a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
