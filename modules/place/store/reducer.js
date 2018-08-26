import { FETCH_CITY_DETAILS, RESET_CITY_DETAILS } from "./actionTypes";

const initialState = {
   selectedCity:null,
   selectedPlace:null,
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