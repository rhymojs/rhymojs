import { useState, useEffect } from "react";

type LocalStorageItem = [
  string | null, // value
  React.Dispatch<React.SetStateAction<string>>, // setValue
  () => void // clearValue
];

/**
 * Sets a localStorage item with a stateful value.
 * @version v1.0.0
 * @see https://rhymojs.com/docs/useLocalStorage/
 */
const useLocalStorage = (name: string): LocalStorageItem => {
  const [value, setValue] = useState("");

  // set initial value
  localStorage.setItem(name, "");

  // set the item's value to the new value if state changes
  useEffect(() => localStorage.setItem(name, value), [value]);

  return [
    value,
    setValue,
    () => setValue("") // clearValue
  ];
};

export default useLocalStorage;
