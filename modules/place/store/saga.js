import {fork,takeEvery,put, take} from 'redux-saga/effects';
import { FETCH_CITY_DETAILS } from './actionTypes';
import { googlePlace } from '../../../google';


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

export default function* saga() {
  yield fork(takeEvery,FETCH_CITY_DETAILS.ACTION , dofetchCityDetails);
}
