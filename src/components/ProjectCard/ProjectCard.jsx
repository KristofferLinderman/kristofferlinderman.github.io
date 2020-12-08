import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Image, InfoContainer,
} from './ProjectCard.style';
import { ProjectTag, ProjectTitle } from '../../commonComponents/common.style';

const ProjectCard = ({ projectData, handleOnClick }) => (
  <Card onClick={() => handleOnClick(projectData)}>
    <Image src={projectData.img} />
    <InfoContainer>
      <ProjectTitle>
        {projectData.name}
      </ProjectTitle>
      <ProjectTag>
        {projectData.tags}
      </ProjectTag>
    </InfoContainer>
  </Card>
);
ProjectCard.propTypes = {
  projectData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    github: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    url: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    show: PropTypes.bool.isRequired,
  }).isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default ProjectCard;
