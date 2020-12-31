import React, { forwardRef } from 'react';
import AboutText from '../../content/AboutContent';
import AboutImg from '../../assets/images/about.jpg';
import ImageWithOverlay from '../../commonComponents/ImageWithOverlay/ImageWithOverlay';
import { Container, TextWrapper } from './About.style';
import { Text } from '../../commonComponents/common.style';

const About = forwardRef((_, ref) => (
  <Container ref={ref}>
    <ImageWithOverlay image={AboutImg} leftSide>
      <TextWrapper>
        <Text>{AboutText}</Text>
      </TextWrapper>
    </ImageWithOverlay>
  </Container>
));

export default About;
