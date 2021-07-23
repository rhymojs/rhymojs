import React, { useEffect } from "react";
import { useTheme } from "../../lib";

type Theme = [string | null, () => void];

interface Props {
  action?: (state: Theme) => void;
  initialTheme: string;
}

const Test: React.FC<Props> = ({ action, initialTheme }) => {
  const [theme, reverseTheme] = useTheme(initialTheme);
  useEffect(() => action && action([theme, reverseTheme]), []);

  return <h1>{theme}</h1>;
};

export default Test;
