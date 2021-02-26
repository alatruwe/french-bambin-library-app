import React from "react";
import ReactDOM from "react-dom";
import PicturePreview from "./PicturePreview";
import renderer from "react-test-renderer";

describe(`PicturePreview component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PicturePreview />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<PicturePreview />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
