/**
 * Generates a random string.
 */
const makeRandomString = (length: number): string => {
  let result = "";
  const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

  for (let index = 0; index < length; ++index) {
    const random = Math.floor(Math.random() * alphabet.length);

    result += alphabet[random];
  }

  return result;
};

export default makeRandomString;
