import { ACTION_LOGIN, ACTION_LOGOUT ,ACTION_SIGNUP } from "./actionTypes";

export function loginRequest(email,password) {
  return {
    type:ACTION_LOGIN,
    email,
    password
  }
}

export function signUpRequest(fullName,email,password) {
  return {
    type:ACTION_SIGNUP,
    fullName,
    email,
    password
  }
}

export function logoutRequest() {
  return {
    type:ACTION_LOGOUT
  }
}

