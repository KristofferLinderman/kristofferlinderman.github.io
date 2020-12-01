import styled from 'styled-components';
import { THEME, SIZE } from '../constants';

const OverlayContainer = styled.div`
  margin:auto;
  position: absolute;
  top: 50%;
  background-color: ${THEME.PRIMARY_LIGHT};
  border-radius: ${THEME.BORDER_RADIUS} ${THEME.BORDER_RADIUS} 0 0;
  box-shadow: ${THEME.TOP_BOX_SHADOW};
  line-height: ${SIZE.LARGE};
  padding: ${SIZE.MEDIUM} ${SIZE.SMALL};
  height: 40%;
  overflow: scroll;
`;

export { OverlayContainer };
