import React, { useEffect } from "react";

import { useLocalStorage } from "../../lib";

type LocalStorageItem = [
  string | null,
  React.Dispatch<React.SetStateAction<string>>,
  () => void
];

interface Props {
  action?: (state: LocalStorageItem) => void;
}

const Test: React.FC<Props> = ({ action }) => {
  const [item, setItem, clearItem] = useLocalStorage("item");

  useEffect(() => action && action([item, setItem, clearItem]), []);

  return (
    <>
      <h1>Item: {item}</h1>
    </>
  );
};

export default Test;
