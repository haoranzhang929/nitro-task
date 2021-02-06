import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders correct header", () => {
  render(<App />);
  const header = screen.getByText("Nitro Front End Task");
  expect(header).toBeInTheDocument();
});
