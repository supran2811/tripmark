import {fork,takeEvery,put, take, takeLatest} from 'redux-saga/effects';
import { FETCH_CITY_DETAILS, TEXT_SEARCH } from './actionTypes';
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

export async function doTextSearch(query , { location , radius }) {
  console.log("Inside doTextSearch ",query);
  await googlePlacesApi.textSearch(query ,  { location , radius });
}

export default function* saga() {
  yield fork(takeEvery,FETCH_CITY_DETAILS.ACTION , dofetchCityDetails);
  yield fork(takeLatest,TEXT_SEARCH.ACTION , doTextSearch);
}
