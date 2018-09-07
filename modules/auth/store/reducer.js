import { ACTION_SET_TOKEN , ACTION_LOGOUT, ACTION_SET_PATH_TO_REDIRECT, ACTION_RESET_PATH_TO_REDIRECT } from "./actionTypes";


const initialState = {
  authenticated:false,
  token:'',
  pathToRedirect : '/mypage',
  firebaseLoaded:false
}

export default function authReducer(state=initialState , action) {
  switch(action.type) {
     case ACTION_SET_TOKEN.SUCCESS : {
       return {
         ...state,
         authenticated:true,
         token:action.data,
         firebaseLoaded:true
       }
     }
     case ACTION_LOGOUT.SUCCESS :{
       return {
         ...state,
         authenticated:false,
         token:'',
         firebaseLoaded:true
       }
     }
     case ACTION_SET_PATH_TO_REDIRECT.ACTION: {
       console.log("Cming herre ACTION_SET_PATH_TO_REDIRECT",action);
       return {
         ...state,
         pathToRedirect:action.pathToRedirect
       }
     }
     case ACTION_RESET_PATH_TO_REDIRECT: {
       return {
         ...state,
         pathToRedirect:"/mypage"
       }
     }
  }
  return state;
}