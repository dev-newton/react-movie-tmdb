import React from "react";
import { BrowserRouter } from "react-router-dom";
import TitleWLine from "../TitleWLine";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should render without crashing", () => {
  render(<TitleWLine />);
});
