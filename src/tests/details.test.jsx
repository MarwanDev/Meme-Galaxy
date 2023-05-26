import { Details } from "../pages";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import renderer from "react-test-renderer";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Details", () => {
  it("renders each category correctly", () => {
    const details = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Details />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(details).toMatchSnapshot();
  });
  it("renders Category component correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </BrowserRouter>
    );
  });
});
