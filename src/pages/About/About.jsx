import React, { forwardRef } from 'react';
import AboutText from '../../content/AboutContent';
import AboutImg from '../../assets/images/about.jpg';
import ImageWithOverlay from '../../commonComponents/ImageWithOverlay/ImageWithOverlay';
import { Container, TextContainer, TextWrapper } from './About.style';

const About = forwardRef((_, ref) => (
  <Container ref={ref}>
    <ImageWithOverlay text={AboutText} image={AboutImg}>
      <TextContainer>
        <TextWrapper>
          <p>{AboutText}</p>
        </TextWrapper>
      </TextContainer>
    </ImageWithOverlay>
  </Container>
));

export default About;
