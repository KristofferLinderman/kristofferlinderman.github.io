import React, { forwardRef } from 'react';
import ContactText from '../../content/ContactContent';
import ContactImg from '../../assets/images/contact.jpg';
import ImageWithOverlay from '../../commonComponents/ImageWithOverlay';
import {
  Container, LinkContainer, Link, LinkImg,
} from './Contact.style';
import { Text } from '../../commonComponents/common.style';
import EmailIcon from '../../assets/icons/email.svg';
import GithubIcon from '../../assets/icons/github.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';

const Contact = forwardRef((_, ref) => (
  <Container ref={ref}>
    <ImageWithOverlay image={ContactImg}>
      <Text>
        {ContactText}
      </Text>
      <LinkContainer>
        <Link href="mailto:kristoffermglinderman@gmail.com">
          <LinkImg src={EmailIcon} alt="Email icon" />
        </Link>
        <Link href="https://github.com/KristofferLinderman">
          <LinkImg src={GithubIcon} alt="Github icon" />
        </Link>
        <Link href="https://se.linkedin.com/in/kristoffer-linderman-597a52140">
          <LinkImg src={LinkedinIcon} alt="Linkedin icon" />
        </Link>
      </LinkContainer>
    </ImageWithOverlay>
  </Container>
));

export default Contact;
