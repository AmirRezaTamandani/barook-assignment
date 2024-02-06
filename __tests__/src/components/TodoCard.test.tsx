import React from "react";
import { render } from "@testing-library/react";
import TodoCard from "@/components/TodoCard";

describe("TodoCard", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<TodoCard />);
    expect(getByText(/some text from TodoList/i)).toBeInTheDocument();
  });
});
