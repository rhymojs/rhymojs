/**
 * Converts strings to capitalize case.
 */
const toCapitalizeCase = (str: string): string =>
  str
    .split(" ")
    .map(word => {
      const splitByCharacters = word.split("");

      splitByCharacters[0] = splitByCharacters[0].toUpperCase();

      return splitByCharacters.join("");
    })
    .join(" ");

export default toCapitalizeCase;
