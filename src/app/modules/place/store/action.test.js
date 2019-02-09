import {
  FETCH_CITY_DETAILS,
  SET_CITY_DETAILS,
  RESET_CITY_DETAILS,
  TEXT_SEARCH,
  AUTOCOMPLETE_SEARCH,
  CANCEL_AUTOCOMPLETE_SEARCH,
  CLEAR_SUGGESTIONS,
  FETCH_PLACE_DETAILS,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  GET_BOOKMARK_PLACES,
  GET_BOOKMARKS,
  SET_DELETE_BOOKMARK,
  SET_ADD_BOOKMARK,
  CLEAR_BOOKMARKS
} from "./actionTypes";

import * as actions from "./action";

describe("place actions" , () => {
  it("should create action to get city details" , () => {
    const expectedAction = {
      type: FETCH_CITY_DETAILS.ACTION,
      cityid : "city123",
      uid:"uid123"
    };
    expect(actions.fetchCityDetails("city123","uid123")).toEqual(expectedAction);
  });
  it("should create action to get place details" , () => {
    const expectedAction = {
      type: FETCH_PLACE_DETAILS.ACTION,
      cityid:"city123",
      placeId:"placeid123",
      uid:"uid123"
    };
    expect(actions.fetchPlaceDetails("city123","placeid123","uid123")).toEqual(expectedAction);
  });

  it("should create action to set city details" , () => {
    const expectedAction = {
      type: SET_CITY_DETAILS.ACTION,
      city:{}
    };
    expect(actions.setCityDetails({})).toEqual(expectedAction);
  });

  it("should create action to text search" , () => {
    const expectedAction = {
      type: TEXT_SEARCH.ACTION,
      query:{},
      params:{}
    };
    expect(actions.textSearch({} , {})).toEqual(expectedAction);
  });

  it("should create action to autoCompleteSearch" , () => {
    const expectedAction = {
      type: AUTOCOMPLETE_SEARCH.ACTION,
      query:{},
      params:{}
    };
    expect(actions.autoCompleteSearch({} ,{})).toEqual(expectedAction);
  });

  it("should create action to add bookmark" , () => {
    const expectedAction = {
      type: ADD_BOOKMARK.ACTION,
      city : {},
      place:{}
    };
    expect(actions.addBookmark({},{})).toEqual(expectedAction);
  });

  it("should create action to set add bookmark" , () => {
    const expectedAction = {
      type: SET_ADD_BOOKMARK.ACTION,
      city:{},
      place:{}
    };
    expect(actions.setAddBookmark({},{})).toEqual(expectedAction);
  });
  it("should create action to delete bookmark" , () => {
    const expectedAction = {
      type: DELETE_BOOKMARK.ACTION,
      cityid:"city123",
      placeid:"place123"
    };
    expect(actions.deleteBookmarkAction("city123","place123")).toEqual(expectedAction);
  });
  it("should create action to fetch bookmarks" , () => {
    const expectedAction ={
      type: GET_BOOKMARK_PLACES.ACTION,
      cityid:"city123"
    };
    expect(actions.fetchBookmarkPlaces("city123")).toEqual(expectedAction);
  });
});