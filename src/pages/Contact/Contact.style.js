import styled from 'styled-components';
import { SIZE } from '../../commonComponents/constants';
// import { THEME } from '../../commonComponents/constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: ${SIZE.LARGE};
`;

const Link = styled.a`
  display: flex;
`;

const LinkImg = styled.img`
  width: ${SIZE.XLARGE};
`;

export {
  Container, LinkContainer, Link, LinkImg,
};
