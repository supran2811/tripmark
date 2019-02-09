import {Record ,Map } from "immutable";

import { hasError, isLoading } from "./selector";

describe("app selector with error and loading" , () => {

  let initialState;
  const moduleName = "app";
  const myRecord = Record({
    errorData: undefined,
    pendingRequestCount: 0
  });

  beforeEach(() => {
    initialState = Map(
      {[moduleName]:new myRecord({
        errorData: Map({
          text:"Error",
          status:500
        }),
        pendingRequestCount: 0
      })}
    ); 
  });

  it("hasError return correct status" ,() => {
    expect(hasError(initialState)).toBeTruthy();
  });

  it("loading status is also returned correctly for no pending request" , () => {
    expect(isLoading(initialState)).toBeFalsy();
  });
});

describe("app selector without error" , () => {

  let initialState;
  const moduleName = "app";
  const myRecord = Record({
    errorData: undefined,
    pendingRequestCount: 0
  });

  beforeEach(() => {
    initialState = Map(
      {[moduleName]:new myRecord({
        errorData: undefined,
        pendingRequestCount: 1
      })}
    ); 
  });

  it("hasError return correct status" ,() => {
    expect(hasError(initialState)).toBeFalsy();
  });
  
  it("loading status is also returned correctly for pending request" , () => {
    expect(isLoading(initialState)).toBeTruthy();
  });
});

