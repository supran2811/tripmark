import React, { Component } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import StarRatings from "react-star-ratings";
import Bookmark from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import RegularButton from "@material-ui/core/Button";

import placeThumbnailStyle from "./placeThumbnailViewStyle";
import Card from "../../../../components/Card";
import { getPhotoUrl } from "../../../../google/places";
import PageLoader from "../../../app/components/PageLoader";
import { openInGoogleMap } from "../../../../google/places";

class PlaceThumbnailView extends Component {
  render() {
    const { place, classes, onMainClick, onBookmarkClick , translations:t } = this.props;
    console.log("PlaceThumbnailView place ",place);
    const name = place["name"];
    const photos = place["photos"];

    const opening_hours = place["opening_hours"];
    const rating = place["rating"];
    const place_id = place["place_id"];
    const location = place["location"] || place["geometry"]["location"];
    const photoUrl =
      place["photoUrl"] ||
      (photos !== undefined
        ? getPhotoUrl(photos[0]["photo_reference"], 280)
        : null);

    const isBookmarked = place["isBookmarked"];
    const formatted_address = place["formatted_address"];
    const deleteBookmarkPending = place["deleteBookmarkPending"];
    const addBookmarkPending = place["addBookmarkPending"];

    const placeToSave = {
      place_id,
      name,
      rating,
      opening_hours,
      photoUrl,
      location,
      formatted_address
    };

    let nameToDisplay = name.length > 20 ? (name.substr(0,20) + "...") : name;

    return (
      <Card className={classes.card}>
        <CardActionArea onClick={() => onMainClick(place_id)}>
          <CardMedia className={classes.media} image={photoUrl} title={name} />
          <div className={classes.mediaContent}>
            <Typography variant="title" component="h4" noWrap color="inherit">
              {nameToDisplay}
            </Typography>
          </div>
        </CardActionArea>
        <CardContent className={classes.cardContent}>
          {rating ?  (
            this.renderRatings(rating)
          ) : <div className={classes.blankSpace}></div> }
          {opening_hours ?
            this.renderOpeningHours(opening_hours) : <div className={classes.blankSpace}> </div>}
          <IconButton
            aria-label={t("addYourFavorite")}
            onClick={() =>  onBookmarkClick(placeToSave, isBookmarked)}
            color={isBookmarked ? "primary" : "default"}
            className={classes.bookmarkIcon}
            disabled={addBookmarkPending || deleteBookmarkPending || false }
          >
            {
              (deleteBookmarkPending || addBookmarkPending) ? <PageLoader type="circular" size = {20}/> : <Bookmark />
            }
          </IconButton>  
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {this.renderActions(place_id,formatted_address)}    
        </CardActions>
      </Card>
    );
  }

  renderRatings(rating) {
    return <StarRatings
      rating={Number(rating)}
      starRatedColor="#f00"
      numberOfStars={5}
      starDimension="20px"
      name="rating"
    />;
  }

  renderOpeningHours(opening_hours) {
    const { classes , translations } = this.props;
    return (opening_hours.open_now === false ? (
      <Typography variant="subheading" 
        component="h4" 
        color="error" 
        className={classes.spacing}>
        {translations("close_text")}
      </Typography>
    ) : (
      <Typography
        variant="subheading"
        component="h4"
        color="textPrimary"
        className={classes.spacing}
      >
        {translations("open_text")}
      </Typography>
    ));
  }

  renderActions = (placeId , address) => {
    const { translations } = this.props;
    return (
      <RegularButton size="small" 
        color="primary" 
        onClick = {() => this.openGoogleMapLink(placeId,address)}>
        {translations("get_direction")}
      </RegularButton>
    ); 
  }

  openGoogleMapLink( placeId  , address  ) {
    openInGoogleMap(placeId,address);
  }
}

PlaceThumbnailView.propTypes = {
  onMainClick: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  place:PropTypes.object.isRequired,
  classes:PropTypes.object.isRequired,
  translations:PropTypes.func.isRequired,
  deleteBookmarkPending:PropTypes.bool
};

export default withStyles(placeThumbnailStyle)(PlaceThumbnailView);
