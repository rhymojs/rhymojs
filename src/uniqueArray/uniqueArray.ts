/**
 * Deletes the duplicate keys of a given array.
 * @see https://rhymojs.com/docs/uniqueArray/
 */
const uniqueArray = (arr: unknown[]): unknown[] => {
  return Array.from(new Set(arr));
};

export default uniqueArray;
