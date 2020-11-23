import React, { useState } from 'react';
import { Container, Nav } from './Menu.style';
import useScrollPosition from '../../hooks/useScrollPosition';
import { SIZE } from '../../commonComponents/constants';
import { MENU_STATES } from './contants';

// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj For scroll

const Menu = () => {
  const [menuState, setMenuState] = useState(MENU_STATES.TOP);
  const handlescroll = ({ currPos }) => {
    // console.log('Previous: ', prevPos);
    // console.log('Current: ', currPos);

    if (currPos.y > window.innerHeight - SIZE.MENU && menuState !== MENU_STATES.STICKY) {
      console.log('Get sticky!');
      setMenuState(MENU_STATES.STICKY);
    } else if (currPos.y > 0) {
      console.log('Transition');
      setMenuState(MENU_STATES.TRANSITION);
    } else if (currPos.y === 0) {
      console.log('Back');
      setMenuState(MENU_STATES.TOP);
    }
  };

  useScrollPosition(handlescroll);

  return (
    <Container menuState={menuState}>
      <Nav>
        <p>Projects</p>
        <p>About</p>
        <p>Contact</p>
      </Nav>
    </Container>
  );
};

export default Menu;
