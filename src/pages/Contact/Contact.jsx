import React, { forwardRef } from 'react';
import ContactText from '../../content/ContactContent';
import ContactImg from '../../assets/images/contact.jpg';
import ImageWithOverlay from '../../commonComponents/ImageWithOverlay/ImageWithOverlay';
import { Container } from './Contact.style';

const Contact = forwardRef((_, ref) => (
  <Container ref={ref}>
    <ImageWithOverlay text={ContactText} image={ContactImg} />
  </Container>
));

export default Contact;
