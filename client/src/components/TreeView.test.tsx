import React from "react";
import { render, screen } from "@testing-library/react";
import TreeView from "./TreeView";

test("TreeView title should render", () => {
  render(
    <TreeView
      foramtedList={[
        {
          key: "testkey",
          data: [{ id: 1, author: "user", time: "123", location: "tes", text: "content" }]
        }
      ]}
      editing={false}
      handleEditing={() => undefined}
    />
  );

  const testLabel = screen.getByText("testkey");
  expect(testLabel).toBeInTheDocument();
});

test("TreeView item should render when key is clicked", () => {
  render(
    <TreeView
      foramtedList={[
        {
          key: "testkey",
          data: [{ id: 1, author: "user", time: "123", location: "tes", text: "content" }]
        }
      ]}
      editing={false}
      handleEditing={() => undefined}
    />
  );

  const testDiv = screen.getByText("testkey").closest("div");
  testDiv?.click();
  const content = screen.getByText("content");
  expect(content).toBeInTheDocument();
});

test("Edit button should be disabled during editing", () => {
  render(
    <TreeView
      foramtedList={[
        {
          key: "testkey",
          data: [{ id: 1, author: "user", time: "123", location: "tes", text: "content" }]
        }
      ]}
      editing={true}
      handleEditing={() => undefined}
    />
  );

  const testDiv = screen.getByText("testkey").closest("div");
  testDiv?.click();
  const editButton = screen.getByText("Edit").closest("button");
  expect(editButton).toBeDisabled();
});
