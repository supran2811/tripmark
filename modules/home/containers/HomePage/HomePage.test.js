import React from "react";
import { shallow } from "enzyme";

import { HomePage } from "./HomePage";
import homePageStyle from "./homePageStyle";

describe("HomePage container" , () => {
  let wrapper,instance;
  const logoutRequest=jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <HomePage 
        logoutRequest={logoutRequest}
        classes={homePageStyle}
        t={key=>key}
      />
    );
    instance = wrapper.instance();
  });

  it("renders correctly" , () => {
    expect(wrapper.length).toBe(1);
  });

  it("calls logout on calling doLogout method" , () => {
    instance.doLogOut();
    expect(logoutRequest.mock.calls.length).toBe(1);
  });
});

