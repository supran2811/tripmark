import React from "react";

import { mount } from "enzyme";
import  SignUpForm  from "./";
import { wrap } from "module";

describe("Signup form" , () => {
  
  let wrapper , requestLogin , requestSignUp , googleSignUp;
  const translations = {
    "googleSignUpText":"Sign Up with Google",
    "googleLoginText" : "Login with Google",
    "loginLabel":"Login",
    "enterNameInputPlaceholder" :"Full Name...",
    "emailnputPlaceholder":"Email...",
    "passwordInputPlaceholder":"Password",
    "signUpActionText" :"Get started",
    "nameIsRequiredErrorText" : "Name is required",
    "nameLenghtErrorText" : "Name must be more than 4 letters",
    "emailIsRequiredErrorText" : "Email is required",
    "emailLengthErrorText" : "Email format is not correct",
    "passwordIsRequiredErrorText" : "Password is required",
    "passwordLengthErrorText" : "Password must be more than 6 letters",
    "rememberPasswordLabel" :"Remember Password",
    "forgotPasswordLabel" :" Forgot Password"
  };
  beforeEach(() => {
    requestLogin = jest.fn();
    requestSignUp = jest.fn();
    googleSignUp = jest.fn();
    wrapper = mount(
      <SignUpForm t={(key) => translations[key]}
        requestLogin = {requestLogin}
        requestSignUp = {requestSignUp}
        googleSignUp = {googleSignUp}
      />
    );

    expect(wrapper).toBeDefined();
    wrapper = wrapper.childAt(0);
  });

  it("on name change is handled correctly" , () => {
    const nameField = wrapper.find("#fullNameID").find("input");
    nameField.simulate("change", {target:{value:"bbb"}});
    expect(wrapper.state().name.value).toEqual("bbb");
  });

  it("on email change is handled correctly" , () => {
    const emailField = wrapper.find("#emailID").find("input");
    emailField.simulate("change", {target:{value:"test@email.com"}});
    expect(wrapper.state().email.value).toEqual("test@email.com");
  });

  it("on password change is handled correctly" , () => {
    const passwordField = wrapper.find("#passwordID").find("input");
    passwordField.simulate("change", {target:{value:"123456789"}});
    expect(wrapper.state().password.value).toEqual("123456789");
  });

  it("name validation works correctly" , () => {
    const nameField = wrapper.find("#fullNameID").find("input");
    const emailField = wrapper.find("#emailID").find("input");
    const passwordField = wrapper.find("#passwordID").find("input");

    emailField.simulate("change", {target:{value:"test@email.com"}});
    passwordField.simulate("change", {target:{value:"123456789"}});

    const submitButton = wrapper.find("#submitButtonID").find("button");
    submitButton.simulate("click");
    expect(wrapper.state().name.errorLabel).toEqual(translations["nameIsRequiredErrorText"]);
    expect(requestSignUp.mock.calls.length).toBe(0);
    
    nameField.simulate("change", {target:{value:"bbb"}});
    submitButton.simulate("click");
    expect(wrapper.state().name.errorLabel).toEqual(translations["nameLenghtErrorText"]);
    expect(requestSignUp.mock.calls.length).toBe(0);

    nameField.simulate("change", {target:{value:"bbbsfsdf"}});
    submitButton.simulate("click");
    expect(requestSignUp.mock.calls.length).toBe(1);
  });

  it("email validation works correctly" , () => {
    const nameField = wrapper.find("#fullNameID").find("input");
    const emailField = wrapper.find("#emailID").find("input");
    const passwordField = wrapper.find("#passwordID").find("input");

    nameField.simulate("change", {target:{value:"bbbsdfsdf dfsfd"}});
    passwordField.simulate("change", {target:{value:"123456789"}});

    const submitButton = wrapper.find("#submitButtonID").find("button");
    submitButton.simulate("click");
    expect(wrapper.state().email.errorLabel).toEqual(translations["emailIsRequiredErrorText"]);
    expect(requestSignUp.mock.calls.length).toBe(0);
    
    emailField.simulate("change", {target:{value:"test"}});
    submitButton.simulate("click");
    expect(wrapper.state().email.errorLabel).toEqual(translations["emailLengthErrorText"]);
    expect(requestSignUp.mock.calls.length).toBe(0);

    emailField.simulate("change", {target:{value:"test@email.com"}});
    submitButton.simulate("click");
    expect(requestSignUp.mock.calls.length).toBe(1);
  });

  it("password validation works correctly" , () => {
    const nameField = wrapper.find("#fullNameID").find("input");
    const emailField = wrapper.find("#emailID").find("input");
    const passwordField = wrapper.find("#passwordID").find("input");

    nameField.simulate("change", {target:{value:"bbbsdfsdf dfsfd"}});
    emailField.simulate("change", {target:{value:"test@email.com"}});

    const submitButton = wrapper.find("#submitButtonID").find("button");
    submitButton.simulate("click");
    expect(wrapper.state().password.errorLabel).toEqual(translations["passwordIsRequiredErrorText"]);
    expect(requestSignUp.mock.calls.length).toBe(0);
    
    passwordField.simulate("change", {target:{value:"123"}});
    submitButton.simulate("click");
    expect(wrapper.state().password.errorLabel).toEqual(translations["passwordLengthErrorText"]);
    expect(requestSignUp.mock.calls.length).toBe(0);

    passwordField.simulate("change", {target:{value:"12334344455"}});
    submitButton.simulate("click");
    expect(requestSignUp.mock.calls.length).toBe(1);
  });

});

describe("Login form" , () => {
  let wrapper , requestLogin , requestSignUp , googleSignUp;
  const translations = {
    "googleSignUpText":"Sign Up with Google",
    "googleLoginText" : "Login with Google",
    "loginLabel":"Login",
    "enterNameInputPlaceholder" :"Full Name...",
    "emailnputPlaceholder":"Email...",
    "passwordInputPlaceholder":"Password",
    "signUpActionText" :"Get started",
    "nameIsRequiredErrorText" : "Name is required",
    "nameLenghtErrorText" : "Name must be more than 4 letters",
    "emailIsRequiredErrorText" : "Email is required",
    "emailLengthErrorText" : "Email format is not correct",
    "passwordIsRequiredErrorText" : "Password is required",
    "passwordLengthErrorText" : "Password must be more than 6 letters",
    "rememberPasswordLabel" :"Remember Password",
    "forgotPasswordLabel" :" Forgot Password"
  };
  beforeEach(() => {
    requestLogin = jest.fn();
    requestSignUp = jest.fn();
    googleSignUp = jest.fn();
    wrapper = mount(
      <SignUpForm t={(key) => translations[key]}
        requestLogin = {requestLogin}
        requestSignUp = {requestSignUp}
        googleSignUp = {googleSignUp}
        isLogin
      />
    );

    expect(wrapper).toBeDefined();
    wrapper = wrapper.childAt(0);
  });

  it("Name field and Signup button should not be visible" ,() => {
    const nameField = wrapper.find("#fullNameID").find("input");
    expect(nameField.length).toBe(0);
    const submitButton = wrapper.find("#submitButtonID").find("button");
    expect(submitButton.text()).not.toEqual(translations["signUpActionText"]);
  });

  it("Login action should be called" , () => {
    const emailField = wrapper.find("#emailID").find("input");
    const passwordField = wrapper.find("#passwordID").find("input");
    const submitButton = wrapper.find("#submitButtonID").find("button");
    
    emailField.simulate("change", {target:{value:"test@email.com"}});
    passwordField.simulate("change", {target:{value:"123456789"}});
    submitButton.simulate("click");
    expect(requestSignUp.mock.calls.length).toBe(0);
    expect(requestLogin.mock.calls.length).toBe(1);
  });
});