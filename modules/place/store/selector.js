import { NAME } from "./constants";
import { createSelector } from "reselect";

export const getSelectedCityDetails = state => state.get(NAME).get('selectedCity');;

export const getPredictionAsList = state => state.get(NAME).get('predictions');

export const getPlaces = state => state.get(NAME).get('places');

export const getPredictions = createSelector(getPredictionAsList , predictions => predictions.toJSON ? predictions.toJSON() : predictions );





