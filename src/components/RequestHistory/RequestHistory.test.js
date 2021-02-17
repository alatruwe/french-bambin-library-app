import React from "react";
import ReactDOM from "react-dom";
import RequestHistory from "./RequestHistory";
import renderer from "react-test-renderer";

describe(`RequestHistory component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RequestHistory />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<RequestHistory />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
