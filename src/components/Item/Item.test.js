import React from "react";
import Item from "./Item";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

describe(`Item component`, () => {
  it("renders the component by default", () => {
    const wrapper = shallow(<Item />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
