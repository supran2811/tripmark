import { createSelector } from "reselect";

import { NAME } from "./constants";
import { filterCategory } from "../../../google/places";

export const getSelectedCityDetails = state => state.get(NAME).get('selectedCity');

export const getSelectedPlace = (state,placeId) => state.get(NAME).get('selectedPlaces').get(placeId);

export const getPredictionAsList = state => state.get(NAME).get('predictions');

export const getPlacesObject = state => state.get(NAME).get('places');

export const getQueryString = state => state.get(NAME).get('query');

export const getPredictions = 
  createSelector( getPredictionAsList ,getQueryString , 
    (predictions , query) => {
      let predictionsArray = predictions.toJSON ? predictions.toJSON() : predictions;
      const categories = filterCategory(query);
      const filterCategoryLength = categories.length;
      if(filterCategoryLength > 0) {
        const difference = 5-filterCategoryLength;
        predictionsArray = predictionsArray.length > difference ? 
                                        predictionsArray.slice(0,difference):
                                        predictionsArray; 
        return [...predictionsArray , ...categories];
      }
      return predictionsArray;
    } );

export const getPlaces = createSelector(getPlacesObject , placesObject => {
  return placesObject ? placesObject.get('results') : placesObject;
});

export const getNextToken = createSelector(getPlacesObject , placesObject => {
  return placesObject ? placesObject.get('next_page_token'):placesObject;
});


