import React from "react";
import ReactDOM from "react-dom";
import ItemHistory from "./ItemHistory";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import renderer from "react-test-renderer";

describe(`ItemHistory component`, () => {
  it("renders the component by default", () => {
    const wrapper = shallow(<ItemHistory />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
