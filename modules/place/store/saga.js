import {fork,takeEvery,put, take, takeLatest , call, cancelled } from 'redux-saga/effects';
import { FETCH_CITY_DETAILS, TEXT_SEARCH, AUTOCOMPLETE_SEARCH, CANCEL_AUTOCOMPLETE_SEARCH } from './actionTypes';
import { googlePlace , googlePlacesApi } from '../../../google';


export function* dofetchCityDetails( { google , mapRef , placeId } ) {
  try {
    yield put({ type:FETCH_CITY_DETAILS.PENDING });
    const place = yield googlePlace.getPlaceDetails(google , mapRef ,placeId);
    console.log("Inside dofetchCityDetails",place);
    yield put({ type:FETCH_CITY_DETAILS.SUCCESS , place });
  } catch(error) {
    yield put({ type:FETCH_CITY_DETAILS.ERROR , error });
  }
}

export function* doTextSearch( {query , params }) {
  console.log("Inside doTextSearch ",query,params);
  yield put({ type: TEXT_SEARCH.PENDING});
  try {
   const response = yield call(googlePlacesApi.textSearch,query,params);
   yield put({ type: TEXT_SEARCH.SUCCESS , response});
  }
  catch(error) {
    console.log("doTextSearch error",error);
    yield put({type: TEXT_SEARCH.ERROR,error});
  }
  
}

export function* doAutoCompleteSearchCancellable({query , params }) {
  console.log("Inside doAutoCompleteSearch ",query,params);
  yield put({ type: AUTOCOMPLETE_SEARCH.PENDING});
  try {
   const response = yield call(googlePlacesApi.autoCompleteSearch,query,params);
   yield put({ type: AUTOCOMPLETE_SEARCH.SUCCESS , response,query});
  }
  catch(error) {
    console.log("doAutoCompleteSearch error",error);
    yield put({type: AUTOCOMPLETE_SEARCH.ERROR,error});
  }
  finally {
    if( yield cancelled() ){
      console.log("Coming doAutoCompleteSearchCancellable to cancel search for ",query);
      yield put({type:AUTOCOMPLETE_SEARCH.CANCEL});
    }
  }
}

export function* doAutoCompleteSearch( { query , params }) {
 try {
  const autoCompleteSearchTask = yield fork( doAutoCompleteSearchCancellable , { query , params } );
  yield takeLatest(CANCEL_AUTOCOMPLETE_SEARCH.ACTION , cancelTask , autoCompleteSearchTask );
 } finally {
  if(yield cancelled()) {
    console.log("Coming doAutoCompleteSearch to cancel search for ",query);
    yield put({type:AUTOCOMPLETE_SEARCH.CANCEL});
  }
 }
  
}

export function* cancelTask(task) {
   yield cancel(task);
}

export default function* saga() {
  yield fork(takeEvery,FETCH_CITY_DETAILS.ACTION , dofetchCityDetails);
  yield fork(takeEvery,TEXT_SEARCH.ACTION , doTextSearch);
  yield fork(takeLatest,AUTOCOMPLETE_SEARCH.ACTION , doAutoCompleteSearch);
}
