import React , { Component } from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import StarRatings from 'react-star-ratings';
import Bookmark from '@material-ui/icons/Bookmark';
import Map from '@material-ui/icons/Map';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

import placeThumbnailStyle from './placeThumbnailViewStyle'
import Card from '../../../../components/Card';
import { getPhotoUrl } from '../../../../google/places';


class PlaceThumbnailView extends Component {
  render() {

    const { place ,
            classes ,
            onMainClick ,
            onBookmarkClick } = this.props;

    const name          = place['name'];
    const photos        = place['photos'];
    const opening_hours = place['opening_hours'];
    const rating        = place['rating']; 
    const place_id      = place['place_id'];
    const photoUrl = photos ? getPhotoUrl(photos[0]['photo_reference'] , 280) : null ;

    return <Card className = {classes.card}>
              <CardActionArea onClick = {() => onMainClick(place_id)}>
                <CardMedia
                  className={classes.media}
                  image={photoUrl}
                  title={name}
                />
                <CardContent>
                  <Typography gutterBottom variant="title" component="h4" noWrap>
                    {name}
                  </Typography>
                  {
                    rating && (
                      <StarRatings rating = {rating} 
                                  starRatedColor={classes.dangerColor}
                                  numberOfStars={5}
                                  starDimension="20px"
                                  name='rating'/>
                    )
                  }
                  {
                    opening_hours && 
                    (opening_hours.open_now === false ?
                      <Typography variant="subheading" component="h4" color="error">
                        CLOSED
                      </Typography>:
                      <Typography variant="subheading" component="h4" color="textPrimary">
                        OPEN
                      </Typography>)
                  }
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites" onClick = {() => onBookmarkClick(place_id)}>
                  <Bookmark  />
                </IconButton>
                <IconButton aria-label="Open in google map">
                  <Map />
                </IconButton>
               </CardActions> 
           </Card>
  }
}

PlaceThumbnailView.propTypes = {
  onMainClick : PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired
}

export default withStyles(placeThumbnailStyle)(PlaceThumbnailView);