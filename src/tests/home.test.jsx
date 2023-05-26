import { Home } from "../pages";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import renderer from "react-test-renderer";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  it("renders each category correctly", () => {
    const home = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(home).toMatchSnapshot();
  });
  it("renders Category component correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
  });
});
