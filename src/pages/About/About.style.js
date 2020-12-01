import styled from 'styled-components';

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
`;

export { Container, TextWrapper };
