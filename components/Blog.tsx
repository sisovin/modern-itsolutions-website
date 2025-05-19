import React from 'react';
import Link from 'next/link';
import styles from './Blog.module.css';

const blogPosts = [
  {
    title: 'Understanding Cloud Computing',
    excerpt: 'Cloud computing is the delivery of different services through the Internet...',
    image: '/assets/img/blog-1.jpg',
    link: '/blog/understanding-cloud-computing',
  },
  {
    title: 'The Future of AI in Business',
    excerpt: 'Artificial Intelligence (AI) is transforming the way businesses operate...',
    image: '/assets/img/blog-2.jpg',
    link: '/blog/future-of-ai-in-business',
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <h2>Latest News & Articles</h2>
        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <div key={index} className={styles.card}>
              <img src={post.image} alt={post.title} className={styles.image} />
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <Link href={post.link}>
                <a className={styles.readMore}>Read More</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
