import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, Image, InfoContainer, Tags, Title,
} from './ProjectCard.style';

const ProjectCard = ({ projectData }) => {
  const [isDetailView, setIsDetailView] = useState(false);

  const handleClick = () => {
    setIsDetailView(!isDetailView);
  };

  return (
    <Card onClick={() => handleClick()} isDetailView={isDetailView}>
      <Image src={projectData.img} />
      <InfoContainer>
        <Title>
          {projectData.name}
        </Title>
        <Tags>
          {projectData.tags}
        </Tags>
      </InfoContainer>
    </Card>
  );
};

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
};

export default ProjectCard;
