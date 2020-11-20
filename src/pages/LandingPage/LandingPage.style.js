import styled from 'styled-components';
import { FONT_SIZE, SIZE } from '../../commonComponents/constants';

const Title = styled.h1`
  font-size: ${FONT_SIZE.TITLE};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  padding: 0 ${SIZE.SMALL};
`;

const Signature = styled.img`
  width: 100%;
  height: auto;
`;

export { Title, Container, Signature };
