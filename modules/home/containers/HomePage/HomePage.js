import React , { Component } from 'react';
import {connect} from 'react-redux';
import { Router } from '../../../../routes';

import GridContainer from '../../../../components/GridContainer';
import homePageStyle from './homePageStyle';
import GridItem from '../../../../components/GridItem';
import { withGoogleApiLibs } from '../../../../lib/withLibs';
import AppHeader from '../../../app/components/AppHeader';
import GoogleAutoComplete from '../../../../components/GoogleAutoComplete';
import { resetCityDetails } from '../../../place/store/action';
import { List, Map } from 'immutable';

class HomePage extends Component {

  componentDidMount() {
    this.props.dispatch(resetCityDetails());
  }

 
  render() {
    
    const {classes , t } = this.props;
    
    return (

      <div>
        <AppHeader 
          color="primary"
          fixed 
          isAuthenticated = {true}
          t = {t}
        />
          <GridContainer className={classes.container}>
            <GridItem xs = {12}>
             <GoogleAutoComplete searchTypes = {['(cities)']}
                                  onSuggestSelect = {this.onSuggestSelect}
                                  t = {t}/>
            </GridItem>
            <div ref='map'></div>
          </GridContainer>
      </div>
    );
  }

  onSuggestSelect = (item) => {
    item && Router.pushRoute('city' ,{cityId:item.placeId});
  }
}


export default connect()(withGoogleApiLibs(HomePage , ['homedata','common'] , homePageStyle));