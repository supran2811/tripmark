import { createSelector } from "reselect";

import { NAME } from "./constants";
import { filterCategory } from "../../../google/places";

export const getSelectedCityDetails = state =>
  state.get(NAME).get("selectedCity");

export const getSelectedPlace = (state, placeId) =>
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
    const categories = filterCategory(query);
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
        const cityObj = bookmarks.get(selectedCity.get("place_id"));
        if (cityObj) {
          const placeObj = cityObj.get("places").get(place["place_id"]);
          if (placeObj) {
            isBookmarked = true;
          }
        }

        return {
          ...place,
          isBookmarked: isBookmarked
        };
      })
      : placesObject;
  }
);

export const getNextToken = createSelector(getPlacesObject, placesObject => {
  return placesObject ? placesObject.get("next_page_token") : placesObject;
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
