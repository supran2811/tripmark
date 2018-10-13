import React , { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Card from "../../../../components/Card";
import { Router } from "../../../../routes";
import cityThumbnailViewStyle from "./cityThumbnailViewStyle";

class CityThumbnailView extends Component {
  
  render() {
    const { classes , city } = this.props;
    const { name , photoUrl} = city;
    return <Card className = {classes.container}>
      <CardActionArea onClick={this.navigateToCityDetails}>
        <CardMedia className={classes.media} image={photoUrl} title={name} />
        <CardContent>
          <Typography gutterBottom variant="title" component="h4" noWrap>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>;
  }

  navigateToCityDetails = () => {
  
    Router.pushRoute("city", { cityId: this.props.city["place_id"] });
  }
}

CityThumbnailView.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.object
};

export default withStyles(cityThumbnailViewStyle)(CityThumbnailView);
