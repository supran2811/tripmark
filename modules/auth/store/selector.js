import { NAME } from "./constants";

export const isAuthenticated = state => {
  return state[NAME].authenticated;
};

export const getToken = state => {
  return state[NAME].token;
};

export const getPathToRedirect = state => state[NAME].pathToRedirect;
