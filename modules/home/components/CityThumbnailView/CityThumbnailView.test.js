import React from "react";
import { mount } from "enzyme";
import CardMedia from "@material-ui/core/CardMedia";

import  CityThumbnailView  from "./CityThumbnailView";

describe("City thumbnail view" , () => {
  const city = {
    name : "Test city1",
    photoUrl: "/photourl1"
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CityThumbnailView city={city} />);
  });

  it("should render" , () => {
    expect(wrapper.length).toBe(1);
  });

  it("should show correct name and image" , () => {
    const nameField = wrapper.find("h4");
    expect(nameField.text()).toEqual("Test city1");
    const imageField = wrapper.find(CardMedia);
    expect(imageField.html()).toContain("/photourl1");
  });
});