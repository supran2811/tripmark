import React , { Component } from 'react';

import HomePage from '../modules/home/containers/HomePage';
import { withI18next } from '../lib/withI18next';

class Home extends Component {
  
  render() {
    return <HomePage />
  }
}

export default ((withI18next(['common'])((Home))));