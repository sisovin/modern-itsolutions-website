import React from 'react';
import Projects from '@/components/Projects';

const ProjectsPage = () => {
  return (
    <div>
      <Projects />
      <div className="additional-content">
        <h2>Additional Content</h2>
        <p>
          Here you can add more information about your projects, such as case studies, client testimonials, or detailed descriptions of each project.
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
