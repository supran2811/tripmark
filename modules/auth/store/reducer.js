import { ACTION_LOGIN, ACTION_SIGNUP ,ACTION_SET_TOKEN } from "./actionTypes";


const initialState = {
  authenticated:false,
  token:''
}

export default function authReducer(state=initialState , action) {
  switch(action.type) {
     case ACTION_SET_TOKEN.SUCCESS : {
       return {
         ...state,
         authenticated:true,
         token:action.data
       }
     }
  }
  return state;
}