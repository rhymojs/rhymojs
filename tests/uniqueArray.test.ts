import { uniqueArray } from "../lib";

describe("uniqueArray", () => {
  it("returns an array", () => {
    const newArray = uniqueArray(["hello", "hello", "rhymo"]);

    expect(newArray).toBeInstanceOf(Array);
  });

  it("properly converts an array to a unique array", () => {
    const newArray = uniqueArray(["hello", "hello", "rhymo"]);

    expect(newArray).toEqual(["hello", "rhymo"]);
  });
});
