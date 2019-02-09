import React from "react";
import { mount } from "enzyme";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

import PhotoView from "./PhotoView";


describe("PhotoView" , () => {
  const photos = [
    {
      photo_reference: "/photo1"
    },
    {
      photo_reference: "/photo2"
    }
  ];
  let onCloseClicked = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PhotoView 
      photos={photos}
      onCloseClicked={onCloseClicked}/>);
  });

  it("render ok" , () => {
    expect(wrapper.length).toBe(1);
  });

  it("renders photos based on index" , () => {
    const image = wrapper.find("img");
    expect(image.html()).toContain("/photo1");
    wrapper.childAt(0).setState({currentIndex:1});
    wrapper.update();
    expect(image.html()).toContain("/photo2");
  });

  it("if currentIndex is 0 then prev should be hidden" ,() => {
    const prevButton = wrapper.find(KeyboardArrowLeft);
    expect(prevButton.length).toBe(0);
  });
  it("if currentIndex is in the end then next should be hidden" ,() => {
    wrapper.childAt(0).setState({currentIndex:1});
    const nextButton = wrapper.find(KeyboardArrowRight);
    expect(nextButton.length).toBe(0);
  });
  
  it("next and prev button should change index" , () => {
    const nextButton = wrapper.find("#nextButtonID").find("button");
    nextButton.simulate("click");
    expect(wrapper.childAt(0).state().currentIndex).toBe(1);
    const prevButton = wrapper.find("#prevButtonID").find("button");
    prevButton.simulate("click");
    expect(wrapper.childAt(0).state().currentIndex).toBe(0);
  });

});