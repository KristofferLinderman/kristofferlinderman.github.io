import styled from 'styled-components';
import { ReactComponent as UpIcon } from '../../assets/icons/close.svg';
import { SIZE, THEME } from '../../commonComponents/constants';

const Container = styled.div`
  z-index: ${THEME.HIGHEST_LEVEL};
  position: absolute;
  display: flex;
  width: 50px;
  height: 50px;
  top: ${SIZE.MEDIUM};
  right: ${SIZE.MEDIUM};
  background: ${THEME.GRADIENT};
  border-radius: 50%;
  box-shadow: ${THEME.BOX_SHADOW};
  cursor: pointer;
`;

const ImageIcon = styled(UpIcon)`
  padding-right: 2px;
  margin: auto;
  fill: #f6f6f6;
`;

export { Container, ImageIcon };
