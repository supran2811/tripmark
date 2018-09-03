import axios from 'axios'

const googlePlacesAPI = "https://us-central1-triporg-1508486982436.cloudfunctions.net/searchPlace"
const googleAutoCompleteAPI = "https://us-central1-triporg-1508486982436.cloudfunctions.net/autoCompleteSearch"

export function textSearch(query , {latlngObj,radius}) {
  console.log("Inside function textSearch ",query , googlePlacesAPI,location);

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

  return axios.get(`${googlePlacesAPI}`,config);
}

export function autoCompleteSearch( query , { latlngObj , radius }) {
  console.log("Inside function autoCompleteSearch ",query , googleAutoCompleteAPI , latlngObj, radius );

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

  return axios.get(`${googleAutoCompleteAPI}`,config);
}