import React, { forwardRef } from 'react';
import { Container } from './Projects.style';
import ProjectCard from '../../components/ProjectCard';

const Projects = forwardRef((_, ref) => (
  <Container ref={ref}>
    <ProjectCard />
  </Container>
));

export default Projects;
