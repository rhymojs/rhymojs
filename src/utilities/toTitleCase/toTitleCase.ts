const toTitleCase = (str: string): string =>
  str
    .split(" ")
    .map(word => {
      const splitByCharacters = word.split("");

      splitByCharacters[0] = splitByCharacters[0].toUpperCase();

      return splitByCharacters.join("");
    })
    .join(" ");

export default toTitleCase;
