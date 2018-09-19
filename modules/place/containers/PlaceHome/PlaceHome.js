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

class PlaceHome extends Component {

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

    const { place , t } = this.props;

    console.log("PlaceHome:::::",place);

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
                 <Bookmark /> {t('addYourFavorite')}
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
      return(        
        <GridContainer className = {classes.mainContent}>
            <GridItem xs={6}>
               <Typography variant="headline" gutterBottom>
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
                  permanently_closed && 
                  <Typography variant="title">
                    Permenantly closed!!!
                  </Typography>
                }
                {
                  opening_hours && (
                    <Typography variant="title">
                        {opening_hours.open_now? "OPEN" : "CLOSED"  }
                    </Typography>
                  )
                }
                {
                  formatted_address && 
                      <Card>
                        <CardHeader>
                          <Typography variant="headline" gutterBottom>
                            Address
                          </Typography>
                        </CardHeader>
                        <CardBody>
                          {formatted_address}
                        </CardBody>
                    </Card>
                }
                {
                  (international_phone_number || website) &&
                  <Card>
                      <CardHeader>
                        <Typography variant="headline" gutterBottom>
                          Contact
                        </Typography>
                      </CardHeader>
                      <CardBody>
                        {
                          international_phone_number && 
                          <Typography variant="body2">
                            {international_phone_number}
                          </Typography>
                        }
                          
                        { website &&
                          <Typography variant="body2">
                            {website}
                          </Typography>
                        }
                      </CardBody>
                  </Card>
                }

                {
                  opening_hours && opening_hours.weekday_text && 
                  <Card>
                    <CardHeader>
                      <Typography variant="headline" gutterBottom>
                        Opening hours
                      </Typography>
                    </CardHeader>
                    <CardBody>
                      {opening_hours.weekday_text}
                    </CardBody>
                  </Card>
                }

                {
                  reviews && 
                    reviews.map(review => {
                      console.log("reviews ",review);
                     return <Typography variant="body1">
                                {review.text}
                            </Typography>
                   })
                }
            </GridItem>
            <GridItem xs = {3}>
              {
                icon && <Avatar src = {icon}/>
              }
            </GridItem>
            <GridItem xs={3}>
                GOOGLE MAP
            </GridItem>

        </GridContainer>);
  }

  addBookmark = (place) => {

  }

  
}
const mapStateToProps = (state,props)  => {
  return {
    place : getSelectedPlace(state,props.id)
  }
}
export default connect(mapStateToProps)(withGoogleApiLibs(PlaceHome,['placedata','common'],placeHomeStyle));