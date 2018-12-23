
import { Map, List, Record} from "immutable";

import {
  FETCH_CITY_DETAILS,
  RESET_CITY_DETAILS,
  TEXT_SEARCH,
  AUTOCOMPLETE_SEARCH,
  CLEAR_SUGGESTIONS,
  FETCH_PLACE_DETAILS,
  ADD_BOOKMARK,
  GET_BOOKMARK_PLACES,
  DELETE_BOOKMARK,
  SET_DELETE_BOOKMARK,
  SET_ADD_BOOKMARK,
  GET_BOOKMARKS,
  CLEAR_BOOKMARKS
} from "./actionTypes";

import reducer from "./reducer";

describe("place reducer" , () => {

  const myRecord = Record({
    predictions: undefined,
    selectedCity: undefined,
    selectedPlaces: undefined,
    places: undefined,
    query: undefined,
    bookmarks: undefined
  });
    
  const initialState = new myRecord({
    predictions: List(),
    selectedCity: undefined,
    selectedPlaces: Map(),
    places: Map(),
    query: Map({
      term: "",
      label:"",
      type: "text"
    }),
    bookmarks: undefined
  });

  it("should return initial state by default" , () => {
    expect(reducer(undefined,{}).hashCode()).toEqual(initialState.hashCode());
  });
});