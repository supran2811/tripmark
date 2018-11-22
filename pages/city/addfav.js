import React, { Component } from "react";
import { withRouter } from "next/router";

import AddNewPlace from "../../modules/place/containers/AddNewPlace";
import withAuth from "../../lib/withAuth";
import { getSelectedCityDetails } from "../../modules/place/store/selector";
import { fetchCityDetails } from "../../modules/place/store/action";

class AddPlace extends Component {
  
  static async getInitialProps( { store , query , uid } ) {
    const { cityId } = query;

    if(!getSelectedCityDetails(store.getState())){
      await store.dispatch(fetchCityDetails(cityId , uid));
    }
    
    return {};
  }

  render() {

    return <AddNewPlace {...this.props}/>;
  }
}

export default withRouter(
  withAuth(AddPlace,["placedata", "common"])
);
