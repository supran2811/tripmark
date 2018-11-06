import { Component } from "react";

import LandingPage from "../modules/app/containers/LandingPage";
import "../assets/scss/material-kit-react.scss";
import { withI18next } from "../lib/withI18next";
import withoutAuth from "../lib/withoutAuth";



class MainPage extends Component {

  render() {
    return <LandingPage />;
  }
}

export default withoutAuth(withI18next(["common", "authdata"])(MainPage));
