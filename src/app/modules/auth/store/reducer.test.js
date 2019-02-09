import {Record ,Map } from "immutable";

import * as types from "./actionTypes";
import reducer from "./reducer";

describe("auth reducer" , () => {
  const myRecord = Record({
    token: "",
    uid: "",
    pathToRedirect: "/mypage",
    firebaseLoaded: false
  });
  let initialState;

  beforeEach(() => {
    initialState = new myRecord({
      token: "",
      pathToRedirect: "/mypage",
      firebaseLoaded: false
    });
  });

  it("should return correct initial state" , () => {
    expect(reducer(undefined,{}).hashCode()).toEqual(initialState.hashCode());
  });

  it("should return correct state for set token ", () => {
    const action = {
      type: types.ACTION_SET_TOKEN.SUCCESS,
      data:"123456"
    };
    const newState  = reducer(undefined,action);
    expect(newState.get("token")).toEqual("123456");
  });

  it("should reset token on logout" , () => {
    const action = {
      type:types.ACTION_LOGOUT.SUCCESS
    };
    const state = new myRecord({
      token: "123456",
      pathToRedirect: "/mypage",
      firebaseLoaded: true
    });
    const newState  = reducer(state,action);
    expect(newState.get("token")).toEqual("");
  });

  it("should set redirect path" , () => {
    const action = {
      type:types.ACTION_SET_PATH_TO_REDIRECT.ACTION,
      pathToRedirect:"/redirect"
    };
    const newState = reducer(undefined,action);
    expect(newState.get("pathToRedirect")).toEqual("/redirect");
  });

  it("reset path to redirect" , () => {
    const action = {
      type: types.ACTION_RESET_PATH_TO_REDIRECT.ACTION   
    };
    const state = new myRecord({
      token: "123456",
      pathToRedirect: "/redirect",
      firebaseLoaded: true
    });
    const newState = reducer(state,action);
    expect(newState.get("pathToRedirect")).toEqual("/mypage");
  });

  it("should set user data" , () => {
    const action = {
      type: types.ACTION_SET_USER_DATA.ACTION,
      token:"1234",
      uid:"uid1"
    };
    const newState = reducer(undefined,action);
    expect(newState.get("token")).toEqual("1234");
    expect(newState.get("uid")).toEqual("uid1");
  });

});