import styled from 'styled-components';
import { FONT_SIZE } from './constants';

const Text = styled.p`
  font-size: ${FONT_SIZE.TEXT};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

export {
  Text, Container, Image,
};
