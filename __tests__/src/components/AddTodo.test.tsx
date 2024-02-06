import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useTodoStore } from "@/store/store";
import AddTodoForm from "@/components/AddTodo";

jest.mock("@/store/store", () => ({
  useTodoStore: jest.fn().mockReturnValue({
    addTodo: jest.fn(),
  }),
}));

describe("AddTodoForm Component", () => {
  it("renders the form and allows submission", () => {
    render(<AddTodoForm />);
    const input = screen.getByPlaceholderText("hire amirreza");
    userEvent.type(input, "Test todo item");
    const button = screen.getByText("Add Todo");
    userEvent.click(button);
    expect(useTodoStore().addTodo).toHaveBeenCalledTimes(1);
  });
});
