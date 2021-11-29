import React from "react";
import Navbar from "../Navbar";
import { render } from "@testing-library/react";

it("should render without crashing", () => {
  render(
    <>
      <Navbar />
    </>
  );
});
