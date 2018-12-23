import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import Close from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import GridContainer from "../../../../components/GridContainer";
import GridItem from "../../../../components/GridItem";
import withLibs from "../../../../lib/withLibs";
import addNewPlaceStyle from "./addNewPlaceStyle";
import AppHeader from "../../../app/components/AppHeader";
import {
  getSelectedCityDetails,
  getPredictions,
  getPlaces,
  getNextToken,
  getQueryString
} from "../../store/selector";
import {
  fetchCityDetails,
  autoCompleteSearch,
  clearSuggestion,
  textSearch,
  addBookmark,
  deleteBookmarkAction
} from "../../store/action";
import AutoComplete from "../../components/AutoComplete";
import PlaceResultGrid from "../../components/PlaceResultGrid";
import { isLoading } from "../../../app/store/selector";
import PageLoader from "../../../app/components/PageLoader";
import PaginationComponent from "../../../../hoc/PaginationComponent";
import { getPhotoUrl } from "../../../../google/places";

export class AddNewPlace extends Component {

  static getDerivedStateFromProps(nextProps, state) {
    const { query } = nextProps;
    const label = query ? query.get("label"):null;

    return label ? {label:query.get("label") } : null;
  }

  state = {
    label:""
  }

  componentDidMount() {
    this.props.clearSuggestion();
  }

  handleClose() {
    Router.back();
  }

  render() {
    const { classes, t, city } = this.props;

    const rightHeaderLinks = {
      headerElements: {
        [t("close")]: {
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
      city ? 
        <React.Fragment>
          <AppHeader
            t = {t}
            color="primary"
            headerTitle={t("addYourFavorite")}
            rightLinks={rightHeaderLinks}
            backNavigation
          />
          {this.renderMainContent() }
        </React.Fragment>
        : this.renderLoading()
    );
  }

  renderMainContent = () => {

    const {
      classes,
      t,
      suggestions,
      places,
      loading,
      city
    } = this.props;

    const id = city.get("place_id");

    return (
      <GridContainer className={classes.container}>
        <GridItem xs={12}>
          <AutoComplete
            translation={t}
            fetchSuggestions={this.fetchSuggestions}
            performSearch={this.searchText}
            suggestions={suggestions}
            isLoading={loading}
            cityid = {id}
          />
        </GridItem>
        {
          this.state.label !== "" && 
          (<GridItem xs={12}>
            <Typography className = {classes.labelStyle} gutterBottom variant="title" component="h4">
              {t("searchResultText") + " \""+this.state.label+"\" "}
            </Typography>
          </GridItem>)
        }
        
        <PaginationComponent
          onPagination={this.searchTextNext}
          loading={loading}
        >
          <PlaceResultGrid
            places={places}
            cityId={id}
            onBookmarkClick={this.bookmarkPlace}
            onRemoveBookmarkClick={this.removeBookmark}
            translations = {t}
          />
        </PaginationComponent>
      </GridContainer>
    );
  };

  renderLoading() {
    return <PageLoader />;
  }

  fetchSuggestions = query => {
    const { autoCompleteSearch, city } = this.props;
    const latlngObj = city.get("geometry")
      ? city.get("geometry").get("location").toJSON()
      : undefined;
    const radius = "100000";

    const params = { latlngObj , radius };

    autoCompleteSearch(query, params);
  };

  searchText = query => {
    const { textSearch, clearSuggestion , city } = this.props;
    const latlngObj = city.get("geometry")
      ? city.get("geometry").get("location").toJSON()
      : undefined;
    const radius = "100000";

    const params = { latlngObj, radius };
    clearSuggestion();
    textSearch(query, params);
  };

  searchTextNext = () => {
    const { textSearch, nextToken } = this.props;
    if (nextToken) {
      const query = { pagetoken: nextToken };
      textSearch(query, {});
    }
  };

  bookmarkPlace = place => {
    const { city, addBookmark } = this.props;
    
    const { name, place_id, photos, geometry } = city.toJSON();

    const cityToSave = {
      place_id,
      name,
      photoUrl: photos ? getPhotoUrl(photos[0]["photo_reference"], 280) : null,
      location: { ...geometry.location }
    };

    addBookmark(cityToSave, place);
  };

  removeBookmark = placeId => {
    const { city, deleteBookmarkAction } = this.props;
    const { place_id: cityId } = city.toJSON();
    deleteBookmarkAction(cityId, placeId);
  };
}

const mapStateToProps = state => ({
  city: getSelectedCityDetails(state),
  suggestions: getPredictions(state),
  places: getPlaces(state),
  loading: isLoading(state),
  nextToken: getNextToken(state),
  query:getQueryString(state)
});

AddNewPlace.propTypes = {
  deleteBookmarkAction:PropTypes.func.isRequired,
  addBookmark:PropTypes.func.isRequired,
  textSearch:PropTypes.func.isRequired,
  clearSuggestion:PropTypes.func.isRequired,
  autoCompleteSearch:PropTypes.func.isRequired,
  t:PropTypes.func.isRequired,
  classes:PropTypes.object.isRequired,
  city:PropTypes.object,
  suggestions:PropTypes.array,
  places:PropTypes.array,
  loading:PropTypes.bool,
  nextToken:PropTypes.string,
  query:PropTypes.object
};

export default connect(mapStateToProps , {
  deleteBookmarkAction,
  addBookmark,
  textSearch,
  clearSuggestion,
  autoCompleteSearch
})(
  withLibs(AddNewPlace, ["placedata", "common"], addNewPlaceStyle)
);
