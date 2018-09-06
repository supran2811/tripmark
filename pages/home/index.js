import React , { Component } from 'react';

import HomePage from '../../modules/home/containers/HomePage';
import { withI18next } from '../../lib/withI18next';
import withAuth from '../../lib/withAuth';

class Home extends Component {
  
  render() {
      return <HomePage />
  }
}

export default withAuth(withI18next(['common','homedata'])(Home));