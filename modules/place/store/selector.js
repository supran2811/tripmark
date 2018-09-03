import { NAME } from "./constants";

export const getSelectedCityDetails = state => state[NAME].selectedCity;

export const getPredictions = state => state[NAME].predictions;