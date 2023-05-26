import { Header } from "../components";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import renderer from "react-test-renderer";
import store from "../redux/store";
import { Provider } from "react-redux";

describe("Header", () => {
  it("renders header correctly", () => {
    const header = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
  it("renders header correctly", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });
  it("displays the Loading text", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });
});
