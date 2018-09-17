import axios from 'axios'
import { List } from 'immutable';
import _ from 'lodash';

import categories from './category.json';
const googlePlacesAPI = "https://us-central1-triporg-1508486982436.cloudfunctions.net/searchPlace"
const googleAutoCompleteAPI = "/autoCompleteSearch";//"https://us-central1-triporg-1508486982436.cloudfunctions.net/autoCompleteSearch"

export function textSearch({term , pagetoken} , {latlngObj,radius}) {
  console.log("Inside function textSearch ",term , googlePlacesAPI,location);

  let location , config;
  if( latlngObj ) {
    location = `${latlngObj.lat()},${latlngObj.lng()}`;
  }

  if(term) {
    config = { 
      params : {
        text:term,
        location,
        radius,
        key:process.env._GOOGLE_API_KEY
      }
    }
  }
  else if(pagetoken){
    config = { 
      params : {
        pagetoken,
        key:process.env._GOOGLE_API_KEY
      }
    }
  }

  return axios.get(`${googlePlacesAPI}`,config);
}

export function autoCompleteSearch( { term } , { latlngObj , radius }) {
  console.log("Inside function autoCompleteSearch ",term , googleAutoCompleteAPI , latlngObj, radius );
  if(term === ""){
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
      text:term,
      location,
      radius,
      key:process.env._GOOGLE_API_KEY
    }
  }

  return axios.get(`${googleAutoCompleteAPI}`,config);
}

 export const filterCategory = _.memoize(filter);

 function filter(query) {

  const term = query ? query.get ? query.get('term'): query : ''; 

  if(term.length == 0 ){
    return categories.slice(0,5);
  }
  else {
    console.log("Inside filter",categories);
    let count = 0;
    return categories.filter(category => {
      const keep =
          count < 5 && category.label.slice(0, term.length).toLowerCase() === term;

      if (keep) {
        count += 1;
      }
      return keep;
    });
  }
}



