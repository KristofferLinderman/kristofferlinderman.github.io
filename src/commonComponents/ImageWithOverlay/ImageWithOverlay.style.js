import styled from 'styled-components';
import { THEME, SIZE, DEVICE } from '../constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SideContainer = styled(Container)`
  @media ${DEVICE.LAPTOP}{
    width: 60%;
    margin: auto;
    flex-direction: ${(p) => (p.leftSide ? 'row-reverse' : 'row')};
  }
`;

const OverlayContainer = styled.div`
  margin:auto;
  position: absolute;
  bottom: 0;
  background-color: ${THEME.PRIMARY_LIGHT};
  border-radius: ${THEME.BORDER_RADIUS} ${THEME.BORDER_RADIUS} 0 0;
  box-shadow: ${THEME.TOP_BOX_SHADOW};
  line-height: ${SIZE.LINE_HEIGHT}rem;
  padding: ${SIZE.SMALL} ${SIZE.MEDIUM};
  height: 40%;
  overflow: scroll;
`;

const SideOverlayContainer = styled(OverlayContainer)`
  @media ${DEVICE.LAPTOP}{
    min-width: 40%;
    border-radius: 20px;
    position: relative;
    height: fit-content;
    left: -10%;
  }
`;

const Image = styled.img`
  width: ${(p) => (p.fitToHeight ? 'auto' : '100%')};
  height: ${(p) => (p.fitToHeight ? '60%' : 'auto')};
  object-fit: ${(p) => (p.fitToHeight ? 'cover' : 'initial')};
`;

export {
  OverlayContainer, SideContainer, Container, Image, SideOverlayContainer,
};
