import React, { forwardRef } from 'react';
import { Container, T } from './Contact.style';

const Contact = forwardRef((_, ref) => (
  <Container ref={ref}>
    <T>
      Contact
    </T>
  </Container>
));

export default Contact;
