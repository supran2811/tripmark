import {
  ACTION_LOGIN,
  ACTION_LOGOUT,
  ACTION_SIGNUP,
  ACTION_SET_TOKEN,
  ACTION_GOOGLE_SIGNUP,
  ACTION_SET_PATH_TO_REDIRECT,
  ACTION_RESET_PATH_TO_REDIRECT
} from "./actionTypes";

export function loginRequest(email, password) {
  return {
    type: ACTION_LOGIN.ACTION,
    email,
    password
  };
}

export function setToken() {
  return {
    type: ACTION_SET_TOKEN.ACTION
  };
}

export function signUpRequest(fullName, email, password) {
  return {
    type: ACTION_SIGNUP.ACTION,
    fullName,
    email,
    password
  };
}

export function googleSignUpRequest() {
  return {
    type: ACTION_GOOGLE_SIGNUP.ACTION
  };
}

export function logoutRequest() {
  return {
    type: ACTION_LOGOUT.ACTION
  };
}

export function setRedirectPath(pathToRedirect) {
  return {
    type: ACTION_SET_PATH_TO_REDIRECT.ACTION,
    pathToRedirect
  };
}

export function resetRedirectPath() {
  return {
    type: ACTION_RESET_PATH_TO_REDIRECT.ACTION
  };
}
