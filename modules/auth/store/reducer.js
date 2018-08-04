import { ACTION_LOGIN, ACTION_SIGNUP } from "./actionTypes";


const initialState = {
  authenticated:false,
  user : null
}

export default function authReducer(state=initialState , action) {
 console.log("Coming here in reducer ",action.type);
  switch(action.type) {
    case ACTION_LOGIN.SUCCESS: 
    case ACTION_SIGNUP.SUCCESS: {
      return {
        ...state,
        user : action.user,
        authenticated:true
      }
    } 
  }
  return state;
}