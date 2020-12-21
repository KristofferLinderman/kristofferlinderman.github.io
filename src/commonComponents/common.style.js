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

export {
  Text, ProjectTitle, ProjectTag,
};
