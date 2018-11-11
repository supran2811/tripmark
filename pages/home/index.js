import React, { Component } from "react";

import HomePage from "../../modules/home/containers/HomePage";
import withAuth from "../../lib/withAuth";
import { resetCityDetails, fetchBookmarks } from "../../modules/place/store/action";

class Home extends Component {

  static async getInitialProps({ store , query , uid}) {
    console.log("[HomePage] COMING INSIDE getInitialProps " , uid);
    await store.dispatch(resetCityDetails());
    await store.dispatch(fetchBookmarks(uid));
  }
  
  render() {
    return <HomePage {...this.props}/>;
  }
}

export default withAuth( Home ,["common", "homedata"]);
