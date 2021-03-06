import {Record } from "immutable";
import { RESET_ERROR } from "./actionTypes";

const myRecord = Record({
  errorData: undefined,
  pendingRequestCount: 0
});
const initialState = new myRecord({
  errorData: undefined,
  pendingRequestCount: 0
});

export default function appReducer(state = initialState, action) {
 
  if(action && action.type) {
    if (action.type.endsWith("PENDING")) {
    
      const pendingRequestCount = state.get("pendingRequestCount") + 1;
    
      return state.merge({
        errorData: undefined,
        pendingRequestCount
      });
    } else if (
      action.type.endsWith("SUCCESS") ||
      action.type.endsWith("CANCEL")
    ) {
      const pendingRequestCount =
      state.get("pendingRequestCount") > 0
        ? state.get("pendingRequestCount") - 1
        : state.get("pendingRequestCount");
      return state.merge({
        pendingRequestCount
      });
    } else if (action.type.endsWith("ERROR")) {
      const pendingRequestCount =
      state.get("pendingRequestCount") > 0
        ? state.get("pendingRequestCount") - 1
        : state.get("pendingRequestCount");
      return state.merge({
        pendingRequestCount,
        errorData: action.error
          ? action.error
          : { status: "Unable to connect to server" }
      });
    } 
    else if (action.type === RESET_ERROR.ACTION) {
      return state.merge({
        errorData: undefined
      });
    }
  }
  return state;
}
