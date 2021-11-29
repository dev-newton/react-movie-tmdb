import React from "react";
import Spinner from "../Spinner";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should render without crashing", () => {
  render(<Spinner />);
});
