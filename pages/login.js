import { Component } from "react";

import LoginPage from "../modules/auth/containers/LoginPage";
import "../assets/scss/material-kit-react.scss";
import { withI18next } from "../lib/withI18next";
import withoutAuth from "../lib/withoutAuth";

class Login extends Component {
  render() {
    return <LoginPage />;
  }
}

export default withoutAuth(withI18next(["common", "authdata"])(Login));
