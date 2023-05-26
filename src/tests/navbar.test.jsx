import { Navbar } from "../components";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import renderer from "react-test-renderer";

describe("Navbar", () => {
  it("renders navbar correctly", () => {
    const navbar = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      )
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });
  it("renders navbar components without crashing", () => {
    render(<Navbar />);
  });
  it("renders pagTitle correctly", () => {
    const pageTitle = "My Page Title";
    const { getByText } = render(<Navbar pageTitle={pageTitle} />);
    const titleElement = getByText(pageTitle);
    expect(titleElement).toBeInTheDocument();
  });
});
