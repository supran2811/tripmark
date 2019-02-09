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

export function fetchCityDetails(cityid , uid) {
  return {
    type: FETCH_CITY_DETAILS.ACTION,
    cityid,
    uid
  };
}

export function fetchPlaceDetails(cityid, placeId , uid) {
  return {
    type: FETCH_PLACE_DETAILS.ACTION,
    cityid,
    placeId,
    uid
  };
}

export function setCityDetails(city) {
  return {
    type: SET_CITY_DETAILS.ACTION,
    city
  };
}

export function resetCityDetails() {
  return {
    type: RESET_CITY_DETAILS.ACTION
  };
}

export function textSearch(query, params) {
  return {
    type: TEXT_SEARCH.ACTION,
    query,
    params
  };
}

export function autoCompleteSearch(query, params) {
  return {
    type: AUTOCOMPLETE_SEARCH.ACTION,
    query,
    params
  };
}

export function clearSuggestion() {
  return {
    type: CLEAR_SUGGESTIONS.ACTION
  };
}

export function cancelAutoCompleteSearch() {
  return {
    type: CANCEL_AUTOCOMPLETE_SEARCH.ACTION
  };
}

export function addBookmark(city, place ) {
  return {
    type: ADD_BOOKMARK.ACTION,
    city,
    place
  };
}

export function setAddBookmark(city, place) {
  return {
    type: SET_ADD_BOOKMARK.ACTION,
    city,
    place
  };
}

export function deleteBookmarkAction(cityid, placeid) {
  return {
    type: DELETE_BOOKMARK.ACTION,
    cityid,
    placeid
  };
}

export function setDeleteBookmark(cityid, placeid) {
  return {
    type: SET_DELETE_BOOKMARK.ACTION,
    cityid,
    placeid
  };
}

export function fetchBookmarkPlaces(cityid) {
  return {
    type: GET_BOOKMARK_PLACES.ACTION,
    cityid
  };
}

export function fetchBookmarks(uid) {
  return {
    type: GET_BOOKMARKS.ACTION,
    uid
  };
}

export function clearBookmarks() {
  return {
    type:CLEAR_BOOKMARKS.ACTION
  };
}