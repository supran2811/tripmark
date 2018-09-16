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

import placeThumbnailStyle from './placeThumbnailViewStyle'
import Card from '../../../../components/Card';
import { getPhotoUrl } from '../../../../google/places';


class PlaceThumbnailView extends Component {
  render() {

    const { name , photos , opening_hours , rating , classes } = this.props;

    const photoUrl = photos ? getPhotoUrl(photos[0]['photo_reference'] , 280) : null ;
    console.log("photoUrl",photoUrl);
    return <Card className = {classes.card}>
              <CardActionArea>
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
                <IconButton aria-label="Add to favorites">
                  <Bookmark color="default" />
                </IconButton>
                <IconButton aria-label="Share">
                  <Map />
                </IconButton>
               </CardActions> 
           </Card>
  }
}

export default withStyles(placeThumbnailStyle)(PlaceThumbnailView);