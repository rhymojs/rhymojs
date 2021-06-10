import toTitleCase from "./toTitleCase";

describe("toTitleCase", () => {
  it("works properly", () => {
    expect(toTitleCase("hello world")).toEqual("Hello World");
  });
});
