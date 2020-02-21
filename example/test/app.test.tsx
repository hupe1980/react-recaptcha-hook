import React from "react";
import { render } from "@testing-library/react";
import App from "../src/app";

test("renders badge", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
