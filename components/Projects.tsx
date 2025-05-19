import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one.',
    image: '/assets/img/project-1.jpg',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two.',
    image: '/assets/img/project-2.jpg',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description for project three.',
    image: '/assets/img/project-3.jpg',
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2>Our Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
