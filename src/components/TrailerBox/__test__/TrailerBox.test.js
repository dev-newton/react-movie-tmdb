import React from "react";
import TrailerBox from "../TrailerBox";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should render without crashing", () => {
  render(<TrailerBox />);
});
