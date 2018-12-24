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

import rootSaga , {
  dofetchCityDetails,
  dofetchPlaceDetails,
  doTextSearch,
  doAutoCompleteSearch,
  doAddBookmark,
  doGetAllBookmarksInCity,
  doDeleteBookmarks,
  doGetAllBookmarks
} from "./saga";

import * as serviceApi from "../../../service/networkService";

describe("places root saga" , () => {
  it("should create root saga" , () => {
    const generator = rootSaga();
    expect(generator.next().value).toEqual([
      fork(takeEvery, FETCH_CITY_DETAILS.ACTION, dofetchCityDetails),
      fork(takeEvery, FETCH_PLACE_DETAILS.ACTION, dofetchPlaceDetails),
      fork(takeEvery, TEXT_SEARCH.ACTION, doTextSearch),
      fork(takeLatest, AUTOCOMPLETE_SEARCH.ACTION, doAutoCompleteSearch),
      fork(takeEvery, ADD_BOOKMARK.ACTION, doAddBookmark),
      fork(takeEvery, GET_BOOKMARK_PLACES.ACTION, doGetAllBookmarksInCity),
      fork(takeEvery, DELETE_BOOKMARK.ACTION, doDeleteBookmarks),
      fork(takeEvery , GET_BOOKMARKS.ACTION , doGetAllBookmarks)
    ]);
  });
});

describe("places fetch city  saga" , () => {
  it("should fetch city details" , () => {
    const cityid  = "cityid123";
    const uid = "uid123";
    let response;
    const generator = dofetchCityDetails({cityid,uid});
    let next = generator.next().value;
    expect(next).toEqual(put({ type: FETCH_CITY_DETAILS.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(serviceApi.getCityDetails,cityid , uid));
    next = generator.next().value;
    expect(next).toEqual(put({ type: FETCH_CITY_DETAILS.SUCCESS, response }));
  });
  it("should handle error" , () =>{
    const cityid  = "cityid123";
    const uid = "uid123";
    const error = new Error("Unexpected network error");
    const generator = dofetchCityDetails({cityid,uid});
    let next = generator.next().value;
    expect(next).toEqual(put({ type: FETCH_CITY_DETAILS.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(serviceApi.getCityDetails,cityid , uid));
    expect(generator.throw(error).value).toEqual(put({ type: FETCH_CITY_DETAILS.ERROR, error }));
  });
});

describe("fetch place details saga" , () => {
  const cityid  = "cityid123";
  const uid = "uid123";
  const placeId = "placeid123";  
  const error = new Error("Unexpected network error");
  it("should fetch place details" , () => {
    let response;
    const generator = dofetchPlaceDetails({cityid,placeId,uid});
    let next = generator.next().value;
    expect(next).toEqual( put({ type: FETCH_PLACE_DETAILS.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(  call(serviceApi.getPlaceDetails,cityid,placeId,uid));
    next = generator.next().value;
    expect(next).toEqual( put({ type: FETCH_PLACE_DETAILS.SUCCESS, response }));
  });
  it("should handle error" , () => {
    const generator = dofetchPlaceDetails({cityid,placeId,uid});
    let next = generator.next().value;
    expect(next).toEqual( put({ type: FETCH_PLACE_DETAILS.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(  call(serviceApi.getPlaceDetails,cityid,placeId, uid));
    expect(generator.throw(error).value).toEqual(put({ type: FETCH_PLACE_DETAILS.ERROR, error }));
  });
});

describe("text search saga" , () => {
  const query = { term : "xyz"};
  const params = {label:"param1"};
  const error = new Error("Unexpected network error");
  it("should do text search" , () => {
    let response;
    const generator = doTextSearch({query,params});
    let next = generator.next().value;
    expect(next).toEqual( put({ type: TEXT_SEARCH.PENDING }));
    next = generator.next().value;
    expect(next).toEqual( put({ type: CANCEL_AUTOCOMPLETE_SEARCH.ACTION }));
    next = generator.next().value;
    expect(next).toEqual( call(serviceApi.textSearch, query, params));
    next = generator.next().value;
    expect(next).toEqual( put({ type: TEXT_SEARCH.SUCCESS, response, query }));
  });
  it("should handle error" , () => {
    const generator = doTextSearch({query,params});
    let next = generator.next().value;
    expect(next).toEqual( put({ type: TEXT_SEARCH.PENDING }));
    next = generator.next().value;
    expect(next).toEqual( put({ type: CANCEL_AUTOCOMPLETE_SEARCH.ACTION }));
    next = generator.next().value;
    expect(next).toEqual( call(serviceApi.textSearch, query, params));
    expect(generator.throw(error).value).toEqual(put({ type: TEXT_SEARCH.ERROR, error }));
  });
});