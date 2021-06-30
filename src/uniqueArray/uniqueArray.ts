/**
 * Deletes the duplicate keys of a given array.
 * @version v0.1.2
 * @see https://rhymojs.com/docs/uniqueArray/
 */
const uniqueArray = (arr: unknown[]): unknown[] => {
  return Array.from(new Set(arr));
};

export default uniqueArray;
