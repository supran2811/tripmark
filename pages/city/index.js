import { Component } from 'react';
import { withRouter } from 'next/router';

import { withI18next } from '../../lib/withI18next';
import CityHome from '../../modules/place/containers/CityHome';

class CityPage extends Component {
    
  render() {

    const { cityId } = this.props.router.query;

    return <CityHome id = { cityId }/>
  }
}

export default withRouter(withI18next(['placedata','common'])(CityPage));