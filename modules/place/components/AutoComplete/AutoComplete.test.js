import React from "react";
import { mount } from "enzyme";
import MenuItem from "@material-ui/core/MenuItem";

import  AutoComplete  from "./AutoComplete";

describe("Auto complete" , () => {
  let wrapper;
  const translations = {
    "autoCompletePlaceHolder":"Where do you want to go?"
  };
  const fetchSuggestions = jest.fn();
  const performSearch = jest.fn();
  const cityid = "123";
  let suggestions = [
    {
      "label":"Art",
      "term":"art",
      "type":"category"
    },
    {
      "label":"Museum",
      "term":"museum",
      "type":"category"
    },
    {
      "label":"History",
      "term":"history",
      "type":"category"
    }
  ];

  beforeEach(() => {
    wrapper = mount(<AutoComplete 
      translation = {(key) => translations[key]}
      fetchSuggestions = {fetchSuggestions}
      performSearch = {performSearch}
      cityid = {cityid}
      suggestions={suggestions}/>);
  });

  it("Should render" , () => {
    expect(wrapper.length).toBe(1);
  });

  it("change in input type should trigger search" , () => {
    const inputField = wrapper.find("#autoCompleteInput").find("input");
    inputField.simulate("keypress",{target:{value:"sfsf"} , type:"click" });
    expect(performSearch.mock.calls.length).toBe(1);
  });

  it("search click should also trigger search" , () => {
    const searchButton = wrapper.find("button");
    searchButton.simulate("click");
    expect(performSearch.mock.calls.length).toBeGreaterThanOrEqual(1);
  });

  it("suggestions are rendered correctly" , () => {
    const inputField = wrapper.find("#autoCompleteInput").find("input");
    inputField.simulate("focus");
    const menuItems = wrapper.find(MenuItem);
    expect(menuItems.length).toBe(3);
  });

});