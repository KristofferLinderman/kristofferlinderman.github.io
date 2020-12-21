import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, NavItem } from './Menu.style';
import useScrollPosition from '../../utils/useScrollPosition';
import { SIZE } from '../../commonComponents/constants';
import { MENU_STATES } from './contants';

const Menu = ({ sections }) => {
  const [menuState, setMenuState] = useState(MENU_STATES.TOP);
  const [currentSection, setCurrentSection] = useState(0);

  // Could have a state for transition, if it is transitioning then no isCurrent
  const isCurrent = (index) => index === currentSection;

  const getCurrentSection = (yPos) => {
    const screenHeight = window.innerHeight;
    const currSection = yPos > (screenHeight - SIZE.MENU)
      ? Math.floor(yPos / (screenHeight - SIZE.MENU))
      : 0;

    setCurrentSection(currSection);
  };

  const handleScroll = ({ currPos }) => {
    if (currPos.y > window.innerHeight - SIZE.MENU) {
      if (menuState !== MENU_STATES.STICKY) {
        setMenuState(MENU_STATES.STICKY);
      }
    } else if (currPos.y < 10) {
      setMenuState(MENU_STATES.TOP);
    } else if (menuState !== MENU_STATES.TRANSITION) {
      setMenuState(MENU_STATES.TRANSITION);
    }

    getCurrentSection(currPos.y);
  };

  useScrollPosition(handleScroll);

  const handleClick = (section) => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container menuState={menuState}>
      <Nav>
        <NavItem role="menuitem" isCurrent={isCurrent(1)} tabIndex="0" onClick={() => handleClick(sections.projectPage)}>Projects</NavItem>
        <NavItem role="menuitem" isCurrent={isCurrent(2)} tabIndex="0" onClick={() => handleClick(sections.aboutPage)}>About</NavItem>
        <NavItem role="menuitem" isCurrent={isCurrent(3)} tabIndex="0" onClick={() => handleClick(sections.contactPage)}>Contact</NavItem>
      </Nav>
    </Container>
  );
};

Menu.propTypes = {
  sections: PropTypes.shape({
    projectPage: PropTypes.shape({ current: React.MutableRefObject }),
    aboutPage: PropTypes.shape({ current: React.MutableRefObject }),
    contactPage: PropTypes.shape({ current: React.MutableRefObject }),
  }).isRequired,
};

export default Menu;
