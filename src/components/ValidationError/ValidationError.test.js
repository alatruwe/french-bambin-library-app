import React from "react";
import ReactDOM from "react-dom";
import ValidationError from "./ValidationError";
import renderer from "react-test-renderer";

describe(`ValidationError component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ValidationError />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<ValidationError />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
