import React , { Component } from 'react';
import { connect } from 'react-redux';

import { getSelectedCityDetails } from '../../store/selector';
import { fetchCityDetails, resetCityDetails } from '../../store/action';
import Parallax from '../../../../components/Parallax';
import Button from '../../../../components/CustomButtons';
import { getOptimalBGImageUrl } from '../../../../google/places';
import { withGoogleApiLibs } from '../../../../lib/withLibs';
import cityHomeStyle from './cityHomeStyle';
import AppHeader from '../../../app/components/AppHeader';


class CityHome extends Component {

  componentDidMount() {
    
    const { google , city  , dispatch , id } = this.props;

    if( (!city  && id !== '') ||  (city.place_id !== id)) {
      dispatch(fetchCityDetails(google ,this.refs.place , id ));
    }
  }

  componentDidUpdate() {
    
    const { google , city  , dispatch , id } = this.props;

    if( (!city  && id !== '') ||  (city.place_id !== id)) {
      dispatch(fetchCityDetails(google ,this.refs.place , id ));
    }
  }

  componentWillUnmount() {
    console.log("COming herer!!!");
    const { dispatch } = this.props;

    if(dispatch) {
      dispatch(resetCityDetails());
    }
  }

  render() {
    const { city , t , google , classes } = this.props;
        
    return ( 
    <div>
         <AppHeader 
          color = "transparent"
          fixed
          isAuthenticated
          t = {t}
          google = {google}
          selectedCityName = {city ? city.name :''}
         />
        
        {city ? this.renderCityDetails(city , classes) : this.renderDefault()}
        <div ref="place"></div>
    </div> );
  }

  renderCityDetails(city ,classes) {
    
    return (
      <React.Fragment>
        <Parallax small filter image={getOptimalBGImageUrl(city.photos,window.innerWidth)}>
          <div className = {classes.container}>
              <Button
                  color="primary"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Watch video
                </Button>
          </div>
        </Parallax>

      </React.Fragment>
      )
    
  }

  renderDefault() {
    return (<div> Loading....</div>)
  }

}

const mapStateToProps = state => {
  return {
     city: getSelectedCityDetails(state)
  }
}
export default  connect(mapStateToProps)(withGoogleApiLibs(CityHome , ['common'] , cityHomeStyle));