import React from "react";
import { mount } from "enzyme";
import CityResultGrid from "./CityResultGrid";
import CityThumbnailView from "../CityThumbnailView";

describe("city result grid" , () => {
  let wrapper;
  it("should render fine without city array" , () =>{
    wrapper = mount(<CityResultGrid />);
    expect(wrapper.length).toBe(1);
  });

  it("Should render city thumbnails as per city array" , () => {
    const cities = [
      {
        name:"Test ciy1",
        photoUrl:"/phottoUrl1"
      },
      {
        name:"Test ciy2",
        photoUrl:"/phottoUrl2"
      },
    ];
    wrapper = mount(<CityResultGrid cities={cities}/>);
    expect(wrapper.length).toBe(1);
    const thumbnails = wrapper.find(CityThumbnailView);
    expect(thumbnails.length).toBe(2);
  });
});