import React from 'react';
import PropTypes from 'prop-types';
import {
  OverlayContainer, SideContainer, Container, Image, SideOverlayContainer,
} from './ImageWithOverlay.style';

const ImageWithOverlay = ({
  image, children, fitToHeight, leftSide, rightSide,
}) => {
  const useSideLayout = leftSide || rightSide;

  const getContent = () => {
    if (useSideLayout) {
      return (
        <SideContainer leftSide={leftSide} rightSide={rightSide}>
          <Image src={image} alt="" srcSet="" fitToHeight={fitToHeight} />
          <SideOverlayContainer leftSide={leftSide} rightSide={rightSide}>
            {children}
          </SideOverlayContainer>
        </SideContainer>
      );
    }

    return (
      <Container leftSide={leftSide} rightSide={rightSide}>
        <Image src={image} alt="" srcSet="" fitToHeight={fitToHeight} />
        <OverlayContainer>
          {children}
        </OverlayContainer>
      </Container>
    );
  };

  return (getContent());
};

ImageWithOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  fitToHeight: PropTypes.bool,
  leftSide: PropTypes.bool,
  rightSide: PropTypes.bool,
};

ImageWithOverlay.defaultProps = {
  fitToHeight: false,
  leftSide: false,
  rightSide: false,
};

export default ImageWithOverlay;
