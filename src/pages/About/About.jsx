import React, { forwardRef } from 'react';
import { Container, T } from './About.style';

const About = forwardRef((_, ref) => (
  <Container ref={ref}>
    <T>About</T>
  </Container>
));

export default About;
