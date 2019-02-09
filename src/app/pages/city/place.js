import React , { Component } from "react";
import { withRouter } from "next/router";

import PlaceHome from "../../modules/place/containers/PlaceHome";
import withAuth from "../../lib/withAuth";
import { fetchPlaceDetails } from "../../modules/place/store/action";

class PlacePage extends Component {

  static async getInitialProps( { store , query , uid } ) {
    const { cityId , placeId } = query;
  
    await store.dispatch(fetchPlaceDetails(cityId , placeId , uid));
    
    return { cityId, id:placeId };
  }

  render() {
    
    return <PlaceHome  {...this.props} />;
  }
}

export default withRouter(
  withAuth(PlacePage , ["placedata", "common"])
);
