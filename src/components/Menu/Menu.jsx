import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, NavItem } from './Menu.style';
import useScrollPosition from '../../hooks/useScrollPosition';
import { SIZE } from '../../commonComponents/constants';
import { MENU_STATES } from './contants';

const Menu = ({ sections }) => {
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

  const handleClick = (section) => {
    console.log('Click', section);
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  console.log('Sections', sections);
  return (
    <Container menuState={menuState}>
      <Nav>
        <NavItem role="menuitem" tabIndex="0" onClick={() => handleClick(sections.projectPage)}>Projects</NavItem>
        <NavItem role="menuitem" tabIndex="0" onClick={() => handleClick(sections.aboutPage)}>About</NavItem>
        <NavItem role="menuitem" tabIndex="0" onClick={() => handleClick(sections.contactPage)}>Contact</NavItem>
      </Nav>
    </Container>
  );
};

Menu.propTypes = {
  sections: PropTypes.shape.isRequired,
};

export default Menu;
