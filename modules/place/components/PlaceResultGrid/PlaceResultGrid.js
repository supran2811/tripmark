import React, { Component } from "react";
import PropTypes from "prop-types";

import GridItem from "../../../../components/GridItem";
import PlaceThumbnailView from "../PlaceThumbnailView";

class PlaceResultGrid extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const { places } = nextProps;
    return places != this.props.places;
  }

  render() {
    const { places } = this.props;

    const placesToRender = places
      ? places.map(place => {
        return (
          <GridItem xs={3} key={place["place_id"]}>
            <PlaceThumbnailView
              onMainClick={this.openPlaceDetails}
              onBookmarkClick={this.toggleBookmark}
              place={place}
            />
          </GridItem>
        );
      })
      : null;

    return placesToRender;
  }
  openPlaceDetails = placeId => {
    window.open(
      `${window.location.origin}/city/${this.props.cityId}/place/${placeId}`,
      "_blank"
    );
  };

  toggleBookmark = (place, remove) => {
    remove
      ? this.props.onRemoveBookmarkClick(place["place_id"])
      : this.props.onBookmarkClick(place);
  };
}

PlaceResultGrid.propTypes = {
  cityId:PropTypes.string.isRequired,
  onRemoveBookmarkClick:PropTypes.func,
  onBookmarkClick:PropTypes.func,
  places:PropTypes.array,
};

export default PlaceResultGrid;
