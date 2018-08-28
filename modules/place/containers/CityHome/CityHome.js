import React , { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { getSelectedCityDetails } from '../../store/selector';
import withAuth from '../../../../lib/withAuth';
import { fetchCityDetails, resetCityDetails } from '../../store/action';
import withGoogleMap from '../../../../lib/withGoogleMap';
import Parallax from '../../../../components/Parallax';
import GridContainer from '../../../../components/GridContainer';
import GridItem from '../../../../components/GridItem';
import Button from '../../../../components/CustomButtons';
import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
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
    const { city , t , google } = this.props;
        
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
        
        {city ? this.renderCityDetails(city) : this.renderDefault()}
        <div ref="place"></div>
    </div> );
  }

  renderCityDetails(city) {
    
    return (
        <Parallax filter image={getOptimalBGImageUrl(city.photos,window.innerWidth)}>
          
        </Parallax>
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