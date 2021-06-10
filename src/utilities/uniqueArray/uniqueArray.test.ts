import uniqueArray from "./uniqueArray";

describe("uniqueArray", () => {
  it("works properly", () => {
    const unique = uniqueArray(["hello", "hello", "world", "world"]);

    expect(unique).toEqual(["hello", "world"]);
  });
});
