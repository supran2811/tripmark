import React , { Component } from 'react'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";

import placeThumbnailStyle from './placeThumbnailViewStyle'
import Button from '../../../../components/CustomButtons';
import Card, { CardFooter, CardBody } from '../../../../components/Card';
import { getPhotoUrl } from '../../../../google/places';
import { cardActions } from '../../../../assets/jss/material-kit-react';

class PlaceThumbnailView extends Component {
  render() {

    const { name , photos , classes } = this.props;

    const photoUrl = photos ? getPhotoUrl(photos[0]['photo_reference'] , 140) : null ;
    console.log("photoUrl",photoUrl);
    return <Card className = {classes.card}>
              <CardBody>
                <CardMedia
                className = {classes.media}
                image = {photoUrl} />
                <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {name}
                  </Typography>
                </CardContent>
              </CardBody>
              <CardFooter>
                  <Button simple size="sm" color="primary">
                    Share
                  </Button>
                  <Button simple size="sm" color="primary">
                    Learn More
                  </Button>
              </CardFooter>
           </Card>
  }
}

export default withStyles(placeThumbnailStyle)(PlaceThumbnailView);