import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from '../common.style';

const ImageWithOverlay = ({ image, children }) => (
  <Container>
    <Image src={image} alt="" srcSet="" />
    {children}
  </Container>
);

ImageWithOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageWithOverlay;
