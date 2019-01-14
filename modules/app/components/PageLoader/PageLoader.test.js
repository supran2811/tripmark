import React from "react";
import renderer from "react-test-renderer"; 
import { mount } from "enzyme";

import PageLoader from "./PageLoader";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

describe("PageLoader" , () => {

  let wrapper;  

  it("It should render correctly" , () => {
    wrapper = mount(<PageLoader />);
    expect(wrapper.length).toBe(1);
  });

  it("It should render based on types" , () => {
    wrapper = mount(<PageLoader type="circular"/>);
    expect(wrapper.find(CircularProgress).length).toBe(1);
    expect(wrapper.find(LinearProgress).length).toBe(0);
  });

  it("It should match the snapshot" , () => {
    const tree = renderer
      .create(<PageLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});