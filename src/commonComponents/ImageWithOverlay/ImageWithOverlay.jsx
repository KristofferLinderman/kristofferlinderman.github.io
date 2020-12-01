import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from '../common.style';
import { OverlayContainer } from './ImageWithOverlay.style';

const ImageWithOverlay = ({ image, children }) => (
  <Container>
    <Image src={image} alt="" srcSet="" />
    <OverlayContainer>
      {children}
    </OverlayContainer>
  </Container>
);

ImageWithOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageWithOverlay;
