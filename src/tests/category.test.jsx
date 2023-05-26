import { Category } from "../components";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import renderer from "react-test-renderer";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Category", () => {
  it("renders each category correctly", () => {
    const category = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Category />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(category).toMatchSnapshot();
  });
  it("renders Category component correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Category />
        </Provider>
      </BrowserRouter>
    );
  });
});
