import styled from 'styled-components';
import { SIZE, THEME } from '../../commonComponents/constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ScrollContainer = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  &::before{
    content: '';
    min-width: ${SIZE.LARGE};
    height: 10vh;
  } 
  &::after{
    content: '';
    min-width: ${SIZE.LARGE};
    height: 10vh;
  } 

  ::-webkit-scrollbar {
    width: 100px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: white; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${THEME.GRADIENT}; 
    border-radius: 20px;
    margin: 1rem;
    padding: 1rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

export { Container, ScrollContainer };
