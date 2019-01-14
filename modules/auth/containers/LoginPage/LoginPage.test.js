import React from "react";
import { shallow } from "enzyme";

import  { LoginPage } from "./LoginPage";
import loginPageStyle from "./loginPageStyle";

describe("LoginPage container" , () => {
  let wrapper;
  const loginRequest = jest.fn();
  const googleSignUpRequest = jest.fn();
  const resetError = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<LoginPage loginRequest={loginRequest}
      googleSignUpRequest={googleSignUpRequest}
      resetError={resetError}
      classes={loginPageStyle}
      t = {(key) => key}
    />);
  });
  it("renders correctly" , () => {
    expect(wrapper.length).toBe(1);
  });
});
