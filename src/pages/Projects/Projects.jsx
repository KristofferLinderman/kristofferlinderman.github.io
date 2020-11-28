import React, { forwardRef } from 'react';
import { Container } from './Projects.style';
import ProjectCard from '../../components/ProjectCard';
import ProjectContent from '../../content/ProjectContent';

const Projects = forwardRef((_, ref) => {
  const filteredProjects = ProjectContent.filter((project) => project.show);

  return (
    <Container ref={ref}>
      {filteredProjects.map((project) => <ProjectCard projectData={project} key={project.id} />)}
    </Container>
  );
});

export default Projects;
