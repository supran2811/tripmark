import axios from 'axios'
import categories from './category.json'
const googlePlacesAPI = "https://us-central1-triporg-1508486982436.cloudfunctions.net/searchPlace"
const googleAutoCompleteAPI = "/autoCompleteSearch";//"https://us-central1-triporg-1508486982436.cloudfunctions.net/autoCompleteSearch"

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

  if(query === ""){
    return {
        data:{
          predictions:[]
        }
    }
  }

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

export function filterCategory(query) {
  if(!query || query.length == 0 ){
    return categories.slice(0,5);
  }
  else {
    let count = 0;
    return categories.filter(category => {
      const keep =
          count < 5 && category.label.slice(0, query.length).toLowerCase() === query;

      if (keep) {
        count += 1;
      }
      return keep;
    });
  }
}