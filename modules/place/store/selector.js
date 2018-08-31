import { NAME } from "./constants";

export const getSelectedCityDetails = state => state[NAME].selectedCity;

export const getSuggestedPlaces = state => state[NAME].suggestedPlaces;