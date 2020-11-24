import React, { useState } from 'react';
import { Container, Nav } from './Menu.style';
import useScrollPosition from '../../hooks/useScrollPosition';
import { SIZE } from '../../commonComponents/constants';
import { MENU_STATES } from './contants';

const Menu = () => {
  const [menuState, setMenuState] = useState(MENU_STATES.TOP);
  const handlescroll = ({ currPos }) => {
    if (currPos.y > window.innerHeight - SIZE.MENU) {
      if (menuState !== MENU_STATES.STICKY) {
        setMenuState(MENU_STATES.STICKY);
      }
    } else if (currPos.y < 10) {
      setMenuState(MENU_STATES.TOP);
    } else if (menuState !== MENU_STATES.TRANSITION) {
      setMenuState(MENU_STATES.TRANSITION);
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
