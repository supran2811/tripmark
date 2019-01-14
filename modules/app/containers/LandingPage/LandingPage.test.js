import React from "react";
import { shallow } from "enzyme";

import { LandingPage } from "./LandingPage";
import { container } from "../../../../assets/jss/material-kit-react";

describe("Landing Page" , () => {
  let wrapper;

  beforeEach(() => {
    const signUpRequest = jest.fn();
    const googleSignUpRequest = jest.fn();
    const resetError = jest.fn();
    wrapper = shallow(<LandingPage isAuthenticated={false}
      path="/"
      signUpRequest={signUpRequest}
      googleSignUpRequest={googleSignUpRequest}
      resetError={resetError}
      t={(key) => key}
      classes={container}
      error = {false}
    />);
  });

  it("It should render ok" , () => {
    expect(wrapper.length).toEqual(1);
  });

  
});