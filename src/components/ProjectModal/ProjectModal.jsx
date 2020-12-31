import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import {
  Overlay,
  Modal,
  Container,
  TopContainer,
  TitleContainer,
  LinkContainer,
  BottomContainer,
} from './ProjectModal.style';
import ImageWithOverlay from '../../commonComponents/ImageWithOverlay/ImageWithOverlay';
import GithubIcon from '../../assets/icons/github.svg';
import {
  Link, LinkImg, ProjectTag, ProjectTitle,
} from '../../commonComponents/common.style';
import CloseBtn from '../CloseBtn/CloseBtn';
import isDevice, { getBrowserIcon } from '../../utils/DeviceManager';
import { DEVICE_SIZE } from '../../commonComponents/constants';

const overlayVariants = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariant = {
  initial: { top: '100%', transition: { type: 'spring' } },
  isOpen: { top: isDevice([DEVICE_SIZE.LAPTOP]) ? '50%' : 0 },
  exit: { top: '100%' },
};

const ProjectModal = ({ project, handleOnClick, isOpen }) => {
  const closeModal = () => {
    handleOnClick(null);
  };

  const onModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
      <Overlay
        key="projectOverlay"
        initial="initial"
        animate="isOpen"
        exit="exit"
        variants={overlayVariants}
        onClick={() => closeModal()}
      >
        <Modal
          key="projectModal"
          variants={modalVariant}
          onClick={(event) => onModalClick(event)}
        >
          <ImageWithOverlay
            image={project.img}
            fitToHeight
          >
            <Container>
              <TopContainer>
                <TitleContainer>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectTag>
                    {project.tags}
                  </ProjectTag>
                </TitleContainer>
                <LinkContainer>
                  <Link href={project.github}>
                    <LinkImg src={GithubIcon} alt="Github Link" />
                  </Link>
                  <Link href={project.url}>
                    <LinkImg src={getBrowserIcon()} alt="Site link" />
                  </Link>
                </LinkContainer>
              </TopContainer>
              <BottomContainer>
                <p>
                  {project.description}
                  {' '}
                  {project.description}
                  {' '}
                  {project.description}
                  {' '}
                  {project.description}
                </p>
              </BottomContainer>
            </Container>
          </ImageWithOverlay>
          <CloseBtn handleClick={closeModal} />
        </Modal>
      </Overlay>
      )}
    </AnimatePresence>
  );
};

ProjectModal.propTypes = {
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
  isOpen: PropTypes.bool.isRequired,
};
ProjectModal.defaultProps = {
  project: null,
};

export default ProjectModal;
