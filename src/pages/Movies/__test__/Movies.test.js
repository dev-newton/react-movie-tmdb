import React from "react";
import Movies from "../Movies";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should render without crashing", () => {
  render(<Movies />);
});
