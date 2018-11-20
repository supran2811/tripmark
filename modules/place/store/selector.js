import { createSelector } from "reselect";

import { NAME, DELETE_BOOKMARK_PENDING, ADD_BOOKMARK_PENDING } from "./constants";
import { filterCategory } from "../../../google/places";
import { getValue } from "../../../lib/utils";

export const getSelectedCityDetails = state =>
  state.get(NAME).get("selectedCity");

export const getSelectedPlaceObject = (state, placeId) =>
  state
    .get(NAME)
    .get("selectedPlaces")
    .get(placeId);

export const getPredictionAsList = state => state.get(NAME).get("predictions");

export const getPlacesObject = state => state.get(NAME).get("places");

export const getQueryString = state => state.get(NAME).get("query");

export const getAllBookmarks = state => state.get(NAME).get("bookmarks");

export const getPredictions = createSelector(
  getPredictionAsList,
  getQueryString,
  (predictions, query) => {
    let predictionsArray = predictions.toJSON
      ? predictions.toJSON()
      : predictions;
    const categories = filterCategory(query.toJSON());
    const filterCategoryLength = categories.length;
    if (filterCategoryLength > 0) {
      const difference = 5 - filterCategoryLength;
      predictionsArray =
        predictionsArray.length > difference
          ? predictionsArray.slice(0, difference)
          : predictionsArray;
      return [...predictionsArray, ...categories];
    }
    return predictionsArray;
  }
);

export const getPlaces = createSelector(
  getPlacesObject,
  getAllBookmarks,
  getSelectedCityDetails,
  (placesObject, bookmarks, selectedCity) => {
    return placesObject && placesObject.get("results")
      ? placesObject.get("results").map(place => {
        let isBookmarked = false;
        let deleteBookmarkPending;
        let addBookmarkPending;
        const cityObj = bookmarks.get(selectedCity.get("place_id"));
        if (cityObj) {
          const placeObj = cityObj.get("places").get(place["place_id"]);
          if (placeObj) {
            isBookmarked = true;
            if(getValue(DELETE_BOOKMARK_PENDING , placeObj)){
              deleteBookmarkPending=true;
            }
            else if(getValue(ADD_BOOKMARK_PENDING,placeObj)) {
              addBookmarkPending = true;
              isBookmarked = false;
            }
          }
        }

        return {
          ...place,
          isBookmarked,
          deleteBookmarkPending,
          addBookmarkPending
        };
      })
      : null;
  }
);

export const getNextToken = createSelector(getPlacesObject, placesObject => {
  return placesObject ? placesObject.get("next_page_token") : placesObject;
});

export const getBookmarkedCities = createSelector(getAllBookmarks,bookmarksObj => {
  if(bookmarksObj){
    const bookmarksJS = bookmarksObj.toJSON();
    return Object.keys(bookmarksJS).map(cityid => {
      return { ...bookmarksJS[cityid] };
    } );
  }
  return null;
});

export const getBookmarkedPlacesForCity = createSelector(
  getAllBookmarks,
  getSelectedCityDetails,
  (bookmarks, selectedCity) => {
    if (bookmarks && selectedCity) {
      const cityObj = bookmarks.get(selectedCity.get("place_id"));
      const placesObj = cityObj ? cityObj.get("places").toJSON() : null;
      return placesObj
        ? Object.keys(placesObj).map(placeId => {
          return { ...placesObj[placeId], isBookmarked: true };
        })
        : null;
    }
    return null;
  }
);

export const getSelectedPlace = createSelector( getSelectedPlaceObject , 
  placeObject =>  placeObject ? placeObject.toJSON() : placeObject);