import { FETCH_CITY_DETAILS, RESET_CITY_DETAILS, TEXT_SEARCH } from "./actionTypes";

const initialState = {
   selectedCity:null,
   selectedPlace:null,
   suggestedPlaces : [],
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
    case TEXT_SEARCH.SUCCESS: {
      return {
        ...state,
        suggestedPlaces:action.suggestions
      }
    }
    case RESET_CITY_DETAILS.ACTION: {
      return {
        ...state,
        selectedCity:null,
        selectedPlace:null,
        places:[]
      }
    }
  }
  return state;
}