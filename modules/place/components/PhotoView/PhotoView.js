import React , { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import IconButton  from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close'

import photoViewStyle from './photoViewStyle';

class PhotoView extends Component {

  state = {
    currentIndex : 0
  };

  render() {
    const { classes , photos , onCloseClicked } = this.props;
    
    const photo = photos[this.state.currentIndex];
    console.log("Render() state ",this.state,photos,photo);
    return <div className = {classes.container}>
                <IconButton className = {classes.closeIcon} onClick = {onCloseClicked}>
                  <Close className={classes.iconStyle}/>
                </IconButton>
                <ul className = {classes.photoListContainer}>
                  <li>
                  {
                    this.state.currentIndex > 0 && (
                    <IconButton onClick = {this.goToPreviousPhoto}>
                      <KeyboardArrowLeft  className={classes.iconStyle}/>
                    </IconButton>)
                  }
                  </li>
                  <li  className={classes.image}>
                        <img className={classes.photoContainer} 
                                src={photo.getUrl({maxHeight :920})}></img>
                  </li>
                  <li>
                    {
                     this.state.currentIndex < (photos.length -1) && (
                        <IconButton onClick = {this.goToNextPhoto}>
                          <KeyboardArrowRight 
                                                className={classes.iconStyle}/>)
                        </IconButton>)
                    }
                  </li>
                </ul>
           </div>
  }



  goToPreviousPhoto = () => {
    const currentIndex = this.state.currentIndex-1;
    this.setState({currentIndex : currentIndex});
  } 

  goToNextPhoto = () => {
    const currentIndex = this.state.currentIndex+1;
    this.setState({currentIndex:currentIndex});
    
  }
}

export default withStyles(photoViewStyle)(PhotoView)