import styled from 'styled-components';
import { DEVICE, SIZE } from '../../commonComponents/constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TextWrapper = styled.div`
  display: flex;
  overflow: scroll;
  height: 100%;
  margin: auto;
  max-height: ${SIZE.LINE_HEIGHT * 8}rem;

  @media ${DEVICE.LAPTOP}{
    padding: ${SIZE.SMALL};
    line-height: ${SIZE.LARGE};
    max-height: fit-content;
  }
`;

export { Container, TextWrapper };
