import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(`NavBar component`, () => {
  it("renders the component by default", () => {
    const wrapper = shallow(<NavBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
