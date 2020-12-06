import styled from 'styled-components';
import { motion } from 'framer-motion';
import { THEME, SIZE } from '../../commonComponents/constants';

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
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${THEME.BORDER_RADIUS_SMALL};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

const Link = styled.a`
  display: flex;
`;

const LinkImg = styled.img`
  width: ${SIZE.XLARGE};
`;

export {
  Modal, Overlay, TopContainer, TitleContainer, LinkContainer, Link, LinkImg,
};
