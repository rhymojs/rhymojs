import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Returns the window's current width and height.
 * @version v0.1.2
 * @see https://rhymojs.com/docs/useWindowSize/
 */
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    window.onresize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
  }, []);

  return { width: windowSize.width, height: windowSize.height };
};

export default useWindowSize;
