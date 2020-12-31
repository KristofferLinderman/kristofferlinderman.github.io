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
  display: flex;
  flex-direction: column;
  bottom: 0;
  background-color: ${THEME.PRIMARY_LIGHT};
  border-radius: ${THEME.BORDER_RADIUS} ${THEME.BORDER_RADIUS} 0 0;
  box-shadow: ${THEME.TOP_BOX_SHADOW};
  line-height: ${SIZE.LINE_HEIGHT}rem;
  padding: ${SIZE.SMALL} ${SIZE.MEDIUM};
  height: 40%;
  overflow: scroll;
  box-sizing: border-box;

  @media ${DEVICE.TABLET}{
    height: fit-content;
    overflow: hidden;
    width: 100%;

    & > div {
      overflow: hidden;
    }
  }
`;

const SideOverlayContainer = styled(OverlayContainer)`
  @media ${DEVICE.LAPTOP}{
    min-width: 40%;
    border-radius: 20px;
    position: relative;
    left: ${(p) => (p.leftSide ? '10%' : 'auto')};
    right: ${(p) => (p.rightSide ? '10%' : 'auto')};
  }
`;

const Image = styled.img`
  width: ${(p) => (p.fitToHeight ? 'auto' : '100%')};
  height: ${(p) => (p.fitToHeight ? '60%' : 'auto')};
  object-fit: cover;
  
  @media ${DEVICE.TABLET}{
    
  }

  @media ${DEVICE.LAPTOP}{
    width: auto;
    height: 100%;
  }
`;

export {
  OverlayContainer, SideContainer, Container, Image, SideOverlayContainer,
};
