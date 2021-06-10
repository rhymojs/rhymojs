const uniqueArray = (arr: unknown[]): unknown[] => {
  return Array.from(new Set(arr));
};

export default uniqueArray;
