import React from "react";
import LoadMoreBtn from "../LoadMoreBtn";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should render without crashing", () => {
  render(<LoadMoreBtn />);
});
