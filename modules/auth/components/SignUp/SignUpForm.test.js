import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import  SignUpForm  from "./";

describe("Signup form" , () => {
  
  let wrapper , requestLogin , requestSignUp , googleSignUp;
  
  beforeEach(() => {
    requestLogin = jest.fn();
    requestSignUp = jest.fn();
    googleSignUp = jest.fn();
    wrapper = mount(
      <SignUpForm t={(key) => key}
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
    expect(wrapper.state().name.errorLabel).toEqual("nameIsRequiredErrorText");
    expect(requestSignUp.mock.calls.length).toBe(0);
    
    nameField.simulate("change", {target:{value:"bbb"}});
    submitButton.simulate("click");
    expect(wrapper.state().name.errorLabel).toEqual("nameLenghtErrorText");
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
    expect(wrapper.state().email.errorLabel).toEqual("emailIsRequiredErrorText");
    expect(requestSignUp.mock.calls.length).toBe(0);
    
    emailField.simulate("change", {target:{value:"test"}});
    submitButton.simulate("click");
    expect(wrapper.state().email.errorLabel).toEqual("emailLengthErrorText");
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
    expect(wrapper.state().password.errorLabel).toEqual("passwordIsRequiredErrorText");
    expect(requestSignUp.mock.calls.length).toBe(0);
    
    passwordField.simulate("change", {target:{value:"123"}});
    submitButton.simulate("click");
    expect(wrapper.state().password.errorLabel).toEqual("passwordLengthErrorText");
    expect(requestSignUp.mock.calls.length).toBe(0);

    passwordField.simulate("change", {target:{value:"12334344455"}});
    submitButton.simulate("click");
    expect(requestSignUp.mock.calls.length).toBe(1);
  });

});

describe("Login form" , () => {
  let wrapper , requestLogin , requestSignUp , googleSignUp;
 
  beforeEach(() => {
    requestLogin = jest.fn();
    requestSignUp = jest.fn();
    googleSignUp = jest.fn();
    wrapper = mount(
      <SignUpForm t={(key) => key}
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
    expect(submitButton.text()).not.toEqual("signUpActionText");
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

// describe("SignupForm match snapshot" , () => {
//   let requestLogin = jest.fn();
//   let requestSignUp = jest.fn();
//   let googleSignUp = jest.fn();

//   it("It should match the snapshot for login" , () => {
//     const tree = renderer.create(<SignUpForm t={(key) => key}
//       requestLogin = {requestLogin}
//       requestSignUp = {requestSignUp}
//       googleSignUp = {googleSignUp}
//       isLogin/>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });