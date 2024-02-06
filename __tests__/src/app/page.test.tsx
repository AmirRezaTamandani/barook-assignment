import React from "react";
import { render } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";
describe("Home Page", () => {
  it("renders without crashing", () => {
    const { container } = render(<Home />);

    expect(container.querySelector(".todo")).toBeInTheDocument();
  });
});
