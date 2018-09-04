import React , { Component } from 'react';
import {connect} from 'react-redux';
import Router from 'next/router';

import GridContainer from '../../../../components/GridContainer';
import GridItem from '../../../../components/GridItem';
import { withGoogleApiLibs } from '../../../../lib/withLibs'
import addNewPlaceStyle from './addNewPlaceStyle';
import AppHeader from '../../../app/components/AppHeader';
import { getSelectedCityDetails, getSuggestedPlaces, getPredictions } from '../../store/selector';
import Close from '@material-ui/icons/Close'
import { fetchCityDetails, autoCompleteSearch, cancelAutoCompleteSearch } from '../../store/action';
import { getQueryParam } from '../../../../lib/utils';
import AutoComplete from '../../components/AutoComplete';

class AddNewPlace extends Component {

  componentDidMount() {
    
    const { city  , dispatch ,query , google } = this.props;
  
    const id = getQueryParam('id',query);

    console.log("componentDidMount ",city,id);
    if( (!city  && id && id !== '') ||  (city && id && city.place_id !== id)) {
      dispatch && dispatch(fetchCityDetails(google ,this.refs.place , id ));
    }
  }

  componentDidUpdate() {
    
    const { city  , dispatch , query } = this.props;
    
    const id = getQueryParam('id' ,query , google);

    console.log("componentDidUpdate ",city,id);
    if( (!city  && id && id !== '') ||  (city &&  id && city.place_id !== id)) {
      dispatch && dispatch(fetchCityDetails(google ,this.refs.place , id ));
    }
  }

  handleClose() {
    Router.back();
  }

  onSuggestSelect = (item) => {
    console.log("onSuggestSelect Item",item);
  }

  render() {

    const { classes ,  t , city }  = this.props;

    const rightHeaderLinks = {
      headerElements : {
        'Close':{
          icon : <Close className = {classes.icons}/>,
          type:'Button',
          isExternal:false,
          handleClick:this.handleClose,
          toolTipText:'',
          color:'transparent'
        }
      }
    }

    console.log("AddNewPlace",city);

    return (
       <React.Fragment>
          <AppHeader 
                color="primary"
                headerTitle="Add Favorites"
                rightLinks = {rightHeaderLinks}
            />
            {
              city ? this.renderMainContent()
                   : this.renderLoading()
            }
         <div ref='place'></div>
       </React.Fragment>
    );
  }

  renderMainContent = () => {

    const { classes , t , suggestions} = this.props;

    return (<GridContainer className={classes.container}>
             <GridItem xs = {12}>
               <AutoComplete 
                    translations={t}
                    fetchSuggestions = {this.fetchSuggestions}
                    suggestionClicked = {this.handleSuggestionClicked}
                    suggestions={suggestions} />
             </GridItem>
            </GridContainer>);
  }

  renderLoading() {
    return <div> LOADING....</div>
  }

  fetchSuggestions = (query) => {
    
    const { dispatch , city } = this.props;

    console.log("Inside fetchSuggestions",query,city);

    const latlngObj = city.geometry ? city.geometry.location : undefined;
    const radius  = "100000";

    const params = { latlngObj  , radius};

     dispatch(autoCompleteSearch(query,params));
  }


  handleSuggestionClicked = (suggestion) => {
    console.log("handleSuggestionClicked",suggestion);

    if(suggestion.type === 'category') {

    }
    else {
      window.open(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/place?id=${suggestion.place_id}`, "_blank");
    }
  }
}

const mapStateToProps = state => (
  {
    city : getSelectedCityDetails(state),
    suggestions:getPredictions(state)
  }
);

export default connect(mapStateToProps)(withGoogleApiLibs(AddNewPlace,['placedata','common'],addNewPlaceStyle));