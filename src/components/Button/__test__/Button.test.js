import React from "react";
import Button from "../Button";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should render without crashing", () => {
  render(<Button />);
});
