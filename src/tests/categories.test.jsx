import { Categories } from "../components";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import renderer from "react-test-renderer";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Categories", () => {
  it("renders categories correctly", () => {
    const categories = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Categories />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(categories).toMatchSnapshot();
  });
  it("renders categories component correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Categories />
        </Provider>
      </BrowserRouter>
    );
  });
});
