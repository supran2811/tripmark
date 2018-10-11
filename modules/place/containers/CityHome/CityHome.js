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
import { logoutRequest } from "../../../auth/store/action";

class CityHome extends Component {

  state = {
    showPhotoViewer: false
  };

  componentDidMount() {
    const { city, dispatch , id } = this.props;

    if (
      (!city && id && id !== "") ||
      (city && id && city.get("place_id") !== id)
    ) {
      dispatch &&
        dispatch(fetchCityDetails(id));
    }
  }

  componentDidUpdate() {
    const { city, dispatch, google, id, places } = this.props;
    console.log("componentDidUpdate ::: ",city,places);
    if (
      (!city && id && id !== "") ||
      (city && id && city.get("place_id") !== id)
    ) {
      dispatch &&
        dispatch(fetchCityDetails(id));
    }
   
  }

  openAddFavoritePlace(city) {
    Router.pushRoute("city/addfav", { cityId: city.get("place_id") });
  }

  render() {
    const { city, t, google, classes, places, id , dispatch} = this.props;

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
              logOut = {this.doLogOut}
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

  doLogOut = () => {
    this.props.dispatch(logoutRequest());
  }
}

const mapStateToProps = state => {
  return {
    city: getSelectedCityDetails(state),
    places: getBookmarkedPlacesForCity(state)
  };
};

CityHome.propTypes = {
  dispatch:PropTypes.func.isRequired,
  google:PropTypes.object.isRequired,
  classes:PropTypes.object.isRequired,
  t:PropTypes.func.isRequired,
  city:PropTypes.object,
  id:PropTypes.string,
  places:PropTypes.array,
};

export default connect(mapStateToProps)(
  withGoogleApiLibs(CityHome, ["placedata", "common"], cityHomeStyle)
);
