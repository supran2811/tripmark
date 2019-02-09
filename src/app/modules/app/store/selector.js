import { createSelector } from "reselect";
import { NAME } from "./constants";

export const getErrorData = state => state.get(NAME).get("errorData");

export const getPendingRequestCount = state =>
  state.get(NAME).get("pendingRequestCount");

export const hasError = createSelector(
  getErrorData,
  errorData => errorData != undefined
);

export const isLoading = createSelector(
  getPendingRequestCount,
  pendingReqCount => pendingReqCount > 0
);
