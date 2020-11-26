import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, ImageIcon, UndoScrollBtn } from './ScrollToTop.style';
import useScrollPosition from '../../hooks/useScrollPosition';

const ScrollToTop = ({ topRef }) => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [showUndoBtn, setShowUndoBtn] = useState(false);
  const lastPosition = useRef(null);

  const handleScroll = ({ currPos, direction }) => {
    // console.log(` ${prevPos.y}  ${currPos.y} direction: ${direction > 0 ? 'UP' : 'DOWN'}`);

    if (direction > 0 && showScrollBtn) {
      setShowScrollBtn(false);
    } else if (direction < 0 && !showScrollBtn && currPos.y > window.innerHeight - 50) {
      setShowScrollBtn(true);
    }
  };

  const showUndoWithTimout = () => {
    setShowUndoBtn(true);
    setTimeout(() => {
      setShowUndoBtn(false);
    }, 2500);
  };

  const handleOnClick = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
    lastPosition.current = window.scrollY;
    showUndoWithTimout();
  };

  const handleUndo = () => {
    window.scrollTo({ top: lastPosition.current, behavior: 'smooth' });
    setShowUndoBtn(false);
  };

  useScrollPosition(handleScroll);

  return (
    <>
      <UndoScrollBtn type="button" onClick={() => handleUndo()} showUndoBtn={showUndoBtn}>
        <span>Scrolled to top UNDO</span>
      </UndoScrollBtn>
      <Container onClick={() => handleOnClick()} showScrollBtn={showScrollBtn}>
        <ImageIcon />
      </Container>
    </>
  );
};

ScrollToTop.propTypes = {
  topRef: PropTypes.shape({ current: React.MutableRefObject }).isRequired,
};

export default ScrollToTop;
