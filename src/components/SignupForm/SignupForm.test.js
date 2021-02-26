import React from "react";
import toJson from "enzyme-to-json";
import SignupForm from "./SignupForm";
import { shallow } from "enzyme";

describe(`SignupForm component`, () => {
  it("renders the component by default", () => {
    const wrapper = shallow(<SignupForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
