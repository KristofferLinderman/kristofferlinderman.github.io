/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { THEME, SIZE } from '../../commonComponents/constants';
import { MENU_STATES } from './contants';

const stickyBorderRadius = `0 0 ${THEME.BORDER_RADIUS} ${THEME.BORDER_RADIUS}`;
const transitionBorderRadius = `${THEME.BORDER_RADIUS} ${THEME.BORDER_RADIUS} ${THEME.BORDER_RADIUS} ${THEME.BORDER_RADIUS}`;
const borderRadius = `${THEME.BORDER_RADIUS} ${THEME.BORDER_RADIUS} 0 0`;

const Container = styled.div`
  position: ${(props) => (props.menuState === MENU_STATES.STICKY ? 'fixed' : 'absolute')};
  top:${(props) => (props.menuState === MENU_STATES.STICKY ? '0' : 'auto')};
  bottom: 0;
  border-radius: ${(props) => (props.menuState === MENU_STATES.STICKY ? stickyBorderRadius : props.menuState === MENU_STATES.TRANSITION ? transitionBorderRadius : borderRadius)};
  width: 100%;
  height: ${SIZE.MENU}px;
  background: ${THEME.GRADIENT};
  box-shadow: ${THEME.BOX_SHADOW};
  transition: border-radius 0.5s ease-in-out;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  height: 100%;

  p {
    color: ${THEME.MENU_TEXT};
    margin: auto;
  }
`;

export {
  Container,
  Nav,
};
