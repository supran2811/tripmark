import {fork,takeEvery,put} from 'redux-saga/effects';

import { auth } from '../../../firebase';
import { ACTION_LOGIN, ACTION_SIGNUP, ACTION_SET_TOKEN, ACTION_GOOGLE_SIGNUP, ACTION_LOGOUT } from "./actionTypes";

export function* doSignUp(action) {
  console.log("Inside doSignUp",action);
  try{
     yield put({type:ACTION_SIGNUP.PENDING});
 
     //////Call method to perform signup/////
     
     yield auth.doCreateUser(action.email,action.password);
   
     yield auth.doUpdateProfile(action.fullName);
  
     yield put({ type:ACTION_SIGNUP.SUCCESS });

    //  Router.replace({pathname:'/home'});
   } catch(error) {
     yield put({type:ACTION_SIGNUP.ERROR , error});
   }
 }

export function* doSignUpWithGoogle() {
  console.log("Inside doSignUpWithGoogle");
  try {
    yield auth.doGoogleSignIn();
    yield put({ type:ACTION_GOOGLE_SIGNUP.SUCCESS });
  } catch(error) {
    console.log("Inside doSignUpWithGoogle",error);
    yield put({type:ACTION_GOOGLE_SIGNUP.ERROR , error});
  }
} 

export function* doLogin(action) {
 try{
    yield put({type:ACTION_LOGIN.PENDING});
    
    //////Call method to perform login/////
    yield auth.doSignInUser(action.email,action.password);
    
    yield put({type:ACTION_LOGIN.SUCCESS});
  } catch(error) {
    yield put({type:ACTION_LOGIN.ERROR , error});
  }
}

export function* doSetToken() {
  try {
    yield put({type:ACTION_SET_TOKEN.PENDING});

    const token = yield auth.getToken();

    yield put({type:ACTION_SET_TOKEN.SUCCESS , data:token});

  } catch(error) {
    yield put({type:ACTION_SET_TOKEN.ERROR});
  }
}

export function* doLogOut() {
  try{
    yield put({type:ACTION_LOGOUT.PENDING});
    yield auth.doSignOut();
    yield put({type:ACTION_LOGOUT.SUCCESS});
  } catch(error) {
    yield put({type:ACTION_LOGOUT.ERROR , error});
  }
}

export default function* saga() {
  yield fork(takeEvery,ACTION_LOGIN.ACTION , doLogin);
  yield fork(takeEvery,ACTION_SIGNUP.ACTION , doSignUp);
  yield fork(takeEvery,ACTION_SET_TOKEN.ACTION , doSetToken);
  yield fork(takeEvery,ACTION_GOOGLE_SIGNUP.ACTION , doSignUpWithGoogle);
  yield fork(takeEvery,ACTION_LOGOUT.ACTION , doLogOut);
}