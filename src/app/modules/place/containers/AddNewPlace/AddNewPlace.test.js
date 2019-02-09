import React from "react";
import { shallow } from "enzyme";
import { Map } from "immutable";
import { AddNewPlace } from "./AddNewPlace";
import addNewPlaceStyle from "./addNewPlaceStyle";

describe("AddNewPlace" , () => {
  const deleteBookmarkAction = jest.fn();
  const addBookmark = jest.fn();
  const textSearch = jest.fn();
  const clearSuggestion = jest.fn();
  const autoCompleteSearch = jest.fn();
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
  const city = Map({
    "place_id" : "13232343242",
    "name":"Test City1",
    "photos" :[{
      "photo_reference":"/photo1"
    }],
    "geometry" : Map({
      "location": Map({ lat : "" , lng:""})
    })
  });
  let wrapper,instance;

  beforeEach(() => {
    wrapper = shallow(<AddNewPlace 
      deleteBookmarkAction = {deleteBookmarkAction}
      addBookmark={addBookmark}
      textSearch={textSearch}
      classes={addNewPlaceStyle}
      clearSuggestion={clearSuggestion}
      autoCompleteSearch={autoCompleteSearch}
      t={(key) => translations[key]}
      city={city}/>);
    instance = wrapper.instance(); 
  });

  it("render ok" , () => {
    expect(wrapper.length).toBe(1);
  });

  it("fetch suggestions is called" , () => {
    instance.fetchSuggestions({
      term: "inputValue",
      type: "text"
    });
    expect(autoCompleteSearch.mock.calls.length).toBe(1);
  });

  it("text search query is invoked" , () => {
    instance.searchText({
      term:"123",
      type:"text"
    });
    expect(textSearch.mock.calls.length).toBe(1);
  });

  it("add bookmark is invoked" , () => {
    instance.bookmarkPlace({place_id:"122"});
    expect(addBookmark.mock.calls.length).toBe(1);
  });

  it("remove bookmark is invoked" , () => {
    instance.removeBookmark("123");
    expect(deleteBookmarkAction.mock.calls.length).toBe(1);
  });
});