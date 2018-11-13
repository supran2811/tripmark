import { Component } from "react";

import LandingPage from "../modules/app/containers/LandingPage";
import "../assets/scss/material-kit-react.scss";
import withoutAuth from "../lib/withoutAuth";

class MainPage extends Component {

  render() {
    return <LandingPage />;
  }
}

export default withoutAuth(MainPage , ["common", "authdata"]);
