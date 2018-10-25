import { Map, List, Record } from "immutable";

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
import { filterCategory } from "../../../google/places";

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

export default function placeReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_CITY_DETAILS.SUCCESS: {
    const {result : city , places} = action.response.data;
    const cityid  = city["place_id"];
    const bookmarks = state.bookmarks || Map();
    const cityObj = bookmarks.get(cityid) || Map();
    const newBookmarks = bookmarks.set(
      cityid,
      cityObj.set("places", Map(places))
    );
    const updatedBookmarks = bookmarks.mergeDeep(newBookmarks);

    return state.merge({ selectedCity: city , bookmarks:updatedBookmarks });
  }
  case FETCH_PLACE_DETAILS.SUCCESS: {
    let selectedPlaces = state.get("selectedPlaces");
    const {result , bookmarked} = action.response.data;
    const place = Map(result).set("bookmarked",bookmarked);

    selectedPlaces = selectedPlaces.set(
      result["place_id"],
      place
    );
    return state.merge({ selectedPlaces });
  }
  case AUTOCOMPLETE_SEARCH.SUCCESS: {
    const query = action.query;
    let predictions = List(action.response.data["predictions"]);
    if (predictions.length > 5) {
      predictions = predictions.slice(0, 4);
    }
    return state.merge({ predictions, query });
  }
  case CLEAR_SUGGESTIONS.ACTION: {
    return state.merge({ predictions: [] });
  }
  case TEXT_SEARCH.SUCCESS: {
    const query = action.query;
    let places = Map(action.response.data);
    if (places.get("status") === "INVALID_REQUEST") {
      return state;
    }
    if (query["pagetoken"]) {
      const newToken = places.get("next_page_token");
      const oldPlace = state.get("places");
      const oldResults = oldPlace.get("results");
      const oldToken = oldPlace.get("next_page_token");
      if (oldPlace && oldResults && oldToken !== newToken) {
        const updatedResults = oldResults.concat(places.get("results"));
        places = places.set("results", updatedResults);
      }
    }
    return query["term"]
      ? state.merge({ places, query })
      : state.merge({ places });
  }
  case SET_ADD_BOOKMARK.ACTION:
  case ADD_BOOKMARK.SUCCESS: {
    const { city, place } = action;
    
    const cityMapObj = city ? Map(city) : Map();
    const id = city["place_id"];
    const newBookmarks = Map({
      [id]: cityMapObj.set(
        "places",
        Map({ [place.place_id]: place })
      )
    });
    const updatedBookmarks = state.bookmarks.mergeDeep(newBookmarks);

    let selectedPlaces = state.get("selectedPlaces");
    const selectedPlace = selectedPlaces.get(place["place_id"]);
    if(selectedPlace) {
      console.log(selectedPlace);
      selectedPlaces = selectedPlaces.set(place["place_id"] , selectedPlace.set("bookmarked",true));
    }

    return state.merge({ bookmarks: updatedBookmarks ,selectedPlaces});
  }
  case GET_BOOKMARK_PLACES.SUCCESS: {
    const { response, cityid } = action;
    const places = response.data;
    const bookmarks = state.bookmarks || Map();
    const cityObj = bookmarks.get(cityid) || Map();
    const newBookmarks = bookmarks.set(
      cityid,
      cityObj.set("places", Map(places))
    );
    const updatedBookmarks = bookmarks.mergeDeep(newBookmarks);
    return state.merge({ bookmarks: updatedBookmarks });
  }
  case SET_DELETE_BOOKMARK.ACTION:
  case DELETE_BOOKMARK.SUCCESS: {
    const { cityid, placeid } = action;

    const cityObj = state.bookmarks.get(cityid);

    let bookmarks = state.bookmarks;

    if (cityObj) {
      const places = cityObj.get("places");

      if (places) {
        const updatedPlaces = places.delete(placeid);
        if(updatedPlaces.isEmpty()){
          bookmarks = state.bookmarks.delete(cityid);
        }
        else {
          bookmarks = state.bookmarks.set(
            cityid,
            cityObj.set("places", updatedPlaces)
          );
        }
        
      }
    }
    let selectedPlaces = state.get("selectedPlaces");
    const selectedPlace = selectedPlaces.get(placeid);
    if(selectedPlace ) {
      selectedPlaces = selectedPlace.set(placeid , selectedPlace.set("bookmarked",false));
    }

    return state.merge({ bookmarks,selectedPlaces});
  }
  case GET_BOOKMARKS.SUCCESS :{
    const result = action.response.data;
    let bookmarks = Map();
    bookmarks = bookmarks.mergeDeep(result);
    return state.merge({bookmarks});
  }
  case RESET_CITY_DETAILS.ACTION: {
    return state.merge({
      selectedCity: undefined,
      selectedPlaces: Map(),
      places: Map(),
      predictions: filterCategory(),
      query: Map({
        term: "",
        label:"",
        type: "text"
      })
    });
  }
  case CLEAR_BOOKMARKS.ACTION: {
    return state.merge({
      bookmarks:undefined
    });
  }
  }
  return state;
}
