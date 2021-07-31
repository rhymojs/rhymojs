import { useState, useEffect, Dispatch, SetStateAction } from "react";

/**
 * Prevents users from scrolling if the state is true.
 * @see https://rhymojs.com/docs/useLockScroll/
 */
const useLockScroll = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [lockScroll, setLockScroll] = useState(false);
  const html = document.querySelector("html") as HTMLHtmlElement;

  useEffect(() => {
    html.style.overflow = lockScroll ? "hidden" : "visible";
  }, [lockScroll]);

  return [lockScroll, setLockScroll];
};

export default useLockScroll;
