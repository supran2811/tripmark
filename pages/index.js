import { Component } from "react";

import LandingPage from "../modules/app/containers/LandingPage";
import "../assets/scss/material-kit-react.scss";
import { withI18next } from "../lib/withI18next";
import withoutAuth from "../lib/withoutAuth";

class MainPage extends Component {

  render() {
    return <LandingPage />;
    // return <div style= {{ backgroundColor : "red" , width:"100%"  , height:"500px"}}> MY LANDING PAGE</div>;
  }
}

export default withoutAuth(MainPage , ["common", "authdata"]);//withoutAuth(withI18next(["common", "authdata"])(MainPage));
