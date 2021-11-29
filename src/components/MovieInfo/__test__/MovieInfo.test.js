import React from "react";
import MovieInfo from "../MovieInfo";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should render without crashing", () => {
  render(<MovieInfo />);
});
