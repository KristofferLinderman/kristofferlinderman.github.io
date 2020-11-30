import styled from 'styled-components';
import { THEME, SIZE } from '../../commonComponents/constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TextContainer = styled.div`
  margin:auto;
  position: absolute;
  top: 50%;
  background-color: ${THEME.PRIMARY_LIGHT};
  border-radius: ${THEME.BORDER_RADIUS};
  box-shadow: ${THEME.BOX_SHADOW};
  line-height: ${SIZE.LARGE};
  padding: ${SIZE.MEDIUM} ${SIZE.SMALL};
  height: 40%;
  overflow: scroll;
`;

const TextWrapper = styled.div`
  display: flex;
  overflow: scroll;
  height: 100%;
`;

export { Container, TextContainer, TextWrapper };
