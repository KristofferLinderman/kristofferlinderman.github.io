import styled from 'styled-components';
import { DEVICE, FONT_SIZE, SIZE } from './constants';

const Text = styled.p`
  font-size: ${FONT_SIZE.TEXT};

  @media ${DEVICE.LAPTOP}{
    font-size: ${FONT_SIZE.TEXT_LARGE};
  }
`;

const ProjectTitle = styled.h2`
  font-size: ${FONT_SIZE.PROJECT_TITLE};
  color: #8813B2;

  @media ${DEVICE.LAPTOP}{
    font-size: ${FONT_SIZE.PROJECT_TITLE_LARGE};
  }
`;

const ProjectTag = styled(Text)`
  color: #8813B2;
`;

const Link = styled.a`
  display: flex;
`;

const LinkImg = styled.img`
  width: ${SIZE.XLARGE};
`;

export {
  Text, ProjectTitle, ProjectTag, Link, LinkImg,
};
