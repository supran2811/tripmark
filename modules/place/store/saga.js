import { fork,takeEvery,put,takeLatest,call,cancelled,cancel ,all } from 'redux-saga/effects';

import {  FETCH_CITY_DETAILS, 
          TEXT_SEARCH, 
          AUTOCOMPLETE_SEARCH, 
          CANCEL_AUTOCOMPLETE_SEARCH ,
          FETCH_PLACE_DETAILS,
          ADD_BOOKMARK} from './actionTypes';
import { googlePlace } from '../../../google';
import * as serviceApi from '../../../service/networkService';


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

export function* dofetchPlaceDetails( { google , mapRef , placeId } ) {
  try {
    yield put({ type:FETCH_PLACE_DETAILS.PENDING });
    const place = yield googlePlace.getPlaceDetails(google , mapRef ,placeId);
    console.log("Inside dofetchPlaceDetails",place);
    yield put({ type:FETCH_PLACE_DETAILS.SUCCESS , place });
  } catch(error) {
    yield put({ type:FETCH_PLACE_DETAILS.ERROR , error });
  }
}

export function* doTextSearch( {query , params }) {
  console.log("Inside doTextSearch ",query,params);
  yield put({ type: TEXT_SEARCH.PENDING});
  yield put({ type : CANCEL_AUTOCOMPLETE_SEARCH.ACTION });
  try {
   const response = yield call(serviceApi.textSearch,query,params);
   console.log("Inside doTextSearch ",response);
   yield put({ type: TEXT_SEARCH.SUCCESS , response , query});
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
   const response = yield call(serviceApi.autoCompleteSearch,query,params);
   console.log("doAutoCompleteSearchCancellable:::response ",response);
   yield put({ type: AUTOCOMPLETE_SEARCH.SUCCESS , response , query});
   console.log("Coming ere 11111111111111111111111");
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

export function* doAddBookmark( { city , place } ) {
  try {
    console.log("Inside doAddBookmark",city,place);   
    yield put({ type : ADD_BOOKMARK.PENDING} );
    const response = yield call(serviceApi.addBookmark , city , place); 
    console.log("Response::::::::::::::::",response);
    yield put({type:ADD_BOOKMARK.SUCCESS , city , place});
  } catch(error) {
    console.log("Inside doAddBookmark:::::",error);
    yield put({ type : ADD_BOOKMARK.ERROR ,error});
  }
}


export function* cancelTask(task) {
   yield cancel(task);
}

export default function* saga() {
  yield all ( [ fork(takeEvery,FETCH_CITY_DETAILS.ACTION , dofetchCityDetails),
                fork(takeEvery,FETCH_PLACE_DETAILS.ACTION , dofetchPlaceDetails),
                fork(takeEvery,TEXT_SEARCH.ACTION , doTextSearch),
                fork(takeLatest,AUTOCOMPLETE_SEARCH.ACTION , doAutoCompleteSearch),
                fork(takeEvery , ADD_BOOKMARK.ACTION , doAddBookmark) ]);
}
