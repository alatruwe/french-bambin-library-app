import React from "react";
import ReactDOM from "react-dom";
import SendRequestForm from "./SendRequestForm";
import renderer from "react-test-renderer";

describe(`SendRequestForm component`, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SendRequestForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<SendRequestForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
