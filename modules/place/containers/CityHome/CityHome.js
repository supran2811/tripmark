import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "../../../../routes";
import Add from "@material-ui/icons/Add";
import PropTypes from "prop-types";

import PlaceResultGrid from "../../components/PlaceResultGrid";
import {
  getSelectedCityDetails,
  getBookmarkedPlacesForCity
} from "../../store/selector";
import {
  fetchCityDetails,
  fetchBookmarkPlaces,
  deleteBookmarkAction
} from "../../store/action";
import Parallax from "../../../../components/Parallax";
import Button from "../../../../components/CustomButtons";
import { getOptimalBGImageUrl } from "../../../../google/places";
import { withGoogleApiLibs } from "../../../../lib/withLibs";
import cityHomeStyle from "./cityHomeStyle";
import AppHeader from "../../../app/components/AppHeader";
import PageLoader from "../../../app/components/PageLoader";
import PhotoView from "../../components/PhotoView";
import GridContainer from "../../../../components/GridContainer";

class CityHome extends Component {
  state = {
    showPhotoViewer: false
  };

  placeRef = React.createRef();

  componentDidMount() {
    const { city, dispatch, query, google, id } = this.props;

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
    const { city, dispatch, google, id, places, isBookmarked } = this.props;
    
    if (
      (!city && id && id !== "") ||
      (city && id && city.get("place_id") !== id)
    ) {
      dispatch &&
        dispatch(fetchCityDetails(google, this.placeRef, id)) &&
        dispatch(fetchBookmarkPlaces(id));
    }
  }

  openAddFavoritePlace(city) {
    Router.pushRoute("city/addfav", { cityId: city.get("place_id") });
  }

  render() {
    const { city, t, google, classes, places, id } = this.props;

    return (
      <div>
        {city ? (
          <React.Fragment>
            <AppHeader
              color="transparent"
              fixed
              isAuthenticated
              t={t}
              google={google}
              selectedCityName={city ? city.get("name") : ""}
            />
            {this.renderCityDetails(city, classes, t)}
            {this.state.showPhotoViewer && (
              <PhotoView
                photos={city.get("photos").toJSON()}
                onCloseClicked={this.closePhotoViewer}
              />
            )}
            {places && (
              <GridContainer className={classes.content}>
                <PlaceResultGrid
                  places={places}
                  cityId={id}
                  onRemoveBookmarkClick={this.removeBookmark}
                />
              </GridContainer>
            )}
          </React.Fragment>
        ) : (
          this.renderDefault()
        )}
        <div ref={this.placeRef} />
      </div>
    );
  }

  renderCityDetails(city, classes, t) {
    return (
      <React.Fragment>
        <Parallax
          small
          image={getOptimalBGImageUrl(city.get("photos"), window.innerWidth)}
        >
          <div className={classes.container}>
            <Button
              size="lg"
              onClick={() => this.openAddFavoritePlace(city)}
              className={classes.addPlaceButton}
            >
              <Add /> {t("addYourFavorite")}
            </Button>
            <Button
              size="lg"
              onClick={this.viewPhoto}
              className={classes.addPlaceButton}
            >
              {t("viewPhotos")}
            </Button>
          </div>
        </Parallax>
      </React.Fragment>
    );
  }

  renderDefault() {
    return <PageLoader />;
  }

  viewPhoto = () => {
    this.setState({ showPhotoViewer: true });
  };

  closePhotoViewer = () => {
    this.setState({ showPhotoViewer: false });
  };

  removeBookmark = placeId => {
    const { city, dispatch } = this.props;
    const { place_id: cityId } = city.toJSON();
    dispatch(deleteBookmarkAction(cityId, placeId));
  };
}

const mapStateToProps = state => {
  return {
    city: getSelectedCityDetails(state),
    places: getBookmarkedPlacesForCity(state)
  };
};

CityHome.propTypes = {
  city:PropTypes.object.isRequired,
  dispatch:PropTypes.func.isRequired,
  query:PropTypes.object,
  id:PropTypes.string,
  google:PropTypes.object,
  places:PropTypes.array,
  isBookmarked:PropTypes.func.isRequired,
  t:PropTypes.func.isRequired,
  classes:PropTypes.object.isRequired
};

export default connect(mapStateToProps)(
  withGoogleApiLibs(CityHome, ["placedata", "common"], cityHomeStyle)
);
