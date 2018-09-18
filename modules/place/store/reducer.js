import { Map, List, Record } from 'immutable';

import {  FETCH_CITY_DETAILS, 
          RESET_CITY_DETAILS, 
          TEXT_SEARCH, 
          AUTOCOMPLETE_SEARCH, 
          CLEAR_SUGGESTIONS ,
         FETCH_PLACE_DETAILS } from "./actionTypes";
import { filterCategory } from "../../../google/placesApi";

const myRecord = Record({
  predictions:undefined,
  selectedCity:undefined,
  selectedPlaces:undefined,
  places:undefined,
  query:undefined
});

const initialState = new myRecord({
  predictions : List(),
  selectedCity:undefined,
  selectedPlaces:Map(),
  places:Map(),
  query:Map({
    term : '',
    type:'text'
  })
});

export default function placeReducer( state=initialState , action ) {
  switch(action.type) {
    case FETCH_CITY_DETAILS.SUCCESS: {
      return state.merge({selectedCity:action.place});
    }
    case FETCH_PLACE_DETAILS.SUCCESS: {
      let selectedPlaces = state.get('selectedPlaces');
      selectedPlaces = selectedPlaces.set(action.place['place_id'] , action.place);
      return state.merge({selectedPlaces});
    }
    case AUTOCOMPLETE_SEARCH.SUCCESS : {
      const query = action.query;
      console.log("Coming inside autocomplete search reducer...",query);
      let predictions = List(action.response.data['predictions']);
      if(predictions.length > 5) {
        predictions = predictions.slice(0,4);
      }
      return state.merge({predictions,query});
    }
    case CLEAR_SUGGESTIONS.ACTION :{
      return state.merge({predictions:[]});
    }
    case TEXT_SEARCH.SUCCESS:{
      const query = action.query;
      let places = Map(action.response.data);
      if(places.get('status') === 'INVALID_REQUEST'){
        return state;
      }
      if(query['pagetoken']) {
        const newToken = places.get('next_page_token');
        const oldPlace  = state.get('places');
        const oldResults = oldPlace.get('results');
        const oldToken = oldPlace.get('next_page_token');
        if(oldPlace && oldResults && oldToken !== newToken) {
          const updatedResults = oldResults.concat(places.get('results'));
          places = places.set('results',updatedResults);
        }
      }
      return query['term'] ? state.merge({places,query}) : state.merge({places});
    }
    case RESET_CITY_DETAILS.ACTION: {
      return state.merge({
              selectedCity:undefined,
              selectedPlaces:Map(),
              places:Map(),
              predictions:filterCategory(),
              query:Map({
                term : '',
                type:'text'
              })})
    }
  }
  return state;
}