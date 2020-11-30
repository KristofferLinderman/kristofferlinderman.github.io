import React, { forwardRef } from 'react';
import {
  Container, TextContainer, Image, TextWrapper,
} from './About.style';
import AboutText from '../../content/AboutContent';
import AboutImg from '../../assets/images/about.jpg';

const About = forwardRef((_, ref) => (
  <Container ref={ref}>
    <Image src={AboutImg} alt="" srcSet="" />
    <TextContainer>
      <TextWrapper>
        <p>{AboutText}</p>
      </TextWrapper>
    </TextContainer>
  </Container>
));

export default About;
