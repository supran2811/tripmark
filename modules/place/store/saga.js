import {
  fork,
  takeEvery,
  put,
  takeLatest,
  call,
  cancelled,
  cancel,
  all
} from "redux-saga/effects";

import {
  FETCH_CITY_DETAILS,
  TEXT_SEARCH,
  AUTOCOMPLETE_SEARCH,
  CANCEL_AUTOCOMPLETE_SEARCH,
  FETCH_PLACE_DETAILS,
  ADD_BOOKMARK,
  GET_BOOKMARK_PLACES,
  DELETE_BOOKMARK,
  GET_BOOKMARKS
} from "./actionTypes";
import * as serviceApi from "../../../service/networkService";
import { addBookmarkedPlaces, addRemovedPlaces } from "./localStorage";

export function* dofetchCityDetails({ cityid , uid }) {
  try {
    yield put({ type: FETCH_CITY_DETAILS.PENDING });
    const response = yield call(serviceApi.getCityDetails,cityid , uid);
    console.log("Do fetch city details ",response);
    yield put({ type: FETCH_CITY_DETAILS.SUCCESS, response });
  } catch (error) {
    console.log("FETCH_CITY_DETAILS::Error",error);
    yield put({ type: FETCH_CITY_DETAILS.ERROR, error });
  }
}

export function* dofetchPlaceDetails({ cityid, placeId }) {
  try {
    yield put({ type: FETCH_PLACE_DETAILS.PENDING });
    const response = yield call(serviceApi.getPlaceDetails,cityid,placeId);
    yield put({ type: FETCH_PLACE_DETAILS.SUCCESS, response });
  } catch (error) {
    console.log("FETCH_CITY_DETAILS::Error",error);
    yield put({ type: FETCH_PLACE_DETAILS.ERROR, error });
  }
}

export function* doTextSearch({ query, params }) {
  yield put({ type: TEXT_SEARCH.PENDING });
  yield put({ type: CANCEL_AUTOCOMPLETE_SEARCH.ACTION });
  try {
    const response = yield call(serviceApi.textSearch, query, params);
    yield put({ type: TEXT_SEARCH.SUCCESS, response, query });
  } catch (error) {
    console.log("Inside doTextSearch::error ",error);
    yield put({ type: TEXT_SEARCH.ERROR, error });
  }
}

export function* doAutoCompleteSearchCancellable({ query, params }) {
  yield put({ type: AUTOCOMPLETE_SEARCH.PENDING });
  try {
    const response = yield call(serviceApi.autoCompleteSearch, query, params);
    yield put({ type: AUTOCOMPLETE_SEARCH.SUCCESS, response, query });
  } catch (error) {
    console.log("doAutoCompleteSearchCancellable:::",error);
    yield put({ type: AUTOCOMPLETE_SEARCH.ERROR, error });
  } finally {
    if (yield cancelled()) {
      yield put({ type: AUTOCOMPLETE_SEARCH.CANCEL });
    }
  }
}

export function* doAutoCompleteSearch({ query, params }) {
  try {
    const autoCompleteSearchTask = yield fork(doAutoCompleteSearchCancellable, {
      query,
      params
    });
    yield takeLatest(
      CANCEL_AUTOCOMPLETE_SEARCH.ACTION,
      cancelTask,
      autoCompleteSearchTask
    );
  } finally {
    if (yield cancelled()) {
      yield put({ type: AUTOCOMPLETE_SEARCH.CANCEL });
    }
  }
}

export function* doAddBookmark({ city, place }) {
  try {
    yield put({ type: ADD_BOOKMARK.PENDING , city , place  });
    const response = yield call(serviceApi.addBookmark, city, place);
    addBookmarkedPlaces(city,place);
    yield put({ type: ADD_BOOKMARK.SUCCESS, city, place });
  } catch (error) {
    console.log("Inside error in doAddBookmark",error);
    yield put({ type: ADD_BOOKMARK.ERROR,  city , place , error });
  }
}

export function* doGetAllBookmarksInCity({ cityid }) {
  try {
    yield put({ type: GET_BOOKMARK_PLACES.PENDING });
    const response = yield call(serviceApi.getAllBookmarksInCity, cityid);
    yield put({ type: GET_BOOKMARK_PLACES.SUCCESS, cityid, response });
  } catch (error) {
    yield put({ type: GET_BOOKMARK_PLACES.ERROR });
  }
}

export function* doDeleteBookmarks({ cityid, placeid }) {
  try {
    yield put({ type: DELETE_BOOKMARK.PENDING , cityid, placeid });
    const response = yield call(serviceApi.deleteBookmark, cityid, placeid);
    addRemovedPlaces(cityid,placeid);
    yield put({ type: DELETE_BOOKMARK.SUCCESS, cityid,placeid });
  } catch (error) {
    yield put({ type: DELETE_BOOKMARK.ERROR, cityid , placeid , error  });
  }
}

export function* doGetAllBookmarks({ uid }) {
  try {
    yield put({type:GET_BOOKMARKS.PENDING});
    const response = yield call(serviceApi.getAllBookmarks,uid);
    yield put({type:GET_BOOKMARKS.SUCCESS , response});
  } catch(error) {
    yield put({type:GET_BOOKMARKS.ERROR , error});
  }
}

export function* cancelTask(task) {
  yield cancel(task);
}

export default function* saga() {
  yield all([
    fork(takeEvery, FETCH_CITY_DETAILS.ACTION, dofetchCityDetails),
    fork(takeEvery, FETCH_PLACE_DETAILS.ACTION, dofetchPlaceDetails),
    fork(takeEvery, TEXT_SEARCH.ACTION, doTextSearch),
    fork(takeLatest, AUTOCOMPLETE_SEARCH.ACTION, doAutoCompleteSearch),
    fork(takeEvery, ADD_BOOKMARK.ACTION, doAddBookmark),
    fork(takeEvery, GET_BOOKMARK_PLACES.ACTION, doGetAllBookmarksInCity),
    fork(takeEvery, DELETE_BOOKMARK.ACTION, doDeleteBookmarks),
    fork(takeEvery , GET_BOOKMARKS.ACTION , doGetAllBookmarks)
  ]);
}
