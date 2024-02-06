import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "@/components/Todo";
import "@testing-library/jest-dom";
describe("Todo Component", () => {
  it("renders without crashing", () => {
    render(<Todo />);
    expect(screen.getByText("Add Todo")).toBeInTheDocument();
  });
});
