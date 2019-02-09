import React, { Component } from "react";
import { connect } from "react-redux";
import Add from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import { Typography, Zoom } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import RegularButton from "@material-ui/core/Button";

import { Router } from "../../../../routes";
import GridItem from "../../../../components/GridItem";
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
import { getOptimalBGImageUrl } from "../../../../lib/google/places";
import withLibs, { withGoogleApiLibs } from "../../../../lib/withLibs";
import cityHomeStyle from "./cityHomeStyle";
import AppHeader from "../../../app/components/AppHeader";
import PageLoader from "../../../app/components/PageLoader";
import PhotoView from "../../components/PhotoView";
import GridContainer from "../../../../components/GridContainer";
import { logoutRequest } from "../../../auth/store/action";

export class CityHome extends Component {

  state = {
    showPhotoViewer: false
  };
 
  openAddFavoritePlace(city) {
    Router.pushRoute("city/addfav", { cityId: city.get("place_id") });
  }

  render() {
    const { city, t , classes, places , theme , user } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    return (
      <div>
        {city ? (
          <React.Fragment>
            <AppHeader
              color="primary"
              fixed
              isAuthenticated
              t={t}
              googleAutoComplete
              user={user}
              selectedCityName={city ? city.get("name") : ""}
              logOut={this.doLogOut}
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
                <React.Fragment>
                  <GridItem xs={12}>
                    <Typography gutterBottom variant="title" component="h4" noWrap>
                      {t("markedPlaces")}
                    </Typography>
                  </GridItem>
                  <PlaceResultGrid
                    places={places}
                    cityId={city.get("place_id")}
                    onRemoveBookmarkClick={this.removeBookmark}
                    translations={t}
                  />
                </React.Fragment>

              </GridContainer>
            )}
            <Zoom
              in={true}
              timeout={transitionDuration}
              style={{
                transitionDelay: `${transitionDuration.exit}ms`,
              }}
              unmountOnExit
            >
              <RegularButton variant="fab" 
                className={classes.myAddFavAction} 
                color="secondary"
                onClick={this.openAddFavoritePlace.bind(this,city)}>
                <Add />
              </RegularButton>
            </Zoom>
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
          image={getOptimalBGImageUrl(city.get("photos"), typeof window !== "undefined" ?  window.innerWidth : 1024 )}
          className={classes.parrallexClass}
        >
          <div className={classes.container}>
            <Hidden xsDown implementation="css">
              <Button
                onClick={this.openAddFavoritePlace.bind(this,city)}
                className={classes.addPlaceButton}
              >
                <Add /> {t("addYourFavorite")}
              </Button>
            </Hidden>
            <Button
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
    const { city, deleteBookmarkAction } = this.props;
    const { place_id: cityId } = city.toJSON();
    deleteBookmarkAction(cityId, placeId);
  };

  doLogOut = () => {
    this.props.logoutRequest();
  }
}

const mapStateToProps = state => {
  return {
    city: getSelectedCityDetails(state),
    places: getBookmarkedPlacesForCity(state)
  };
};

CityHome.propTypes = {
  logoutRequest: PropTypes.func.isRequired,
  deleteBookmarkAction: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  city: PropTypes.object,
  id: PropTypes.string,
  places: PropTypes.array,
  user: PropTypes.object
};

export default connect(mapStateToProps , {
  logoutRequest,
  deleteBookmarkAction
})(
  withLibs(CityHome, ["placedata", "common"], cityHomeStyle)
);
