import styled from 'styled-components';
import { THEME, SIZE } from '../../commonComponents/constants';

const Card = styled.div`
  display: inline-block;
  box-shadow: ${THEME.BOX_SHADOW};
  margin: auto ${SIZE.SMALL};
  min-width: 90%;
  height: 60%;
  position: relative;
  overflow:hidden;
  transition: all 0.5s ease-in-out;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  background-color: ${THEME.PRIMARY_LIGHT};
  height: 20%;
  position: absolute;
  bottom: 0;
  box-shadow: ${THEME.BOX_SHADOW};
  padding: 10px 0 10px 1rem;
  box-sizing: border-box;
  padding: ${SIZE.SMALL} ${SIZE.XLARGE};
`;

export {
  Card, Image, InfoContainer,
};
