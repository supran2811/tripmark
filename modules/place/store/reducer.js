import { Map, List, Record } from 'immutable';

import { FETCH_CITY_DETAILS, 
        RESET_CITY_DETAILS, 
        TEXT_SEARCH, 
        AUTOCOMPLETE_SEARCH, 
        CLEAR_SUGGESTIONS } from "./actionTypes";
import { filterCategory } from "../../../google/placesApi";

const myRecord = Record({
  predictions : filterCategory(),
  selectedCity:undefined,
  places:undefined,
});

const initialState = new myRecord({
  predictions : filterCategory(),
  selectedCity:undefined,
  places:List(),
});

export default function placeReducer( state=initialState , action ) {
  switch(action.type) {
    case FETCH_CITY_DETAILS.SUCCESS: {
      return state.merge({selectedCity:action.place});
    }
    case AUTOCOMPLETE_SEARCH.SUCCESS : {

      let predictions = List(action.response.data['predictions']);

      if(predictions.length > 5) {
        predictions = predictions.slice(0,4);
      }

      const filteredCategories = filterCategory(action.query);

      if(filteredCategories.length > 0){
        const filterCategoryLength = filteredCategories.length;
        const difference = 5-filterCategoryLength;
        predictions = predictions.length > difference ? predictions.slice(0,difference):predictions; 

        predictions = predictions.push(filteredCategories)//[ ...predictions , ...filteredCategories];
      }
      return state.merge({predictions});
    }
    case CLEAR_SUGGESTIONS.ACTION :{
      return state.merge({predictions:[]});
    }
    case TEXT_SEARCH.SUCCESS:{
      let places = List(action.response.data['results']);
      return state.merge({places});
    }
    case RESET_CITY_DETAILS.ACTION: {
      return state.merge({
              selectedCity:undefined,
              places:undefined,
              predictions:filterCategory()})
    }
  }
  return state;
}