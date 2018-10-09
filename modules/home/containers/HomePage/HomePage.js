import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "../../../../routes";
import PropTypes from "prop-types";

import GridContainer from "../../../../components/GridContainer";
import homePageStyle from "./homePageStyle";
import GridItem from "../../../../components/GridItem";
import { withGoogleApiLibs } from "../../../../lib/withLibs";
import AppHeader from "../../../app/components/AppHeader";
import GoogleAutoComplete from "../../../../components/GoogleAutoComplete";
import { resetCityDetails } from "../../../place/store/action";

class HomePage extends Component {

  mapRef = React.createRef();

  componentDidMount() {
    this.props.dispatch(resetCityDetails());
  }

  render() {
    const { classes, t } = this.props;

    return (
      <div>
        <AppHeader color="primary" fixed isAuthenticated={true} t={t} />
        <GridContainer className={classes.container}>
          <GridItem xs={12}>
            <GoogleAutoComplete
              searchTypes={["(cities)"]}
              onSuggestSelect={this.onSuggestSelect}
              t={t}
            />
          </GridItem>
          <div ref={this.mapRef} />
        </GridContainer>
      </div>
    );
  }

  onSuggestSelect = item => {
    item && Router.pushRoute("city", { cityId: item.placeId });
  };
}

HomePage.propTypes = {
  dispatch:PropTypes.func.isRequired,
  classes:PropTypes.object.isRequired,
  t:PropTypes.func.isRequired
};

export default connect()(
  withGoogleApiLibs(HomePage, ["homedata", "common"], homePageStyle)
);
