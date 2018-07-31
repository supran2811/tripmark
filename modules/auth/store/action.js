import { ACTION_LOGIN, ACTION_LOGOUT } from "./actionTypes";

export function loginRequest() {
  return {
    type:ACTION_LOGIN
  }
}

export function logoutRequest() {
  return {
    type:ACTION_LOGOUT
  }
}