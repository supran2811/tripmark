import React, { Component } from "react";
import PropTypes from "prop-types";
import UserAgent from "express-useragent";

import GridItem from "../../../../components/GridItem";
import PlaceThumbnailView from "../PlaceThumbnailView";
import { Router } from "../../../../routes";


class PlaceResultGrid extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const { places } = nextProps;
    return places != this.props.places;
  }

  render() {

    const { places , translations } = this.props;

    const placesToRender = places
      ? places.map(place => {
        return (
          <GridItem xl = {2} lg={3}  md = {4}   sm={12} key={place["place_id"]}>
            <PlaceThumbnailView
              onMainClick={this.openPlaceDetails}
              onBookmarkClick={this.toggleBookmark}
              place={place}
              translations = {translations}
            />
          </GridItem>
        );
      })
      : null;

    return placesToRender;
  }
  openPlaceDetails = placeId => {
    if("navigator" in window) {
      const userAgent = UserAgent.parse(navigator.userAgent);
      if(userAgent.isDesktop) {
        window.open(
          `${window.location.origin}/city/${this.props.cityId}/place/${placeId}`,
          "_blank"
        );    
      }
      else {
        Router.pushRoute("city/place", { cityId: this.props.cityId , placeId:placeId });
      }
    }
    else {
      window.open(
        `${window.location.origin}/city/${this.props.cityId}/place/${placeId}`,
        "_blank"
      );
    }
    
  };

  toggleBookmark = (place, remove) => {
    console.log("Inside toggle bookmark ",place);
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
  translations:PropTypes.func
};

export default PlaceResultGrid;
