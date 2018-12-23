import React from "react";
import { shallow } from "enzyme";

import  { LoginPage } from "./LoginPage";
import loginPageStyle from "./loginPageStyle";

describe("LoginPage container" , () => {
  let wrapper;
  let dispatch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<LoginPage dispatch={dispatch}
      classes={loginPageStyle}
      t = {(key) => key}
    />);
  });
  it("renders correctly" , () => {
    expect(wrapper.length).toBe(1);
  });
});
