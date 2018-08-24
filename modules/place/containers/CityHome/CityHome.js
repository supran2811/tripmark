import React , { Component } from 'react';
import { connect } from 'react-redux';

import { getSelectedCityDetails } from '../../store/selector';
import { fetchCityDetails } from '../../store/action';
import withGoogleMap from '../../../../lib/withGoogleMap';

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

  render() {

    const { city } = this.props;
    console.log("Render cityhome ",city);
    return <div>
        {city ? (<div> This home page of {city.name} </div>) : <div> Loading....</div>}
        <div ref="place"></div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
     city: getSelectedCityDetails(state)
  }
}
export default  connect(mapStateToProps)( withGoogleMap(CityHome));