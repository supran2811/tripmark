import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Bookmark from '@material-ui/icons/Bookmark';
import Avatar from '@material-ui/core/Avatar';
import StarRatings from 'react-star-ratings';

import { withGoogleApiLibs } from '../../../../lib/withLibs';
import { fetchPlaceDetails } from '../../store/action';
import { getSelectedPlace } from '../../store/selector';
import AppHeader from '../../../app/components/AppHeader';
import PageLoader from '../../../app/components/PageLoader';
import Parallax from '../../../../components/Parallax';
import Button from '../../../../components/CustomButtons';
import { getOptimalBGImageUrl } from '../../../../google/places';
import placeHomeStyle from './placeHomeStyle';
import GridContainer from '../../../../components/GridContainer';
import GridItem from '../../../../components/GridItem';
import Card, { CardHeader, CardFooter, CardBody } from '../../../../components/Card';
import Paper from '@material-ui/core/Paper';
import {Map, InfoWindow, Marker} from 'google-maps-react';
import { CardContent, CardActions } from '@material-ui/core';
import PhotoView from '../../components/PhotoView';

class PlaceHome extends Component {

  state = {
    expandOpeningHours:false,
    showPhotoViewer : false
  }

  componentDidMount() {
    console.log("PlaceHome componentDidMount");
    const { place  , dispatch , google ,id} = this.props;
  
    if( (!place  && id && id !== '') ||  (place && id &&  place['place_id']!== id)) {
      dispatch && dispatch(fetchPlaceDetails(google ,this.refs.place , id ));
    }
  }

  componentDidUpdate() {
    // console.log("CityHome componentDidUpdate");
    const { place  , dispatch , google ,id} = this.props;
  
    console.log("PlaceHome componentDidUpdate ",place);
    if( (!place  && id && id !== '') ||  (place && id &&  place['place_id']!== id)) {
      dispatch && dispatch(fetchPlaceDetails(google ,this.refs.place , id ));
    }
  }

  render() {

    const { place , t , classes} = this.props;

    console.log("PlaceHome:::::",place,this.state);

    return <div>
                {
                  place ?
                   (
                    <React.Fragment>
                      <AppHeader 
                          color = "transparent"
                          fixed
                          isAuthenticated
                          t = {t}
                        />
                      {this.renderPlaceDetails()}
                      {
                        this.state.showPhotoViewer &&
                            <PhotoView  photos = {place['photos']}
                                        onCloseClicked = {this.closePhotoViewer} />
                      }
                    </React.Fragment>) : this.renderDefault()
                }
                <div ref="place"></div>
          </div>
  }

  
  renderDefault() {
    return <PageLoader />
  }

  renderPlaceDetails() {
    const { place  , classes ,t } = this.props;
    return (
      <React.Fragment>
        <Parallax small image={getOptimalBGImageUrl(place['photos'],window.innerWidth)}>
          <div className = {classes.container}>
              <Button
                  size="lg"
                  onClick= {() => this.addBookmark(place)}
                  className={classes.addPlaceButton}>
                 <Bookmark /> {t('markAsFavourtie')}
              </Button>
              <Button
                  size="lg"
                  onClick= {() => this.viewPhoto()}
                  className={classes.addPlaceButton}>
                  {t('viewPhotos')}
              </Button>
          </div>
        </Parallax>
        {this.renderOtherPlaceDetails()}
      </React.Fragment>
    )
  }

  renderOtherPlaceDetails = () => {
    const { classes , place , t}  = this.props;
    const { name , 
            rating , 
            opening_hours , 
            formatted_address , 
            international_phone_number ,
            permanently_closed ,
            icon,
            geometry ,
            googleUrl,
            website,
            reviews
            } = place;
      console.log("Inside geometry",geometry);      
      return(        
        <GridContainer className = {classes.mainContent}>
            <GridItem xs={12}>
              <div className = {classes.nameContainer}>
                <Avatar
                  src={icon}
                />
                <Typography variant="display1" gutterBottom>
                  {name}
                </Typography> 
              </div>
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
             </GridItem>
             <GridItem xs={6}>
             {
               opening_hours && 
               ( opening_hours.weekday_text ?
                <Card>
                  <CardContent>
                  <Typography variant="headline" component="h3" gutterBottom>
                    Opening Hours
                  </Typography>
                  {
                    opening_hours.weekday_text.map( text => {
                      return <div key = {text}> 
                                <Typography component="p"  noWrap>
                                  {text}
                                </Typography>
                             </div>
                        
                    })
                  }
                  </CardContent>
               </Card> :null)
             }
             </GridItem>
             <GridItem xs={6}>
              <Card className = {classes.addressCard}>
                  <CardContent>
                      <Typography variant="headline" component="h3" gutterBottom>
                        Contact
                      </Typography>
                      {this.renderMap(geometry)}
                      <div className = {classes.addressContent}>
                      {
                        formatted_address && 
                          ( <Typography component="p" gutterBottom>
                                { formatted_address }
                            </Typography>)
                      }
                       {
                         international_phone_number && (
                              <Typography component="p" gutterBottom>
                                  { international_phone_number }
                              </Typography>
                         )
                       }
                        {
                          website && (
                              <Typography component="p" gutterBottom>
                                { website }
                              </Typography>
                          )
                        }
                        
                      </div>
                  </CardContent>
                  <CardActions className={classes.addressActionArea}>
                    <Button size="lg" color="primary" simple>Get Directions</Button>
                  </CardActions>
                </Card>
             </GridItem>
             {
               reviews && (
                <GridItem xs ={12}>
                  <Card>
                    <CardContent>
                        <Typography variant="headline" component="h3" gutterBottom>
                          User Reviews
                        </Typography>
                        
                          <GridContainer>
                            {
                              reviews.map(review => {
                                return (
                                  <GridItem xs = {6} key={review['author_name']}> 
                                      { this.renderReview(review)}
                                  </GridItem>
                                )
                              }) 
                            }
                          </GridContainer>
                    </CardContent>
                  </Card>
                </GridItem>
               )
             }
            
        </GridContainer>);
  }


  renderMap = (geometry) => {
    return (<Map 
            google={this.props.google} 
            zoom={14}
            style = {{ width:"90%" , height:"200px" , marginTop:"20px"}}
            initialCenter={{
              lat: geometry.location.lat(),
              lng: geometry.location.lng()
            }}>
              <Marker name={name} 
                      position={{lat: geometry.location.lat(), lng: geometry.location.lng()}}/>
            </Map>);
  }

  renderReview = ( review ) => {
    const { classes } = this.props;
    return (
      <div className = {classes.review}>
        <div className = {classes.profileReview}>
          <Avatar src={review.profile_photo_url} />
          <Typography variant="body2" component="p">
            { review.author_name }
          </Typography>
          <StarRatings 
            rating = {review.rating} 
            starRatedColor={classes.dangerColor}
            numberOfStars={5}
            starDimension="10px"
            name='rating'
          />
        </div>
        <div className = {classes.reviewText}>
          <Typography variant="body2" component="p" gutterBottom>
            {review.text}
          </Typography>
        </div>
        
      </div>
    )
  }

  addBookmark = (place) => {

  }

  viewPhoto = () => {
    this.setState({showPhotoViewer:true});
  }

  closePhotoViewer = () => {
    this.setState({showPhotoViewer:false});
  }
  
}
const mapStateToProps = (state,props)  => {
  return {
    place : getSelectedPlace(state,props.id)
  }
}
export default connect(mapStateToProps)(withGoogleApiLibs(PlaceHome,['placedata','common'],placeHomeStyle));