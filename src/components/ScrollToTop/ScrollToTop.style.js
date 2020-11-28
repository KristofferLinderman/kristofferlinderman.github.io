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
  opacity: ${(props) => (props.showScrollBtn ? 1 : 0)};
  visibility: ${(props) => (props.showScrollBtn ? 'visible' : 'hidden')};
  transition: all 0.5s ease-in-out;
`;

const ImageIcon = styled(UpIcon)`
  margin: auto;
  fill: #f6f6f6;
`;

const UndoScrollBtn = styled.button`
  position: fixed;
  height: 2.5rem;
  width: 65%;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  color: black;
  background: #f6f6f6;
  margin: 4% auto;
  bottom: ${SIZE.MENU}px;
  right: 0;
  left: 0;
  box-shadow: ${THEME.BOX_SHADOW};
  opacity: ${(props) => (props.showUndoBtn ? 1 : 0)};
  visibility: ${(props) => (props.showUndoBtn ? 'visible' : 'hidden')};
  transition: all 0.5s ease-in-out;

  > span {
    background: ${THEME.GRADIENT_TEXT};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export { Container, ImageIcon, UndoScrollBtn };
