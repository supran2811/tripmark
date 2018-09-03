import { FETCH_CITY_DETAILS, RESET_CITY_DETAILS, TEXT_SEARCH, AUTOCOMPLETE_SEARCH } from "./actionTypes";

const initialState = {
   selectedCity:null,
   selectedPlace:null,
   predictions : [],
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

      const predictions = action.response.data['predictions'];

      console.log("AUTOCOMPLETE_SEARCH ==== SUCCESS :: " , predictions);
      
      return {
        ...state,
        predictions
      }

    }
    case RESET_CITY_DETAILS.ACTION: {
      return {
        ...state,
        selectedCity:null,
        predictions:[],
        places:[]
      }
    }
  }
  return state;
}