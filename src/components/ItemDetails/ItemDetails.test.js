import React from "react";
import ReactDOM from "react-dom";
import ItemDetails from "./ItemDetails";
import renderer from "react-test-renderer";

describe(`ItemDetails component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ItemDetails />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<ItemDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
