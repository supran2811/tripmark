import { FETCH_CITY_DETAILS,
         SET_CITY_DETAILS, 
         RESET_CITY_DETAILS, 
         TEXT_SEARCH, 
         AUTOCOMPLETE_SEARCH, 
         CANCEL_AUTOCOMPLETE_SEARCH, 
         CLEAR_SUGGESTIONS,
         FETCH_PLACE_DETAILS } from "./actionTypes";

export function fetchCityDetails(google , mapRef , placeId) {
  return {
    type:FETCH_CITY_DETAILS.ACTION,
    google, 
    mapRef,
    placeId
  }
}

export function fetchPlaceDetails(google , mapRef , placeId) {
  return {
    type:FETCH_PLACE_DETAILS.ACTION,
    google, 
    mapRef,
    placeId
  }
}

export function setCityDetails(city) {
  return {
    type:SET_CITY_DETAILS.ACTION,
    city
  }
}

export function resetCityDetails() {
  return {
    type:RESET_CITY_DETAILS.ACTION
  }
}

export function textSearch(query , params) {
  return {
    type:TEXT_SEARCH.ACTION , 
    query,
    params
  }
}

export function autoCompleteSearch(query , params) {
  return {
    type:AUTOCOMPLETE_SEARCH.ACTION , 
    query,
    params
  }
}

export function clearSuggestion() {
  return {
    type:CLEAR_SUGGESTIONS.ACTION
  }
}

export function cancelAutoCompleteSearch() {
  return {
    type:CANCEL_AUTOCOMPLETE_SEARCH.ACTION
  }
}