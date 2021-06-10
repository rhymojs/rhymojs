import toCapitalizeCase from "./toCapitalizeCase";

describe("toTitleCase", () => {
  it("works properly", () => {
    expect(toCapitalizeCase("hello world")).toEqual("Hello World");
  });
});
