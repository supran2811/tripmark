import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Bookmark from "@material-ui/icons/Bookmark";
import Avatar from "@material-ui/core/Avatar";
import StarRatings from "react-star-ratings";
import { Map, Marker } from "google-maps-react";
import { CardContent, CardActions, CardActionArea } from "@material-ui/core";
import RegularButton from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Hidden } from "@material-ui/core";
import Directions from "@material-ui/icons/Directions";
import Language from "@material-ui/icons/Language";
import Call from "@material-ui/icons/Call";

import withLibs, { withGoogleApiLibs } from "../../../../lib/withLibs";
import {deleteBookmarkAction, addBookmark } from "../../store/action";
import { getSelectedPlace } from "../../store/selector";
import AppHeader from "../../../app/components/AppHeader";
import PageLoader from "../../../app/components/PageLoader";
import Parallax from "../../../../components/Parallax";
import Button from "../../../../components/CustomButtons";
import { getOptimalBGImageUrl, getPhotoUrl, openInGoogleMap } from "../../../../google/places";
import placeHomeStyle from "./placeHomeStyle";
import GridContainer from "../../../../components/GridContainer";
import GridItem from "../../../../components/GridItem";
import Card from "../../../../components/Card";
import PhotoView from "../../components/PhotoView";
import { ADD_BOOKMARK_PENDING, DELETE_BOOKMARK_PENDING } from "../../store/constants";

class PlaceHome extends Component {
  state = {
    expandOpeningHours: false,
    showPhotoViewer: false
  };

  render() {
    const { place, t , classes } = this.props;
    return (
      <div>
        {place ? (
          <React.Fragment>
            <AppHeader color="primary" 
              fixed isAuthenticated t={t} 
              logOut = {this.doLogOut}
              backNavigation
              // changeColorOnScroll={{
              //   height: 100,
              //   color: "primary"
              // }}
            />
            {this.renderPlaceDetails()}
            {this.state.showPhotoViewer && (
              <PhotoView
                photos={place["photos"]}
                onCloseClicked={this.closePhotoViewer}
              />
            )}
            {
              <Hidden smUp implementation="css">
                {this.renderActions()}
              </Hidden>
            }
          </React.Fragment>
        ) : (
          this.renderDefault()
        )}
      </div>
    );
  }

  renderActions = () => {
    const { place, t , classes } = this.props;
    const  { name , 
      geometry , 
      formatted_address,
      international_phone_number,
      website,
      place_id } = place;

    return (
      <Card className = {classes.bottomActions}>
        <IconButton onClick = { () => this.openGoogleMapLink(place_id,formatted_address)}>
          <Directions color="primary" fontSize="large"/>
        </IconButton>
        {
          website && 
          <IconButton onClick = {() => this.openExternalWebsite(website)}>
            <Language color="primary" fontSize="large"/>
          </IconButton>
        }
        {
          international_phone_number && 
          <IconButton onClick = {() => this.openExternalWebsite(`tel:${international_phone_number}`)}>
            <Call color="primary" fontSize="large"/>
          </IconButton>
        }
        
      </Card>
    );
  }

  renderDefault() {
    return <PageLoader />;
  }

  renderPlaceDetails() {
    const { place, classes, t } = this.props;
    console.log("Place pending bookmark status ",place[ADD_BOOKMARK_PENDING],place[DELETE_BOOKMARK_PENDING]);
    const { addBookmarkPending , deleteBookmarkPending }  = place;
    return (
      <React.Fragment>
        <Parallax
          small
          image={getOptimalBGImageUrl(place["photos"],typeof window !== "undefined" ?  window.innerWidth : 1024 )}
        >
          <div className={classes.container}>
            <Hidden xsDown implementation="css">
              <Button
                onClick={this.addRemoveBookmark}
                className={classes.addPlaceButton}
                disabled = {addBookmarkPending || deleteBookmarkPending || false}
              >
                {
                  place.bookmarked ?
                    <React.Fragment>
                      {
                        deleteBookmarkPending ? 
                          <PageLoader type="circular" size = {20}/> 
                          : <Bookmark color="primary"/> 
                      }
                    
                      { t("unmarkAsFavourite") }
                    </React.Fragment>  
                    : <React.Fragment>
                      {
                        addBookmarkPending ? <PageLoader type="circular" size = {20}/> 
                          : <Bookmark color="default"/> 
                      }
                      { t("markAsFavourtie") }
                    </React.Fragment>
                } 
              </Button>
            </Hidden>
            <Button
              onClick={() => this.viewPhoto()}
              className={classes.addPlaceButton}
            >
              {t("viewPhotos")}
            </Button>
          </div>
        </Parallax>
        {this.renderOtherPlaceDetails()}
      </React.Fragment>
    );

  }

  renderOtherPlaceDetails = () => {
    const { classes, place, t } = this.props;
    const {
      rating,
      opening_hours,
      reviews
    } = place;
    return (
      <GridContainer className={classes.mainContent}>
        <GridItem xs={12}>
          {this.renderHeadingSection()}
          {rating && (
            this.renderRating(rating)
          )}
          {opening_hours &&
            this.renderOpeningStatus() }
        </GridItem>
        <GridItem sm={12} md={6} >
          {opening_hours &&
            (opening_hours.weekday_text ? (
              this.renderOpeningHours()
            ) : null)}
        </GridItem>
        <GridItem sm={12} md={6} >
          { this.renderContact() }
        </GridItem>
        {reviews && (
          <GridItem xs={12}>
            { this.renderReviewSection() }
          </GridItem>
        )}
      </GridContainer>
    );
  };

  renderHeadingSection = () => {
    const { classes, place, t } = this.props;
    const { name , 
      addBookmarkPending,
      deleteBookmarkPending,
      bookmarked,
      icon } = place;
    return (
      <div className={classes.nameContainer}>
        <div className = {classes.nameAndAvatar}>
          <Avatar src={icon} className = {classes.nameAvatar} />
          <Hidden xsDown implementation="css">
            <Typography variant="display1" component="h4">
              {name}
            </Typography>
          </Hidden>
          <Hidden smUp implementation="css">
            <Typography variant="headline" component="h4">
              {name}
            </Typography>
          </Hidden>
        </div>
        <Hidden smUp implementation="css">
          <IconButton
            aria-label={t("addYourFavorite")}
            onClick={this.addRemoveBookmark}
            color={bookmarked ? "primary" : "default"}
            disabled={addBookmarkPending || deleteBookmarkPending || false }
          >
            {
              (addBookmarkPending || deleteBookmarkPending) ? <PageLoader type="circular" size = {24}/>
                : <Bookmark />
            }
            
          </IconButton>  
        </Hidden>
      </div>
    );
  }

  renderRating = (rating) => {
    return (
      <StarRatings
        rating={rating}
        starRatedColor="#f00"
        numberOfStars={5}
        starDimension="20px"
        name="rating"
      />
    );
  }

  renderOpeningStatus = () => {
    const { classes, place, t } = this.props;
    const { opening_hours , permanently_closed } = place;
    return (
      (opening_hours.open_now === false ? (
        <Typography variant="subheading" component="h4" color="error">
          { permanently_closed ? t("permenantly_closed") : t("close_text")}
        </Typography>
      ) : (
        <Typography
          variant="subheading"
          component="h4"
          color="textPrimary"
        >
          {t("open_text")}
        </Typography>
      ))
    );
  }

  renderOpeningHours = () => {
    const { classes, place, t } = this.props;
    const { opening_hours } = place;
    return (
      <Card>
        <CardContent>
          <Typography variant="headline" component="h3" gutterBottom>
            { t("opening_hours") }
          </Typography>
          {opening_hours.weekday_text.map(text => {
            return (
              <div key={text}>
                <Typography component="p" noWrap>
                  {text}
                </Typography>
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  }

  renderContact = () => {
    const { classes, place, t } = this.props;
    const  { name , 
      geometry , 
      formatted_address,
      international_phone_number,
      website,
      place_id } = place;

    return (
      <Card>
        <CardContent>
          <Typography variant="headline" component="h3" gutterBottom>
            { t("contact") }
          </Typography>
          <div className = {classes.mapPlaceHolder}>
            {this.renderMap(geometry,name)}
          </div>
          
          <div className={classes.addressContent}>
            {formatted_address && (
              <Typography component="p" gutterBottom>
                {formatted_address}
              </Typography>
            )}
            {international_phone_number && (
              <RegularButton 
                size="small" 
                color="secondary" 
                variant="text"
                href={`tel:${international_phone_number}`}
                className={classes.phoneNumber}>
                <Call color="secondary" fontSize="small" className = {classes.iconStyle}/> {international_phone_number}
              </RegularButton>
            )}
            {website && (
              <div>
                <RegularButton size="small" 
                  color="secondary" 
                  onClick = {() => this.openExternalWebsite(website)}
                  className = {classes.urlLink}
                  variant="text">
                  <Language color="secondary" fontSize="small" className = {classes.iconStyle}/> {website}
                </RegularButton>
              </div>
            )}
            <div>
              <RegularButton size="small" 
                color="primary" 
                onClick = {() => this.openGoogleMapLink(place_id,formatted_address)}
                className={classes.getdirection}>
                <Directions color="primary" fontSize="small" className = {classes.iconStyle}/> 
                {t("get_direction")}
              </RegularButton>
            </div>
          </div>
        </CardContent>
        {/* <CardActions className={classes.addressActionArea}>
          <RegularButton size="small" 
            color="primary" 
            onClick = {() => this.openGoogleMapLink(place_id,formatted_address)}>
            <Directions color="primary" fontSize="small" className = {classes.iconStyle}/> {t("get_direction")}
          </RegularButton>
        </CardActions> */}
      </Card>
    );
  }
  
  renderMap = (geometry,name) => {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{ width: "90%", height: "200px", marginTop: "20px" }}
        initialCenter={{
          lat: geometry.location.lat,
          lng: geometry.location.lng
        }}
      >
        <Marker
          name={name}
          position={{
            lat: geometry.location.lat,
            lng: geometry.location.lng
          }}
        />
      </Map>
    );
  };

  renderReviewSection = () => {
    const { classes, place, t } = this.props;
    const  { reviews } = place;

    return (
      <Card>
        <CardContent>
          <Typography variant="headline" component="h3" gutterBottom>
            { t("user_reviews") }
          </Typography>

          <GridContainer>
            {reviews.map(review => {
              return (
                <GridItem sm={12} md={6}  key={review["author_name"]}>
                  {this.renderReview(review)}
                </GridItem>
              );
            })}
          </GridContainer>
        </CardContent>
      </Card>
    );
  }

  renderReview = review => {
    const { classes } = this.props;
    return (
      <div className={classes.review}>
        <div className={classes.profileReview}>
          <Avatar src={review.profile_photo_url} />
          <Typography variant="body2" component="p">
            {review.author_name}
          </Typography>
          <StarRatings
            rating={review.rating}
            starRatedColor={classes.dangerColor}
            numberOfStars={5}
            starDimension="10px"
            name="rating"
          />
        </div>
        <div className={classes.reviewText}>
          <Typography variant="body2" component="p" gutterBottom>
            {review.text}
          </Typography>
        </div>
      </div>
    );
  };

  addRemoveBookmark = () => {
    const { place , dispatch ,cityId } = this.props;

    if(place.bookmarked) {
      dispatch(deleteBookmarkAction(cityId,place["place_id"]));
    }
    else {
     
      const {  place_id,
        name,
        rating,
        opening_hours,
        photos,
        geometry } = place;

      const placeToSave = {
        place_id,
        name,
        rating,
        opening_hours,
        photoUrl: photos ? getPhotoUrl(photos[0]["photo_reference"], 280) : null,
        location:{...geometry.location}
      };
      
      const cityToSave = {
        place_id:cityId
      };
      
      dispatch(addBookmark(cityToSave , placeToSave));
    }
  };

  viewPhoto = () => {
    this.setState({ showPhotoViewer: true });
  };

  closePhotoViewer = () => {
    this.setState({ showPhotoViewer: false });
  };

  doLogOut = () => {
    this.props.dispatch(logoutRequest());
  };

  openExternalWebsite = url => {
    window.open(
      url,
      "_blank"
    );
  }

  openGoogleMapLink( placeId  , address  ) {
    openInGoogleMap(placeId,address);
  }
}
const mapStateToProps = (state, props) => {
  return {
    place: getSelectedPlace(state, props.id)
  };
};

PlaceHome.propTypes = {
  dispatch:PropTypes.func.isRequired,
  cityId:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
  t:PropTypes.func.isRequired,
  google:PropTypes.object,
  place:PropTypes.object,
  classes:PropTypes.object,
};

export default connect(mapStateToProps)(
  withGoogleApiLibs(PlaceHome, ["placedata", "common"], placeHomeStyle)
);
