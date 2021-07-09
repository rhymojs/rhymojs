import { makeRandomString } from "../lib";

describe("makeRandomString", () => {
  it("generates a string", () => {
    const newString = makeRandomString(32);

    expect(typeof newString).toBe("string");
  });

  it("properly sets length", () => {
    const newString = makeRandomString(32);

    expect(newString.length).toBe(32);
  });

  it("properly generates random string", () => {
    const stringOne = makeRandomString(32);
    const stringTwo = makeRandomString(32);

    expect(stringTwo).not.toBe(stringOne);
  });
});
