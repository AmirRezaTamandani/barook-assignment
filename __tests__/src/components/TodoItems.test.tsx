// TodoItem.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { useTodoStore } from "@/store/store";
import TodoItem from "@/components/TodoItems";
import userEvent from "@testing-library/user-event";

jest.mock("@/store/store", () => ({
  useTodoStore: jest.fn().mockReturnValue({
    updateTodo: jest.fn(),
    removeTodo: jest.fn(),
  }),
}));

describe("TodoItem Component", () => {
  const mockTodo = { id: "1", text: "Test todo item" };

  it("renders the todo item and allows editing", async () => {
    render(<TodoItem id={mockTodo.id} text={mockTodo.text} />);
    const editButton = screen.getByRole("button", { name: /edit/i });
    userEvent.click(editButton);
    const input = await screen.findByRole("textbox");
    userEvent.clear(input);
    userEvent.type(input, "Updated todo item");
    userEvent.type(input, "{enter}");
    expect(useTodoStore().updateTodo).toHaveBeenCalledWith(
      mockTodo.id,
      "Updated todo item"
    );
  });

  it("allows deleting the todo item", () => {
    render(<TodoItem id={mockTodo.id} text={mockTodo.text} />);
    const deleteButton = screen.getByTestId(`DeleteIcon-${mockTodo.id}`);
    userEvent.click(deleteButton);
    expect(useTodoStore().removeTodo).toHaveBeenCalledWith(mockTodo.id);
  });
});
