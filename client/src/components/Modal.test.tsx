import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

test("Save button should be disabled when both inputs are empty", () => {
  render(
    <Modal
      editing={true}
      selectedPost={{ id: 1, author: "user", time: "123", location: "tes", text: "content" }}
      authorFieldText={""}
      locationFieldText={""}
      handleTextFeildChange={() => undefined}
      handleUpdate={() => undefined}
      setEditing={() => undefined}
    />
  );

  const editButton = screen.getByText("Save").closest("button");
  expect(editButton).toBeDisabled();
});

test("renders correct placeholder text", () => {
  render(
    <Modal
      editing={true}
      selectedPost={{ id: 1, author: "user", time: "123", location: "tes", text: "content" }}
      authorFieldText={"test"}
      locationFieldText={"test"}
      handleTextFeildChange={() => undefined}
      handleUpdate={() => undefined}
      setEditing={() => undefined}
    />
  );

  const authePlaceHolder = screen.getByPlaceholderText("user");
  const locationPlaceHolder = screen.getByPlaceholderText("tes");
  expect(authePlaceHolder).toBeInTheDocument();
  expect(locationPlaceHolder).toBeInTheDocument();
});

test("renders message when no selectedPost", () => {
  render(
    <Modal
      editing={true}
      selectedPost={undefined}
      authorFieldText={"test"}
      locationFieldText={"test"}
      handleTextFeildChange={() => undefined}
      handleUpdate={() => undefined}
      setEditing={() => undefined}
    />
  );
  const message = screen.getByText("Could not find post");
  expect(message).toBeInTheDocument();
});
