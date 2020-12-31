import styled from 'styled-components';
import { SIZE } from '../../commonComponents/constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: ${SIZE.LARGE};
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: ${SIZE.LARGE};
`;

export {
  Container, LinkContainer,
};
