import { NAME } from "./constants";

export const isAuthenticated = state =>  state[NAME].authenticated;

export const getToken = state => state[NAME].token;

export const isFirebaseLoaded = state => state[NAME].firebaseLoaded;

export const getPathToRedirect = state => state[NAME].pathToRedirect;
