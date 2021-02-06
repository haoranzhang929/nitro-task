import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonGroup from "./ButtonGroup";
import { GroupType } from "../common/enums";

test("should render three buttons", () => {
  render(
    <ButtonGroup selectedGroupType={GroupType.Author} setSelectedGroupType={() => undefined} />
  );

  const timeButton = screen.getByText("time").closest("button");
  expect(timeButton).toBeInTheDocument();
  const authorButton = screen.getByText("author").closest("button");
  expect(authorButton).toBeInTheDocument();
  const locationButton = screen.getByText("location").closest("button");
  expect(locationButton).toBeInTheDocument();
});

test("selected button should be disabled", () => {
  render(
    <ButtonGroup selectedGroupType={GroupType.Author} setSelectedGroupType={() => undefined} />
  );

  const authorButton = screen.getByText("author").closest("button");
  expect(authorButton).toBeDisabled();
});
