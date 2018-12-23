import React from "react";
import { shallow } from "enzyme";

import { LandingPage } from "./LandingPage";
import { container } from "../../../../assets/jss/material-kit-react";

describe("Landing Page" , () => {
  let wrapper;

  beforeEach(() => {
    const dispatch = jest.fn();
    wrapper = shallow(<LandingPage isAuthenticated={false}
      path="/"
      dispatch={dispatch}
      t={(key) => key}
      classes={container}
      error = {false}
    />);
  });

  it("It should render ok" , () => {
    expect(wrapper.length).toEqual(1);
  });
  
});