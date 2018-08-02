
import { Component } from 'react';
import {connect} from 'react-redux';

import LandingPage from '../modules/app/containers/LandingPage';
import "../assets/scss/material-kit-react.scss";
import { withI18next } from '../lib/withI18next';

class MainPage extends Component {

  
  static async getInitialProps({ store }) {
    // console.log("MainPage page state",store.getState());
  }

  render() {
    console.log("MainPage",this.props);
    return <LandingPage />;
  }
}



export default connect( state => state)(withI18next(['common','authdata'])(MainPage));