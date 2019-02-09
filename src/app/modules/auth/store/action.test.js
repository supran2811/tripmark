import {
  ACTION_LOGIN,
  ACTION_LOGOUT,
  ACTION_SIGNUP,
  ACTION_SET_TOKEN,
  ACTION_GOOGLE_SIGNUP,
  ACTION_SET_PATH_TO_REDIRECT,
  ACTION_RESET_PATH_TO_REDIRECT,
  ACTION_SET_USER_DATA
} from "./actionTypes";
import { loginRequest, setToken, setUserData, signUpRequest, googleSignUpRequest, logoutRequest, setRedirectPath, resetRedirectPath } from "./action";

describe("auth actions", () => {
  it("should create an action to send login request" ,()=>{
    const expectedAction = {
      type: ACTION_LOGIN.ACTION,
      email:"test@email.com",
      password:"test1234"
    };
    expect(loginRequest("test@email.com","test1234")).toEqual(expectedAction);
  });

  it("should create an action to set token" , () => {
    const expectedAction = {
      type:ACTION_SET_TOKEN.ACTION
    };
    expect(setToken()).toEqual(expectedAction);
  });

  it("should create and action to set user data" , () => {
    const expectedAction = {
      type:ACTION_SET_USER_DATA.ACTION,
      token:"123token",
      uid:"uid111"
    };

    expect(setUserData("123token","uid111")).toEqual(expectedAction);

  });

  it("should create action for signup" , () => {
    const expectedAction = {
      type:ACTION_SIGNUP.ACTION,
      fullName:"test firstname",
      email:"test@email.com",
      password:"testpassword"
    };
    expect(signUpRequest("test firstname" ,"test@email.com" , "testpassword")).toEqual(expectedAction);
  });

  it("should create action for google signup" , () => {
    const expectedAction = {
      type: ACTION_GOOGLE_SIGNUP.ACTION
    };
    expect(googleSignUpRequest()).toEqual(expectedAction);
  });

  it("should create logout action" , () => {
    const expectedAction = {
      type: ACTION_LOGOUT.ACTION
    };
    expect(logoutRequest()).toEqual(expectedAction);
  });

  it("should create action to set redirect path" , () => {
    const expectedAction = {
      type:ACTION_SET_PATH_TO_REDIRECT.ACTION,
      pathToRedirect:"/redirect"
    };
    expect(setRedirectPath("/redirect")).toEqual(expectedAction);
  });

  it("should create action to reset redirect path" , () => {
    const expectedAction = {
      type: ACTION_RESET_PATH_TO_REDIRECT.ACTION
    };
    expect(resetRedirectPath()).toEqual(expectedAction);
  });

});