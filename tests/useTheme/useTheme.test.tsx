import React from "react";
import { render, cleanup } from "@testing-library/react";
import Test from "./Test";

describe("useTheme", () => {
  afterAll(() => cleanup());

  it("properly sets initial value", () => {
    render(
      <Test
        action={([theme]) => expect(theme).toBe("light")}
        initialTheme="light"
      />
    );
  });

  it("properly reverses the current theme", () => {
    const { queryByText } = render(
      <Test
        action={([theme, reverseTheme]) => {
          reverseTheme();
        }}
        initialTheme="light"
      />
    );
    expect(queryByText("dark")).toBeTruthy();
  });

  it("properly sets initial value", () => {
    render(
      <Test
        action={([theme]) => expect(theme).toBe("dark")}
        initialTheme="dark"
      />
    );
  });

  it("properly reverses the current theme", () => {
    const { queryByText } = render(
      <Test
        action={([theme, reverseTheme]) => {
          reverseTheme();
        }}
        initialTheme="dark"
      />
    );
    expect(queryByText("light")).toBeTruthy();
  });
});
