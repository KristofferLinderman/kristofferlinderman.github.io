const FONT_SIZE = {
  TEXT: '1rem',
  TEXT_LARGE: '1.25rem',
  TITLE: '1.5rem',
  PROJECT_TITLE: '1.25rem',
  PROJECT_TITLE_LARGE: '2rem',
};

const SIZE = {
  SMALL: '1rem',
  MEDIUM: '1.5rem',
  LARGE: '2rem',
  XLARGE: '2.5rem',
  MENU: 50,
  LINE_HEIGHT: 1.5,
};

const THEME = {
  MENU_TEXT: '#f6f6f6',
  GRADIENT: 'linear-gradient(93.35deg, #6C44FF -10.59%, rgba(218, 5, 253, 0.58) 124.47%), #111111',
  GRADIENT_TEXT: 'linear-gradient(93.35deg, #4844FF -10.59%, rgba(218, 5, 253, 0.58) 124.47%)',
  BOX_SHADOW: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  TOP_BOX_SHADOW: '0px -4px 10px rgba(0, 0, 0, 0.25)',
  BORDER_RADIUS: '20px',
  BORDER_RADIUS_SMALL: '5px',
  PRIMARY_LIGHT: '#f6f6f6',
  HIGH_LEVEL: 1337,
  HIGHEST_LEVEL: 1338,
};

const DEVICE_SIZE = {
  MOBILE_S: 320,
  MOBILE_M: 375,
  MOBILE_L: 425,
  TABLET: 768,
  LAPTOP: 1024,
  LAPTOP_L: 1440,
  DESKTOP: 1920,
};

const DEVICE = {
  MOBILE_S: `(min-width: ${DEVICE_SIZE.MOBILE_S}px)`,
  MOBILE_M: `(min-width: ${DEVICE_SIZE.MOBILE_M}px)`,
  MOBILE_L: `(min-width: ${DEVICE_SIZE.MOBILE_L}px)`,
  TABLET: `(min-width: ${DEVICE_SIZE.TABLET}px)`,
  LAPTOP: `(min-width: ${DEVICE_SIZE.LAPTOP}px)`,
  LAPTOP_L: `(min-width: ${DEVICE_SIZE.LAPTOP_L}px)`,
  DESKTOP: `(min-width: ${DEVICE_SIZE.DESKTOP}px)`,
};

export {
  FONT_SIZE,
  SIZE,
  THEME,
  DEVICE,
  DEVICE_SIZE,
};
