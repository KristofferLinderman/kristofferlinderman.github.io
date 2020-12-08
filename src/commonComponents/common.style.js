import styled from 'styled-components';
import { FONT_SIZE } from './constants';

const Text = styled.p`
  font-size: ${FONT_SIZE.TEXT};
`;

const ProjectTitle = styled.h2`
  font-size: ${FONT_SIZE.PROJECT_TITLE};
  color: #8813B2;
`;

const ProjectTag = styled(Text)`
  color: #8813B2;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export {
  Text, Container, ProjectTitle, ProjectTag,
};
