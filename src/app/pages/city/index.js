import React , { Component } from "react";
import { withRouter } from "next/router";

import withAuth from "../../lib/withAuth";
import CityHome from "../../modules/place/containers/CityHome";
import { fetchCityDetails } from "../../modules/place/store/action";

class CityPage extends Component {

  static async getInitialProps( { store , query , uid } ) {
    const { cityId } = query;
  
    await store.dispatch(fetchCityDetails(cityId , uid));
    
    return {};
  }

  render() {
    return <CityHome  {...this.props} />;
  }
}

export default withRouter(
  withAuth(CityPage,["placedata", "common"])
);
