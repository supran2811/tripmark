import { Component } from 'react';

import { withRouter } from 'next/router';
import { withI18next } from '../../lib/withI18next';
import PlaceHome from '../../modules/place/containers/PlaceHome';
import withAuth from '../../lib/withAuth';

class PlacePage extends Component {
  
  render() {
    const { placeId } = this.props.router.query;
    return <PlaceHome id  = {placeId} />
  }
}

export default withRouter(withAuth(withI18next(['placedata','common'])(PlacePage)));