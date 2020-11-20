/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { THEME } from '../../commonComponents/constants';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  top:calc(100% - 50px);
  width: 100%;
  height: 50px;
  background: ${THEME.GRADIENT};
  box-shadow: ${THEME.BOX_SHADOW};
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
