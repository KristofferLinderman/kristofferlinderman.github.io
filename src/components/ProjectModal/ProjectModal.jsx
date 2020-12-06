import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import {
  Overlay, Modal, TopContainer, TitleContainer, LinkContainer, Link, LinkImg,
} from './ProjectModal.style';
import ImageWithOverlay from '../../commonComponents/ImageWithOverlay/ImageWithOverlay';
import GithubIcon from '../../assets/icons/github.svg';

const overlayVariants = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariant = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  isOpen: { top: '50%' },
  exit: { top: '-50%' },
};

const ProjectModal = ({ project, handleOnClick, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
    <Overlay
      key="projectOverlay"
      initial="initial"
      animate="isOpen"
      exit="exit"
      variants={overlayVariants}
    >
      <Modal
        key="projectModal"
        variants={modalVariant}
        onClick={() => handleOnClick(null)}
      >
        <ImageWithOverlay image={project.img} fitToHeight>
          <TopContainer>
            <TitleContainer>
              <h1>{project.name}</h1>
              <p>{project.tags}</p>
            </TitleContainer>
            <LinkContainer>
              <Link href={project.github}>
                <LinkImg src={GithubIcon} alt="Email icon" />
              </Link>
              <Link href={project.url}>
                <LinkImg src={GithubIcon} alt="Email icon" />
              </Link>
            </LinkContainer>
          </TopContainer>
          <p>{project.description}</p>
        </ImageWithOverlay>
      </Modal>
    </Overlay>
    )}
  </AnimatePresence>
);

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
