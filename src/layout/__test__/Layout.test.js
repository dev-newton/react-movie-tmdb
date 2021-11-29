import React from "react";
import Layout from "../Layout";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

it("should render without crashing", () => {
  render(<Layout />);
});
