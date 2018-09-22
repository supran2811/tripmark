import React , { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import photoViewStyle from './photoViewStyle';

class PhotoView extends Component {
  render() {
    const { classes } = this.props;

    return <div className = {classes.container}>
                PHOTO PLACEHOLDER
           </div>
  }
}

export default withStyles(photoViewStyle)(PhotoView)