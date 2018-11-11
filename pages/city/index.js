import { Component } from "react";
import { withRouter } from "next/router";

import withAuth from "../../lib/withAuth";
import { withI18next } from "../../lib/withI18next";
import CityHome from "../../modules/place/containers/CityHome";
import { fetchCityDetails } from "../../modules/place/store/action";

class CityPage extends Component {


  static async getInitialProps( { store , query , uid } ) {
    const { cityId } = query;

    console.log("[CityPage] COMING INSIDE getInitialProps ",cityId , uid);
    await store.dispatch(fetchCityDetails(cityId , uid));

    return {};
  }

  render() {
    const { cityId } = this.props.router.query;

    return <CityHome id={cityId} {...this.props} />;
  }
}

export default withRouter(
  withAuth(CityPage,["placedata", "common"])
);
