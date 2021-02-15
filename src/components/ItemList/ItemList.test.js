import React from "react";
import ReactDOM from "react-dom";
import ItemList from "./ItemList";
import renderer from "react-test-renderer";

describe(`ItemLList component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ItemList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<ItemList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
