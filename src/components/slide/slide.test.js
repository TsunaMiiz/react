import React from "react";
import { shallow } from "enzyme";
import Slide from "./slide";

describe("Slide", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Slide />);
    expect(wrapper).toMatchSnapshot();
  });
});
