import {fork,takeEvery} from 'redux-saga/effects';

import { ACTION_LOGIN } from "./actionTypes";

export function* doLogin() {
  
  try{
    yield put({type:ACTION_LOGIN.PENDING});

    //////Call method to perform login/////

    yield put({type:ACTION_LOGIN.SUCCESS , data:{fullName:'Supran Sengupta',email:'supransengupta@gmail.com'}});
  } catch(error) {
    yield put({type:ACTION_LOGIN.ERROR , error});
  }
}

export default function* saga() {
  yield fork(takeEvery,ACTION_LOGIN.ACTION , doLogin);
}