import { createSelector } from "reselect";
import { NAME } from "./constants";

export const getToken = state => state.get(NAME).get("token");
export const isFirebaseLoaded = state => state.get(NAME).get("firebaseLoaded");
export const getPathToRedirect = state => state.get(NAME).get("pathToRedirect");

export const isAuthenticated = createSelector(getToken, token => token !== "");
