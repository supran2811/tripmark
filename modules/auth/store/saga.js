import {fork,takeEvery} from 'redux-saga/effects';

import { ACTION_LOGIN, ACTION_SIGNUP } from "./actionTypes";

export function* doSignUp() {
  try{
     yield put({type:ACTION_SIGNUP.PENDING});
 
     //////Call method to perform login/////
 
     yield put({type:ACTION_SIGNUP.SUCCESS , user:{name:action.fullName , email:action.email}});
   } catch(error) {
     yield put({type:ACTION_SIGNUP.ERROR , error});
   }
 }

export function* doLogin() {
 try{
    yield put({type:ACTION_LOGIN.PENDING});

    //////Call method to perform login/////

    yield put({type:ACTION_LOGIN.SUCCESS , user:{fullName:'Supran Sengupta',email:'supransengupta@gmail.com'}});
  } catch(error) {
    yield put({type:ACTION_LOGIN.ERROR , error});
  }
}

export default function* saga() {
  yield fork(takeEvery,ACTION_LOGIN.ACTION , doLogin);
  yield fork(takeEvery,ACTION_SIGNUP.ACTION , doSignUp);
}