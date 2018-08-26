import React , { Component } from 'react';
import { connect } from 'react-redux';

import { getSelectedCityDetails } from '../../store/selector';
import { fetchCityDetails, resetCityDetails } from '../../store/action';
import withGoogleMap from '../../../../lib/withGoogleMap';
import Parallax from '../../../../components/Parallax';
import GridContainer from '../../../../components/GridContainer';
import GridItem from '../../../../components/GridItem';
import Button from '../../../../components/CustomButtons';
import { getOptimalBGImageUrl } from '../../../../google/places';

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
    const { city } = this.props;
 

    return ( 
    <div>
        
        {city ? this.renderCityDetails(city) : this.renderDefault()}
        <div ref="place"></div>
    </div> );
  }

  renderCityDetails(city) {
    console.log("city details",city,window.innerWidth,window.innerHeight);
return (
    <Parallax image={getOptimalBGImageUrl(city.photos,window.innerWidth)}>
       
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
export default  connect(mapStateToProps)( withGoogleMap(CityHome));