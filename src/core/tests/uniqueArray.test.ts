import uniqueArray from "../uniqueArray";

describe("uniqueArray", () => {
  it("converts an array to a unique array", () => {
    const testArray = uniqueArray(["hello", "hello", "world", "world"]);

    expect(testArray).toEqual(["hello", "world"]);
  });
});
