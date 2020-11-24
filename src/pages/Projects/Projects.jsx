import React, { forwardRef } from 'react';
import { Container, T } from './Projects.style';

const Projects = forwardRef((_, ref) => (
  <Container ref={ref}>
    <T>
      Projects
    </T>
  </Container>
));

export default Projects;
