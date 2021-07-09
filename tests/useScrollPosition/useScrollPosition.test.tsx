import React from "react";

import { render, cleanup } from "@testing-library/react";

import Test from "./Test";

global.scrollTo = jest.fn();

describe("useScrollPosition", () => {
  afterAll(() => cleanup());

  it("properly sets initial value", () => {
    render(
      <Test
        action={() => {
          const { scrollX, scrollY } = window;

          expect([scrollX, scrollY]).toEqual([0, 0]);
        }}
      />
    );
  });

  it("properly updates value", () => {
    render(
      <Test
        action={({ x, y }) => {
          window.scrollTo({ top: 20, left: 20 });

          const { scrollX, scrollY } = window;

          expect([scrollX, scrollY]).toEqual([x, y]);
        }}
      />
    );
  });
});
