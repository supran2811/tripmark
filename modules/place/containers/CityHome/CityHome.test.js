import React from "react";
import { shallow } from "enzyme";
import { Map } from "immutable";

import { CityHome } from "./CityHome";
import cityHomeStyle from "./cityHomeStyle";

describe("CityHome" , () => {
  let wrapper , instance;
  const logoutRequest = jest.fn();
  const deleteBookmarkAction = jest.fn();
  const translation = {
    "addYourFavorite":"Add Favourites",
    "markAsFavourtie":"Mark",
    "unmarkAsFavourite":"Unmark",
    "viewPhotos":"View Photos",
    "autoCompletePlaceHolder":"Where do you want to go?",
    "markedPlaces" : "Places Marked",
    "searchResultText":"Search results matching",
    "open_text":"OPEN",
    "close_text":"CLOSED",
    "permenantly_closed" : "PERMENANTLY CLOSED",
    "user_reviews" :"User Reviews",
    "get_direction":"Get Directions",
    "contact":"Contact",
    "opening_hours":"Opening Hours",
    "close":"Close"
  };
  const theme = {
    transitions: {
      duration :{
        enteringScreen:122,
        leavingScreen:124
      }
    }
  };
  const city = Map({
    "place_id" : "13232343242",
    "name":"Test City1",
    "photos" :Map([{
      "photo_reference":"/photo1"
    }]),
    "geometry" : Map({
      "location": Map({ lat : "" , lng:""})
    })
  });
  beforeEach(() => {
    wrapper = shallow(
      <CityHome logoutRequest = {logoutRequest}
        deleteBookmarkAction={deleteBookmarkAction}
        t = {key => translation[key]}
        theme={theme}
        city={city}
        classes={cityHomeStyle}/>);
    instance = wrapper.instance();      
  });
  
  it("render ok" , () => {
    expect(wrapper.length).toBe(1);
  });

  it("show and hide photo view" , () => {
    instance.viewPhoto();
    expect(wrapper.state().showPhotoViewer).toBeTruthy();
    instance.closePhotoViewer();
    expect(wrapper.state().showPhotoViewer).toBeFalsy();
  });

  it("remove bookmark is called" , () => {
    instance.removeBookmark("123");
    expect(deleteBookmarkAction.mock.calls.length).toBe(1);
  });

  it("log out is called" , () => {
    instance.doLogOut();
    expect(logoutRequest.mock.calls.length).toBe(1);
  });
    
});