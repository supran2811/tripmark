import React, { Component } from "react";
import { withRouter } from "next/router";

import AddNewPlace from "../../modules/place/containers/AddNewPlace";
import { withI18next } from "../../lib/withI18next";
import withAuth from "../../lib/withAuth";

class AddPlace extends Component {
  render() {
    const { cityId } = this.props.router.query;

    return <AddNewPlace id={cityId} />;
  }
}

export default withRouter(
  withAuth(withI18next(["placedata", "common"])(AddPlace))
);
