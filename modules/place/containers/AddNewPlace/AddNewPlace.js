import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import Close from "@material-ui/icons/Close";
import PropTypes from "prop-types";

import GridContainer from "../../../../components/GridContainer";
import GridItem from "../../../../components/GridItem";
import { withGoogleApiLibs } from "../../../../lib/withLibs";
import addNewPlaceStyle from "./addNewPlaceStyle";
import AppHeader from "../../../app/components/AppHeader";
import {
  getSelectedCityDetails,
  getPredictions,
  getPlaces,
  getNextToken
} from "../../store/selector";
import {
  fetchCityDetails,
  autoCompleteSearch,
  clearSuggestion,
  textSearch,
  addBookmark,
  fetchBookmarkPlaces,
  deleteBookmarkAction
} from "../../store/action";
import AutoComplete from "../../components/AutoComplete";
import PlaceResultGrid from "../../components/PlaceResultGrid";
import { isLoading } from "../../../app/store/selector";
import PageLoader from "../../../app/components/PageLoader";
import PaginationComponent from "../../../../hoc/PaginationComponent";
import { getPhotoUrl } from "../../../../google/places";

class AddNewPlace extends Component {


  placeRef = React.createRef();

  componentDidMount() {
    const { city, dispatch, id, google } = this.props;

    if (
      (!city && id && id !== "") ||
      (city && id && city.get("place_id") !== id)
    ) {
      dispatch &&
        dispatch(fetchCityDetails(google, this.placeRef, id)) &&
        dispatch(fetchBookmarkPlaces(id));
    }
  }

  componentDidUpdate() {
    const { city, dispatch, id } = this.props;

    if (
      (!city && id && id !== "") ||
      (city && id && city.get("place_id") !== id)
    ) {
      dispatch &&
        dispatch(fetchCityDetails(google, this.placeRef, id)) &&
        dispatch(fetchBookmarkPlaces(id));
    }
  }

  handleClose() {
    Router.back();
  }

  render() {
    const { classes, t, city } = this.props;

    const rightHeaderLinks = {
      headerElements: {
        Close: {
          icon: <Close className={classes.icons} />,
          type: "Button",
          isExternal: false,
          handleClick: this.handleClose,
          toolTipText: "",
          color: "transparent"
        }
      }
    };

    return (
      <React.Fragment>
        <AppHeader
          color="primary"
          headerTitle={t("addYourFavorite")}
          rightLinks={rightHeaderLinks}
        />
        {city ? this.renderMainContent() : this.renderLoading()}
        <div ref={this.placeRef} />
      </React.Fragment>
    );
  }

  renderMainContent = () => {
    const {
      classes,
      t,
      suggestions,
      places,
      loading,
      id
    } = this.props;
    
    return (
      <GridContainer className={classes.container}>
        <GridItem xs={12}>
          <AutoComplete
            translation={t}
            fetchSuggestions={this.fetchSuggestions}
            performSearch={this.searchText}
            suggestions={suggestions}
            isLoading={loading}
          />
        </GridItem>
        <PaginationComponent
          onPagination={this.searchTextNext}
          loading={loading}
        >
          <PlaceResultGrid
            places={places}
            cityId={id}
            onBookmarkClick={this.bookmarkPlace}
            onRemoveBookmarkClick={this.removeBookmark}
          />
        </PaginationComponent>
      </GridContainer>
    );
  };

  renderLoading() {
    return <PageLoader />;
  }

  fetchSuggestions = query => {
    const { dispatch, city } = this.props;

    const latlngObj = city.get("geometry")
      ? city.get("geometry").get("location")
      : undefined;
    const radius = "100000";

    const params = { latlngObj, radius };

    dispatch(autoCompleteSearch(query, params));
  };

  searchText = query => {
    const { dispatch, city } = this.props;
    const latlngObj = city.get("geometry")
      ? city.get("geometry").get("location")
      : undefined;
    const radius = "100000";

    const params = { latlngObj, radius };
    dispatch(clearSuggestion());
    dispatch(textSearch(query, params));
  };

  searchTextNext = () => {
    const { dispatch, nextToken } = this.props;
    if (nextToken) {
      const query = { pagetoken: nextToken };
      dispatch(textSearch(query, {}));
    }
  };

  bookmarkPlace = place => {
    const { city, dispatch } = this.props;
    
    const { name, place_id, photos, geometry } = city.toJSON();

    const cityToSave = {
      place_id,
      name,
      photoUrl: photos ? getPhotoUrl(photos[0]["photo_reference"], 280) : null,
      location: { ...geometry.location }
    };

    dispatch(addBookmark(cityToSave, place));
  };

  removeBookmark = placeId => {
    const { city, dispatch } = this.props;
    const { place_id: cityId } = city.toJSON();
    dispatch(deleteBookmarkAction(cityId, placeId));
  };
}

const mapStateToProps = state => ({
  city: getSelectedCityDetails(state),
  suggestions: getPredictions(state),
  places: getPlaces(state),
  loading: isLoading(state),
  nextToken: getNextToken(state)
});

AddNewPlace.propTypes = {
  city:PropTypes.object.isRequired,
  dispatch:PropTypes.func.isRequired,
  id:PropTypes.string,
  google:PropTypes.object,
  classes:PropTypes.object.isRequired,
  t:PropTypes.func.isRequired,
  suggestions:PropTypes.array,
  places:PropTypes.array,
  loading:PropTypes.bool,
  nextToken:PropTypes.string
};

export default connect(mapStateToProps)(
  withGoogleApiLibs(AddNewPlace, ["placedata", "common"], addNewPlaceStyle)
);
