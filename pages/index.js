
import { Component } from 'react';

import LandingPage from '../modules/app/containers/LandingPage';
import "../assets/scss/material-kit-react.scss";
import { withI18next } from '../lib/withI18next';

class MainPage extends Component {
  
  render() {
    return <LandingPage />;
  }
}



export default (withI18next(['common','authdata'])(MainPage));