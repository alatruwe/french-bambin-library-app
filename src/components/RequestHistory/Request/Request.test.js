import React from "react";
import ReactDOM from "react-dom";
import Request from "./Request";
import renderer from "react-test-renderer";

describe(`Request component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Request />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<Request />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
