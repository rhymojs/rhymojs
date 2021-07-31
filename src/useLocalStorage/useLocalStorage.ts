import { useState, useEffect } from "react";

type LocalStorageItem = [
  string | null, // value
  React.Dispatch<React.SetStateAction<string>> // setValue
];

/**
 * Sets a localStorage item with a stateful value.
 * @see https://rhymojs.com/docs/useLocalStorage/
 */
const useLocalStorage = (name: string): LocalStorageItem => {
  const [value, setValue] = useState(
    localStorage.getItem(name) ? (localStorage.getItem(name) as string) : ""
  );

  // set initial value if the item on the local storage is not defined yet
  if (value === "") localStorage.setItem(name, "");

  // set the item's value to the new value if state changes
  useEffect(() => localStorage.setItem(name, value), [value]);

  return [value, setValue];
};

export default useLocalStorage;
