import { FETCH_CITY_DETAILS, RESET_CITY_DETAILS, TEXT_SEARCH, AUTOCOMPLETE_SEARCH, CLEAR_SUGGESTIONS } from "./actionTypes";
import { filterCategory } from "../../../google/placesApi";

const initialState = {
   selectedCity:null,
   selectedPlace:null,
   predictions : filterCategory(),
   places:[]
}

export default function placeReducer( state=initialState , action ) {
  switch(action.type) {
    case FETCH_CITY_DETAILS.SUCCESS: {
      return {
        ...state,
        selectedCity:action.place
      }
    }
    case AUTOCOMPLETE_SEARCH.SUCCESS : {

      let predictions = action.response.data['predictions'];

      if(predictions.length > 5) {
        predictions = predictions.slice(0,4);
      }

      const filteredCategories = filterCategory(action.query);

      if(filteredCategories.length > 0){
        const filterCategoryLength = filteredCategories.length;
        const difference = 5-filterCategoryLength;
        predictions = predictions.length > difference ? predictions.slice(0,difference):predictions; 

        predictions = [ ...predictions , ...filteredCategories];
      }
      
      console.log("AUTOCOMPLETE_SEARCH ==== SUCCESS :: " , predictions , action.query);
      
      return {
        ...state,
        predictions
      }

    }
    case CLEAR_SUGGESTIONS.ACTION :{
      return {
        ...state,
        predictions:[]
      }
    }
    case TEXT_SEARCH.SUCCESS:{
      let places = action.response.data['results'];
      return {
        ...state,
        places
      }
    }
    case RESET_CITY_DETAILS.ACTION: {
      return {
        ...state,
        selectedCity:null,
        predictions:filterCategory(),
        places:[]
      }
    }
  }
  return state;
}