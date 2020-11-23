// Based on https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
import { useRef, useLayoutEffect } from 'react';

/**
 * Returns the window.scroll position for both X and Y axis
 */
function getScrollPosition() {
  return { x: window.scrollX, y: window.scrollY };
}

/**
 *
 * @param {function} effect The callback function
 * @param {React.DependencyList} deps Dependencies for the effect
 * @param {number} wait time period in ms to throttle our function.
 */
function useScrollPosition(effect, deps, wait) {
  const position = useRef(getScrollPosition());

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition();
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}

export default useScrollPosition;
