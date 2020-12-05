import React, { forwardRef, useState } from 'react';
import { Container } from './Projects.style';
import ProjectCard from '../../components/ProjectCard';
import ProjectContent from '../../content/ProjectContent';
// import ProjectView from '../ProjectView/ProjectView';

const Projects = forwardRef((_, ref) => {
  const filteredProjects = ProjectContent.filter((project) => project.show);
  const [currentProject, setCurrentProject] = useState(null);

  const handleClick = (projectData) => {
    setCurrentProject(currentProject ? null : projectData);
  };

  return (
    <>
      <Container ref={ref}>
        {filteredProjects.map((project) => (
          <ProjectCard
            projectData={project}
            key={project.id}
            handleOnClick={handleClick}
          />
        ))}
      </Container>
      {/* {currentProject && (
      <ProjectView
        project={currentProject}
        handleOnClick={handleClick}
      />
      )} */}
    </>
  );
});

export default Projects;
