import React from "react";

import { render, cleanup } from "@testing-library/react";

import Test from "./Test";

window.resizeTo = jest.fn();

describe("useWindowSize", () => {
  it("properly sets initial value", () => {
    render(
      <Test
        action={({ width, height }) => {
          const { innerWidth, innerHeight } = window;

          expect([innerWidth, innerHeight]).toEqual([width, height]);
        }}
      />
    );
  });

  it("properly updates value", () => {
    render(
      <Test
        action={({ width, height }) => {
          window.resizeTo(500, 500);

          const { innerWidth, innerHeight } = window;

          expect([innerWidth, innerHeight]).toEqual([width, height]);
        }}
      />
    );
  });
});
