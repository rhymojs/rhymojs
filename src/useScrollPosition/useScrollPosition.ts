import { useState, useEffect } from "react";

interface ScrollPosition {
  y: number;
  x: number;
}

/**
 * Returns the scroll position and updates it on scroll.

 * @see https://rhymojs.com/docs/useScrollPosition/
 */
const useScrollPosition = (): ScrollPosition => {
  const { scrollY: y, scrollX: x } = window;
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    y,
    x
  });

  useEffect(() => {
    window.onscroll = () => {
      const { scrollY: y, scrollX: x } = window;

      setScrollPosition({ x, y });
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
