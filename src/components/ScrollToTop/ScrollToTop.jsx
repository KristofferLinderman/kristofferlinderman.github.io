import React from 'react';
import PropTypes from 'prop-types';
import { Container, ImageIcon } from './ScrollToTop.style';
// import { ReactComponent as UpIcon } from '../../assets/icons/up-arrow.svg';

const ScrollToTop = ({ topRef }) => {
  const handleOnClick = () => {
    console.log('Click top');
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container onClick={() => handleOnClick()}>
      <ImageIcon />
    </Container>
  );
};

ScrollToTop.propTypes = {
  topRef: PropTypes.shape.isRequired,
};

export default ScrollToTop;
