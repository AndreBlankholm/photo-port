import React from "react";

import { render, cleanup } from "@testing-library/react"; // the cleanup function is used to remove componets from the dom and to prevent memory leaking
import "@testing-library/jest-dom/extend-expect";

// next we will import the component that we will test {About}
import Nav from "..";

afterEach(cleanup); // this will make sure we dont have to worry about any leftover memory

//declaire the component we are testing
describe("About component", () => {
  // this is baseline to verify that the component is rendering
  // First Test  //aka component test
  it("renders", () => {
    // it function. In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.
    render(<Nav />);
  });

  // Second Test// aka snap shot test or "test case"
  it("matches snapshot DOM node structure", () => {
    // render About
    const { asFragment } = render(<Nav />); // asFragment  returns a snapshot of the About component
    expect(asFragment()).toMatchSnapshot(); // we'll use the toMatchSnapshot matcher to assert that snapshots will match:
  });
});

//--------------------------------

// this is to check for the emoji using its Label as an Id (labelText) example   <span role="img" aria-label="camera"> 📸</span> Oh Snap
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

//test to see if the links are visible.  verify that the text content is being inserted into the <a> tags (i.e., that the links are visible to users)

describe("links are visible", () => {
  // I added (data-testid="link and about" to the nav return)
  // Arrange // (getByTestId) To make sure that the correct elements are tested
  it("inserts text into the links", () => {
    const { getByTestId } = render(<Nav />);

    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
