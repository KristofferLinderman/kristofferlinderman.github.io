import landingPageImg from '../assets/images/landing-page.jpg';
import ProfilePageImg from '../assets/images/profile-page.png';
import todoListImg from '../assets/images/todo-list.png';

/**
 * @typedef  {name: string,
 * description: string,
 * tags: string,
 * img: string,
 * github: string,
 * url: string | null,
 * show: bool}
 * ProjectDataType
 */

/**
  * An array of data for each project to be displayed
  *
  * ProjectDataType[]
  */
const ProjectData = [
  {
    id: 1,
    name: 'ToDo List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    tags: 'React.js, Redux, localStorage',
    img: landingPageImg,
    github: 'string',
    url: 'string',
    show: true,
  },
  {
    id: 2,
    name: 'Profile Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: 'React.js, Redux, localStorage',
    img: ProfilePageImg,
    github: 'string',
    url: 'string',
    show: true,
  },
  {
    id: 3,
    name: 'Landing Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.',
    tags: 'React.js, Redux, localStorage',
    img: todoListImg,
    github: 'string',
    url: 'string',
    show: false,
  },
];

export default ProjectData;
