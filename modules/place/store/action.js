import { FETCH_CITY_DETAILS, SET_CITY_DETAILS, RESET_CITY_DETAILS } from "./actionTypes";

export function fetchCityDetails(google , mapRef , placeId) {
  return {
    type:FETCH_CITY_DETAILS.ACTION,
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