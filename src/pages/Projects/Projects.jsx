import React, { forwardRef, useState } from 'react';
import { Container, ScrollContainer } from './Projects.style';
import ProjectCard from '../../components/ProjectCard';
import ProjectContent from '../../content/ProjectContent';
import ProjectModal from '../../components/ProjectModal/ProjectModal';

const Projects = forwardRef((_, ref) => {
  const filteredProjects = ProjectContent.filter((project) => project.show);
  const [currentProject, setCurrentProject] = useState(null);

  const handleClick = (projectData) => {
    // Prevents body from scrolling
    document.body.style.overflow = projectData ? 'hidden' : 'auto';
    setCurrentProject(projectData);
  };

  return (
    <>
      <Container ref={ref}>
        <ScrollContainer>
          {filteredProjects.map((project) => (
            <ProjectCard
              projectData={project}
              key={project.id}
              handleOnClick={handleClick}
            />
          ))}
        </ScrollContainer>
      </Container>
      <ProjectModal
        project={currentProject}
        handleOnClick={handleClick}
        isOpen={!!currentProject}
      />
    </>
  );
});

export default Projects;
