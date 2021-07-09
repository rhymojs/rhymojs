import React from "react";

import { render, cleanup } from "@testing-library/react";

import Test from "./Test";

localStorage.getItem = jest.fn();

describe("useLocalStorage", () => {
  afterAll(() => cleanup());

  it("properly sets initial value", () => {
    render(
      <Test
        action={([item]) => {
          const originalItem = localStorage.getItem("item");

          expect(originalItem).toBe(item);
        }}
      />
    );
  });

  it("properly changes value", () => {
    render(
      <Test
        action={([item, setItem]) => {
          setItem("rhymojs");

          const originalItem = localStorage.getItem("item");

          expect(originalItem).toBe(item);
        }}
      />
    );
  });

  it("properly clears value", () => {
    render(
      <Test
        action={([, setItem, clearValue]) => {
          setItem("rhymojs");
          clearValue();
          const originalItem = localStorage.getItem("item");

          expect(originalItem).toEqual("");
        }}
      />
    );
  });
});
