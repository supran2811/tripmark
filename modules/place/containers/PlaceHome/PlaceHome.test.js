import React from "react";
import { shallow } from "enzyme";
import { Map } from "immutable";
import { PlaceHome } from "./PlaceHome";
import placeHomeStyle from "./placeHomeStyle";

describe("PlaceHome" , () => {
  let wrapper, instance;
  let logoutRequest = jest.fn();
  const deleteBookmarkAction = jest.fn();
  const addBookmark = jest.fn();

  const cityId = "city123";
  const id = "place123";
  const translations = {
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
  const place = {
    place_id:"place23",
    name:"place name",
    rating:"1.1",
    photos:[{
      "photo_reference":"/photo1"
    }],
    geometry:{location:{lat:"0.0",lng:"0.0"}}
  };

  beforeEach(() => {
    wrapper = shallow(<PlaceHome deleteBookmarkAction={deleteBookmarkAction}
      addBookmark={addBookmark}
      logoutRequest={logoutRequest}
      cityId={cityId}
      id={id}
      place={place}
      t={key => translations[key]}
      classes={placeHomeStyle({
        breakpoints:{
          down:(key) => false
        }
      })}
    />);
    instance = wrapper.instance();
  });
  
  it("renders ok" , () => {
    expect(wrapper.length).toBe(1);
  });

  it("add bookmark is called" , () => {
    instance.addRemoveBookmark();
    expect(addBookmark.mock.calls.length).toBe(1);
  });

});