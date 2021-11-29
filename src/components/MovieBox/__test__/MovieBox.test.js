import React from "react";
import MovieBox from "../MovieBox";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should render without crashing", () => {
  render(<MovieBox />);
});
