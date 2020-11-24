import styled from 'styled-components';
import { THEME, SIZE } from '../../commonComponents/constants';
import { ReactComponent as UpIcon } from '../../assets/icons/up-arrow.svg';

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 50px;
  height: 50px;
  bottom: ${SIZE.MEDIUM};
  right: ${SIZE.MEDIUM};
  background: ${THEME.GRADIENT};
  border-radius: 50%;
  box-shadow: ${THEME.BOX_SHADOW};
`;

const ImageIcon = styled(UpIcon)`
  margin: auto;
  fill: '#111';
`;

export { Container, ImageIcon };
