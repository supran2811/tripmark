import axios from 'axios'
import appConfig from 'app-config';

const googlePlacesApi = appConfig.googleRestApi;

export function textSearch(query , { locaion,radius }) {
  console.log("Inside function getSuggestions ",query , googlePlacesApi);
}