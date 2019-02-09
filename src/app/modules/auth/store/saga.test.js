import { fork , takeEvery , put ,call} from "redux-saga/effects";

import rootSaga , {
  doSignUp,
  doSignUpWithGoogle,
  doLogin,
  doSetToken,
  doLogOut
} from "./saga";

import {
  ACTION_LOGIN,
  ACTION_SIGNUP,
  ACTION_SET_TOKEN,
  ACTION_GOOGLE_SIGNUP,
  ACTION_LOGOUT
} from "./actionTypes";

import { auth } from "../../../firebase";
import { CLEAR_BOOKMARKS, RESET_CITY_DETAILS } from "../../place/store/actionTypes";
import { sendLoginRequest, sendLogoutRequest } from "../../../service/networkService";

describe("auth root saga" , () => {
  it("It should create root saga" , () => {
    const generator = rootSaga();
    expect(generator.next().value).toEqual([
      fork(takeEvery, ACTION_LOGIN.ACTION, doLogin),
      fork(takeEvery, ACTION_SIGNUP.ACTION, doSignUp),
      fork(takeEvery, ACTION_SET_TOKEN.ACTION, doSetToken),
      fork(takeEvery, ACTION_GOOGLE_SIGNUP.ACTION, doSignUpWithGoogle),
      fork(takeEvery, ACTION_LOGOUT.ACTION, doLogOut)
    ]);
  });
});

describe("auth signup saga" , () =>{
  const action = {
    email:"test@email.com",
    password:"12345678"
  };

  it("should perform signup" , () =>{
    const generator = doSignUp(action);
    let next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_SIGNUP.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(auth.doCreateUser,action.email, action.password));
    next = generator.next().value;
    expect(next).toEqual(call(auth.doUpdateProfile, action.fullName));
    next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_SIGNUP.SUCCESS }));
  });

  it("should handle error while signup",() => {
    const generator = doSignUp(action);
    const error = new Error("Unexpected network error");
    let next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_SIGNUP.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(auth.doCreateUser,action.email, action.password));
    expect(generator.throw(error).value).toEqual(put({ type: ACTION_SIGNUP.ERROR, error }));
  });
});

describe("auth google signup or signin",() => {
  it("should perform signup with google" , () => {
    const generator = doSignUpWithGoogle();
    let next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_GOOGLE_SIGNUP.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(auth.doGoogleSignIn));
    next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_GOOGLE_SIGNUP.SUCCESS }));
  });
  it("should handle error while doing signup from google" , () => {
    const generator = doSignUpWithGoogle();
    const error = new Error("Unexpected network error");
    let next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_GOOGLE_SIGNUP.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(auth.doGoogleSignIn));
    expect(generator.throw(error).value).toEqual(put({ type: ACTION_GOOGLE_SIGNUP.ERROR, error }));
  });
});

describe("auth login saga" , () => {
  const action = {
    email:"test@email.com",
    password:"test1234556"
  };
  it("should perform login",() => {
    const generator = doLogin(action);
    let next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_LOGIN.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(auth.doSignInUser,action.email, action.password));
    next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_LOGIN.SUCCESS }));
  });
  it("should handle error while login",() => {
    const generator = doLogin(action);
    const error = new Error("Unexpected network error");
    let next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_LOGIN.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(auth.doSignInUser,action.email, action.password));
    expect(generator.throw(error).value).toEqual(put({ type: ACTION_LOGIN.ERROR, error }));
  });
});

describe("auth set token saga" , () => {
  let token , uid, username , profilePhotoUrl;
  const user = { token, uid , username , profilePhotoUrl };  

  it("should set token" , () => {
    const generator = doSetToken();
    let next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_SET_TOKEN.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(auth.getToken));
    next = generator.next().value;
    expect(next).toEqual(call(auth.getUserId));
    next = generator.next().value;
    expect(next).toEqual(call(auth.getUserName));
    next = generator.next().value;
    expect(next).toEqual(call(auth.getProfilePhotoUrl));
    next = generator.next().value;
    expect(next).toEqual(call(sendLoginRequest,user));
    next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_SET_TOKEN.SUCCESS, data: user.token }));
  });

  it("should handle error ",() => {
    const generator = doSetToken();
    const error = new Error("Unexpected network error");
    let next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_SET_TOKEN.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(auth.getToken));
    next = generator.next().value;
    expect(next).toEqual(call(auth.getUserId));
    next = generator.next().value;
    expect(next).toEqual(call(auth.getUserName));
    next = generator.next().value;
    expect(next).toEqual(call(auth.getProfilePhotoUrl));
    next = generator.next().value;
    expect(next).toEqual(call(sendLoginRequest,user));
    expect(generator.throw(error).value).toEqual(put({ type: ACTION_SET_TOKEN.ERROR }));
  });
});

describe("auth saga for log out" , () => {
  it("should perform logout" , () => {
    const generator = doLogOut();
    let next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_LOGOUT.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(auth.doSignOut));
    next = generator.next().value;
    expect(next).toEqual(call(sendLogoutRequest));
    next = generator.next().value;
    expect(next).toEqual(put({type:CLEAR_BOOKMARKS.ACTION}));
    next = generator.next().value;
    expect(next).toEqual(put({type:RESET_CITY_DETAILS.ACTION}));
    next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_LOGOUT.SUCCESS }));
  });
  it("should handle error while logging out" , () => {
    const generator = doLogOut();
    const error = new Error("Unexpected network error");
    let next = generator.next().value;
    expect(next).toEqual(put({ type: ACTION_LOGOUT.PENDING }));
    next = generator.next().value;
    expect(next).toEqual(call(auth.doSignOut));
    next = generator.next().value;
    expect(next).toEqual(call(sendLogoutRequest));
    expect(generator.throw(error).value).toEqual(put({ type: ACTION_LOGOUT.ERROR, error  }));
  });
});