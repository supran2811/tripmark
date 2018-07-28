
import { Component } from 'react';

import LoginPage from '../modules/auth/containers/LoginPage';
import "../assets/scss/material-kit-react.scss";
import { withI18next } from '../lib/withI18next';

class MainPage extends Component {
  render() {
    return <LoginPage />;
  }
}

export default withI18next(['common','authdata'])(MainPage);