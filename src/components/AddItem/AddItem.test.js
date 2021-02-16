import React from "react";
import ReactDOM from "react-dom";
import AddItem from "./AddItem";
import renderer from "react-test-renderer";

describe(`AddItem component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<AddItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
