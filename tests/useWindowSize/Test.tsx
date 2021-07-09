import React, { useEffect } from "react";

import { useWindowSize } from "../../lib";

interface WindowSize {
  width: number;
  height: number;
}

interface Props {
  action?: (state: WindowSize) => void;
}

const Test: React.FC<Props> = ({ action }) => {
  const { width, height } = useWindowSize();

  useEffect(() => action && action({ width, height }), []);

  return (
    <>
      <h1>Width: {width}</h1>
      <h1>Height: {height}</h1>
    </>
  );
};

export default Test;
