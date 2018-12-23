import React from "react";
import { mount } from "enzyme";

import AppHeader from "./";

import Button from "../../../../components/CustomButtons";
import CustomDropdown from "../../../../components/CustomDropdown";
import GoogleAutoComplete from "../../../../components/GoogleAutoComplete";


describe("AppHeader without authentication" , () => {
  const translations = {
    "common:yourProfileText" : "Profile",
    "common:logoutText":"Log Out",
    "common:loginText":"Log In",
    "common:appName" : "TripMark"
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <AppHeader color="primary"
        t={key => translations[key]}
      />
    );  
    expect(wrapper).toBeDefined();      
  });
  it("It renders login button" , () => {
    const buttons  = wrapper.find(Button);
    expect(buttons.length).toBe(1);
    expect(buttons.text()).toContain("Log In");
  });
  it("It should not render any dropdown with profile" , () => {
    const dropdown = wrapper.find(CustomDropdown);
    expect(dropdown.length).toBe(0);
  });
});

describe("AppHeader when user is authenticated" , () => {
  let wrapper;
  beforeEach(() => {
    const translations = {
      "common:yourProfileText" : "Profile",
      "common:logoutText":"Log Out",
      "common:loginText":"Log In",
      "common:appName" : "TripMark"
    };
    wrapper = mount(
      <AppHeader color="primary"
        t={key => translations[key]}
        isAuthenticated={true}
        user= {{username:"Test User"}}
      />
    );  
    expect(wrapper).toBeDefined();      
  });
  it("Login button should not be visible",() => {
    const buttons  = wrapper.find(Button);
    expect(buttons.text()).not.toContain("Log in");
  });

  it("Dropdown should be visible with username",() => {
    const dropDown = wrapper.find(CustomDropdown);
    expect(dropDown.length).toBe(1);
    expect(dropDown.text()).toContain("Test User");
    expect(dropDown.text()).toContain("Log Out");
  });

  it("google auto complete box is not visible" ,() => {
    const googleAutoComplete = wrapper.find(GoogleAutoComplete);
    expect(googleAutoComplete.length).toBe(0);
  });
  
});

describe("Appheader with google auto complete" , () => {
  let wrapper;
  
  beforeEach(() => {
    const translations = {
      "common:yourProfileText" : "Profile",
      "common:logoutText":"Log Out",
      "common:loginText":"Log In",
      "common:appName" : "TripMark"
    };
    wrapper = mount(
      <AppHeader color="primary"
        t={key => translations[key]}
        isAuthenticated={true}
        user= {{username:"Test User"}}
        selectedCityName="Kolkata"
        googleAutoComplete
      />
    );
    expect(wrapper).toBeDefined();
  });
  it("It renders with google auto complete with cityname" ,() => {
    const googleAutoComplete = wrapper.find(GoogleAutoComplete);
    expect(googleAutoComplete.length).toBe(1);
  });
});