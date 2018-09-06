import React , { Component } from 'react';
import { connect } from 'react-redux';
import  { Router } from '../../../../routes';

import { getSelectedCityDetails } from '../../store/selector';
import { fetchCityDetails } from '../../store/action';
import Parallax from '../../../../components/Parallax';
import Button from '../../../../components/CustomButtons';
import { getOptimalBGImageUrl } from '../../../../google/places';
import { withGoogleApiLibs } from '../../../../lib/withLibs';
import cityHomeStyle from './cityHomeStyle';
import AppHeader from '../../../app/components/AppHeader';

class CityHome extends Component {

  componentDidMount() {
    console.log("CityHome componentDidMount");
    const { city  , dispatch ,query , google ,id} = this.props;
  
    if( (!city  && id && id !== '') ||  (city && id && city.place_id !== id)) {
      dispatch && dispatch(fetchCityDetails(google ,this.refs.place , id ));
    }
  }

  componentDidUpdate() {
    console.log("CityHome componentDidUpdate");
    const { city  , dispatch , google , id} = this.props;
    
    if( (!city  && id && id !== '') ||  (city &&  id && city.place_id !== id)) {
      dispatch && dispatch(fetchCityDetails(google ,this.refs.place , id ));
    }
  }

  openAddFavoritePlace(city) {
    Router.pushRoute('city/addfav' , {cityId:city.place_id } );
  }

  render() {
    const { city , t , google , classes } = this.props;
        
    return ( 
    <div>
        {city ? 
          (<React.Fragment>
                <AppHeader 
                color = "transparent"
                fixed
                isAuthenticated
                t = {t}
                google = {google}
                selectedCityName = {city ? city.name :''}
              /> 
             { this.renderCityDetails(city , classes , t) }
           </React.Fragment>
          )
           : this.renderDefault()}
        <div ref="place"></div>
    </div> );
  }

  renderCityDetails(city ,classes ,t) {
    
    return (
      <React.Fragment>
        <Parallax small image={getOptimalBGImageUrl(city.photos,window.innerWidth)}>
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

  renderDefault() {
    return (<div> Loading....</div>)
  }

}

const mapStateToProps = state => {
  return {
     city: getSelectedCityDetails(state)
  }
}
export default  connect(mapStateToProps)(withGoogleApiLibs(CityHome , ['placedata','common'] , cityHomeStyle));