/**
 * Deletes the duplicate keys of a given array.
 */
const uniqueArray = (arr: unknown[]): unknown[] => {
  return Array.from(new Set(arr));
};

export default uniqueArray;
