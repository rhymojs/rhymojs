import { toCapitalizeCase } from "../lib";

describe("toCapitalizeCase", () => {
  it("returns a string", () => {
    const newString = toCapitalizeCase("hello rhymo");

    expect(typeof newString).toBe("string");
  });

  it("properly converts string to capitalize case", () => {
    expect(toCapitalizeCase("hello rhymo")).toBe("Hello Rhymo");
  });
});
