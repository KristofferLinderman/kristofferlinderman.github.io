import React from 'react';
import PropTypes from 'prop-types';
import { Container, ImageIcon } from './CloseBtn.style';

const CloseBtn = ({ handleClick }) => {
  const clickHandler = () => {
    handleClick();
  };

  return (
    <Container onClick={() => clickHandler()}>
      <ImageIcon />
    </Container>
  );
};

CloseBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CloseBtn;
