import React ,{ Component } from 'react';
import { connect } from 'react-redux';

import { withGoogleApiLibs } from '../../../../lib/withLibs';
import { fetchPlaceDetails } from '../../store/action';
import { getSelectedPlace } from '../../store/selector';
import AppHeader from '../../../app/components/AppHeader';
import PageLoader from '../../../app/components/PageLoader';
import Parallax from '../../../../components/Parallax';
import Button from '../../../../components/CustomButtons';
import { getOptimalBGImageUrl } from '../../../../google/places';
import placeHomeStyle from './placeHomeStyle';

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
    const { place  , classes } = this.props;
    return (
      <React.Fragment>
        <Parallax small image={getOptimalBGImageUrl(place['photos'],window.innerWidth)}>
          <div className = {classes.container}>
              <Button
                  size="lg"
                  onClick= {() => this.openAddFavoritePlace(city)}
                  className={classes.addPlaceButton}>
                  <i className="fas fa-plus" />{t('addYourFavorite')}
              </Button>
          </div>
        </Parallax>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state,props)  => {
  return {
    place : getSelectedPlace(state,props.id)
  }
}
export default connect(mapStateToProps)(withGoogleApiLibs(PlaceHome,['placedata','common'],placeHomeStyle));