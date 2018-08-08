import React , { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from '../modules/home/containers/HomePage';
import { withI18next } from '../lib/withI18next';
import { auth } from  '../firebase'

class Home extends Component {
  
  static async getInitialProps(context) {
    //  console.log("getInitialProps",context.store.getState());
  
  }

  render() {
    return <HomePage />
  }
}

export default connect()((withI18next(['common'])((Home))));