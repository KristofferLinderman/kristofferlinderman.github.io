import React, { forwardRef } from 'react';
import AboutText from '../../content/AboutContent';
import AboutImg from '../../assets/images/about.jpg';
import ImageWithOverlay from '../../commonComponents/ImageWithOverlay/ImageWithOverlay';
import { Container, TextWrapper } from './About.style';

const About = forwardRef((_, ref) => (
  <Container ref={ref}>
    <ImageWithOverlay image={AboutImg} leftSide>
      <TextWrapper>
        <p>{AboutText}</p>
      </TextWrapper>
    </ImageWithOverlay>
  </Container>
));

export default About;
