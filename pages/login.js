import { Component } from "react";

import LoginPage from "../modules/auth/containers/LoginPage";
import "../assets/scss/material-kit-react.scss";
import withoutAuth from "../lib/withoutAuth";

class Login extends Component {
  
  render() {
    return <LoginPage />;
  }
}

export default withoutAuth(Login,["common", "authdata"]);
