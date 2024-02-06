import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "@/components/TodoList";

describe("TodoList", () => {
  it("renders without crashing", () => {
    render(<TodoList />);
    expect(screen.getByText("Add Todo")).toBeInTheDocument();
  });

  it("displays a list of todo items", () => {
    render(<TodoList />);
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });

});
