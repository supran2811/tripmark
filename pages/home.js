import React , { Component } from 'react';

import HomePage from '../modules/home/containers/HomePage';
import { withI18next } from '../lib/withI18next';

class Home extends Component {
  
  render() {
    const { t } = this.props;
    
    console.log("translated value",t('searchBoxPlaceHolder'))
    
    return <HomePage />
  }
}

export default withI18next(['common','homedata'])(Home);