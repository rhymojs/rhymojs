import { useState } from "react";

type InitialToggleValue = [
  boolean, // toggleValue
  () => void // function which changes the current toggle value
];

/**
 * returns a boolean value and a function to reverse the current boolean value
 * @see https://rhymojs.com/docs/useToggle/
 */

const useToggle = (value: boolean): InitialToggleValue => {
  const [toggle, setToggle] = useState(value);

  // reverses the current toggle value
  const reverseState = () => setToggle(!toggle);

  return [toggle, () => reverseState()];
};

export default useToggle;
