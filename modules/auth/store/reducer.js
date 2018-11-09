import { Map, Record } from "immutable";

import {
  ACTION_SET_TOKEN,
  ACTION_LOGOUT,
  ACTION_SET_PATH_TO_REDIRECT,
  ACTION_RESET_PATH_TO_REDIRECT,
  ACTION_SET_USER_DATA
} from "./actionTypes";

const myRecord = Record({
  token: "",
  uid: "",
  pathToRedirect: "/mypage",
  firebaseLoaded: false
});

const initialState = new myRecord({
  token: "",
  pathToRedirect: "/mypage",
  firebaseLoaded: false
});

export default function authReducer(state = initialState, action) {
  switch (action.type) {
  case ACTION_SET_TOKEN.SUCCESS: {
    return state.merge({
      token: action.data,
      firebaseLoaded: true
    });
  }
  case ACTION_LOGOUT.SUCCESS: {
    return state.merge({
      token: "",
      firebaseLoaded: true
    });
  }
  case ACTION_SET_PATH_TO_REDIRECT.ACTION: {
    return state.merge({ pathToRedirect: action.pathToRedirect });
  }
  case ACTION_RESET_PATH_TO_REDIRECT.ACTION: {
    return state.merge({ pathToRedirect: "/mypage" });
  }
  case ACTION_SET_USER_DATA.ACTION:{
    const { token , uid } = action;
    return state.merge({token,uid});
  }
  }
  return state;
}
