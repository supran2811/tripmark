import {fork,takeEvery,put} from 'redux-saga/effects';

import { auth } from '../../../firebase';
import { ACTION_LOGIN, ACTION_SIGNUP } from "./actionTypes";

export function* doSignUp(action) {
  console.log("Inside doSignUp",action);
  try{
     yield put({type:ACTION_SIGNUP.PENDING});
 
     //////Call method to perform login/////
     
     const authUser = auth.doCreateUser(action.email,action.password);

     console.log("after create user ",authUser);

     yield put({type:ACTION_SIGNUP.SUCCESS , user:{name:action.fullName , email:action.email}});
   } catch(error) {
     yield put({type:ACTION_SIGNUP.ERROR , error});
   }
 }

export function* doLogin(action) {
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