import React from "react";
import Movies from "../Movies";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../store";

it("should render without crashing", () => {
  render(
    <Provider store={store}>
      <Movies />
    </Provider>
  );
});
