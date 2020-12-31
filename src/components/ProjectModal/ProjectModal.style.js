import styled from 'styled-components';
import { motion } from 'framer-motion';
import { THEME, SIZE, DEVICE } from '../../commonComponents/constants';

const Overlay = styled(motion.div)`
  position: fixed;
  z-index: ${THEME.HIGHEST_LEVEL};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
`;

const Modal = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${THEME.BORDER_RADIUS_SMALL};

  @media ${DEVICE.LAPTOP}{
    width: 60%;
    height: 80vh;
    left: 50%;
    margin-left: -30%;
    margin-top: -40vh;
  }
`;

const Container = styled.div`
  display: flex;    
  flex-direction: column;
  height: 100%;

  @media ${DEVICE.LAPTOP}{
    padding: ${SIZE.LARGE};
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  display: flex;
  max-height: ${SIZE.LINE_HEIGHT * 6}rem;
  margin: auto;
  overflow: scroll;
  
  @media ${DEVICE.TABLET}{
    overflow: hidden;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 40%;

  @media ${DEVICE.LAPTOP}{
    justify-content: flex-end;

    & > a {
      margin: 0 ${SIZE.SMALL};
    }
  }
`;

export {
  Modal,
  Overlay,
  Container,
  TopContainer,
  BottomContainer,
  TitleContainer,
  LinkContainer,
};
