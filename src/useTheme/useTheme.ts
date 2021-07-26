/* eslint-disable indent */
import { useEffect } from "react";

import { useLocalStorage, useToggle } from "..";

type Theme = [string | null, () => void];

/**
 * returns the current theme and a function to reverse it.
 * Also preserves the current theme in the local storage.
 * @version v1.4.2
 * @see https://rhymojs.com/docs/useTheme/
 */

const useTheme = (initialTheme: "light" | "dark"): Theme => {
  // keep state of theme in the local storage
  const [theme, setTheme] = useLocalStorage("theme");

  // the 'true' is light, and dark is the reverse
  const [toggle, reverseToggle] = useToggle(
    initialTheme === "light" ? true : false
  );

  if (theme === "") setTheme(initialTheme);

  useEffect(() => {
    toggle ? setTheme("light") : setTheme("dark");
  }, [toggle]);

  useEffect(() => {
    const html = document.querySelector("html") as HTMLHtmlElement;

    html.classList.remove(theme === "light" ? "dark" : "light");
    theme !== "" && html.classList.add(theme as string);
  }, [theme]);

  return [theme, reverseToggle];
};

export default useTheme;
