import React from "react";

import { render, cleanup } from "@testing-library/react";

import Test from "./Test";

describe("useToggle", () => {
  afterAll(() => cleanup());

  it("properly sets the initial value", () => {
    render(
      <Test
        action={([toggle]) => {
          expect(toggle).toBeFalsy();
        }}
      />
    );
  });

  it("reverses the current value", () => {
    const { queryByText } = render(
      <Test
        action={([, reverseToggle]) => {
          reverseToggle();
        }}
      />
    );

    expect(queryByText("true")).toBeTruthy();
  });
});
