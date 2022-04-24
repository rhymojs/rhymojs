import React, { useState, useEffect } from "react";

type ClipboardInfo = [string, React.Dispatch<React.SetStateAction<string>>];

/**
 * Makes interacting with the Clipboard API a lot easier.
 */
const useClipboard = (initialValue: string): ClipboardInfo => {
  const [clipboard, setClipboard] = useState(initialValue);

  useEffect(() => {
    navigator.clipboard.writeText(clipboard);
  }, [clipboard]);

  return [clipboard, setClipboard];
};

export default useClipboard;
