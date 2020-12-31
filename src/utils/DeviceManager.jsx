// import { FirefoxIcon } from '../assets/icons/firefox-icon.svg';
import ChromeIcon from '../assets/icons/chrome-icon.svg';
// import { OperaIcon } from '../assets/icons/opera-icon.svg';
import SafariIcon from '../assets/icons/safari-icon.svg';
// import EdgeIcon from '../assets/icons/edge-icon.svg';

/**
 * Checks if the current device is one of the provided ones.
 * The check is based on window.innerWidth
 *
 * @param {number[]} devices An array of the devices to check for
 * @returns {boolean} true if the provided devices are equal or smaller than window
 */
const isDevice = (devices) => {
  const windowWidth = window.innerWidth;
  for (let i = 0; i < devices.length; i += 1) {
    if (windowWidth > devices[i]) {
      return true;
    }
  }

  return false;
};

/**
 * Returns the icon corresponding to the current browser being used.
 * Currently only Safari and Chrome, defaults to Chrome for others
 */
const getBrowserIcon = () => {
  const { userAgent } = navigator;
  if (userAgent.includes('Chrome')) {
    return ChromeIcon;
  }

  if (userAgent.includes('Safari')) {
    return SafariIcon;
  }

  return ChromeIcon;
};

export { getBrowserIcon };
export default isDevice;
