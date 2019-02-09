import { fork, takeEvery, put , call ,all } from "redux-saga/effects";

import { auth } from "../../../lib/firebase";
import {
  ACTION_LOGIN,
  ACTION_SIGNUP,
  ACTION_SET_TOKEN,
  ACTION_GOOGLE_SIGNUP,
  ACTION_LOGOUT
} from "./actionTypes";
import { CLEAR_BOOKMARKS, RESET_CITY_DETAILS } from "../../place/store/actionTypes";
import { sendLoginRequest, sendLogoutRequest } from "../../../service/networkService";

export function* doSignUp(action) {
  try {
    yield put({ type: ACTION_SIGNUP.PENDING });

    //////Call method to perform signup/////

    yield call(auth.doCreateUser,action.email, action.password);

    yield call(auth.doUpdateProfile, action.fullName);

    yield put({ type: ACTION_SIGNUP.SUCCESS });

    //  Router.replace({pathname:'/home'});
  } catch (error) {
    yield put({ type: ACTION_SIGNUP.ERROR, error });
  }
}

export function* doSignUpWithGoogle() {
  try {
    yield put({ type: ACTION_GOOGLE_SIGNUP.PENDING });
    yield call(auth.doGoogleSignIn);
    yield put({ type: ACTION_GOOGLE_SIGNUP.SUCCESS });
  } catch (error) {
    yield put({ type: ACTION_GOOGLE_SIGNUP.ERROR, error });
  }
}

export function* doLogin(action) {
  try {
    yield put({ type: ACTION_LOGIN.PENDING });

    //////Call method to perform login/////
    yield call(auth.doSignInUser,action.email, action.password);

    yield put({ type: ACTION_LOGIN.SUCCESS });
  } catch (error) {
    yield put({ type: ACTION_LOGIN.ERROR, error });
  }
}

export function* doSetToken() {
  try {
    yield put({ type: ACTION_SET_TOKEN.PENDING });

    const token = yield call(auth.getToken);

    const uid = yield call(auth.getUserId);

    const username = yield call(auth.getUserName);

    const profilePhotoUrl = yield call(auth.getProfilePhotoUrl);

    const user = { token , uid , username , profilePhotoUrl};

    const response = yield call(sendLoginRequest,user);

    yield put({ type: ACTION_SET_TOKEN.SUCCESS, data: token });
  } catch (error) {
    yield put({ type: ACTION_SET_TOKEN.ERROR });
  }
}

export function* doLogOut() {
  try {
    yield put({ type: ACTION_LOGOUT.PENDING });
    yield call(auth.doSignOut);
    const response = yield call(sendLogoutRequest);
    yield put({type:CLEAR_BOOKMARKS.ACTION});
    yield put({type:RESET_CITY_DETAILS.ACTION});
    yield put({ type: ACTION_LOGOUT.SUCCESS });
    
  } catch (error) {
    yield put({ type: ACTION_LOGOUT.ERROR, error });
  }
}

export default function* saga() {
  yield all([
    fork(takeEvery, ACTION_LOGIN.ACTION, doLogin),
    fork(takeEvery, ACTION_SIGNUP.ACTION, doSignUp),
    fork(takeEvery, ACTION_SET_TOKEN.ACTION, doSetToken),
    fork(takeEvery, ACTION_GOOGLE_SIGNUP.ACTION, doSignUpWithGoogle),
    fork(takeEvery, ACTION_LOGOUT.ACTION, doLogOut)
  ]);
}
