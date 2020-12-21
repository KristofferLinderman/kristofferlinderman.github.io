/**
 * Checks if the current device is one of the provided ones.
 * The check is based on window.innerWidth
 *
 * @param {number[]} devices An array of the devices to check for
 * @returns {boolean} true if the provided devices are equal or smaller than window
 */
const isDevice = (devices) => {
  const windowWidth = window.innerWidth;
  console.log('WIndow: ', windowWidth);
  console.log('devices: ', devices);
  for (let i = 0; i < devices.length; i += 1) {
    if (windowWidth > devices[i]) {
      console.log('IS NOT');
      return true;
    }
  }

  return false;
};

export default isDevice;
