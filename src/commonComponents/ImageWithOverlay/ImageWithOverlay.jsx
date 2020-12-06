import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../common.style';
import { OverlayContainer, Image } from './ImageWithOverlay.style';

const ImageWithOverlay = ({ image, children, fitToHeight }) => (
  <Container>
    <Image src={image} alt="" srcSet="" fitToHeight={fitToHeight} />
    <OverlayContainer>
      {children}
    </OverlayContainer>
  </Container>
);

ImageWithOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  fitToHeight: PropTypes.bool,
};

ImageWithOverlay.defaultProps = {
  fitToHeight: false,
};

export default ImageWithOverlay;
