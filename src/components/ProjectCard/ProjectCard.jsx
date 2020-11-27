import React from 'react';
import {
  Card, Image, InfoContainer, Tags, Title,
} from './ProjectCard.style';
import TodoListImg from '../../assets/images/todo-list.png';
// import profilePageImg from '../../assets/images/profile-page.png';

const ProjectCard = () => (
  <Card>
    <Image src={TodoListImg} />
    <InfoContainer>
      <Title>
        Simple ToDo App
      </Title>
      <Tags>
        React.js, Redux, Localstorage
      </Tags>
    </InfoContainer>
  </Card>
);

export default ProjectCard;
