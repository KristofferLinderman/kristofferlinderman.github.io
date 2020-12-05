import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './ProjectView.style';

const ProjectView = ({ project, handleOnClick }) => {
  const i = project?.name;

  return (
    <Container onClick={handleOnClick}>
      {`${i} Project View`}
    </Container>
  );
};

ProjectView.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
  }),
  handleOnClick: PropTypes.func.isRequired,
};
ProjectView.defaultProps = {
  project: null,
};

export default ProjectView;
