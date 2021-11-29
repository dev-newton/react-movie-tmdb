import React from "react";
import MovieDetails from "../MovieDetails";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  window.scrollTo = jest.fn();
});

it("should render without crashing", () => {
  render(
    <BrowserRouter>
      <MovieDetails />
    </BrowserRouter>
  );
});
