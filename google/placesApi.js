import axios from 'axios'

const googlePlacesApi = "https://us-central1-triporg-1508486982436.cloudfunctions.net/searchPlace"

export function textSearch(query , {latlngObj,radius}) {
  console.log("Inside function getSuggestions ",query , googlePlacesApi,location);

  let location;
  if( latlngObj ) {
    location = `${latlngObj.lat()},${latlngObj.lng()}`;
  }
  const config = { 
    params : {
      text:query,
      location,
      radius,
      key:process.env._GOOGLE_API_KEY
    }
  }

  return axios.get(`${googlePlacesApi}`,config);
}