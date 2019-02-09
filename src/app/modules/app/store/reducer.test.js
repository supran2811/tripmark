import {Record ,Map } from "immutable";

import reducer from "./reducer";
import * as types from "./actionTypes";

describe("app reducers" , () => {
  const myRecord = Record({
    errorData: undefined,
    pendingRequestCount: 0
  });
  let initialState;

  beforeEach(() => {
    initialState =  new myRecord({
      errorData: undefined,
      pendingRequestCount: 0
    });
  });

  it("Should return the initial state" , () => {
    expect(reducer(undefined , {}).hashCode()).toEqual(initialState.hashCode());
  });

  it("any pending action should increment the pending request count" , () => {
    const action = {
      type:"ACTIONNAME_PENDING"
    };
    const newState = reducer(undefined , action);
    expect(newState.get("pendingRequestCount")).toEqual(1);
  });

  it("any success or cancelled task should decrement count" , () => {
    const pendingAction = {
      type:"ACTIONNAME_PENDING"
    };
    const pendingState = reducer(undefined , pendingAction);  
    
    const action = {
      type:"ACTIONNAME_SUCCESS"
    };
    const newState = reducer(pendingState , action);
    expect(newState.get("pendingRequestCount")).toEqual(0);
  });

  it("any request with error should add error data" , () => {
    const action = {
      type :"ACTIONNAME_ERROR",
      error:{text:"This is error message",status:500}
    };
    const state = reducer(undefined,action);
    expect(state.get("errorData").hashCode()).toEqual(Map({text:"This is error message",status:500}).hashCode());
  });
});