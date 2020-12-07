import styled from 'styled-components';
import { THEME, SIZE } from '../constants';

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

const Image = styled.img`
  width: ${(p) => (p.fitToHeight ? 'auto' : '100%')};
  height: ${(p) => (p.fitToHeight ? '60%' : 'auto')};
  object-fit: ${(p) => (p.fitToHeight ? 'cover' : 'initial')};
`;

export { OverlayContainer, Image };
