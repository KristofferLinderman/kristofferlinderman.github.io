import React from 'react';
import { Title, Container, Signature } from './LandingPage.style';
import { Text } from '../../commonComponents/common.style';
import signature from '../../assets/images/signature.png';

const LandingPage = () => (
  <Container>
    <Title>Hello, my name is Kristoffer Linderman</Title>
    <Text>
      I write code and always want to become better.
      Check out some of my projects, or just say hi by email or Linkedin.
    </Text>
    <Signature src={signature} alt="Kristoffer's signature" />
  </Container>
);

export default LandingPage;
