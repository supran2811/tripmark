import React, { Component } from "react";
import PropTypes from "prop-types";

import GridItem from "../../../../components/GridItem";
import CityThumbnailView from "../CityThumbnailView";


class CityResultGrid extends Component {
  render() {
    const { cities } = this.props;
    const citiesToRender = cities ? cities.map(this.renderCity) : null;
    return citiesToRender;
  }

  renderCity = city => {
    return (
      <GridItem xs={3} key={city["place_id"]}>
        <CityThumbnailView city={city} />
      </GridItem>
    );
  };
}


CityResultGrid.propTypes = {
  cities : PropTypes.array
};

export default CityResultGrid;
