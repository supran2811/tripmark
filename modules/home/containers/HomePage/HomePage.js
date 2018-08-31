import React , { Component } from 'react';
import {connect} from 'react-redux';
import Router from 'next/router';

import GridContainer from '../../../../components/GridContainer';
import { isAuthenticated } from '../../../auth/store/selector';
import homePageStyle from './homePageStyle';
import GridItem from '../../../../components/GridItem';
import { withGoogleApiLibs } from '../../../../lib/withLibs';
import AppHeader from '../../../app/components/AppHeader';
import GoogleAutoComplete from '../../../../components/GoogleAutoComplete';
import { resetCityDetails } from '../../../place/store/action';

class HomePage extends Component {

  componentDidMount() {
    if(!this.props.isAuthenticated) {
      Router.replace({pathname:'/login'});
    }
   
    this.props.dispatch(resetCityDetails());

  }

  componentDidUpdate() {
    if(!this.props.isAuthenticated) {
      Router.replace({pathname:'/login'});
    }
  }

  render() {

    const {classes , t ,google } = this.props;

    Router.prefetch('/city');
    
    return (

      <div>
        <AppHeader 
          color="primary"
          fixed 
          isAuthenticated = {this.props.isAuthenticated}
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
    console.log("Inside onSuggestSelect ",item);
    item && Router.push({ pathname : '/city' , query:{id:item.placeId}});
  }
}
const mapStatetoProps = state => (
  {
    isAuthenticated: isAuthenticated(state)
  }
);

export default connect(mapStatetoProps)(withGoogleApiLibs(HomePage , ['homedata','common'] , homePageStyle));