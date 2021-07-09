import React, { useEffect } from "react";

import { useScrollPosition } from "../../lib";

interface ScrollPosition {
  y: number;
  x: number;
}

interface Props {
  action?: (state: ScrollPosition) => void;
}

const Test: React.FC<Props> = ({ action }) => {
  const { x, y } = useScrollPosition();

  useEffect(() => action && action({ x, y }), []);

  return (
    <>
      <h1>X: {x}</h1>
      <h1>Y: {y}</h1>
    </>
  );
};

export default Test;
