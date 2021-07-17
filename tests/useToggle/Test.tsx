import React, { useEffect } from "react";

import { useToggle } from "../../lib";

type InitialToggleValue = [boolean, () => void];

interface Props {
  action?: (state: InitialToggleValue) => void;
}
const Test: React.FC<Props> = ({ action }) => {
  const [toggle, reverseToggle] = useToggle(false);

  useEffect(() => action && action([toggle, reverseToggle]), []);

  return <h1>{toggle ? "true" : "false"}</h1>;
};

export default Test;
