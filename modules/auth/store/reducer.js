import { ACTION_LOGIN, ACTION_SIGNUP ,ACTION_SET_TOKEN, ACTION_LOGOUT } from "./actionTypes";


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
     case ACTION_LOGOUT.SUCCESS :{
       return {
         ...state,
         authenticated:false,
         token:''
       }
     }
  }
  return state;
}